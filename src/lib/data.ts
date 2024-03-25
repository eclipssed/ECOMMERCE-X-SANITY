"use server";

import { client } from "./createClient";

export const getProducts = async () => {
  const productQuery = "*[_type == 'product']";
  const products = client.fetch(productQuery);
  return products;
};
export const getProduct = async (slug: any) => {
  const productQuery = `*[_type == 'product' && slug.current == '${slug}'][0]`;
  const product = client.fetch(productQuery);
  return product;
};
export const getBanner = async () => {
  const bannerQuery = "*[_type == 'banner']";
  const banner = client.fetch(bannerQuery);
  return banner;
};
