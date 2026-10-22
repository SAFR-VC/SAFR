# SAFR 1.0: redline from v0.09

**This document is not canonical and is not hashed.** It is a reading aid. The canonical text is
[`docs/SAFR-v1_0.md`](SAFR-v1_0.md), whose content hash is what an executed agreement pins.

Every change below is reproduced in full: the v0.09 text, then the 1.0 text. The clause labels and
the one-line notes are this document's own and form no part of either version.

## What 1.0 does

A position under v0.09 reported nothing for three years. Quarterly Updates began with the first
quarter after the position's month 36, earlier only if the Company made an irrevocable election. An
investor who funded a SAFR therefore had no standardized figures until month 36, which is also when
the first resolution right opens. 1.0 moves reporting to the first fiscal quarter on or after the
Closing Date, so a position reports from the start of its life.

Three consequences follow, and most of the rest of the set is their mechanics. The Declared Budget
settles a redemption queue that no young position can reach, so it appears only once some
outstanding position has reached its Election Date. The numbered months had to be anchored, because
v0.09 used "month 36" throughout without ever saying what month 0 was. And the Closing Date itself
had to become a definition rather than a blank, because every month in the instrument counts from
it.

1.0 also states the tax characterization it had left to the separate offering materials, narrows the
form to C corporations and partnership-taxed entities, and makes a Conversion Offer available on its
own terms.

## The changes

### 1. Front matter

The version line.

**v0.09**

> **Canonical Form, Version 0.09**

**1.0**

> **Canonical Form, Version 1.0**

### 2. The preamble

The Closing Date stops being a filled blank. Section 2 defines it, so nothing written on the first page can displace that definition.

**v0.09**

> THIS CERTIFIES THAT in exchange for the payment by the undersigned investor (the “Holder”) of $[_____________] (the “**Purchase Amount**”) on or about [____________] (the “Closing Date”), [____________________], a [____________] [corporation / limited liability company / other entity] (the “Company”), issues to the Holder the rights set forth below.

**1.0**

> THIS CERTIFIES THAT in exchange for the payment by the undersigned investor (the “Holder”) of $[_____________] (the “**Purchase Amount**”) on the Closing Date, [____________________], a [____________] [corporation / limited liability company / other entity] (the “Company”), issues to the Holder the rights set forth below.

### 3. The pin line

Major version 1, and the content hash of the 1.0 Reporting Standard.

**v0.09**

> **Pinned Reporting Standard:** SAFR Reporting Standard, major version 0, content hash sha256:ca28ad7a3d4fcd5ceea7c1c3c9a5ad3e767ca07feb11ecb0b4c43c907295080c (the “**Reporting Standard**”; see Section 8(i)).

**1.0**

> **Pinned Reporting Standard:** SAFR Reporting Standard, major version 1, content hash sha256:f3d2d8505314e807741c69b640ef850019c99a8b8ca4ed7afc75a5e8c4fd4abe (the “**Reporting Standard**”; see Section 8(i)).

### 4. First page, the recorded classification

“a corporation” becomes “a C corporation”, and the form states that it is not designed for an S corporation. Section 8(j)(i) characterizes a position as common stock, which an S corporation’s one-class-of-stock rule cannot absorb.

**v0.09**

> *Recorded (check one):* The Company’s U.S. federal income tax classification is [ ] a corporation (Exhibit 1-A) [ ] a partnership, whatever the Company’s form, including a trust or series so taxed (Exhibit 1-B). This is a record, not an election: the Exhibit applicable to any conversion under Section 5(e) is determined by the Company’s classification as of the Conversion Date, and any change of classification is disclosed in the Quarterly Update for the quarter in which it occurs. This record and the Schedule election above are independent: either Schedule may be elected by an entity of either tax classification.

**1.0**

> *Recorded (check one):* The Company’s U.S. federal income tax classification is [ ] a C corporation (Exhibit 1-A) [ ] a partnership, whatever the Company’s form, including a trust or series so taxed (Exhibit 1-B). This is a record, not an election: the Exhibit applicable to any conversion under Section 5(e) is determined by the Company’s classification as of the Conversion Date, and any change of classification is disclosed in the Quarterly Update for the quarter in which it occurs. This record and the Schedule election above are independent: either Schedule may be elected by an entity of either tax classification. This form is not designed for an S corporation; a Company with an S election in effect should not issue under it.

### 5. Section 2, heading

Retitled. The section now carries the quarterly cycle every position shares and the month clock each position keeps.

**v0.09**

> ## 2. The Quarterly Cycle

**1.0**

> ## 2. The Cycle and the Clock

### 6. Section 2, body

Defines the Closing Date as the later of execution and cleared funds; terminates the instrument if funds do not arrive within 30 days of execution; states that month 0 is the Closing Date and how the numbered months run; and defines the Election Date.

**v0.09**

> This instrument runs on the Company’s fiscal quarters, ending March 31, June 30, September 30, and December 31. Three things happen each cycle: the Holder makes any elections for that quarter at least 10 days before the quarter closes; the Company issues its Quarterly Update within 45 days after the quarter closes; and settlement occurs within 10 business days after the Quarterly Update. The Quarterly Update fixes the Declared Budget and each requesting Holder’s pro rata amount, so settlement is the payment of amounts the Update has already determined. All notices, elections, and settlements under this instrument follow this cycle and occur at no other time.

**1.0**

> This instrument runs on the Company’s fiscal quarters, ending March 31, June 30, September 30, and December 31. Three things happen each cycle: the Holder makes any elections for that quarter at least 10 days before the quarter closes; the Company issues its Quarterly Update within 45 days after the quarter closes; and settlement occurs within 10 business days after the Quarterly Update. The “**Closing Date**” is the date on which the Company has received the Purchase Amount in cleared funds and this instrument has been executed by all parties, whichever is later. If the Purchase Amount has not been received in cleared funds within 30 days after this instrument has been executed by all parties, it terminates and no position arises. A position’s month 0 is its Closing Date. Each numbered month after that is the same number of calendar months later, so a position’s month 36 is 36 calendar months after its Closing Date. For a Graduated Position, Section 6(b) governs. The “**Election Date**” of a position is the first day of the first fiscal quarter beginning after that position’s month 36. Where the Quarterly Update carries a Declared Budget, it fixes that Budget and each requesting Holder’s pro rata amount, so settlement is the payment of amounts the Update has already determined. All notices, elections, and settlements under this instrument follow this cycle and occur at no other time.

### 7. Section 3(b)

Quarterly Updates begin with the first fiscal quarter on or after the Closing Date, rather than after the position’s month 36. The Company’s irrevocable early-start election is gone, because reporting is no longer optional at the start.

**v0.09**

> (b) **The Quarterly Update.** Beginning with the first quarter after the position’s month 36, and earlier at the Company’s option, the Company shall issue within 45 days after each fiscal quarter-end a “**Quarterly Update**” containing, computed from the Feed under the Reporting Standard: Ledger Base; Expected Capacity; the Declared Budget; a written explanation when required by Section 3(c); brief commentary; and a single total of what the Company pays its owners and leaders. The Company’s election to begin Quarterly Updates before the position’s month 36 is irrevocable; once the Company has issued a Quarterly Update before month 36, it shall issue a conforming Quarterly Update for every subsequent fiscal quarter for so long as any position under this form remains outstanding, and a failure to do so is a Reporting Lapse under Section 3(d). The Quarterly Update is delivered to each Holder. The Company may share a summary (the Company’s standardized economic base, capacity figures, revenue mix, and size band) with invited network participants by its standing grant. No Quarterly Update or summary includes personally identifiable information, customer or counterparty identities, partner names, or pipeline detail, and the underlying ledger itself is not distributed under this instrument.

**1.0**

> (b) **The Quarterly Update.** For each fiscal quarter beginning on or after the Closing Date, and for so long as any position under this form remains outstanding, the Company shall issue within 45 days after that quarter-end a “**Quarterly Update**” containing, computed from the Feed under the Reporting Standard: Ledger Base; Expected Capacity; the Declared Budget and any written explanation, where Section 3(c) provides for them; brief commentary; and a single total of what the Company pays its owners and leaders. Section 3(d) governs a failure to issue. The Quarterly Update is delivered to each Holder. The Company may share a summary (the Company’s standardized economic base, capacity figures, revenue mix, and size band) with invited network participants by its standing grant. No Quarterly Update or summary includes personally identifiable information, customer or counterparty identities, partner names, or pipeline detail, and the underlying ledger itself is not distributed under this instrument.

### 8. Section 3(c)

In a quarter where no outstanding position has reached its Election Date, the Update carries no Declared Budget and no written explanation. A Budget settles a queue that no position can yet reach.

**v0.09**

> (c) **Expected Capacity and the Declared Budget.** “**Expected Capacity**” is the amount the Reporting Standard computes that the Company could prudently apply to redemptions this quarter, after reserving a working-capital floor. The “**Declared Budget**” is the amount the Company declares in the Quarterly Update that it will apply to redemption settlements that quarter; it is the Company’s decision and may be any amount, including zero. If the Declared Budget is less than Expected Capacity, the Quarterly Update includes a written explanation of the reasons capital is being retained.

**1.0**

> (c) **Expected Capacity and the Declared Budget.** “**Expected Capacity**” is the amount the Reporting Standard computes that the Company could prudently apply to redemptions this quarter, after reserving a working-capital floor. The “**Declared Budget**” is the amount the Company declares in the Quarterly Update that it will apply to redemption settlements that quarter; it is the Company’s decision and may be any amount, including zero. If the Declared Budget is less than Expected Capacity, the Quarterly Update includes a written explanation of the reasons capital is being retained. In any quarter in which no outstanding position has reached its Election Date, the Quarterly Update carries no Declared Budget and no explanation under this Section.

### 9. Section 3(d)

States the due day, marks a late Update as late, and starts a Reporting Lapse on the 60th day after quarter-end rather than the 45th.

**v0.09**

> (d) **Reporting Lapse.** If the Company has not issued a Quarterly Update within 45 days after a fiscal quarter-end, a “**Reporting Lapse**” begins and continues until a conforming Quarterly Update issues. During a Reporting Lapse, the Company may not issue Buyout Notices, issue Conversion Offers, give the early-opening notice under Section 5(a), close new positions under this form, or settle Graduated Positions; conversions under Section 5(b) are priced using the most recent reported Ledger Base; and the lapse is disclosed in the next Quarterly Update. The Multiple continues to accrue during any lapse. A Reporting Lapse is not a default and accelerates nothing.

**1.0**

> (d) **Reporting Lapse.** The Quarterly Update is due within 45 days after each fiscal quarter-end. An Update issued after that day is marked as late. A “**Reporting Lapse**” begins on the 60th day after that quarter-end and continues until a conforming Quarterly Update issues. During a Reporting Lapse, the Company may not issue Buyout Notices, issue Conversion Offers, give the early-opening notice under Section 5(a), close new positions under this form, or settle Graduated Positions; conversions under Section 5(b) are priced using the most recent reported Ledger Base; and the lapse is disclosed in the next Quarterly Update. The Multiple continues to accrue during any lapse. A Reporting Lapse is not a default and accelerates nothing.

### 10. Section 5(a)

The early-opening limb uses the defined Election Date.

**v0.09**

> (a) **Redemption.** Beginning with the first quarter after the position’s month 60, the Holder may submit, at least 10 days before the quarter closes, a standing redemption request for all or part of the position. The Company may open the queue earlier, beginning with the first quarter after the position’s month 36, by an irrevocable notice issued with any Quarterly Update; early opening creates no payment obligation. Standing requests persist across quarters until filled or withdrawn. At settlement, the Declared Budget is applied pro rata across all standing requested amounts, valued at the Unreturned Purchase Amount times the Multiple. Partial fills carry forward automatically. Each payment reduces the Unreturned Purchase Amount proportionally, and redeemed amounts are permanently extinguished. Positions held by officers, directors, or holders of 10% or more of the Company’s equity participate on identical pro rata terms and are flagged in the Quarterly Update.

**1.0**

> (a) **Redemption.** Beginning with the first quarter after the position’s month 60, the Holder may submit, at least 10 days before the quarter closes, a standing redemption request for all or part of the position. The Company may open the queue earlier, beginning with the position’s Election Date, by an irrevocable notice issued with any Quarterly Update; early opening creates no payment obligation. Standing requests persist across quarters until filled or withdrawn. At settlement, the Declared Budget is applied pro rata across all standing requested amounts, valued at the Unreturned Purchase Amount times the Multiple. Partial fills carry forward automatically. Each payment reduces the Unreturned Purchase Amount proportionally, and redeemed amounts are permanently extinguished. Positions held by officers, directors, or holders of 10% or more of the Company’s equity participate on identical pro rata terms and are flagged in the Quarterly Update.

### 11. Section 5(b)

Conversion opens at the position’s Election Date.

**v0.09**

> (b) **Conversion.** Beginning with the first quarter after the position’s month 36, the Holder may elect, at least 10 days before the quarter closes, to convert up to 1/8 of the original position per quarter. The commencement and the per-quarter fraction in the preceding sentence do not apply to a conversion elected in response to a Buyout Notice under Section 5(c) or a Conversion Offer under Section 5(e); such a conversion is available in the quarter of the offer and uses every other term of this Section, including the conversion price and the dilution cap. The amount converting equals the elected portion of the Unreturned Purchase Amount times the Multiple. The conversion price is Ledger Base per fully diluted share or unit, from the most recent reported Ledger Base, computed under the Reporting Standard. The Company issues the converted amount divided by that price in shares of common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units carrying the same economic rights (which may be denominated in a standardized ledger unit of account where the entity’s organizing documents so provide), with governance as provided by that entity’s organizing documents). Conversion never produces preferred stock, liquidation preference, or special voting or blocking rights beyond those of common-equivalent ownership. Conversion reduces the Unreturned Purchase Amount proportionally, and the claim on the converted amount is extinguished.

**1.0**

> (b) **Conversion.** Beginning with the position’s Election Date, the Holder may elect, at least 10 days before the quarter closes, to convert up to 1/8 of the original position per quarter. The commencement and the per-quarter fraction in the preceding sentence do not apply to a conversion elected in response to a Buyout Notice under Section 5(c) or a Conversion Offer under Section 5(e); such a conversion is available in the quarter of the offer and uses every other term of this Section, including the conversion price and the dilution cap. The amount converting equals the elected portion of the Unreturned Purchase Amount times the Multiple. The conversion price is Ledger Base per fully diluted share or unit, from the most recent reported Ledger Base, computed under the Reporting Standard. The Company issues the converted amount divided by that price in shares of common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units carrying the same economic rights (which may be denominated in a standardized ledger unit of account where the entity’s organizing documents so provide), with governance as provided by that entity’s organizing documents). Conversion never produces preferred stock, liquidation preference, or special voting or blocking rights beyond those of common-equivalent ownership. Conversion reduces the Unreturned Purchase Amount proportionally, and the claim on the converted amount is extinguished.

### 12. Section 5(c)

A Buyout Notice may go only to a position that has reached its own Election Date, and a partial Notice applies pro rata across those positions.

**v0.09**

> (c) **Buyout.** In any quarter for which the Company has issued a conforming Quarterly Update, the Company may issue, with that Update, a “**Buyout Notice**” for all or part of any outstanding positions at the Unreturned Purchase Amount times the Multiple. Each noticed Holder may, at least 10 days before the quarter closes, elect to convert all or part of the noticed amount under Section 5(b) instead of accepting cash; a Holder who does not so elect accepts cash for the noticed amount. Partial Buyout Notices apply pro rata across all positions of the class. Budget released by such conversion elections is reallocated pro rata to remaining noticed positions in the same quarter, and any residue carries to the next quarter. Each Buyout Notice, and each Holder election in response, is disclosed in the Quarterly Update, and a Buyout Notice to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged. Settled amounts are permanently extinguished.

**1.0**

> (c) **Buyout.** In any quarter for which the Company has issued a conforming Quarterly Update, the Company may issue, with that Update, a “**Buyout Notice**” for all or part of any outstanding position that has reached its Election Date, at the Unreturned Purchase Amount times the Multiple. Each noticed Holder may, at least 10 days before the quarter closes, elect to convert all or part of the noticed amount under Section 5(b) instead of accepting cash; a Holder who does not so elect accepts cash for the noticed amount. Partial Buyout Notices apply pro rata across all such positions. Budget released by such conversion elections is reallocated pro rata to remaining noticed positions in the same quarter, and any residue carries to the next quarter. Each Buyout Notice, and each Holder election in response, is disclosed in the Quarterly Update, and a Buyout Notice to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged. Settled amounts are permanently extinguished.

### 13. Section 5(d)(i)

The election deadline is stated in the same words the rest of the instrument uses.

**v0.09**

> (i) *Round-price conversion, available on any priced round.* Upon the closing of any bona fide priced equity round of the Company, the Holder may elect, by the next quarter’s election date, to convert the entire position, without regard to the per-quarter fraction in Section 5(b), into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the round’s effective price per share or unit, less a 20% discount. The dilution cap in Section 5(b) is defined against the Ledger Base conversion price and does not apply to this round-price conversion.

**1.0**

> (i) *Round-price conversion, available on any priced round.* Upon the closing of any bona fide priced equity round of the Company, the Holder may elect, at least 10 days before the next quarter closes, to convert the entire position, without regard to the per-quarter fraction in Section 5(b), into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the round’s effective price per share or unit, less a 20% discount. The dilution cap in Section 5(b) is defined against the Ledger Base conversion price and does not apply to this round-price conversion.

### 14. Section 5(d)(ii)

The same conforming change.

**v0.09**

> (ii) *Cash election, available only on a Qualified Financing.* A “**Qualified Financing**” is a bona fide priced equity financing of the Company whose proceeds, aggregated with the proceeds of other bona fide priced equity financings of the Company closing in the trailing four quarters, are at least 1.0 times the aggregate claims then outstanding under this form (the sum across the class of each position’s Unreturned Purchase Amount times its Multiple), the aggregate claims measured excluding positions held by affiliates of the Company and positions issued within six months before the financing. Upon the closing of a Qualified Financing, the Holder may instead elect, by the next quarter’s election date, redemption of the position at the Unreturned Purchase Amount times the Multiple, funded from the proceeds. The cash election arises only when a financing clears this fundability bar.

**1.0**

> (ii) *Cash election, available only on a Qualified Financing.* A “**Qualified Financing**” is a bona fide priced equity financing of the Company whose proceeds, aggregated with the proceeds of other bona fide priced equity financings of the Company closing in the trailing four quarters, are at least 1.0 times the aggregate claims then outstanding under this form (the sum across the class of each position’s Unreturned Purchase Amount times its Multiple), the aggregate claims measured excluding positions held by affiliates of the Company and positions issued within six months before the financing. Upon the closing of a Qualified Financing, the Holder may instead elect, at least 10 days before the next quarter closes, redemption of the position at the Unreturned Purchase Amount times the Multiple, funded from the proceeds. The cash election arises only when a financing clears this fundability bar.

### 15. Section 5(e)

A Conversion Offer is available in any quarter for which a conforming Quarterly Update has issued, no longer borrowing the Buyout’s availability. No commission or other remuneration may be paid for soliciting acceptance, and no fee may depend on whether or how much converts.

**v0.09**

> (e) **Conversion Offer (Company-initiated).** On the same availability terms as the Buyout Notice in Section 5(c), the Company may issue, with a conforming Quarterly Update, a “**Conversion Offer**” to convert all or part of a single position into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the Ledger Base conversion price, on the conversion terms of Section 5(b) as modified for an offer-elected conversion. A Conversion Offer is valid only if it states the specific use to which the converting capital will be applied and the basis for it. A Conversion Offer states the attestation grade of the Quarterly Update it issues with, and the Company may, at its option, issue it with third-party attestation of Ledger Base. The noticed Holder may, at least 10 days before the quarter closes, elect to accept in whole or in part. A Holder who does not affirmatively accept by that date declines, and the position continues under this instrument exactly as if no Conversion Offer had been made, with the redemption path under Section 5(a) and every other right unaffected; a declined Conversion Offer prejudices the position in no way and may be extended again in a later quarter. A Conversion Offer is made per position rather than across the class, and is fair by its substantiation, its refusability, and its disclosure rather than by pro rata application. Each Conversion Offer, and each acceptance, is disclosed in the Quarterly Update, and a Conversion Offer to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged.

**1.0**

> (e) **Conversion Offer (Company-initiated).** In any quarter for which the Company has issued a conforming Quarterly Update, the Company may issue, with that Update, a “**Conversion Offer**” to convert all or part of a single position into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the Ledger Base conversion price, on the conversion terms of Section 5(b) as modified for an offer-elected conversion. A Conversion Offer is valid only if it states the specific use to which the converting capital will be applied and the basis for it. No commission or other remuneration may be paid or given, directly or indirectly, for soliciting acceptance of a Conversion Offer, and no person’s fee may depend on whether or how much converts. A fixed fee for administrative services is permitted if the person receiving it makes no recommendation on the offer. A Conversion Offer states the attestation grade of the Quarterly Update it issues with, and the Company may, at its option, issue it with third-party attestation of Ledger Base. The noticed Holder may, at least 10 days before the quarter closes, elect to accept in whole or in part. A Holder who does not affirmatively accept by that date declines, and the position continues under this instrument exactly as if no Conversion Offer had been made, with the redemption path under Section 5(a) and every other right unaffected; a declined Conversion Offer prejudices the position in no way and may be extended again in a later quarter. A Conversion Offer is made per position rather than across the class, and is fair by its substantiation, its refusability, and its disclosure rather than by pro rata application. Each Conversion Offer, and each acceptance, is disclosed in the Quarterly Update, and a Conversion Offer to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged.

### 16. Section 5(e), closing paragraph

The sentence disclaiming any tax treatment is replaced by a pointer to Section 8(j), which the Exhibits already contradicted.

**v0.09**

> Upon acceptance, the conversion is effective as of the date stated in a Conversion Declaration executed by the Company and the Holder substantially in the form of the applicable Exhibit (the “**Conversion Declaration**”): Exhibit 1-A where the Company is taxed as a corporation, and Exhibit 1-B where the Company is taxed as a partnership, whatever its form, in each case determined as of the Conversion Date and as stated in the Quarterly Update with which the Conversion Offer issues. The Conversion Declaration establishes the Holder’s equity and beneficial interest in the converted units as of that date. Where a Conversion Offer is made to align the Holder’s equity with the Company’s acquisition and placing in service of a specified asset, the date in the Conversion Declaration precedes that acquisition and placing in service. This instrument states no tax treatment of a Conversion Offer or its resulting interest; any such treatment is addressed in the offering’s separate tax materials.

**1.0**

> Upon acceptance, the conversion is effective as of the date stated in a Conversion Declaration executed by the Company and the Holder substantially in the form of the applicable Exhibit (the “**Conversion Declaration**”): Exhibit 1-A where the Company is taxed as a corporation, and Exhibit 1-B where the Company is taxed as a partnership, whatever its form, in each case determined as of the Conversion Date and as stated in the Quarterly Update with which the Conversion Offer issues. The Conversion Declaration establishes the Holder’s equity and beneficial interest in the converted units as of that date. Where a Conversion Offer is made to align the Holder’s equity with the Company’s acquisition and placing in service of a specified asset, the date in the Conversion Declaration precedes that acquisition and placing in service. Tax characterization is stated in Section 8(j).

### 17. Section 8(i), and the new Section 8(j)

The pinned major version becomes 1. Section 8(j) states the tax characterization in two tracks: common stock from the Closing Date for a C corporation, and not a partnership interest until conversion for a partnership.

**v0.09**

> (i) **The pinned Standard.** This instrument incorporates the Reporting Standard by reference, major version 0, as refined from time to time within that major version, with the version in effect at issuance identified by the content hash on the first page. Refinements within major version 0 apply automatically. A new major version (for example, 1.x to 2.0), defined in the Reporting Standard as any change that would alter a previously issued position’s computed Ledger Base, Expected Capacity, or claim value (the Unreturned Purchase Amount times the Multiple) for any quarter by more than 3%, applies to this instrument only with the Holder’s and the Company’s consent. The pinned major version controls all calculations under this instrument.

**1.0**

> (i) **The pinned Standard.** This instrument incorporates the Reporting Standard by reference, major version 1, as refined from time to time within that major version, with the version in effect at issuance identified by the content hash on the first page. Refinements within major version 1 apply automatically. A new major version (for example, 1.x to 2.0), defined in the Reporting Standard as any change that would alter a previously issued position’s computed Ledger Base, Expected Capacity, or claim value (the Unreturned Purchase Amount times the Multiple) for any quarter by more than 3%, applies to this instrument only with the Holder’s and the Company’s consent. The pinned major version controls all calculations under this instrument.
> (j) **Tax characterization.** From the Closing Date, according to the tax classification recorded on the first page and, if that classification changes, according to the new classification from the change:
> (i) where the Company is taxed as a C corporation, this instrument is intended to be treated as common stock for U.S. federal and state income tax purposes, including under Sections 368, 1036 and 1202 of the Internal Revenue Code. Treatment under Section 1202 is subject to that section’s conditions, including that the Company be a qualified small business when this instrument is issued, and the limits in Section 1202(c)(3) on the Company’s purchases of its own stock, including any settlement of all or part of a position in cash under this instrument; and
> (ii) where the Company is taxed as a partnership, this instrument is intended not to be a partnership interest until it converts, and a conversion is intended to be a contribution under Section 721 of the Internal Revenue Code.
> Each party will report consistently with this intent. This instrument does not represent that any treatment will be respected.

### 18. Exhibit 1-A, paragraph 5

A conversion is an exchange of stock for stock under Section 1036, or a recapitalization under Section 368(a)(1)(E), rather than a contribution under Section 351 — which follows from Section 8(j)(i) treating the position as stock all along.

**v0.09**

> 5. **Characterization.** The parties intend the surrender of the Exchanged Claim for the Converted Units to qualify as a contribution under Section 351 of the Internal Revenue Code of 1986, as amended (the “Code”), or a recapitalization under Section 368(a)(1)(E) of the Code, as applicable, and not as a sale. The exchange is made for the Company’s existing obligation and without payment of any commission or remuneration for soliciting it. The parties will file all tax returns consistently with the intended treatment above and will take no position inconsistent with it except as required by a final determination. Any further treatment is addressed in the offering’s separate tax materials.

**1.0**

> 5. **Characterization.** The parties intend the surrender of the Exchanged Claim for the Converted Units to be an exchange of stock for stock under Section 1036 of the Internal Revenue Code of 1986, as amended (the “Code”), or a recapitalization under Section 368(a)(1)(E) of the Code, and not a sale. The exchange is made for the Company’s existing obligation and without payment of any commission or remuneration for soliciting it. The parties will file all tax returns consistently with the intended treatment above and will take no position inconsistent with it except as required by a final determination. Any further treatment is addressed in the offering’s separate tax materials.

### 19. The notice

The version line.

**v0.09**

> This is an open canonical form, version 0.09, provided without warranty and without legal advice; parties should consult their own counsel. The form is free to use under its open license (CC BY 4.0). The SAFR™ name is reserved for unmodified canonical terms maintained on a conforming Feed pinned to a published Reporting Standard version. The pinned Reporting Standard, identified by version and content hash above, controls all calculations.

**1.0**

> This is an open canonical form, version 1.0, provided without warranty and without legal advice; parties should consult their own counsel. The form is free to use under its open license (CC BY 4.0). The SAFR™ name is reserved for unmodified canonical terms maintained on a conforming Feed pinned to a published Reporting Standard version. The pinned Reporting Standard, identified by version and content hash above, controls all calculations.

## The Reporting Standard

The Standard moves to major version 1, spec 1.0. Section 1 states that a Quarterly Update carries
the Declared Budget *where the instrument provides for one that quarter*, since the Standard is
shared with host instruments that have no Election Date. Section 8 gains a major-version carve-out:
any change that would make a conforming Feed non-conforming is a major version regardless of the 3%
test, where a Feed is conforming if it validates against the data schema then in effect and records
what Section 7.2 requires. Without that carve-out the 1.0 schema change would have published as a
minor version and applied automatically to outstanding instruments, breaking every conforming Feed.

## The data schema

`meta.declared_budget_applicable` is added and required, and `quarter.declared_budget` becomes
conditional on it: required when the flag is true, and forbidden, along with `quarter.variance_note`,
when it is false. `meta.tax_classification` narrows from `corporation` to `c_corporation`.
`quarter.buyout_notice.cash_settled` and `quarter.other_repurchases` are added, recording the
venture's purchases of its own equity. Both the narrowed enum and the conditional make a Feed
conforming to v0.09 non-conforming, which is why 1.0 is a major version.

## Who was affected

No position was ever executed on v0.09, so no holder consent was required under Section 8 of the
Standard and no instrument was re-papered.
