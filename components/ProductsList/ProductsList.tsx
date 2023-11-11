import Container from "../Container";
import Button from "./components/Button";
import Filters from "./components/Filters";
import ProductCard from "./components/ProductCard";
import { data } from "@/utils/MOCK_DATA1";
const ProductList = () => {
  return (
    <Container className="py-[80px] sm:py-[100px] xl:py-[120px]  ">
      <div className=" pc:flex pc:justify-between pc:items-center mb-8 ">
        <div className="wrapper ">
          <p
            className={`text-center pc:text-left text-main text-[15px] md:text-[18px] font-roboto font-normal  mb-[10px] `}
          >
            Aliquam lorem ante, dapibus in, viverra
          </p>
          <h2
            className={`text-center pc:text-left text-[28px] md:text-[38px] xl:text-[50px] 2xl:text-[4.375rem]  text-[#272727] font-poppins font-bold`}
          >
            DESIGN FURNITURE
          </h2>
        </div>
        <Filters />
      </div>
      <div className="flex flex-column md:flex-row flex-wrap md:px-0 mb-[60px]">
        {data.map((product) => (
          <ProductCard key={product.id} {...product} />
        ))}
      </div>
      <div className="flex justify-center">
        <Button className="px-[50px] py-[10px] w-[auto!important] h-[60px!important] text-[15px] text-white bg-[#bd896b!important] font-medium uppercase">
          shop now
        </Button>
      </div>
    </Container>
  );
};

export default ProductList;
