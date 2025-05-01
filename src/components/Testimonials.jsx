import { testimonials } from "../constants";

const Testimonials = () => {
  return (
    <div className="mt-20 tracking-wide px-4">
      <h2 className="text-3xl sm:text-5xl lg:text-6xl text-center my-10 lg:my-20">
        What people are saying
      </h2>

      <div className="flex flex-wrap justify-center gap-6">
        {testimonials.map((testimonial, indx) => (
          <div key={indx} className="sm:w-1/2 lg:w-1/3 w-full px-4 py-2">
            <div className="bg-neutral-800 rounded p-6 text-md border border-neutral-700 font-thin">
              <p className="mb-4">{testimonial.text}</p>
              <div className="flex items-center">
                <img
                  className="w-12 h-12 mr-4 rounded-full"
                  src={testimonial.image}
                  alt="user"
                />
                <div>
                  <h6 className="font-medium">{testimonial.user}</h6>
                  <span className="text-sm font-normal italic text-neutral-400">
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
