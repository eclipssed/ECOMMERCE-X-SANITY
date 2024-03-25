import { urlFor } from "@/lib/createClient";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const HeroBanner = ({ banner }: any) => {
  return (
    <div className="hero-banner-container relative">
      <div className="">
        <p className="beats-solo">{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.largeText1}</h1>
        <Image
          src={urlFor(banner.image).url()}
          alt="watch"
          fill
          className="object-contain"
        />
        <div>
          <Link href={`/product/${banner.product}`}>
            <button className="button" type="button">
              {banner.buttonText}
            </button>
          </Link>
          <div className="desc">
            <h5>Description</h5>
            <p>{banner.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
