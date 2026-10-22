// Recomputes the content hashes the canonical documents pin, and fails if any pin has drifted.
// Runs before every build (package.json "prebuild"), so a stale pin never deploys.
//
// The chain is bottom-up: the schemas are hashed first, the Reporting Standard states the schema
// hashes, and the agreement states the Standard's hash. Publishing a new canonical version is a
// one-line change to VERSION below, provided the filenames keep their shape.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

/** The published canonical set this build serves. Change this, and the filenames follow. */
const VERSION = "1_0";

const files = {
  agreement: `docs/SAFR-v${VERSION}.md`,
  standard: `docs/SAFR-Reporting-Standard-v${VERSION}.md`,
  schema: `schemas/safr-reporting-standard-schema-v${VERSION}.json`,
  manifest: `schemas/safr-manifest-schema-v${VERSION}.json`,
};

const sha = (f) => createHash("sha256").update(readFileSync(f)).digest("hex");
// A pin is a run of hex after "sha256:", captured whole rather than clipped to 64. An
// earlier version matched /[a-f0-9]{64}/ and so read the first 64 characters of a longer
// run as a valid pin: a document carrying the right hash with twenty junk characters
// appended passed the check. Capture the whole run, then insist it is exactly 64.
const pins = (f, label) => {
  const text = readFileSync(f, "utf8");
  const runs = [...text.matchAll(/sha256:([a-f0-9]+)/g)].map((m) => m[1]);
  if (!runs.length) throw new Error(`${label}: no sha256 pin found in ${f}`);
  const malformed = runs.filter((h) => h.length !== 64);
  if (malformed.length) {
    throw new Error(
      `${label}: ${malformed.length} pin(s) in ${f} are not 64 hex characters: ` +
        malformed.map((h) => `${h.slice(0, 16)}\u2026 (${h.length})`).join(", ")
    );
  }
  return { text, found: runs };
};

const standardHash = sha(files.standard);
const schemaHash = sha(files.schema);
const manifestHash = sha(files.manifest);

const agreement = pins(files.agreement, "agreement");
const standard = pins(files.standard, "standard");

const problems = [];
if (!agreement.found.includes(standardHash)) {
  problems.push(`the agreement pins ${agreement.found.join(", ")}; the Reporting Standard is ${standardHash}`);
}
if (!standard.found.includes(schemaHash)) problems.push(`the standard does not pin the data schema ${schemaHash}`);
if (!standard.found.includes(manifestHash)) problems.push(`the standard does not pin the manifest schema ${manifestHash}`);
if (/sha256:PLACEHOLDER/.test(agreement.text + standard.text)) problems.push("a PLACEHOLDER hash remains");

if (problems.length) {
  console.error(`Content-hash pins are out of date (v${VERSION.replace("_", ".")}):\n  ` + problems.join("\n  "));
  process.exit(1);
}
console.log(`hash pins verified for v${VERSION.replace("_", ".")}: agreement -> standard, standard -> schema + manifest`);
