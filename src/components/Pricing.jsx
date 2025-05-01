import { CheckCircle2 } from "lucide-react";
import { pricingOptions } from "../constants";

const Pricing = () => {
  return (
    <div className="mt-20 px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-8 tracking-wider">
        Pricing
      </h2>
      <div className="flex flex-wrap justify-around gap-6">
        {pricingOptions.map((price, index) => (
          <div
            key={index}
            className="w-[90%] sm:w-1/2 lg:w-[28%] transform transition-transform duration-300 hover:scale-105"
          >
            <div className="p-6 border border-neutral-700 rounded-xl bg-neutral-800">
              <p className="text-4xl font-semibold mb-4">
                {price.title}
                {price.title === "Pro" && (
                  <sub className="bg-gradient-to-r from-red-800 to-red-950 text-transparent bg-clip-text">
                    (Most Popular)
                  </sub>
                )}
              </p>
              <p className="mb-6">
                <span className="text-5xl font-bold">{price.price}</span>
                <span className="text-neutral-400 tracking-tight">/Month</span>
              </p>
              <ul className="space-y-4">
                {price.features.map((feature, ind) => (
                  <li key={ind} className="flex items-center gap-3">
                    <CheckCircle2 className="text-green-400" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className="inline-flex justify-center items-center w-full h-12 mt-8 text-lg border border-neutral-600 rounded-full hover:bg-gradient-to-r from-amber-600 to-amber-950"
              >
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
