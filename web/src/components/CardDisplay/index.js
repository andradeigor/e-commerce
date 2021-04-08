import { CardDisplayContainer } from "./style";
import Card from "../Card/index";
import axios from "axios";
import { useEffect, useState } from "react";

const CardDisplay = () => {
  const [data, SetData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:5000/admin/products")
      .then((res) => SetData(res.data));
  }, []);
  return (
    <CardDisplayContainer>
      {data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </CardDisplayContainer>
  );
};

export default CardDisplay;
