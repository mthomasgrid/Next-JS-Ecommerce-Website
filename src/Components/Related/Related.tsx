import Image from "next/image";
import "./Related.css";
import Link from "next/link";
interface Rating {
  value: number;
  votedCount: number;
}
interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  price: number;
  wasPrice: number;
  isSale: boolean;
  isFeatured: boolean;
  discountPercentage: number;
  description: string;
  rating: Rating;
  createdAt: string;
  specialOffer: string | null;
  colors: string[];
  soldTimes: number;
  code: string;
  thumbnail: string;
  imageSet: string;
}
export default async function RelatedProducts() {
  try {
    const response = await fetch("http://localhost:8080/products");
    const products: Product[] = await response.json();
    return (
      <div className="products_container">
         <h2 className='related__products'>Related Products</h2>
        <div className="related-card_details">
       
        {products.slice(0, 4).map((product) => {
            
            return (
              <Link
                href={`/productdetails/${product.id}`}
                key={product.id}
                className="card"
              >
                <Image
                  src={product.thumbnail}
                  alt={`Product -- ${product.category}`}
                  width={150}
                  height={150}
                  className="products"
                />
                <h3 className="card_title">{product.category}</h3>
                <p className="card_code">{product.code}</p>
                <p className="card_price">${product.price}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}