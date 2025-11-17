'use client'

import { useState, useEffect } from 'react'

export function EstimationCalculator() {
  const [adults, setAdults] = useState(10)
  const [kids, setKids] = useState(2)
  const [children, setChildren] = useState(0)
  const [filetMignon, setFiletMignon] = useState(0)
  const [lobster, setLobster] = useState(0)
  const [extraProtein, setExtraProtein] = useState(0)
  const [edamame, setEdamame] = useState(0)
  const [gyoza, setGyoza] = useState(0)
  const [travelFee, setTravelFee] = useState(50)

  const ADULT_PRICE = 55
  const KID_PRICE = 30
  const FILET_UPCHARGE = 5
  const LOBSTER_UPCHARGE = 10
  const EXTRA_PROTEIN_PRICE = 15
  const EDAMAME_PRICE = 6
  const GYOZA_PRICE = 10

  const adultsTotal = adults * ADULT_PRICE
  const kidsTotal = kids * KID_PRICE
  const filetTotal = filetMignon * FILET_UPCHARGE
  const lobsterTotal = lobster * LOBSTER_UPCHARGE
  const premiumTotal = filetTotal + lobsterTotal
  const extraProteinTotal = extraProtein * EXTRA_PROTEIN_PRICE
  const edamameTotal = edamame * EDAMAME_PRICE
  const gyozaTotal = gyoza * GYOZA_PRICE
  const extrasTotal = extraProteinTotal + edamameTotal + gyozaTotal

  const foodTotal = adultsTotal + kidsTotal + premiumTotal + extrasTotal
  const totalCash = foodTotal + travelFee

  const tip20 = totalCash * 0.2
  const tip25 = totalCash * 0.25
  const tip30 = totalCash * 0.3

  const grandTotal20 = totalCash + tip20
  const grandTotal25 = totalCash + tip25
  const grandTotal30 = totalCash + tip30

  return (
    <div className="bg-white border border-gray-200 p-8">
      <h2 className="font-bold text-2xl text-black mb-2">
        Hibachi at Home — Instant Estimate
      </h2>
      <p className="text-gray-600 mb-8">
        Transparent pricing for adults, kids, premium upgrades, extras, travel,
        and tips.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        {/* Left Column - Inputs */}
        <div className="space-y-6">
          {/* Guest Counts */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Guest Counts</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Adults ($55 each)
                </label>
                <input
                  type="number"
                  min="0"
                  value={adults}
                  onChange={(e) => setAdults(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Kids 4–12 ($30 each)
                </label>
                <input
                  type="number"
                  min="0"
                  value={kids}
                  onChange={(e) => setKids(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Children 0–3 (free)
                </label>
                <input
                  type="number"
                  min="0"
                  value={children}
                  onChange={(e) => setChildren(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
            </div>
          </div>

          {/* Premium Upgrades */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">
              Premium Upgrades
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Each guest gets two proteins (Chicken, Steak, Shrimp, Salmon,
              Tofu, or Scallops). Only Filet & Lobster are premium.
            </p>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Filet Mignon ($5 each)
                </label>
                <input
                  type="number"
                  min="0"
                  value={filetMignon}
                  onChange={(e) => setFiletMignon(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Lobster ($10 each)
                </label>
                <input
                  type="number"
                  min="0"
                  value={lobster}
                  onChange={(e) => setLobster(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
            </div>
          </div>

          {/* Extras */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Extras</h3>
            <div className="space-y-4">
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Extra Protein ($15 each)
                </label>
                <input
                  type="number"
                  min="0"
                  value={extraProtein}
                  onChange={(e) => setExtraProtein(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Edamame ($6)
                </label>
                <input
                  type="number"
                  min="0"
                  value={edamame}
                  onChange={(e) => setEdamame(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
              <div>
                <label className="block text-sm text-gray-700 mb-2">
                  Gyoza ($10)
                </label>
                <input
                  type="number"
                  min="0"
                  value={gyoza}
                  onChange={(e) => setGyoza(Number(e.target.value))}
                  className="w-full border border-gray-300 px-4 py-2 text-black"
                />
              </div>
            </div>
          </div>

          {/* Travel */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">Travel</h3>
            <div>
              <label className="block text-sm text-gray-700 mb-2">
                Travel fee (distance-based)
              </label>
              <input
                type="number"
                min="0"
                value={travelFee}
                onChange={(e) => setTravelFee(Number(e.target.value))}
                className="w-full border border-gray-300 px-4 py-2 text-black"
              />
            </div>
            <p className="text-sm text-gray-600 mt-2">
              We'll show suggested 20%, 25%, and 30% tips below based on your
              subtotal and travel.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => {
                setAdults(10)
                setKids(2)
                setChildren(0)
                setFiletMignon(0)
                setLobster(0)
                setExtraProtein(0)
                setEdamame(0)
                setGyoza(0)
                setTravelFee(50)
              }}
              className="px-6 py-2 border border-gray-300 text-black hover:bg-gray-50"
            >
              Reset
            </button>
            <button className="px-6 py-2 bg-black text-white hover:bg-gray-800">
              Copy Quote
            </button>
          </div>
        </div>

        {/* Right Column - Summary */}
        <div className="space-y-6">
          <div>
            <h3 className="font-bold text-lg text-black mb-4">
              Estimate Summary
            </h3>
            <div className="space-y-2 text-black mb-4">
              <div className="flex justify-between">
                <span>
                  <strong>{adults}</strong> Adults @ ${ADULT_PRICE}
                </span>
                <span>${adultsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>{kids}</strong> Kids (4–12) @ ${KID_PRICE}
                </span>
                <span>${kidsTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>
                  <strong>{children}</strong> Children 0–3 (free)
                </span>
                <span>$0.00</span>
              </div>
            </div>

            {premiumTotal > 0 && (
              <div className="space-y-2 text-black mb-4">
                {filetMignon > 0 && (
                  <div className="flex justify-between">
                    <span>
                      <strong>{filetMignon}</strong> Filet Mignon @ $
                      {FILET_UPCHARGE}
                    </span>
                    <span>${filetTotal.toFixed(2)}</span>
                  </div>
                )}
                {lobster > 0 && (
                  <div className="flex justify-between">
                    <span>
                      <strong>{lobster}</strong> Lobster @ ${LOBSTER_UPCHARGE}
                    </span>
                    <span>${lobsterTotal.toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}

            {extrasTotal > 0 && (
              <div className="space-y-2 text-black mb-4">
                {extraProtein > 0 && (
                  <div className="flex justify-between">
                    <span>
                      <strong>{extraProtein}</strong> Extra Protein @ $
                      {EXTRA_PROTEIN_PRICE}
                    </span>
                    <span>${extraProteinTotal.toFixed(2)}</span>
                  </div>
                )}
                {edamame > 0 && (
                  <div className="flex justify-between">
                    <span>
                      <strong>{edamame}</strong> Edamame @ ${EDAMAME_PRICE}
                    </span>
                    <span>${edamameTotal.toFixed(2)}</span>
                  </div>
                )}
                {gyoza > 0 && (
                  <div className="flex justify-between">
                    <span>
                      <strong>{gyoza}</strong> Gyoza @ ${GYOZA_PRICE}
                    </span>
                    <span>${gyozaTotal.toFixed(2)}</span>
                  </div>
                )}
              </div>
            )}

            <div className="border-t border-gray-300 pt-4 space-y-2 text-black">
              <div className="flex justify-between font-bold">
                <span>Food total</span>
                <span>${foodTotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span>Travel</span>
                <span>${travelFee.toFixed(2)}</span>
              </div>
              <div className="flex justify-between font-bold text-lg">
                <span>Total cash</span>
                <span>${totalCash.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Tip Calculations */}
          <div className="bg-gray-900 text-white p-6 space-y-3">
            <div className="flex justify-between">
              <span>20% tip</span>
              <span>${tip20.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-b border-gray-700 pb-3">
              <span>Grand Total (20%)</span>
              <span>${grandTotal20.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>25% tip</span>
              <span>${tip25.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg border-b border-gray-700 pb-3">
              <span>Grand Total (25%)</span>
              <span>${grandTotal25.toFixed(2)}</span>
            </div>

            <div className="flex justify-between">
              <span>30% tip</span>
              <span>${tip30.toFixed(2)}</span>
            </div>
            <div className="flex justify-between font-bold text-lg">
              <span>Grand Total (30%)</span>
              <span>${grandTotal30.toFixed(2)}</span>
            </div>
          </div>

          {/* What's Included */}
          <div>
            <h3 className="font-bold text-lg text-black mb-4">
              What's included in every meal
            </h3>
            <div className="bg-gray-50 p-4 text-sm text-gray-700">
              <p className="mb-2">
                Estimates are for planning only. Final travel fees depend on
                distance. Minimum food total is $550 (before travel & tips).
              </p>
              <div className="font-mono text-xs whitespace-pre-wrap mt-4 bg-white p-4 border border-gray-200">
                {`${adults} Adults
${kids} Kids (4–12)
${children} Children 0–3 (free)
Premium upgrades:
${filetMignon > 0 ? `- Filet Mignon: ${filetMignon}` : '- None'}
${lobster > 0 ? `- Lobster: ${lobster}` : ''}
Appetizers/Extras:
${extraProtein > 0 ? `- Extra Protein: ${extraProtein}` : '- None'}
${edamame > 0 ? `- Edamame: ${edamame}` : ''}
${gyoza > 0 ? `- Gyoza: ${gyoza}` : ''}
Traveling fees: $${travelFee.toFixed(2)}
Calculation:
- Adults: ${adults} × $${ADULT_PRICE} = $${adultsTotal.toFixed(2)}
- Kids: ${kids} × $${KID_PRICE} = $${kidsTotal.toFixed(2)}
- Premium upgrades: $${premiumTotal.toFixed(2)}
- Appetizers/Extras: $${extrasTotal.toFixed(2)}
Food total: $${foodTotal.toFixed(2)}
Total cash: $${foodTotal.toFixed(2)} + $${travelFee.toFixed(2)} = $${totalCash.toFixed(2)}
Tips Suggestions:
- 20%: $${grandTotal20.toFixed(2)}
- 25%: $${grandTotal25.toFixed(2)}
- 30%: $${grandTotal30.toFixed(2)}`}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
