import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const About = () => {
  return (
    <div className="max-w-4xl mx-auto mt-12 px-4">
      <h1 className="text-4xl font-bold mb-8 text-center">About Us</h1>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our History</h2>
        <p className="text-lg text-gray-700">
          Founded in 2010, our company has grown from a small startup to a leading provider of business solutions. We've helped hundreds of clients achieve their goals and expand their operations.
        </p>
      </div>
      
      <div className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Our Mission</h2>
        <p className="text-lg text-gray-700">
          Our mission is to empower businesses with innovative solutions that drive growth, efficiency, and success. We are committed to delivering excellence in every project we undertake.
        </p>
      </div>
      
      <h2 className="text-2xl font-semibold mb-6">Our Team</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { name: "John Doe", role: "CEO", image: "https://source.unsplash.com/random/200x200?face=1" },
          { name: "Jane Smith", role: "CTO", image: "https://source.unsplash.com/random/200x200?face=2" },
          { name: "Mike Johnson", role: "Lead Developer", image: "https://source.unsplash.com/random/200x200?face=3" },
        ].map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <img src={member.image} alt={member.name} className="w-full h-48 object-cover rounded-t-lg" />
            </CardHeader>
            <CardContent>
              <CardTitle className="mb-2">{member.name}</CardTitle>
              <p className="text-gray-600">{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default About;