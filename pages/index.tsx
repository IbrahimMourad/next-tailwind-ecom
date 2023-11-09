import Link from "next/link";
import Layout from "@/components/Layout";

import ProductList from "@/components/ProductsList";
import SliderSlick from "@/components/Slider/Slider";

const IndexPage = () => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <SliderSlick />

      <ProductList />
    </Layout>
  );
};
export default IndexPage;
