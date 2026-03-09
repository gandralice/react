import React from "react";
import {
  Title1,
  Title2,
  Text2,
  Container,
  BuyBtn,
  Value,
  ContactBtn,
  Link1,
} from "./styledcomp/styles";

const App = () => {
  const [active, setActive] = React.useState(false);

  function handleClick() {
    setActive(!active);
  }

  return (
    <>
      <Link1>Previous</Link1>
      <Container>
        <Title1>Title</Title1>
        <Text2>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus
          possimus ratione culpa. Voluptatum voluptatem beatae temporibus
          assumenda, provident repellendus quas expedita, sit nihil adipisci
          ipsa perferendis dolore numquam? Nihil, exercitationem.
        </Text2>
        <Value bColor={"low"}>R$ 100,00</Value>
        <BuyBtn>Buy</BuyBtn>
      </Container>
      <Title2> Title2</Title2>
      <Text2>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus possimus
        ratione culpa. Voluptatum voluptatem beatae temporibus assumenda,
        provident repellendus quas expedita, sit nihil adipisci ipsa perferendis
        dolore numquam? Nihil, exercitationem.
      </Text2>
      <Value>R$ 140,00</Value>
      <BuyBtn>Buy</BuyBtn>
      <Container>
        <ContactBtn onClick={handleClick} state={active}>
          Contact us
        </ContactBtn>
      </Container>
    </>
  );
};

export default App;
