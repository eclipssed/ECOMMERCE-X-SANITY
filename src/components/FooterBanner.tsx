import Link from "next/link";
import React from "react";
import { urlFor } from "@/lib/createClient";
import Image from "next/image";

const FooterBanner = ({
  footerBanner: {
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
    discount,
  },
}: any) => {
  return (
    <div className="footer-banner-container">
      <div className="banner-desc">
        <div className="left">
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </div>
        <div className="right">
          <p>{smallText}</p>
          <h3>{midText}</h3>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button type="button">{buttonText}</button>
          </Link>
        </div>

        <Image
          fill
          className="object-contain"
          src={urlFor(image).url()}
          alt="footerImage"
        />
      </div>
    </div>
  );
};

export default FooterBanner;
