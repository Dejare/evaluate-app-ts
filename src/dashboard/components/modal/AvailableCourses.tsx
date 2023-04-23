import { RiTimeLine, RiFolderUserLine } from "react-icons/ri";
import ProgressBar from "../ProgressBar";
import { BsQuestionSquare } from "react-icons/bs";
import { AiOutlineUsergroupDelete } from "react-icons/ai";
import { MdOutlineAssignment } from "react-icons/md";

function AvailableCourses() {
  return (
    <div className="md:w-full w-[80vw] md:m-0 md:my-6  h-[100%] bg-[#fff] rounded-xl flex items-center p-8  my-6 font-dm shadow-md">
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
              <div className="flex flex-row items-center justify-center text-sm">
                <BsQuestionSquare className="mr-2" /> 30 Question
              </div>
              <div className="flex flex-row items-center justify-center md:m-2 ml-0 text-sm">
                <RiTimeLine className="mr-2" /> 20 Minutes
              </div>
            </div>
            <div className=" flex flex-row items-center justify-between text-neutral-600 flex-wrap">
              <div className="flex flex-row items-center justify-center mx-2 text-sm">
                <MdOutlineAssignment className="mr-2" /> 5 Assignment
              </div>
              <div className="flex flex-row items-center justify-center md:m-2 ml-0 text-sm">
                <AiOutlineUsergroupDelete className="mr-2" /> 312 Students
              </div>
            </div>
          </div>
          <div className="flex flex-row items-center mt-4">
            <button className="px-7 py-2 bg-transparent rounded-lg text-black border-[#6ac977] border shadow-sm">
              Save
            </button>
            <button className="px-7 py-2 bg-[#6ac977] rounded-lg text-white mx-4 shadow-sm">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AvailableCourses;
