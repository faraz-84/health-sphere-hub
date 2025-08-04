import { Card, CardContent } from "@/components/ui/card";

interface HealthFeatureProps {
  icon: string;
  title: string;
  description: string;
}

const HealthFeature = ({ icon, title, description }: HealthFeatureProps) => {
  return (
    <Card className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/20 bg-card/50 backdrop-blur-sm">
      <CardContent className="p-6 text-center">
        <div className="text-4xl mb-4 group-hover:animate-pulse-slow">{icon}</div>
        <h3 className="text-xl font-semibold mb-2 text-card-foreground">{title}</h3>
        <p className="text-muted-foreground leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  );
};

export default HealthFeature;