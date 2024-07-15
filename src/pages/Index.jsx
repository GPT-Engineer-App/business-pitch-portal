import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Zap, Shield, Headphones } from "lucide-react";

const Index = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="w-full h-[400px] bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-white">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Business</h1>
          <p className="text-xl mb-6">Innovative Solutions for Your Success</p>
          <Button size="lg">
            Get Started
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto mt-12 px-4">
        <h2 className="text-3xl font-semibold mb-6 text-center">About Our Company</h2>
        <p className="text-lg text-gray-700 mb-8 text-center">
          We are a leading provider of innovative business solutions, dedicated to helping our clients achieve their goals and maximize their potential.
        </p>

        <h3 className="text-2xl font-semibold mb-6 text-center">Our Key Services</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Zap className="mr-2 h-6 w-6" />
                Fast Solutions
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Quick and efficient problem-solving for your business needs.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Shield className="mr-2 h-6 w-6" />
                Secure Systems
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Robust security measures to protect your valuable data.</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Headphones className="mr-2 h-6 w-6" />
                24/7 Support
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Round-the-clock assistance for all your inquiries.</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Index;