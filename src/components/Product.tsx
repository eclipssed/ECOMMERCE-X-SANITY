import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Product = ({ product: { image, name, price, slug } }: any) => {
  return (
    <div>
      <Link href={`/product/${slug.current}`}>
        <div className="product-card">
          <Image
            alt="image"
            width={250}
            height={250}
            className="product-image"
            src={urlFor(image && image[0]).url()}
          />
          <p className="product-name">{name}</p>
          <p className="product-price">${price}</p>
        </div>
      </Link>
    </div>
  );
};

export default Product;
