import { CardHoverEffectDemo } from "./cardHover";
import { TextGenerateEffect } from "../ui/textgenerate";

const Courses = () => {

  const words = `What Creddible Offers`;
  return (
    <section
      id="offerings"
      className="w-full py-20 bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-4 text-center flex flex-col items-center">
        <h1 className="text-white text-4xl md:text-6xl font-bold mb-12">
          <TextGenerateEffect words={words} />
        </h1>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Experience news the way it was meant to be — fast, verified, and beautifully delivered.  
          From quick summaries to deep dives, videos, and real-time alerts, DeltaNews brings every update 
          to you in the format you love.
        </p>

        <CardHoverEffectDemo />
      </div>
    </section>
  );
};

export default Courses;
