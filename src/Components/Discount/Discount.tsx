import "./Discount.css";
import Image from "next/image";
// interface Rating {
//   value: number;
//   votedCount: number;
// }
// interface Product {
//   id: string;
//   name: string;
//   brand: string;
//   category: string;
//   price: number;
//   wasPrice: number;
//   isSale: boolean;
//   isFeatured: boolean;
//   discountPercentage: number;
//   description: string;
//   rating: Rating;
//   createdAt: string;
//   specialOffer: string | null;
//   colors: string[];
//   soldTimes: number;
//   code: string;
//   thumbnail: string;
//   imageSet: string;
// }
export default async function DiscountItem() {
  try {
    //const response = await fetch("http://localhost:8080/products");
    //const products: Product[] = await response.json();
    return (
      <div className="discount">
        <h2 className="discount-title">Discount Item</h2>
        <ul className="discount-list">
          <li className="discount-list-item active">Headphones</li>
          <li className="discount-list-item">Laptop</li>
          <li className="discount-list-item">Other</li>
        </ul>

        <div className="discount-content">
          <div className="discount-left">
            <h3 className="discount-left-title">
              20% Discount Of All Products
            </h3>
            <p className="discount-left-subtitle">Headphones Compact</p>
            <p className="discount-left-description">
              soundcore by Anker Space One Active Noise Cancelling Bluetooth
              Headphones with Travel.
            </p>
            <div className="discount-left-groups">
              <ul className="discount-left-list">
                <li>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.25L8.25 18.5L21 5.75"
                      stroke="#101750"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Active Noise Cancellation
                </li>
                <li>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.25L8.25 18.5L21 5.75"
                      stroke="#101750"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Bluetooth Connectivity
                </li>
              </ul>
              <ul className="discount-left-list">
                <li>
                  {" "}
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.25L8.25 18.5L21 5.75"
                      stroke="#101750"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Comfortable Design
                </li>
                <li>
                  <svg
                    width="24"
                    height="25"
                    viewBox="0 0 24 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M3 13.25L8.25 18.5L21 5.75"
                      stroke="#101750"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                  Travel-Friendly
                </li>
              </ul>
              
            </div>
            <button className="discount-button">Shop Now</button>
          </div>
          <div className="discount-right">
          <div className="image-content">
              <Image src="/assets/BannerImages/Headphone.png" alt="Headphones" className="headphones" width={448} height={498} />
              
              <div className="discount-right-ellipse61"></div>
              <div className="discount-right-ellipse62"></div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
}
