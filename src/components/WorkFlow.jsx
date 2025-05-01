import codeImg from "../assets/code.jpg";
import { CheckCircle2 } from "lucide-react";
import { checklistItems } from "../constants";

const WorkFlow = () => {
  return (
    <div className="mt-10 px-4 lg:px-20">
      <h2 className="text-3xl lg:text-7xl text-center mt-6">
        Accelerate your{" "}
        <span className="bg-gradient-to-l from-amber-500 to-amber-800 text-transparent bg-clip-text">
          coding workflow.
        </span>
      </h2>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div className="w-full lg:w-1/2">
          <img
            src={codeImg}
            alt="code"
            className="rounded-lg shadow-lg border border-neutral-700"
          />
        </div>

        <div className="w-full lg:w-1/2">
          {checklistItems.map((item, index) => (
            <div key={index} className="flex mb-8">
              <div className="text-green-400 bg-neutral-900 h-10 w-10 p-2 flex justify-center items-center rounded-full">
                <CheckCircle2 />
              </div>
              <div className="ml-4">
                <h5 className="text-lg font-medium">{item.title}</h5>
                <p className="text-sm text-neutral-400">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkFlow;
