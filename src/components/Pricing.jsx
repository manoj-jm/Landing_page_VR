import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap ">
        {pricingOptions.map((price, index) => (
          <div key={index} className="w-full sm:w-1/2 lg:w-1/3 p-2">
            <div className="p-10 border border-neutral-500 w-100 rounded-xl">
              <p className="text-4xl mb-8">
                {price.title}
                {price.title == "Pro" && (
                  <sub className="bg-gradient-to-r from-red-800 to-red-950 text-transparent bg-clip-text">
                    (Most Popular)
                  </sub>
                )}
              </p>
              <p className="mb-8">
                <span className="text-5xl mt-6 mr-2">{price.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul>
                {price.features.map((feature, ind) => (
                  <li key={ind} className="mt-8 flex items-center gap-3">
                    <CheckCircle2 />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a href="#" className="inline-flex justify-center text-center items-center w-full h-12 p-2 mt-20 tracking-tight text-xl border border-neutral-600 rounded-full hover:bg-gradient-to-r from-amber-600 to-amber-950 ">
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
