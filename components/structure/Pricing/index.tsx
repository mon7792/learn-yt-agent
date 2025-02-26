import { PricingCard } from "./card";

export function Pricing() {
    return (
        <section className="py-16 font-cabin">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12 text-primary">
              Save hours, learn smarter.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard
                title="Try"
                price="0"
                features={[
                  "3 YouTube links / day",
                  "1 recorded lecture /day"
                ]}
                buttonText="Get Started"
                variant="outline"
              />
              <PricingCard
                title="Pro"
                price="9.99"
                features={[
                  "1000 YouTube links / day",
                  "40 recorded lectures / month",
                  "Access to advanced voice mode beta"
                ]}
                buttonText="Choose Pro"
                variant="default"
              />
            </div>
          </div>
        </section>
    );
}