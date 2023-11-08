import Container from "../Container";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import { data } from "@/utils/MOCK_DATA1";
const ProductList = () => {
  return (
    <Container className="py-[120px] px-[15px] ">
      <div className=" md:flex md:justify-between md:items-center mb-8 ">
        <div className="wrapper">
          <p className={`text-main font-roboto`}>
            Aliquam lorem ante, dapibus in, viverra
          </p>
          <h2 className={`md:text-[4.375rem] font-poppins`}>
            DESIGN FURNITURE
          </h2>
        </div>
        <Filters />
      </div>
      <div className="flex flex-column md:flex-row flex-wrap md:px-0">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
    </Container>
  );
};

export default ProductList;
