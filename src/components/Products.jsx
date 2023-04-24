import styled from "styled-components";
import { popularProducts } from "../data";
import Product from "./Product";
import { storeData } from "../fakeData";

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = () => {
  return (
    <Container>
      {/* {popularProducts.map((item) => (
        <Product item={item} key={item.id} />
      ))} */}
      {storeData.map((item) => (
        <Product item={item} key={item.id} />
      ))}
    </Container>
  );
};

export default Products;
