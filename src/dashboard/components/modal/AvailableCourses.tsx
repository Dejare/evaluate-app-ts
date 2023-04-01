import { RiTimeLine, RiFolderUserLine } from "react-icons/ri";
import ProgressBar from "../ProgressBar";
import { BsQuestionSquare } from "react-icons/bs";

function AvailableCourses() {
  return (
    <div className="md:w-[30vw] w-[90vw] md:m-0 md:my-6 m-auto h-[100%] bg-neutral-50 rounded-xl flex items-center p-8  my-6 font-dm shadow-md">
      <div className="w-full flex flex-row items-center justify-around ">
        <div className="flex items-center flex-col px-5">
          <ProgressBar />
          <p className="mt-4 font-semibold">0% </p>
        </div>
        <div>
          <div>
            <h1 className="text-xl font-[500]">MTS101</h1>
          </div>
          <div className=" flex flex-col items-center">
            <div className=" flex flex-row items-center justify-between text-neutral-600 flex-wrap">
              <div className="flex flex-row items-center justify-center mx-2 text-sm">
                <BsQuestionSquare className="mr-2" /> 30 Question
              </div>
              <div className="flex flex-row items-center justify-center md:m-2 ml-0 text-sm">
                <RiTimeLine className="mr-2" /> 20 Minutes
              </div>
            </div>
            <div className=" flex flex-row items-center justify-between text-neutral-600 flex-wrap">
              <div className="flex flex-row items-center justify-center mx-2 text-sm">
                <BsQuestionSquare className="mr-2" /> 30 Question
              </div>
              <div className="flex flex-row items-center justify-center md:m-2 ml-0 text-sm">
                <RiTimeLine className="mr-2" /> 20 Minutes
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-4">
            <button className="px-7 py-2 bg-transparent rounded-lg text-black border-purple-600 border">
              Save
            </button>
            <button className="px-7 py-2 bg-purple-600 rounded-lg text-white mx-4">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableCourses;
