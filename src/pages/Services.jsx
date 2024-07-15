import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Zap, Shield, Headphones, BarChart, Cloud, Code } from "lucide-react";

const services = [
  { icon: <Zap className="h-8 w-8" />, title: "Fast Solutions", description: "Quick and efficient problem-solving for your business needs." },
  { icon: <Shield className="h-8 w-8" />, title: "Secure Systems", description: "Robust security measures to protect your valuable data." },
  { icon: <Headphones className="h-8 w-8" />, title: "24/7 Support", description: "Round-the-clock assistance for all your inquiries." },
  { icon: <BarChart className="h-8 w-8" />, title: "Data Analytics", description: "In-depth analysis of your business data to drive informed decisions." },
  { icon: <Cloud className="h-8 w-8" />, title: "Cloud Solutions", description: "Scalable and flexible cloud-based services for your growing business." },
  { icon: <Code className="h-8 w-8" />, title: "Custom Development", description: "Tailored software solutions to meet your specific business requirements." },
];

const Services = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle className="flex items-center">
                {service.icon}
                <span className="ml-2">{service.title}</span>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>{service.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Services;