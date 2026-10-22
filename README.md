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
| `docs/SAFR-v1_0.md` | The agreement, canonical form v1.0 | CC BY 4.0 |
| `docs/SAFR-Reporting-Standard-v1_0.md` | The Reporting Standard, major version 1, v1.0: Ledger Base, Expected Capacity, the quarterly cycle, attestation grades, governance | CC BY 4.0 |
| `docs/SAFR-v1_0-redline-from-v0_09.md` | Every change from v0.09 to 1.0, in full, with the clause it sits in. Not canonical and not hashed | CC BY 4.0 |
| `schemas/safr-reporting-standard-schema-v1_0.json` | JSON Schema (draft-07) for a Quarterly Update | MIT |
| `schemas/safr-manifest-schema-v1_0.json` | JSON Schema (2020-12) for a venture's Manifest: who serves each operational role | MIT |
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
  -s schemas/safr-reporting-standard-schema-v1_0.json \
  -d fixtures/quarterly-update-v1_0.tinwheel-q1-2026.json
```

Both fixtures are the worked example used across safr.vc: Tinwheel Systems, a fictitious Delaware C
corporation on the Fixed Pool schedule. Its figures are internally consistent under the Standard
(Ledger Base $1,201,000; Expected Capacity $37,000).

`quarterly-update-v1_0.tinwheel-q1-2026.json` is an ordinary quarter, with a position past its
Election Date: `meta.declared_budget_applicable` is true, so the Update carries a Declared Budget of
$25,000 and a variance note explaining the gap to Expected Capacity.

`quarterly-update-v1_0.tinwheel-pre-election-date.json` is a quarter where no outstanding position
has reached its Election Date. The flag is false, so the Update carries no Declared Budget and no
variance note, while Expected Capacity still publishes. Together the two fixtures pin both branches
of the conditional, which is the part of the schema a reader is most likely to implement wrongly.

## Versions

The current canonical set is **v1.0**, major version 1. It moves the Quarterly Update to the first
fiscal quarter on or after a position's Closing Date, so a position reports from the start of its
life rather than after its month 36. `docs/SAFR-v1_0-redline-from-v0_09.md` sets out every change.

Refinements within a major version apply to outstanding positions automatically. A new major version
applies to an outstanding instrument only with both parties' consent, and the Standard defines one as
any change that would move a previously issued position's computed Ledger Base, Expected Capacity or
claim value for any quarter by more than 3% — or, as of 1.0, any change that would make a conforming
Feed non-conforming, whatever the 3% test says. The 1.0 data schema makes a v0.09 Feed non-conforming,
which is what makes 1.0 a major version. No position was executed on v0.09, so nothing was
re-papered.

Superseded versions are not published here; the hash in an executed agreement identifies the text it
was signed under.

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
