import Layout from "@/components/layout";
import Greeting from "@/components/home/greeting";

export default function Home() {
  return (
    <Layout>
      <section className="flex min-h-screen flex-col items-center justify-center text-gray-600 body-font">
        <div className="container mx-auto flex px-48 md:flex-row flex-col items-center">
          <Greeting />
        </div>
      </section>
    </Layout>
  );
}
