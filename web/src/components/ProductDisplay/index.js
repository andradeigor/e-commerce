import { useEffect, useState } from "react";
import axios from "axios";
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
  ProductButtonText,
} from "./style";
import { useParams } from "react-router-dom";

const ProductDisplay = () => {
  const [selected, SetSelected] = useState("");
  const [data, SetData] = useState({});
  const { id } = useParams();
  const HaddleClickSize = (ev) => {
    const target = ev.target.innerHTML;
    SetSelected(target);
  };
  useEffect(() => {
    axios
      .get(`http://localhost:5000/admin/products/${id}`)
      .then((res) => SetData(res.data));
  }, []);
  return (
    <ProductContainer>
      <Product>
        <ProductImageArea>
          <ProducImageContainer>
            <ProductImage src={data.imagePath} />
          </ProducImageContainer>
        </ProductImageArea>
        <ProductContainerDivider>
          <ProductDivider />
        </ProductContainerDivider>
        <ProductDescriptionArea>
          <ProductDescriptionTextContainer>
            <ProductDescriptionTitle>{data.title}</ProductDescriptionTitle>
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
                <ProductPriceItem>R$:{data.price}</ProductPriceItem>
              </ProductPriceContainer>
            </ProductPriceArea>
            <ProductButtonArea>
              <ProductButton>
                <ProductButtonText>Adicionar ao Carrinho</ProductButtonText>
              </ProductButton>
            </ProductButtonArea>
          </ProductSizeArea>
        </ProductDescriptionArea>
      </Product>
    </ProductContainer>
  );
};

export default ProductDisplay;
