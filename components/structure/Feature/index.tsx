import { FeatureCard } from "./card";
import { ClipboardPaste, Lightbulb, Brain } from "lucide-react"; 
export function Feature() {
  return (
    <section className="py-16 bg-gray-50 dark:bg-background font-cabin">
          <div className="max-w-7xl mx-auto px-4">
            <h2 className="text-4xl font-bold text-center mb-12 text-primary">
              Understand and Binge at ease
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <FeatureCard
                icon={<ClipboardPaste className="w-5 h-5 text-primary" />}
                title="Paste YouTube Link"
                description="Just paste and get started."
              />
              <FeatureCard
                icon={<Lightbulb className="w-5 h-5 text-primary" />}
                title="Instant Insights"
                description="With all of your sources in place, YouSeek gets to work and becomes a personalized AI expert in the information that matters most to you."
              />
              <FeatureCard
                icon={<Brain  className="w-5 h-5 text-primary" />}
                title="Test your knowledge"
                description="Create and customize flashcards: edit, delete, star, view sources, and more."
              />
            </div>
          </div>
        </section>
  );
}
