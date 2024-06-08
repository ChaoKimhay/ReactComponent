import { ProductComponent } from "./ProductCardComponent";
import { CTACardComponent } from "./CTACardComponent";

const MainComponent = () => {
  return (
    <main className="flex flex-col gap-10">
      <section className="flex justify-center gap-5 flex-wrap">
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
        <ProductComponent />
      </section>
      <section className="flex justify-center gap-5 flex-wrap ">
        <CTACardComponent />
        <CTACardComponent />
        <CTACardComponent />
        <CTACardComponent />
      </section>
    </main>
  );
};

export default MainComponent;
