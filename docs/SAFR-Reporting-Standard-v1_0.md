# SAFR Reporting Standard

**Major version 1, spec version 1.0.**

This is the canonical Reporting Standard referenced by the SAFR™ instrument. The instrument states results and commitments; this Standard holds the calculations behind them, the rules for how the numbers are produced and attested, and the governance for how the Standard itself changes. It is written to be read by a founder, an investor, an attorney, and an implementer, and to be pinned to an instrument by content hash.

This spec is the canonical, hashed artifact. It incorporates the machine-readable data schema below by reference, identified by its own content hash, so a hash of this spec transitively commits to the schema as well.

**Incorporated data schema:** SAFR Reporting Standard data schema, version 1.0, content hash sha256:710a63d1e3f753e0888dbc821884c314fc80a2f7a6fb4acd1410dc50c3c9f7f1.

**Incorporated Manifest schema:** SAFR Manifest schema, version 1.0, content hash sha256:2ed44b00482de006de59766a6e3f0f19d363a7b6f46792bd4a353e9e10e401f8.

## 1. What this Standard computes, and the reference period

Each fiscal quarter the venture’s data flows through this Standard to produce a Quarterly Update containing Ledger Base, Expected Capacity, the Declared Budget where the instrument provides for one that quarter, a single total of what the venture pays its owners and leaders, and brief commentary. Every figure is computed over the reference data period, which is the trailing twelve months ending on the most recent fiscal quarter-end (March 31, June 30, September 30, or December 31). The Quarterly Update is issued within 45 days after that quarter-end.

The Standard applies one fixed formula to every venture. None of the figures is a negotiated valuation, and none uses market comparables. This uniformity is what lets the network read one venture’s numbers against another’s and against the venture’s own history.

## 2. Ledger Base

Ledger Base is the venture’s standardized economic base for the instrument. It is one additive formula, applied identically to every venture, with no election: Ledger Base equals Tangible Net Assets plus the Qualified Development Asset plus Forward Revenue Value. Ledger Base is not a valuation, and it uses no market comparables. Where a bona fide priced equity round exists, that price governs; the measure sets the conversion basis only in the absence of a market price.

### 2.1 The components, by category

Ledger Base has three components. Every dollar of economic value enters through exactly one of them, and within Tangible Net Assets each asset is handled by its category. The category rules exist to enforce the no-double-count principle in Section 2.2.

Tangible Net Assets equals the asset categories below, summed, minus all liabilities at face.

- **Cash and equivalents**, at face.
- **Accounts receivable**, at face. Receivables are payment owed for performance already delivered. Forward Revenue Value counts only payments not yet earned, so the two categories can never hold the same dollar.
- **Inventory**, at cost, counted under the going-concern assumption in Section 2.2.
- **Equipment and deployed infrastructure**, at depreciated cost. This includes assets committed under Dedicated-Asset Contracts. The contract sets the revenue disposition below; the asset’s carrying treatment does not change.
- **Other tangible assets**, at cost, or at depreciated cost where the class depreciates.

The Qualified Development Asset restores credit for product development that ordinary accounting expenses as it is incurred. It equals qualifying development spend at cost, amortized by vintage: each month of qualifying development spend amortizes straight-line over its own 36 months. Concretely, the asset equals the sum, over the trailing 36 months, of each month’s qualifying development spend times the greater of zero and (1 minus that month’s age in months divided by 36); spend older than 36 months contributes nothing. The asset is therefore always the trailing 36 months of spend, weighted toward the most recent: a venture that keeps investing sustains the credit, and one that stops watches it decay to zero within three years. Qualifying spend categories are defined by the schema’s tagging rules.

Forward Revenue Value values the venture’s revenue stream by stream, each stream by exactly one disposition, fixed by a two-step mechanical test read in order, so that two identical ventures resolve every stream identically.

First, the source test. A Dedicated-Asset Contract is a signed contract that grants a counterparty the use of an identified asset, or an identified pool of assets, that the venture owns and carries in Tangible Net Assets, with the payments made for that use. Leases, rentals, and charters are the common forms. A stream under a Dedicated-Asset Contract takes a Forward Revenue Value of zero. The producing asset already carries the position’s value at depreciated cost, and each payment lands in cash as it arrives. Valuing the stream as well would count one economic position twice.

Second, for every other stream, the term test. A stream is valued by the present-value method if, and only if, it is under a signed contract whose term at signing is at least 12 months. Its value is the present value, discounted at 10% per year, of its remaining contracted payments: with C the annual contracted amount and n the remaining contract term in years, the value equals C times (1 minus (1.10) to the power of negative n), divided by 0.10. Because only the remaining payments are counted, the present value glides to zero as the remaining term runs off, and it never re-counts cash a contract has already produced, which already sits in Tangible Net Assets. Every remaining stream is valued by a fixed quality multiple on its trailing-twelve-month revenue: 2.0 times recurring revenue, 1.0 times repeat customer revenue, and 0.25 times one-time revenue. Revenue is tagged to these three classes per the schema.

The tests read observable facts: whether the contract grants use of an identified owned asset, signed status, and term at signing. A stream’s disposition is set at calibration and does not change quarter to quarter, and no stream is ever valued under more than one disposition. The term test absorbs the former asset-forward present value of contracted backlog as a special case: a venture whose revenue is entirely long-term contracted, and not asset-dedicated, is valued entirely by present value, with no election and no separate basis.

### 2.2 The no-double-count principle and the going-concern assumption

Every dollar of economic value enters Ledger Base through exactly one category. The formula enforces this in three directions.

**Across time.** Cash a contract has already produced sits in Tangible Net Assets, and only remaining payments enter the present value. Value migrates from the revenue component into the asset categories as it is earned; it is never in both at once.

**Across methods.** Each stream takes exactly one disposition under the mechanical test. No stream is valued by present value and a quality multiple together.

**Across sources.** An owned asset and the revenue it is contracted to produce are one economic position, and the Standard counts a position once. Where the venture carries the producing asset in Tangible Net Assets, the contracted stream’s Forward Revenue Value is zero. This holds for any entity that owns an asset and the revenue it is contracted to produce, whatever the entity’s form.

**The going-concern assumption.** Ledger Base is a going-concern figure, and this is what makes the general case sound. Operating stocks such as inventory and generic productive equipment are counted beside forward revenue because a going concern replenishes them in the ordinary course: the standing base and the output it produces are distinct value. The dedicated-asset rule marks exactly where that reasoning stops. Generic capacity supports many streams and is replaced as it wears, so counting it beside revenue value counts two different things. A dedicated asset is the single source of its contracted stream, so counting both counts one thing twice.

### 2.3 Conversion price and the dilution cap

When a holder converts at the Ledger Base price, the conversion price is Ledger Base divided by the venture’s fully diluted shares or units, taken from the most recent Quarterly Update. Fully diluted shares or units means outstanding equity assuming exercise and conversion of all options, warrants, and convertible securities, including all shares or units reserved under equity incentive plans.

Where the Fixed Pool Schedule is elected, the conversion price is subject to the dilution cap, max_conversion_ownership, set at 25%. The cap is enforced as a price floor, not a suspension. The conversion price equals the greater of Ledger Base and three times the position’s full remaining claim under the instrument, divided by fully diluted shares. The factor of three is the cap stated as arithmetic: at that price, converting the full remaining claim issues shares carrying exactly 25% of post-conversion fully diluted equity, and no smaller conversion can carry more. When Ledger Base stands at or above three times the full remaining claim, the floor is inert and the price is Ledger Base per fully diluted share. When Ledger Base is lower, including zero or negative, the floor sets the price. Conversion is therefore available every quarter at a price the cap permits: converting at the floor is voluntary and rarely attractive, but the option never closes, and the redemption path is never affected by the cap.

Where the Direct Ledger Schedule is elected, the conversion price is Ledger Base per fully diluted share or unit, and no floor applies: conversion mints units against the base that backs them, and there is no fixed pool for a cap to protect. If Ledger Base falls, the conversion price falls with it; the claim itself moves only on the elected Schedule. The Schedule is elected on the first page of the instrument and is carried in every Quarterly Update. A venture carries one elected Schedule across its outstanding positions; an issuer running both Schedules does so through distinct ventures, each with its own venture_id and Feed.

## 3. Expected Capacity and the working-capital floor

Expected Capacity is the amount the Standard computes a venture could prudently apply to redemptions in a quarter, after reserving a working-capital floor. It equals 25% of trailing-twelve-month free cash flow, floored at zero, and further limited so that cash on hand after redemptions would not fall below the working-capital floor.

The working-capital floor equals 6 months (two quarters) of trailing average monthly operating expenses.

Stated as one expression, Expected Capacity equals the greater of zero and the lesser of two quantities: 25% of the greater of zero and trailing-twelve-month free cash flow; and cash on hand minus the working-capital floor.

Expected Capacity is what the venture is measured against. The Declared Budget is the venture’s own decision for the quarter and may be any amount, including zero; when it is below Expected Capacity, the venture publishes a short written explanation. The Standard computes the expectation; the venture chooses the budget; the gap, explained or not, is the signal.

## 4. The owners-and-leaders total

The Quarterly Update carries a single total of what the venture pays its owners and leaders, so that money flowing to insiders is visible without exposing any individual’s pay. Owners and leaders means related parties and control persons: officers, directors, holders of 10% or more of the venture’s equity, and their immediate family and affiliated entities. The figure is the aggregate trailing-twelve-month compensation of that group, in cash and equity, reported as one number. It is never an individual breakdown. Salary is the one channel that can move value out of Expected Capacity without otherwise showing, so the Standard keeps the aggregate visible.

## 5. Attestation: one schema, two grades

Attestation is a layer within the single Quarterly Update, not a separate report. A Quarterly Update declares its grade, and the higher grade simply adds an independent assurance wrapper to the same numbers.

Grade one is a self-attested conforming Feed: the venture’s data, mapped to this Standard, asserted by the venture and machine-readable.

Grade two adds independent third-party attestation of the Ledger Base computation, under agreed-upon procedures or an equivalent standard, recorded with the attestor’s identity, the date, the procedures applied, and a content hash of the signed attestation artifact. Grade two is required for every graduation, where an outside party is relying on the venture’s reported worth to cross a prior claim onto these rails.

Because attestation is a conditional layer of the one schema rather than a second schema, the reported shape and the attested shape can never drift apart. The data schema enforces this: when the declared grade is two, the attestation block is required; at grade one it is absent.

## 6. Visibility: who sees what

The Standard uses the term Visibility, not “public.” Visibility is invitational, need-to-know transparency by the venture’s standing grant. Venture Visibility is an invitation, not a listing.

The Visibility tier carries aggregate figures: the venture’s standardized economic base, capacity figures, revenue mix, and a size band. The venture shares this with invited network participants.

The Holder tier carries everything in the Visibility tier plus the owners-and-leaders total and the full Quarterly Update, delivered to each holder, together with the attestation wrapper when present.

No tier ever includes personally identifiable information, customer or counterparty identities, partner names, or pipeline detail. The underlying ledger itself is not distributed through the Standard; only schema-shaped outputs are, and only by the venture’s standing grant. What a venture chooses to circulate elsewhere, such as for a Regulation CF raise or an acquirer’s diligence, is its own affair and outside this Standard.

## 7. Conformance: how the numbers are actually produced

Initial conformance is set by a qualified human analyst, who calibrates each venture’s data mapping to this Standard and sets a high baseline for what conforms. Automated computation then applies the same weights to the same data, conforming to this Standard, so the automated result matches the calibrated baseline rather than diverging from it. Who serves the conformance role for a venture is stated in its Manifest, never in this Standard. The method is expected to refine as volume accumulates, and those refinements ship as minor versions under the governance below. This is the reason the instrument incorporates the Standard by reference rather than freezing the formulas in its own text: the result is stable, the method matures.

### 7.1 Adopted conformance by a host instrument

A separate agreement (a “host instrument”) that issues its own interests may adopt the resolution mechanics of this Standard to govern redemptions of those interests, and may state that those redemptions are governed by this Standard. The resolution mechanics are the quarterly cycle, Expected Capacity and the working-capital floor, the Declared Budget, the pro-rata application of the Declared Budget across standing requests, automatic carry-forward of unfilled requests, and the rule that a Declared Budget of zero is not a default. A host instrument claims this conformance only if it applies these mechanics without modification, maintains a conforming Feed, and pins this Standard by version and content hash, exactly as an instrument does. The value of a host instrument’s interests is set by the host instrument, not by this Standard; this Standard governs only the redemption mechanics it adopts. A host instrument may not designate its interests “SAFR”; the instrument name remains reserved for unmodified SAFR instrument terms.

### 7.2 The Manifest and the conforming Feed

**The Manifest.** A venture may post a “**Manifest**”: a public, current statement of who serves each operational role for its positions under this Standard. The Manifest is state, not a document. Its truth is its content: each revision is hashed, the current hash is carried in the meta of every Quarterly Update, and the Manifest names one canonical home. Any copy matching the current hash is authentic; any copy that does not match is not the Manifest. A Manifest is voluntary. A venture without one runs every obligation of this Standard through written delivery to the notice addresses in its instruments.

**Roles.** A Manifest assigns a provider to each role it fills, from a closed set: Feed; Notice Delivery; Attestation Provider; Conformance Provider; Records Custodian; Proof Framework; Sponsor. A role may be served by the venture itself. New roles enter this Standard by versioned amendment, never per venture.

**Notices.** Notices go to the addresses on the instrument’s signature page. Once a venture posts a Manifest, notices go where the Manifest says instead, and the signature-page addresses remain the fallback of record. A venture tells its holders it is switching by sending that notice the old way first: the first Manifest, and any revision that changes a delivery channel, takes effect for a holder only once notice of it has been delivered through the mechanism in effect before the change. If cash can move on a holder’s silence, the notice goes to both places, always.

**Holder details.** Either party may update its own notice details by notice through the current mechanism. The update takes effect on delivery and is recorded on the Feed at the holder tier. Holder contact details never appear in the Manifest.

**The conforming Feed.** A conforming Feed records and serves: each Quarterly Update with its delivery time; each notice, offer, and election with its delivery evidence and its deadline; the current and historical versions and content hashes of the pinned Standard, its schema, and any Manifest; and holder notice-detail updates, at the holder tier. Where a Manifest is posted, serving its current content is part of conformance.

## 8. Versioning and governance

The Standard uses semantic versioning, written MAJOR.MINOR, within a pinned major version.

Minor versions are refinements: calibration improvements, additional revenue-quality tags, better data-source mappings, and tightening of the conformance method as the network teaches the Standard. Minor versions apply automatically to outstanding instruments, because by definition they do not change the deal.

A major version is any change that would alter a previously issued position’s computed Ledger Base, Expected Capacity, or claim value (the Unreturned Purchase Amount times the Multiple), each computed under that position’s elected calibration, for any quarter, by more than 3%. Introducing or withdrawing a Schedule is a major version regardless of that test. A change that would make a Feed conforming to the version then in effect non-conforming is a major version regardless of that test; for this purpose a Feed is conforming if it validates against the data schema of the version then in effect and records what Section 7.2 requires. A major version applies to an outstanding instrument only with the holder’s and the venture’s consent. The 3% threshold is what makes the boundary objective rather than a matter of the maintainer’s discretion: a change that moves a real position’s quarterly figure by more than 3% is, by definition, a new deal that must be agreed to, and anything smaller is a refinement already accepted at issuance, unless it would make a Feed conforming to the version then in effect non-conforming.

Each executed SAFR pins the major version and records the content hash of this spec in effect at issuance. The pin establishes exactly what the rules were on the day the instrument was signed, while the major-version mechanism gives the Standard room to improve without re-papering every outstanding instrument.

**Release note for this revision (not a standing rule).** This is major version 1. It moves the Quarterly Update to the first quarter after a position's Closing Date, so reporting begins at the start of a position's life rather than after its month 36: Section 1 now states that an Update carries the Declared Budget **where the instrument provides for one that quarter**, because the Declared Budget settles a redemption queue that no position can reach before its Election Date. It adds a major-version carve-out for any change that would make a conforming Feed non-conforming, anchored to two mechanical tests — schema validation and the Section 7.2 record — so the boundary turns on neither the maintainer's nor an analyst's judgment. In the data schema it adds `meta.declared_budget_applicable` and makes `quarter.declared_budget` conditional on it; narrows `meta.tax_classification` from `corporation` to `c_corporation`, the canonical form not being designed for an S corporation; and adds `quarter.buyout_notice.cash_settled` and `quarter.other_repurchases`, which record the venture's purchases of its own equity. `meta.declared_budget_applicable` is asserted by the venture rather than computed from the Feed, which it shares with `elected_schedule`, `tax_classification` and `attestation_grade`: it is a fact about the instrument, not a financial figure, and no computed value depends on it. The narrowed enum and the conditional each make a Feed conforming to version 0.09 non-conforming, which is why this is a major version under the rule stated above. No position was executed on version 0.09, so no consent is required and nothing is re-papered. The note is specific to this revision and is not carried forward verbatim.

Governance of the Standard is open: proposed changes, a comment window, and published release notes, so the Standard demonstrably belongs to no single vendor.

## 9. The data schema

The machine-readable data schema, incorporated by reference and identified by the content hash at the top of this spec, defines the exact shape of a conforming Quarterly Update: the required fields, their tier routing for Visibility and Holder distribution, the conditional attestation rule, the canonical constants mirrored for machine use, and the exclusion list that keeps identities and the raw ledger out of every tier. An implementer builds to the schema; this spec governs what the fields mean and how the figures are computed.

## Notice

This is an open canonical Standard, major version 1, spec version 1.0, provided without warranty and without legal advice. It is free to use under its open license (CC BY 4.0) and is pinned to instruments by content hash. The SAFR™ name is reserved for unmodified canonical instrument terms maintained on a conforming Feed pinned to a published version of this Standard.