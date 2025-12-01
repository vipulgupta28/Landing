import video from "../assets/Creddible.mp4"
import { TextGenerateEffect } from "../ui/textgenerate";

export default function Offerings() {

  const words = `Watch our demo video`;
  return (
    <section
      id="demo"
      className="w-full py-20 bg-black transition-colors"
    >
      <div className="max-w-6xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-sm">
          <TextGenerateEffect words={words} />
        </h2>

        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-12">
          Stay informed with lightning-fast updates, verified headlines, and rich storytelling. 
          Our platform brings you breaking news, deep insights, and personalized coverage —
          all in one trusted place.
        </p>

        {/* Video Section */}
        <div className="rounded-3xl shadow-xl border-4 border-gray-700 bg-zinc-900 p-4 md:p-8 overflow-hidden">
          <video 
            src={video} 
            controls
            className="w-full h-auto max-h-[40rem] rounded-2xl object-contain"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
    </section>
  );
}
