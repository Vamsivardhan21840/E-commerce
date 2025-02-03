import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-[80vh] flex items-center">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-4xl font-bold mb-6">Welcome to EcoShop</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Discover our collection of sustainable and eco-friendly products.
          </p>
          <Link to="/products">
            <Button size="lg">Shop Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Index;