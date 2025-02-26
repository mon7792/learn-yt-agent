import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
interface FeatureCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
  }

export function FeatureCard({ title, description, icon }: FeatureCardProps) {
    return (
      <Card className="p-6 rounded-lg border border-gray-200 hover:shadow-lg transition-shadow dark:bg-background">
        <CardHeader>
          <CardTitle className="text-primary">
            <div className="flex items-center gap-2">
              
                {icon}
              
              {title}
            </div>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-600 dark:text-gray-400">{description}</p>
        </CardContent>
      </Card>
        );
  }