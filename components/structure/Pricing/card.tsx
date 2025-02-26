import { Button } from "@/components/ui/button";

interface PricingCardProps {
    title: string;
    price: string;
    features: string[];
    buttonText: string;
    variant: "default" | "outline";
  }
  
  export function PricingCard({ title, price, features, buttonText, variant }: PricingCardProps) {
    return (
      <div className="p-8 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
        <h3 className="text-2xl font-bold mb-2">{title}</h3>
        <div className="mb-6">
          <span className="text-4xl font-bold">${price}</span>
          <span className="text-gray-600">/month</span>
        </div>
        <ul className="space-y-4 mb-8">
          {features.map((feature, index) => (
            <li key={index} className="flex items-center">
              <svg
                className="w-5 h-5 mr-2 text-green-500"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M5 13l4 4L19 7"
                />
              </svg>
              {feature}
            </li>
          ))}
        </ul>
        <Button className="w-full" variant={variant}>
          {buttonText}
        </Button>
      </div>
    );
  }
  