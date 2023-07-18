import { getProductAttributes } from "@/lib/product";
import { translate } from "@/lib/translations";
import { ProductDetailsFragment } from "@/saleor/api";

export interface AttributeDetailsProps {
  product: ProductDetailsFragment;
}

export function ShortDescription({ product }: AttributeDetailsProps) {
  const attributes = getProductAttributes(product);
  if (attributes.length === 0) {
    return null;
  }

  // maybe we can use id and not name for finding this specific attribute
  const shortDescriptionAttribute = attributes.find(
    ({ attribute }) => attribute?.name === "Short description"
  );

  if (!shortDescriptionAttribute) return null;

  const shortDescription = translate(shortDescriptionAttribute?.values?.[0], "name");

  if (!shortDescription) return null;

  return (
    <div className="prose-2xl">
      <p>{shortDescription}</p>
    </div>
  );
}
