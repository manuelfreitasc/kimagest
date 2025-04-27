import { InfiniteSlider } from "../components/motion-primitives/infinite-slider";
import { ImageCompany } from "./companies";
import { ProgressiveBlur } from "./motion-primitives/progressive-blur";

export const LogoCloud = () => {
  return (
    <section className="bg-background py-16">
      <div className="mx-auto max-w-5xl px-6">
        <h2 className="text-center text-lg font-medium">
          Empresas que confiam no Kimagest
        </h2>
        
        <div className="mx-auto mt-20 flex max-w-4xl flex-wrap items-center justify-center gap-x-12 gap-y-8 sm:gap-x-16 sm:gap-y-12">
          <ImageCompany />
        </div>
      </div>
    </section>
  );
};
