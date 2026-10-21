# SAFR: the Simple Agreement for Future Redemption

The canonical documents, the machine-readable schemas, and conformance fixtures for SAFR, an open
instrument for early-stage capital that resolves.

A SAFE resolves only at a priced round or an exit. A SAFR settles quarter by quarter from a budget
the company declares, which can be zero, or converts to common stock. There is no maturity date, no
interest, and no personal recourse. Every quarter the company publishes a short, standardized
Quarterly Update computed from a conforming data feed under the Reporting Standard.

The site, with the user guide, the comparison, and a browser tool that fills the agreement, is at
**https://safr.vc**.

## What is here

| Path | What it is | License |
| --- | --- | --- |
| `docs/SAFR-v0_09.md` | The agreement, canonical form v0.09 | CC BY 4.0 |
| `docs/SAFR-Reporting-Standard-v0_09.md` | The Reporting Standard, major version 0, v0.09: Ledger Base, Expected Capacity, the quarterly cycle, attestation grades, governance | CC BY 4.0 |
| `schemas/safr-reporting-standard-schema-v0_09.json` | JSON Schema (draft-07) for a Quarterly Update | MIT |
| `schemas/safr-manifest-schema-v0_09.json` | JSON Schema (2020-12) for a venture's Manifest: who serves each operational role | MIT |
| `fixtures/` | Conforming sample documents that validate against the schemas | MIT |
| `scripts/check-hashes.mjs` | Recomputes the content hashes the documents pin and fails if any has drifted | MIT |

## Content hashes

Each executed SAFR pins the Reporting Standard by version and by the sha256 of its canonical text,
so the rules are fixed the day it is signed. The agreement pins the Standard; the Standard pins
both schemas. To check the pins against the files in this repository:

```bash
node scripts/check-hashes.mjs
```

The same check runs before every deploy of safr.vc. If you mirror these files, the hashes are how
a reader knows the mirror is the canonical text.

## Validating a Quarterly Update

```bash
npx ajv-cli@5 validate --spec=draft7 \
  -s schemas/safr-reporting-standard-schema-v0_09.json \
  -d fixtures/quarterly-update-v0_09.tinwheel-q1-2026.json
```

The fixture is the worked example used across safr.vc: Tinwheel Systems, a fictitious Delaware
corporation on the Fixed Pool schedule, for the quarter ending March 31, 2026. Its figures are
internally consistent under the Standard (Ledger Base $1,201,000; Expected Capacity $37,000;
Declared Budget $25,000 with a variance note).

## Versions

The current canonical set is **v0.09**. Refinements within major version 0 apply to outstanding
positions automatically; a new major version, defined in the Standard as any change that would move
a previously issued position's computed Ledger Base or Expected Capacity for any quarter by more
than 3%, applies to an outstanding instrument only with both parties' consent. Superseded versions
are not published here; the hash in an executed agreement identifies the text it was signed under.

## Proposals and issues

Open an issue for an error in the text, a case the Standard does not handle, or a schema change.
Changes to the canonical documents move by versioned amendment, never per venture.

## Licenses

The documents (`docs/`) are licensed under [Creative Commons Attribution 4.0 International](https://creativecommons.org/licenses/by/4.0/).
The schemas, fixtures, and scripts are licensed under the [MIT License](LICENSE-MIT).
The SAFR™ name is reserved for the unmodified canonical terms maintained on a conforming data feed; a
modified instrument may not be called a SAFR.

Nothing here is legal, tax, or investment advice, and nothing here is an offer to sell or a
solicitation to buy any security. Review any instrument with your own counsel.

Published by Legacy Futures Administration LLC, Long Beach, California.
