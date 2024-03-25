import "../../globals.css";
import FooterBanner from "@/components/FooterBanner";
import HeroBanner from "@/components/HeroBanner";
import Product from "@/components/Product";
import { getBanner, getProducts } from "@/lib/data";

// export const revalidate = 10;

const banner = await getBanner();

export default async function Home() {
  const products = await getProducts();
  // console.log(products);
  return (
    <main className="wrapper mt-8">
      {/* <div className=""> */}
      <HeroBanner banner={banner?.length && banner[0]} />
      <div className="products-heading">
        <h2>best selling headphones</h2>
        <p>speakers of many variants</p>
      </div>
      <div className="products-container">
        {products?.map((product: any) => (
          <Product key={product._id} product={product} />
        ))}
      </div>
      <FooterBanner footerBanner={banner && banner[0]} />
      {/* </div> */}
    </main>
  );
}
