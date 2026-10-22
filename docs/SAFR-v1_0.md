# SIMPLE AGREEMENT FOR FUTURE REDEMPTION (SAFR™)

**Canonical Form, Version 1.0**

*In plain terms: in exchange for an investment, the Holder receives a claim on the Company that grows on the Schedule elected at issuance and can be settled in cash each quarter or converted into common stock or equivalent ownership units. The Company is never forced to pay on any particular date; it pays what it declares it can afford each quarter, and the claim is capped. This agreement states the results and commitments; all calculations live in the SAFR Reporting Standard, pinned below.*

THIS CERTIFIES THAT in exchange for the payment by the undersigned investor (the “Holder”) of $[_____________] (the “**Purchase Amount**”) on the Closing Date, [____________________], a [____________] [corporation / limited liability company / other entity] (the “Company”), issues to the Holder the rights set forth below.

**Pinned Reporting Standard:** SAFR Reporting Standard, major version 1, content hash sha256:f3d2d8505314e807741c69b640ef850019c99a8b8ca4ed7afc75a5e8c4fd4abe (the “**Reporting Standard**”; see Section 8(i)).

**At issuance:**

*Elected (check one):* The Schedule is [ ] **Fixed Pool** [ ] **Direct Ledger** (Section 1). This is an election, not a record: it is made once at issuance, applies for the life of the position, and does not change with the Company’s form, tax classification, or later financings.

*Recorded (check one):* The Company’s U.S. federal income tax classification is [ ] a C corporation (Exhibit 1-A) [ ] a partnership, whatever the Company’s form, including a trust or series so taxed (Exhibit 1-B). This is a record, not an election: the Exhibit applicable to any conversion under Section 5(e) is determined by the Company’s classification as of the Conversion Date, and any change of classification is disclosed in the Quarterly Update for the quarter in which it occurs. This record and the Schedule election above are independent: either Schedule may be elected by an entity of either tax classification. This form is not designed for an S corporation; a Company with an S election in effect should not issue under it.

*Elected (if applicable):* [ ] Graduated Position (Section 6; complete Schedule A)

## 1. The Position and the Schedule

(a) The Holder’s position is a contractual claim on the Company equal at any time to the Unreturned Purchase Amount times the **Multiple**. “**Unreturned**” means reduced proportionally by amounts redeemed and amounts converted under this instrument. The Multiple is set by the Schedule elected on the first page: Fixed Pool or Direct Ledger. Between the anchors of the elected Schedule the Multiple follows a straight line, and it never decreases.

(i) **Fixed Pool.** Calibrated for a company whose conversions issue shares from a fixed equity pool; the dilution cap in Section 5(b) applies. The Multiple is 1.50 at issuance and is never below 1.50: it holds at 1.50 through the position’s month 36, rises to 2.00 at month 60, and rises to 2.50 at month 90, holding at 2.50 thereafter.

|Month            |Multiple|
|-----------------|--------|
|0                |1.50    |
|36               |1.50    |
|60               |2.00    |
|90 and thereafter|2.50    |

(ii) **Direct Ledger.** Calibrated for an issuer whose conversions mint ledger-backed units, so that aggregate claims track the base they are claims on. The Multiple is 1.00 at issuance and is never below 1.00: it holds at 1.00 through the position’s month 12, rises to 1.15 at month 36, rises to 1.35 at month 60, and rises to 1.60 at month 90, holding at 1.60 thereafter.

|Month            |Multiple|
|-----------------|--------|
|0                |1.00    |
|12               |1.00    |
|36               |1.15    |
|60               |1.35    |
|90 and thereafter|1.60    |

(b) This position is not a debt instrument. It bears no interest, has no maturity date, follows no amortization or repayment schedule, and embodies no unconditional promise to pay any sum on any date. It creates no payment obligation except as expressly settled under this instrument, and any redemption settlement is contingent on the Declared Budget, which may be zero in any quarter. The Multiple measures and caps the claim; it is not a sum owed, accrued interest, or an amount to be repaid over time. The position is redeemable only on the contingent, capacity-based terms of Section 5 and is convertible into common-equivalent ownership as provided there.

(c) **Zero is not default.** A Declared Budget of zero in any quarter, and the resulting absence of any redemption payment, is not a default, breach, or event of acceleration, and no such concepts exist in this instrument.

(d) **No personal recourse.** No officer, director, member, manager, founder, or equity holder of the Company has any personal liability for the Company’s obligations under this instrument, and nothing in this instrument may be amended, supplemented, or conditioned to create such liability or any obligation tied to any individual’s personal income or assets.

## 2. The Cycle and the Clock

This instrument runs on the Company’s fiscal quarters, ending March 31, June 30, September 30, and December 31. Three things happen each cycle: the Holder makes any elections for that quarter at least 10 days before the quarter closes; the Company issues its Quarterly Update within 45 days after the quarter closes; and settlement occurs within 10 business days after the Quarterly Update. The “**Closing Date**” is the date on which the Company has received the Purchase Amount in cleared funds and this instrument has been executed by all parties, whichever is later. If the Purchase Amount has not been received in cleared funds within 30 days after this instrument has been executed by all parties, it terminates and no position arises. A position’s month 0 is its Closing Date. Each numbered month after that is the same number of calendar months later, so a position’s month 36 is 36 calendar months after its Closing Date. For a Graduated Position, Section 6(b) governs. The “**Election Date**” of a position is the first day of the first fiscal quarter beginning after that position’s month 36. Where the Quarterly Update carries a Declared Budget, it fixes that Budget and each requesting Holder’s pro rata amount, so settlement is the payment of amounts the Update has already determined. All notices, elections, and settlements under this instrument follow this cycle and occur at no other time.

## 3. Reporting

(a) **The Feed.** From the Closing Date, the Company shall maintain a live data connection or recurring submission (the “**Feed**”) conforming to the Reporting Standard.

(b) **The Quarterly Update.** For each fiscal quarter beginning on or after the Closing Date, and for so long as any position under this form remains outstanding, the Company shall issue within 45 days after that quarter-end a “**Quarterly Update**” containing, computed from the Feed under the Reporting Standard: Ledger Base; Expected Capacity; the Declared Budget and any written explanation, where Section 3(c) provides for them; brief commentary; and a single total of what the Company pays its owners and leaders. Section 3(d) governs a failure to issue. The Quarterly Update is delivered to each Holder. The Company may share a summary (the Company’s standardized economic base, capacity figures, revenue mix, and size band) with invited network participants by its standing grant. No Quarterly Update or summary includes personally identifiable information, customer or counterparty identities, partner names, or pipeline detail, and the underlying ledger itself is not distributed under this instrument.

(c) **Expected Capacity and the Declared Budget.** “**Expected Capacity**” is the amount the Reporting Standard computes that the Company could prudently apply to redemptions this quarter, after reserving a working-capital floor. The “**Declared Budget**” is the amount the Company declares in the Quarterly Update that it will apply to redemption settlements that quarter; it is the Company’s decision and may be any amount, including zero. If the Declared Budget is less than Expected Capacity, the Quarterly Update includes a written explanation of the reasons capital is being retained. In any quarter in which no outstanding position has reached its Election Date, the Quarterly Update carries no Declared Budget and no explanation under this Section.

(d) **Reporting Lapse.** The Quarterly Update is due within 45 days after each fiscal quarter-end. An Update issued after that day is marked as late. A “**Reporting Lapse**” begins on the 60th day after that quarter-end and continues until a conforming Quarterly Update issues. During a Reporting Lapse, the Company may not issue Buyout Notices, issue Conversion Offers, give the early-opening notice under Section 5(a), close new positions under this form, or settle Graduated Positions; conversions under Section 5(b) are priced using the most recent reported Ledger Base; and the lapse is disclosed in the next Quarterly Update. The Multiple continues to accrue during any lapse. A Reporting Lapse is not a default and accelerates nothing.

## 4. Ledger Base

(a) “**Ledger Base**” is the Company’s standardized economic base for purposes of this instrument, computed each quarter from the Feed under the Reporting Standard. It is one additive formula applied to every venture with no election, Tangible Net Assets plus the Qualified Development Asset plus Forward Revenue Value, valuing what the Company owns, the product development it has funded, and its revenue by quality on uniform terms. Ledger Base gates Expected Capacity, anchors the Quarterly Update, and sets the conversion price. Ledger Base is not a valuation and is never negotiated. Where a bona fide priced equity round exists, that price governs; the measure sets the conversion basis only in the absence of a market price.

(b) Ledger Base is self-attested unless the Quarterly Update notes third-party attestation, which is required where Section 6(a) provides.

## 5. Resolution Events

(a) **Redemption.** Beginning with the first quarter after the position’s month 60, the Holder may submit, at least 10 days before the quarter closes, a standing redemption request for all or part of the position. The Company may open the queue earlier, beginning with the position’s Election Date, by an irrevocable notice issued with any Quarterly Update; early opening creates no payment obligation. Standing requests persist across quarters until filled or withdrawn. At settlement, the Declared Budget is applied pro rata across all standing requested amounts, valued at the Unreturned Purchase Amount times the Multiple. Partial fills carry forward automatically. Each payment reduces the Unreturned Purchase Amount proportionally, and redeemed amounts are permanently extinguished. Positions held by officers, directors, or holders of 10% or more of the Company’s equity participate on identical pro rata terms and are flagged in the Quarterly Update.

(b) **Conversion.** Beginning with the position’s Election Date, the Holder may elect, at least 10 days before the quarter closes, to convert up to 1/8 of the original position per quarter. The commencement and the per-quarter fraction in the preceding sentence do not apply to a conversion elected in response to a Buyout Notice under Section 5(c) or a Conversion Offer under Section 5(e); such a conversion is available in the quarter of the offer and uses every other term of this Section, including the conversion price and the dilution cap. The amount converting equals the elected portion of the Unreturned Purchase Amount times the Multiple. The conversion price is Ledger Base per fully diluted share or unit, from the most recent reported Ledger Base, computed under the Reporting Standard. The Company issues the converted amount divided by that price in shares of common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units carrying the same economic rights (which may be denominated in a standardized ledger unit of account where the entity’s organizing documents so provide), with governance as provided by that entity’s organizing documents). Conversion never produces preferred stock, liquidation preference, or special voting or blocking rights beyond those of common-equivalent ownership. Conversion reduces the Unreturned Purchase Amount proportionally, and the claim on the converted amount is extinguished.

Where the Fixed Pool Schedule is elected, the conversion price is subject to the dilution cap (the Reporting Standard’s max_conversion_ownership, 25%), enforced as a price floor: the conversion price is the greater of Ledger Base and three times the position’s full remaining claim (the Unreturned Purchase Amount times the Multiple), divided by fully diluted shares. At the floor, converting the full remaining claim issues shares carrying 25% of the Company’s post-conversion fully diluted equity, and no smaller conversion carries more. When Ledger Base stands at or above three times the full remaining claim, the floor is inert and the price is Ledger Base per fully diluted share; when Ledger Base is lower, including zero or negative, the floor sets the price. Conversion is available every quarter at a price the cap permits, and the redemption path under Section 5(a) is unaffected by the cap.

Where the Direct Ledger Schedule is elected, the conversion price is Ledger Base per fully diluted share or unit, with no floor: conversion mints units against the base that backs them, no fixed pool exists for a cap to protect, and max_conversion_ownership does not apply. If Ledger Base falls, the conversion price falls with it; the claim itself moves only on the Section 1 Schedule.

(c) **Buyout.** In any quarter for which the Company has issued a conforming Quarterly Update, the Company may issue, with that Update, a “**Buyout Notice**” for all or part of any outstanding position that has reached its Election Date, at the Unreturned Purchase Amount times the Multiple. Each noticed Holder may, at least 10 days before the quarter closes, elect to convert all or part of the noticed amount under Section 5(b) instead of accepting cash; a Holder who does not so elect accepts cash for the noticed amount. Partial Buyout Notices apply pro rata across all such positions. Budget released by such conversion elections is reallocated pro rata to remaining noticed positions in the same quarter, and any residue carries to the next quarter. Each Buyout Notice, and each Holder election in response, is disclosed in the Quarterly Update, and a Buyout Notice to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged. Settled amounts are permanently extinguished.

(d) **Qualified Financing and priced-round resolution.**

(i) *Round-price conversion, available on any priced round.* Upon the closing of any bona fide priced equity round of the Company, the Holder may elect, at least 10 days before the next quarter closes, to convert the entire position, without regard to the per-quarter fraction in Section 5(b), into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the round’s effective price per share or unit, less a 20% discount. The dilution cap in Section 5(b) is defined against the Ledger Base conversion price and does not apply to this round-price conversion.

(ii) *Cash election, available only on a Qualified Financing.* A “**Qualified Financing**” is a bona fide priced equity financing of the Company whose proceeds, aggregated with the proceeds of other bona fide priced equity financings of the Company closing in the trailing four quarters, are at least 1.0 times the aggregate claims then outstanding under this form (the sum across the class of each position’s Unreturned Purchase Amount times its Multiple), the aggregate claims measured excluding positions held by affiliates of the Company and positions issued within six months before the financing. Upon the closing of a Qualified Financing, the Holder may instead elect, at least 10 days before the next quarter closes, redemption of the position at the Unreturned Purchase Amount times the Multiple, funded from the proceeds. The cash election arises only when a financing clears this fundability bar.

(iii) *Change of Economic Control.* Ownership under this clause is measured by economic rights alone, without regard to voting rights, whatever form the Company’s equity interests take. A “**Change of Economic Control**” means any of the following: a person or group acquiring beneficial ownership of a majority of the Company’s equity interests; a merger, consolidation, or reorganization after which the Company’s pre-transaction owners hold less than a majority of the equity interests in the surviving entity; or a transfer, by sale, lease, exclusive license, or otherwise, of all or substantially all of the Company’s assets. A Change of Economic Control is treated as a Qualified Financing under this Section 5(d), with the per-unit consideration in the transaction standing as the round price where one is required. A change of governance alone, including of directors, officers, managers, or voting control, is not a trigger under this instrument unless it accompanies a Change of Economic Control. A change of the Company’s entity form, jurisdiction of organization, or tax classification, including by merger with or transfer of assets to an entity whose equity interests are held, immediately after the transaction, by the Company’s pre-transaction owners in the same proportions, is not a Change of Economic Control.

(iv) *Substance over form.* A transaction or series of transactions undertaken with the purpose or effect of recapitalizing the Company, or of effecting a Change of Economic Control, while avoiding the triggers in this Section 5(d) is treated as a Qualified Financing for purposes of the cash election in Section 5(d)(ii).

(v) Section 6(e) applies to Graduated Positions.

(e) **Conversion Offer (Company-initiated).** In any quarter for which the Company has issued a conforming Quarterly Update, the Company may issue, with that Update, a “**Conversion Offer**” to convert all or part of a single position into common stock (or, for an entity not organized as a stock corporation, the equivalent ownership units described in Section 5(b)) at the Ledger Base conversion price, on the conversion terms of Section 5(b) as modified for an offer-elected conversion. A Conversion Offer is valid only if it states the specific use to which the converting capital will be applied and the basis for it. No commission or other remuneration may be paid or given, directly or indirectly, for soliciting acceptance of a Conversion Offer, and no person’s fee may depend on whether or how much converts. A fixed fee for administrative services is permitted if the person receiving it makes no recommendation on the offer. A Conversion Offer states the attestation grade of the Quarterly Update it issues with, and the Company may, at its option, issue it with third-party attestation of Ledger Base. The noticed Holder may, at least 10 days before the quarter closes, elect to accept in whole or in part. A Holder who does not affirmatively accept by that date declines, and the position continues under this instrument exactly as if no Conversion Offer had been made, with the redemption path under Section 5(a) and every other right unaffected; a declined Conversion Offer prejudices the position in no way and may be extended again in a later quarter. A Conversion Offer is made per position rather than across the class, and is fair by its substantiation, its refusability, and its disclosure rather than by pro rata application. Each Conversion Offer, and each acceptance, is disclosed in the Quarterly Update, and a Conversion Offer to a position held by an officer, director, or holder of 10% or more of the Company’s equity is flagged.

Upon acceptance, the conversion is effective as of the date stated in a Conversion Declaration executed by the Company and the Holder substantially in the form of the applicable Exhibit (the “**Conversion Declaration**”): Exhibit 1-A where the Company is taxed as a corporation, and Exhibit 1-B where the Company is taxed as a partnership, whatever its form, in each case determined as of the Conversion Date and as stated in the Quarterly Update with which the Conversion Offer issues. The Conversion Declaration establishes the Holder’s equity and beneficial interest in the converted units as of that date. Where a Conversion Offer is made to align the Holder’s equity with the Company’s acquisition and placing in service of a specified asset, the date in the Conversion Declaration precedes that acquisition and placing in service. Tax characterization is stated in Section 8(j).

## 6. Graduated Positions

(a) **Creation.** A position under this instrument may be created by novation of a prior instrument (a “Graduated Position”) only if, as of the novation: (i) the Company has issued 4 consecutive conforming Quarterly Updates, each showing positive Expected Capacity and each carrying third-party attestation of Ledger Base; (ii) the graduation offer was extended to all holders of the same prior instrument class on identical terms and remained open for 2 consecutive quarters; and (iii) the graduation documents disclose what conversion economics the prior instrument surrenders and what Section 5(d) provides in their place.

(b) **Entry value and clock.** A Graduated Position’s “**Entry Value**” equals the unreturned claim value of the prior instrument under its own terms as of the novation. The position’s month for Schedule purposes is set as follows: for prior instruments that grew in value over time, the clock runs from the earliest funding under the prior instrument, weighted by funding dates if there was more than one, and no extension, amendment, or restatement of the prior instrument ever resets it; for prior instruments that did not grow in value over time, the clock runs from the novation. The position enters so that the Unreturned Purchase Amount times the Multiple at entry equals the Entry Value, and for all purposes of this instrument the Unreturned Purchase Amount of a Graduated Position is read to produce that result, except that the dissolution claim in Section 7(b)(i) is the Entry Value as reduced by later redemptions and conversions.

(c) **Clean entry.** All side letters, information rights, and ancillary rights attached to the prior instrument extinguish at novation. Any equity component of the prior instrument is untouched by the novation, persists per its own terms, and sits entirely outside the claim under this instrument.

(d) **Rights at entry.** A Graduated Position holds the rights of its entry month under Sections 5(a) and 5(c).

(e) **Lookback.** If a Qualified Financing or a Change of Economic Control (as defined in Section 5(d)(iii)) closes within 4 quarters after a Graduated Position’s novation, that position’s settlement under Section 5(d) is capped at its Entry Value as then reduced.

## 7. Covenants and Dissolution

(a) **Distribution Priority.** While any position under this instrument is outstanding, the Company shall not pay dividends, make distributions in respect of equity, or repurchase equity (other than repurchases from departing service providers at cost) unless, in the same quarter, standing redemption requests are settled under Section 5(a) at least pro rata with the proposed distribution or repurchase.

(b) **Dissolution.** (i) Upon a dissolution or winding up in which the Company’s assets are insufficient to satisfy its liabilities, the Holder’s claim equals the Unreturned Purchase Amount (for a Graduated Position, the Entry Value as then reduced), pari passu with all other positions under this form, senior to all equity of the Company, and junior to the Company’s indebtedness and statutory claims. (ii) Upon a dissolution or winding up elected while the Company is solvent, each outstanding position settles from net proceeds at the Unreturned Purchase Amount times the Multiple before any distribution in respect of equity.

(c) **Filings.** The Company shall make all filings required in connection with the issuance of this instrument, including a Form D where applicable.

## 8. Representations and Miscellaneous

(a) This instrument and any shares issued upon conversion have not been registered under the Securities Act of 1933 and may not be transferred except in compliance with applicable securities laws and with notice to the Company.

(b) The Holder represents that it is an accredited investor and is acquiring this instrument for its own account for investment.

(c) **Amendment.** This instrument may be amended only in a writing signed by the Company and the Holder; no amendment may create personal recourse contrary to Section 1(d) or be conditioned on any holder’s graduation, redemption, or conversion decision.

(d) **Pre-authorized consent.** By executing this instrument, the Holder consents in advance to the two operations under this instrument that proceed without a further signature: cash settlement of amounts noticed in a Buyout Notice under Section 5(c) where the Holder makes no timely conversion election, and the automatic application of Reporting Standard refinements within the pinned major version as provided in Section 8(i). Each operates only where the underlying notice or Quarterly Update was delivered under Section 8(g) and, for a Buyout Notice, states the noticed amount, the election deadline, and the effect of making no election. Silence never accepts equity under this instrument: a Conversion Offer under Section 5(e) lapses unless affirmatively accepted.

(e) **The name.** This form may be used and adapted under its open license (CC BY 4.0); modified terms may not be designated “SAFR,” and conforming use of the name requires the unmodified canonical terms on a conforming Feed pinned to a published Reporting Standard version; completing the form’s blanks, checkboxes, and printed elections is conforming use of the unmodified canonical terms, not modification.

(f) **Governing law.** This instrument is governed by the laws of the State of [____________], without regard to conflicts of law principles.

(g) **Notices.** Notices are delivered as the Reporting Standard provides: through the notice mechanism of a posted Manifest where one exists, and otherwise in writing to the notice addresses on the signature page, which remain the fallback of record in every case.

(h) Severability, entire agreement, and counterparts provisions apply; this instrument and its pinned Reporting Standard are the entire agreement of the parties with respect to its subject matter.

(i) **The pinned Standard.** This instrument incorporates the Reporting Standard by reference, major version 1, as refined from time to time within that major version, with the version in effect at issuance identified by the content hash on the first page. Refinements within major version 1 apply automatically. A new major version (for example, 1.x to 2.0), defined in the Reporting Standard as any change that would alter a previously issued position’s computed Ledger Base, Expected Capacity, or claim value (the Unreturned Purchase Amount times the Multiple) for any quarter by more than 3%, applies to this instrument only with the Holder’s and the Company’s consent. The pinned major version controls all calculations under this instrument.

(j) **Tax characterization.** From the Closing Date, according to the tax classification recorded on the first page and, if that classification changes, according to the new classification from the change:

(i) where the Company is taxed as a C corporation, this instrument is intended to be treated as common stock for U.S. federal and state income tax purposes, including under Sections 368, 1036 and 1202 of the Internal Revenue Code. Treatment under Section 1202 is subject to that section’s conditions, including that the Company be a qualified small business when this instrument is issued, and the limits in Section 1202(c)(3) on the Company’s purchases of its own stock, including any settlement of all or part of a position in cash under this instrument; and

(ii) where the Company is taxed as a partnership, this instrument is intended not to be a partnership interest until it converts, and a conversion is intended to be a contribution under Section 721 of the Internal Revenue Code.

Each party will report consistently with this intent. This instrument does not represent that any treatment will be respected.

## Signatures

**The Company:** [____________________]

By: ______________________  Name: ______________  Title: ______________

Notice address (mailing): ______________________________  Notice email: ______________________

**The Holder:** [____________________]

By: ______________________  Name: ______________  Title: ______________

Notice address (mailing): ______________________________  Notice email: ______________________

*The mailing address and email above are each party’s notice address under Section 8(g). Either party may update its own notice details by notice under that section.*

## Schedule A: Graduated Position Particulars (if applicable)

Prior instrument: [____________] Original funding date(s): [____________] Unreturned claim value at novation (Entry Value): $[________] Entry month: [____] Multiple at entry: [____] Equity component of prior instrument (untouched, persists per its own terms): [____________] Disclosure of conversion economics surrendered and replaced: [____________]

## Exhibit 1-A: Conversion Declaration (Corporation)

*Applies where the Company is taxed as a corporation as of the Conversion Date. Executed when a Holder accepts a Conversion Offer under Section 5(e). It fixes the date of the exchange and establishes the Holder’s equity and beneficial interest as of that date, so that the Holder’s equity is in place before the Company acquires and places in service any asset the Conversion Offer is made to align with.*

**CONVERSION DECLARATION (CORPORATION)**

This Conversion Declaration (this “Declaration”) is made as of [____________] by [____________________] (the “Company”) and [____________________] (the “Holder”), with reference to the Simple Agreement for Future Redemption between them dated [____________] (the “SAFR”) and the Conversion Offer the Company issued under Section 5(e) of the SAFR with the Quarterly Update for the quarter ended [____________] (the “Conversion Offer”). Capitalized terms used and not defined here have the meanings given in the SAFR.

**Recitals.** The Holder holds a position under the SAFR. The Company is taxed as a corporation. The Company issued the Conversion Offer to exchange all or part of that position for shares of common stock at the Ledger Base conversion price, stating the use to which the converting capital will be applied and the basis for it. The Holder accepted the Conversion Offer [in whole / in part, as to $[________] of the position]. The parties make this Declaration to fix the date of the exchange and to establish the Holder’s equity and beneficial interest as of that date.

The parties agree:

1. **Conversion Date.** The conversion is effective as of [____________] (the “Conversion Date”).

2. **Conversion.** As of the Conversion Date, the accepted portion of the position (the “**Exchanged Claim**”), valued at the Unreturned Purchase Amount times the Multiple, is surrendered in exchange for [______] shares of common stock (the “**Converted Units**”), being that value divided by the Ledger Base conversion price determined under the SAFR and the Reporting Standard, and the Exchanged Claim is extinguished.

3. **Equity and beneficial interest.** As of the Conversion Date, the Holder is the owner and the beneficial owner of the Converted Units, with all rights of common-equivalent ownership as provided in Section 5(b) of the SAFR and the Company’s organizing documents, and bears the benefits and burdens of that ownership from the Conversion Date.

4. **Order relative to a specified asset (include if the Conversion Offer is asset-aligned).** The Conversion Offer was made to align the Holder’s equity with the Company’s acquisition and placing in service of [____________] (the “Asset”). The Conversion Date precedes the Company’s acquisition and placing in service of the Asset.

5. **Characterization.** The parties intend the surrender of the Exchanged Claim for the Converted Units to be an exchange of stock for stock under Section 1036 of the Internal Revenue Code of 1986, as amended (the “Code”), or a recapitalization under Section 368(a)(1)(E) of the Code, and not a sale. The exchange is made for the Company’s existing obligation and without payment of any commission or remuneration for soliciting it. The parties will file all tax returns consistently with the intended treatment above and will take no position inconsistent with it except as required by a final determination. Any further treatment is addressed in the offering’s separate tax materials.

6. **Disclosure.** The conversion is disclosed in the Company’s Quarterly Update, and is flagged if the Holder is an officer, director, or holder of 10% or more of the Company’s equity.

7. **Representations.** The Holder’s representations in Section 8 of the SAFR apply to the Converted Units, and the Holder acquires the Converted Units for its own account for investment.

8. **Effect.** This Declaration supplements the SAFR, is governed by the law stated in the SAFR, and together with the SAFR is the parties’ agreement as to the conversion. Except as stated here, the SAFR is unchanged.

**The Company:** [____________________]

By: ______________________  Name: ______________  Title: ______________

**The Holder:** [____________________]

By: ______________________  Name: ______________  Title: ______________

## Exhibit 1-B: Conversion Declaration (Partnership-Taxed Entity)

*Applies where the Company is taxed as a partnership as of the Conversion Date, whatever its form, including a trust or series so taxed. Executed when a Holder accepts a Conversion Offer under Section 5(e). It fixes the date of the exchange and establishes the Holder’s equity and beneficial interest as of that date, so that the Holder’s equity is in place before the Company acquires and places in service any asset the Conversion Offer is made to align with.*

**CONVERSION DECLARATION (PARTNERSHIP-TAXED ENTITY)**

This Conversion Declaration (this “Declaration”) is made as of [____________] by [____________________] (the “Company”) and [____________________] (the “Holder”), with reference to the Simple Agreement for Future Redemption between them dated [____________] (the “SAFR”) and the Conversion Offer the Company issued under Section 5(e) of the SAFR with the Quarterly Update for the quarter ended [____________] (the “Conversion Offer”). Capitalized terms used and not defined here have the meanings given in the SAFR.

**Recitals.** The Holder holds a position under the SAFR. The Company is taxed as a partnership, whatever its form. The Company issued the Conversion Offer to exchange all or part of that position for the ownership units described in Section 5(b) of the SAFR at the Ledger Base conversion price, stating the use to which the converting capital will be applied and the basis for it. The Holder accepted the Conversion Offer [in whole / in part, as to $[________] of the position]. The parties make this Declaration to fix the date of the exchange and to establish the Holder’s equity and beneficial interest as of that date.

The parties agree:

1. **Conversion Date.** The conversion is effective as of [____________] (the “Conversion Date”).

2. **Conversion.** As of the Conversion Date, the accepted portion of the position (the “**Exchanged Claim**”), valued at the Unreturned Purchase Amount times the Multiple, is surrendered in exchange for [______] of the Company’s ownership units described in Section 5(b) of the SAFR (the “**Converted Units**”), being that value divided by the Ledger Base conversion price determined under the SAFR and the Reporting Standard, and the Exchanged Claim is extinguished.

3. **Equity and beneficial interest.** As of the Conversion Date, the Holder is the owner and the beneficial owner of the Converted Units, with all rights of common-equivalent ownership as provided in Section 5(b) of the SAFR and the Company’s organizing documents, and bears the benefits and burdens of that ownership from the Conversion Date.

4. **Order relative to a specified asset (include if the Conversion Offer is asset-aligned).** The Conversion Offer was made to align the Holder’s equity with the Company’s acquisition and placing in service of [____________] (the “Asset”). The Conversion Date precedes the Company’s acquisition and placing in service of the Asset.

5. **Characterization.** The parties intend that the Holder’s surrender of the Exchanged Claim for the Converted Units be treated for U.S. federal income tax purposes as a contribution to the Company in exchange for interests in the Company under Section 721(a) of the Internal Revenue Code of 1986, as amended (the “Code”), and not as a sale or exchange under Section 707 of the Code, including a disguised sale under Section 707(a)(2)(B). From the Conversion Date, the Holder is admitted as a member or partner with respect to the Converted Units, as the Company’s organizing documents provide, and the parties will treat the Holder as a partner for U.S. federal income tax purposes. The exchange is made for the Company’s existing obligation and without payment of any commission or remuneration for soliciting it. The parties will file all tax returns consistently with the intended treatment above and will take no position inconsistent with it except as required by a final determination. Any further treatment is addressed in the offering’s separate tax materials.

6. **Disclosure.** The conversion is disclosed in the Company’s Quarterly Update, and is flagged if the Holder is an officer, director, or holder of 10% or more of the Company’s equity.

7. **Representations.** The Holder’s representations in Section 8 of the SAFR apply to the Converted Units, and the Holder acquires the Converted Units for its own account for investment.

8. **Effect.** This Declaration supplements the SAFR, is governed by the law stated in the SAFR, and together with the SAFR is the parties’ agreement as to the conversion. Except as stated here, the SAFR is unchanged.

**The Company:** [____________________]

By: ______________________  Name: ______________  Title: ______________

**The Holder:** [____________________]

By: ______________________  Name: ______________  Title: ______________

## Form Notice

This is an open canonical form, version 1.0, provided without warranty and without legal advice; parties should consult their own counsel. The form is free to use under its open license (CC BY 4.0). The SAFR™ name is reserved for unmodified canonical terms maintained on a conforming Feed pinned to a published Reporting Standard version. The pinned Reporting Standard, identified by version and content hash above, controls all calculations.
