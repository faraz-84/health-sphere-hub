import HeroSection from "@/components/HeroSection";
import HealthFeature from "@/components/HealthFeature";

const Index = () => {
  const features = [
    {
      icon: "💓",
      title: "Heart Health",
      description: "Monitor your cardiovascular wellness with advanced tracking and personalized recommendations"
    },
    {
      icon: "🧘‍♀️",
      title: "Mental Wellness",
      description: "Track mood, stress levels, and meditation progress for optimal mental health"
    },
    {
      icon: "🏃‍♂️",
      title: "Fitness Goals",
      description: "Set and achieve your fitness objectives with intelligent workout planning"
    },
    {
      icon: "🥗",
      title: "Nutrition Tracking",
      description: "Log meals, track nutrients, and get personalized dietary recommendations"
    },
    {
      icon: "😴",
      title: "Sleep Analysis",
      description: "Optimize your rest with detailed sleep pattern analysis and improvement tips"
    },
    {
      icon: "📊",
      title: "Health Insights",
      description: "Get comprehensive reports and trends to understand your health journey"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      
      {/* Features Section */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Your Complete Health Ecosystem
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Everything you need to monitor, improve, and maintain your wellness in one beautiful, intuitive platform
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <HealthFeature 
                key={index}
                icon={feature.icon}
                title={feature.title}
                description={feature.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground">
            Ready to Transform Your Health?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Join thousands of users who have already started their wellness journey with Health Sphere
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/90 transition-colors shadow-lg">
              Get Started Free
            </button>
            <button className="border border-primary/30 text-primary px-8 py-4 rounded-lg text-lg font-medium hover:bg-primary/5 transition-colors">
              View Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
