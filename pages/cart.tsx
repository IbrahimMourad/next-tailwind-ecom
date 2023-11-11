import Layout from "@/components/Layout";
import Table from "@/components/Table";
import CartTotalCard from "@/components/Table/components/CartTotalCard";

const AboutPage = () => {
  return (
    <Layout title="Cart |">
      <div className="container px-[15px] mx-auto max-w-[1200px]">
        <Table />
        <hr />
        <CartTotalCard />
      </div>
    </Layout>
  );
};

export default AboutPage;
