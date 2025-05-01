import { features } from "../constants";

const Features = () => {
  return (
    <div className="relative mt-20 border-b border-neutral-800 min-h-[600px]">
      <div className="text-center">
        <span className="bg-neutral-900 text-orange-500 rounded-full font-sm font-medium px-2 py-1 uppercase">
          feature
        </span>
        <h2 className="text-3xl sm:text-5xl lg:text-6xl mt-10 lg:mt-20 tracking-wide">
          Easily build{" "}
          <span className="bg-gradient-to-l from-amber-500 to-amber-800 text-transparent bg-clip-text">
            your code
          </span>
        </h2>
      </div>

      <div className="lg:flex flex-col mt-12 items-center gap-4">
        <div className="flex flex-wrap mt-10 lg:mt-16 lg:mx-20">
          {features.map((feature, ind) => (
            <div key={ind} className="w-full sm:1/2 lg:w-1/3">
              <div className="flex ">
                <div className="flex mx-6 h-10 w-10 p-2 bg-neutral-900 text-orange-500 justify-center items-center rounded-full">
                  {feature.icon()}
                </div>
                <div className=" ">
                  <h1 className="mt-1 mb-6 text-xl">{feature.text}</h1>
                  <p className="text-[#5a585aee] text-md mb-20 p-2">{feature.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
