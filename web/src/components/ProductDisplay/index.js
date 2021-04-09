import {
  ProductContainer,
  Product,
  ProductImageArea,
  ProducImageContainer,
  ProductImage,
  ProductDescriptionArea,
  ProductDescriptionTextContainer,
  ProductDescriptionTitle,
} from "./style";

const ProductDisplay = () => {
  return (
    <ProductContainer>
      <Product>
        <ProductImageArea>
          <ProducImageContainer>
            <ProductImage src="https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png" />
          </ProducImageContainer>
        </ProductImageArea>
        <ProductDescriptionArea>
          <ProductDescriptionTextContainer>
            <ProductDescriptionTitle>Gray T-Shirt</ProductDescriptionTitle>
          </ProductDescriptionTextContainer>
        </ProductDescriptionArea>
      </Product>
    </ProductContainer>
  );
};

export default ProductDisplay;
