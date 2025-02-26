import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Send } from "lucide-react";
export function Hero() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 font-cabin">
      <div className="text-center">
        <h1 className="text-6xl font-bold tracking-tight text-gray-900 mb-8 dark:text-white headline">
          Binge <span className="text-orange-500">Smarter</span>
          <br />
          Not Harder
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto dark:text-white subhead">
          Paste YouTube Link{" "}
          <Image
            src="youtube.svg"
            alt="YouTube Logo"
            width={32}
            height={32}
            className="inline-block mx-1"
          />
          and start systemically understanding the content faster.
        </p>
        <Button size="lg">
          Try for free <Send className="w-4 h-4 ml-2" />
        </Button>
      </div>
    </section>
  );
}
