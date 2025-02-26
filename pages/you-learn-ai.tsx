import { Button } from "@/components/ui/button";
import Head from "next/head";

export default function YouLearnAI() {
  return (
    <>
      <Head>
        <title>YouLearn.AI - An AI tutor made for you</title>
        <meta name="description" content="Learn from an AI tutor that understands your pdfs, videos, and recorded lectures" />
      </Head>

      <div className="min-h-screen">
        {/* Hero Section */}
        <section className="py-20 px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">An AI tutor made for you</h1>
          <p className="text-xl mb-8 text-gray-600">
            Learn from an AI tutor that understands your pdfs, videos, and recorded lectures
          </p>
          <div className="flex gap-4 justify-center">
            <Button size="lg">See features</Button>
            <Button size="lg" variant="outline">Get Started</Button>
          </div>
          <p className="mt-8 text-gray-600">Loved by over 1 million learners</p>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Understand and learn at ease
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                title="Fragments OS"
                description="Chat, Summary, Chapters, and more. Ask any question, grasp the key points, and receive specific notes."
              />
              <FeatureCard
                title="Upload any content"
                description="From PDFs and YouTube videos to slides and even recorded lectures, learn everything your way."
              />
              <FeatureCard
                title="Test your knowledge"
                description="Create and customize flashcards: edit, delete, star, view sources, and more."
              />
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">
              Save hours, learn smarter.
            </h2>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <PricingCard
                title="Free"
                price="0"
                features={[
                  "2 AI chats / day",
                  "3 files or YouTube links / day",
                  "Upload PDFs, each up to 120 pages / 20 MB in size",
                  "1 recorded lecture /day"
                ]}
                buttonText="Get Started"
                variant="outline"
              />
              <PricingCard
                title="Pro"
                price="9.99"
                features={[
                  "Unlimited AI chats",
                  "Unlimited PDFs or YouTube Links",
                  "Upload PDFs, each up to 2000 pages / 50 MB in size",
                  "40 recorded lectures / month",
                  "Access to advanced voice mode beta"
                ]}
                buttonText="Choose Pro"
                variant="default"
              />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

interface FeatureCardProps {
  title: string;
  description: string;
}

function FeatureCard({ title, description }: FeatureCardProps) {
  return (
    <div className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

interface PricingCardProps {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  variant: "default" | "outline";
}

function PricingCard({ title, price, features, buttonText, variant }: PricingCardProps) {
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
