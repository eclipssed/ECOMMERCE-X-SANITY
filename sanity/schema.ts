import { type SchemaTypeDefinition } from "sanity";
import product from "./schemaTypes/product";
import banner from "./schemaTypes/banner";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [banner, product],
};
