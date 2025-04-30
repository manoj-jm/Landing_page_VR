import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What peopel are saying
      </h2>

      <div className="flex flex-wrap justify-center">
        {testimonials.map((testimonial, indx) => (
          <div key={indx} className="sm:w-1/2 lg:w-1/3 w-full px-4 py-2">
            <div className="bg-neutral-800 rounded p-6 text-md border border-neutral-800 font-thin">
              <p className="">{testimonial.text}</p>
              <div className="flex">
                <div className="flex mt-4 items-center">
                  <img
                    className="w-12 h-12 mr-6 rounded-full"
                    src={testimonial.image}
                    alt="images"
                  />
                </div>
                <div className="mt-6">
                  <h6> {testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-600">
                    {testimonial.company}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
