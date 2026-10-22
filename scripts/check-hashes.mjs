// Recomputes the content hashes the canonical documents pin, and fails if any pin has drifted.
// The same check runs before every deploy of safr.vc.
import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";

const sha = (f) => createHash("sha256").update(readFileSync(f)).digest("hex");
const pins = (f, label) => {
  const text = readFileSync(f, "utf8");
  const found = [...text.matchAll(/sha256:([a-f0-9]{64})/g)].map((m) => m[1]);
  if (!found.length) throw new Error(`${label}: no sha256 pin found`);
  return { text, found };
};

const standard = sha("docs/SAFR-Reporting-Standard-v1_0.md");
const schema = sha("schemas/safr-reporting-standard-schema-v1_0.json");
const manifest = sha("schemas/safr-manifest-schema-v1_0.json");

const agreement = pins("docs/SAFR-v1_0.md", "agreement");
const std = pins("docs/SAFR-Reporting-Standard-v1_0.md", "standard");

const problems = [];
if (!agreement.found.includes(standard)) problems.push(`agreement pins ${agreement.found.join(", ")}; the Reporting Standard is ${standard}`);
if (!std.found.includes(schema)) problems.push(`standard does not pin the data schema ${schema}`);
if (!std.found.includes(manifest)) problems.push(`standard does not pin the manifest schema ${manifest}`);
if (/sha256:PLACEHOLDER/.test(agreement.text + std.text)) problems.push("a PLACEHOLDER hash remains");

if (problems.length) {
  console.error("Content-hash pins are out of date:\n  " + problems.join("\n  "));
  process.exit(1);
}
console.log("hash pins verified: agreement -> standard, standard -> schema + manifest");
