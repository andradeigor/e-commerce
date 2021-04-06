import { CardDisplayContainer } from "./style";
import Card from "../Card/index";

const CardDisplay = () => {
  const data = [
    {
      id: 1,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 2,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 3,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 4,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 5,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 6,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 7,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 8,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 9,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 10,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 11,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 12,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 13,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 14,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 15,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
    {
      id: 16,
      title: "Gray T-Shirt",
      price: "80,00",
      subtitle: "Ou em até 12x sem juros",
      imagePath:
        "https://user-images.githubusercontent.com/21049910/113764970-0ed4a100-96f2-11eb-97ab-c4fab2bfb84d.png",
    },
  ];

  return (
    <CardDisplayContainer>
      {data.map((product) => (
        <Card product={product} key={product.id} />
      ))}
    </CardDisplayContainer>
  );
};

export default CardDisplay;
