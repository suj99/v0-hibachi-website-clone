export function HowItWorks() {
  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-balance text-foreground">
          How It Works
        </h2>

        <div className="max-w-3xl mx-auto mb-16">
          <p className="text-lg text-center leading-relaxed text-muted-foreground">
            Our private chef bring our own hibachi grill equipment to your backyard. 
            You set up tables, chairs, and provide plates and utensils for your party. 
            Each person gets a side salad, hibachi vegetables, fried rice and 2 proteins 
            of their choice.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
          {/* Pricing Column */}
          <div className="border border-border p-8 bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">$ Pricing</h3>
            <div className="space-y-3">
              <p className="text-lg text-foreground">$55.00 per person</p>
              <p className="text-lg text-foreground">$30.00 per child 12 and under</p>
              <p className="text-lg text-foreground">$550.00 Minimum Order for all parties</p>
              <p className="text-lg mt-6 text-muted-foreground">Gratuity is not included</p>
              <p className="text-lg text-muted-foreground">Traveling fees depends on locations</p>
            </div>
          </div>

          {/* Protein Choices Column */}
          <div className="border border-border p-8 bg-card">
            <h3 className="text-2xl font-bold mb-6 text-foreground">Protein Choices</h3>
            <div className="space-y-3">
              <p className="text-lg text-foreground">2 protein per person</p>
              <p className="text-lg text-foreground">
                Chicken, Steak, Shrimp, Scallops, Salmon, Tofu, 
                Filet Mignon +$5, Lobster Tail +$10
              </p>
              <p className="text-lg mt-4 text-foreground">
                Includes salad, fried rice, and vegetables
              </p>
              <p className="text-lg mt-4 text-muted-foreground">
                Add on: $15 per order proteins, Filet $20 Lobster $25, Noodles $5
              </p>
              <p className="text-lg mt-4 text-muted-foreground">
                Appetizer: $10 Gyoza(8), $6 Edamame
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
