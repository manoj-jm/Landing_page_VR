import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4";

const Hero = () => {
  return (
    <>
      <div className="flex flex-col items-center gap-6 mt-12 px-4">
        <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center">
          Virtual Build Tools{" "}
          <span className="bg-gradient-to-l from-amber-500 to-amber-800 text-transparent bg-clip-text">
            for <br />
            developers
          </span>
        </h1>
        <article className="text-center text-[#5a585aee] text-sm sm:text-base">
          Empower your creativity and bring your VR-app ideas to life with our
          intuitive development tools. <br />
          Get started today and turn your imagination into immersive reality.
        </article>
        <div className="mt-6 space-x-4 flex flex-wrap justify-center">
          <a
            href="#"
            className="bg-gradient-to-r from-amber-600 to-amber-900 py-2 px-4 rounded text-sm sm:text-base"
          >
            Start for free
          </a>
          <a
            href="#"
            className="py-2 px-4 rounded border border-white text-sm sm:text-base"
          >
            Documentation
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <video
            autoPlay
            src={video1}
            muted
            loop
            className="rounded w-full sm:w-[300px] border border-orange-700 shadow-orange-300"
          ></video>
          <video
            autoPlay
            src={video2}
            muted
            loop
            className="rounded w-full sm:w-[300px] border border-orange-700 shadow-orange-300"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Hero;
