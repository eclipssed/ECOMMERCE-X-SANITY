"use client";

import React, { useEffect, useState } from "react";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiFillStar,
  AiOutlineStar,
} from "react-icons/ai";

// import { client, urlFor } from "../../lib/client";
// import { Product } from "../../components";
// import { useStateContext } from "../../context/StateContext";
import { urlFor } from "@/lib/createClient";
import Product from "@/components/Product";
import { useStateContext } from "@/context/StateContext";
import { getProduct, getProducts } from "@/lib/data";
import Image from "next/image";

const ProductDetails = ({ params }) => {
  const { slug } = params;
  const [product, setProduct] = useState({});
  const [products, setProducts] = useState([]);

  // const { image, name, details, price } = product;
  const [index, setIndex] = useState(0);
  const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

  useEffect(() => {
    getProduct(slug).then((res) => {
      setProduct(res);
    });
    getProducts().then((res) => setProducts(res));
  }, []);

  const handleBuyNow = () => {
    onAdd(product, qty);
    setShowCart(true);
  };

  // console.log(product, products);

  return (
    <div className="">
      <div className="product-detail-container ">
        <div>
          <div className="image-container">
            {product?.image && (
              <img
                src={urlFor(product?.image && product?.image[index]).url()}
                className="product-detail-image"
              />
            )}
          </div>
          <div className="small-images-container ">
            {product?.image?.map((item, i) => (
              <img
                key={i}
                src={urlFor(item).url()}
                className={
                  i === index ? " small-image selected-image" : " small-image"
                }
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
        </div>

        <div className="product-detail-desc">
          <h1>{product?.name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details: </h4>
          <p>{product?.details}</p>
          <p className="price">${product?.price}</p>
          <div className="quantity">
            <h3>Quantity:</h3>
            <p className="flex justify-between gap-2 items-center border border-slate-500">
              <span className=" border-slate-500 border-r p-4" onClick={decQty}>
                <AiOutlineMinus />
              </span>
              <span className="p-3">{qty}</span>
              <span className="border-slate-500 border-l p-4" onClick={incQty}>
                <AiOutlinePlus />
              </span>
            </p>
          </div>
          <div className="buttons">
            <button
              type="button"
              className="add-to-cart"
              onClick={() => onAdd(product, qty)}
            >
              Add to Cart
            </button>
            <button type="button" className="buy-now" onClick={handleBuyNow}>
              Buy Now
            </button>
          </div>
        </div>
      </div>

      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
