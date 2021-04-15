import { useState } from "react";
import {
  ProductContainer,
  Product,
  ProductImageArea,
  ProducImageContainer,
  ProductImage,
  ProductContainerDivider,
  ProductDivider,
  ProductDescriptionArea,
  ProductDescriptionTextContainer,
  ProductDescriptionTitle,
  ProductSizeArea,
  ProductSizeContainer,
  ProductSizeItem,
  ProductPriceArea,
  ProductPriceContainer,
  ProductPriceItem,
  ProductButtonArea,
  ProductButton,
} from "./style";

const ProductDisplay = () => {
  const [selected, SetSelected] = useState("");
  const HaddleClickSize = (ev) => {
    const target = ev.target.innerHTML;
    SetSelected(target);
  };
  return (
    <ProductContainer>
      <Product>
        <ProductImageArea>
          <ProducImageContainer>
            <ProductImage src="https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png" />
          </ProducImageContainer>
        </ProductImageArea>
        <ProductContainerDivider>
          <ProductDivider />
        </ProductContainerDivider>
        <ProductDescriptionArea>
          <ProductDescriptionTextContainer>
            <ProductDescriptionTitle>Gray T-Shirt</ProductDescriptionTitle>
          </ProductDescriptionTextContainer>
          <ProductSizeArea>
            <ProductSizeContainer>
              <ProductSizeItem
                selected={selected === "PP" ? true : false}
                onClick={HaddleClickSize}
              >
                PP
              </ProductSizeItem>
              <ProductSizeItem
                selected={selected === "P" ? true : false}
                onClick={HaddleClickSize}
              >
                P
              </ProductSizeItem>
              <ProductSizeItem
                selected={selected === "M" ? true : false}
                onClick={HaddleClickSize}
              >
                M
              </ProductSizeItem>
              <ProductSizeItem
                selected={selected === "G" ? true : false}
                onClick={HaddleClickSize}
              >
                G
              </ProductSizeItem>
              <ProductSizeItem
                selected={selected === "GG" ? true : false}
                onClick={HaddleClickSize}
              >
                GG
              </ProductSizeItem>
            </ProductSizeContainer>
            <ProductPriceArea>
              <ProductPriceContainer>
                <ProductPriceItem>R$:80,00</ProductPriceItem>
              </ProductPriceContainer>
            </ProductPriceArea>
            <ProductButtonArea>
              <ProductButton>Comprar</ProductButton>
            </ProductButtonArea>
          </ProductSizeArea>
        </ProductDescriptionArea>
      </Product>
    </ProductContainer>
  );
};

export default ProductDisplay;
