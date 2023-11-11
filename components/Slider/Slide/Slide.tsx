import Container from "@/components/Container";
import Button from "@/components/ProductsList/components/Button";

const SlideItem = () => {
  return (
    <div className="slider  items-center justify-center min-h-[600px] md:min-h-[825px]">
      <Container className="slider-container px-[15px!important] md:px-[30px!important]">
        <div className="slider-content">
          <h4 className="font-bold md:text-2xl mb-[10px] ">
            30 % OFF ALL ORDER Living Room
          </h4>
          <h3 className="font-bold text-[40px] md:text-[60px] xl:text-[84px] mb-[10px]">
            Sofa Collection
          </h3>
          <p className="text-[15px] md:text-[18px] mb-[30px] max-w-[80%] mx-auto pc:max-w-none">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation
          </p>
          <Button className="px-[35px] md:px-[35px] py-[10px] w-[auto!important] h-[45px!important] md:h-[60px!important] text-[15px] text-white bg-[#bd896b!important] font-medium uppercase mx-auto">
            shop now
          </Button>
        </div>
      </Container>
    </div>
  );
};

export default SlideItem;
