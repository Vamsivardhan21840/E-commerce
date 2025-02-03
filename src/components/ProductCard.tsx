import { Product } from "@/types/product";
import { Button } from "./ui/button";
import { useCart } from "@/context/CartContext";
import { Link } from "react-router-dom";

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addItem } = useCart();

  return (
    <div className="group rounded-lg border p-4 space-y-4">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-square rounded-lg bg-muted overflow-hidden">
          <img
            src={product.image}
            alt={product.name}
            className="object-cover w-full h-full transition-transform group-hover:scale-105"
          />
        </div>
      </Link>
      <div>
        <h3 className="font-semibold text-lg">{product.name}</h3>
        <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
      </div>
      <Button
        onClick={() => addItem(product)}
        className="w-full"
      >
        Add to Cart
      </Button>
    </div>
  );
}