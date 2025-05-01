import video1 from "../assets/video1.mp4";
import video2 from "../assets/video2.mp4"

const Hero = () => {
  return (
    <>
      <div className="lg:flex flex-col mt-13 items-center gap-4">
        <h1 className="text-7xl text-center">
          Virtual Build Tools{" "}
          <span className="bg-gradient-to-l from-amber-500 to-amber-800 text-transparent bg-clip-text">
            for <br />
            developers
          </span>
        </h1>
        <article className="text-center text-[#5a585aee]">
          Empower your creativity and bring your VR-app ideas to liffe with our
          intuitive development tools. <br />
          Get Started today and turn your imagination into immersive reality
        </article>
        <div className="mt-8 space-x-20">
          <a
            href="#"
            className="bg-gradient-to-r from-amber-600 to-amber-900 py-2 px-4 rounded "
          >
            Start for free
          </a>
          <a href="#" className=" py-2 px-4 rounded border border-white">
            Documentation
          </a>
        </div>
        <div className="flex mt-10 justify-center">
          <video
            autoPlay
            src={video1}
            muted
            loop
            className="rounded w-150  border border-orange-700 shadow-orange-300 mx-2 my-4"
          ></video>
          <video
            autoPlay
            src={video2}
            muted
            loop
            className="rounded w-150  border border-orange-700 shadow-orange-300 mx-2 my-4"
          ></video>
        </div>
      </div>
    </>
  );
};

export default Hero;
