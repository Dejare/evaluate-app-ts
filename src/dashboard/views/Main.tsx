import { useClerk } from "@clerk/clerk-react";
import AvailableCourses from "../components/modal/AvailableCourses";
import Layout from "../layout/Layout";
import medal from "../../assets/images/medal.png";
import target from "../../assets/images/target.png";
import doodle from "../../assets/images/02.jpg";
import { RiArrowRightUpLine } from "react-icons/ri";
import { CiLocationOn } from "react-icons/ci";
import { FaUser } from "react-icons/fa";
import { MdOutlineDiscount } from "react-icons/md";
import { AiOutlineCrown } from "react-icons/ai";

function Main() {
  const { user, session } = useClerk();
  // console.log(session);
  console.log(user);

  return (
    <Layout className="">
      <div className="w-full flex md:flex-row flex-col items-start rounded-3xl">
        <div className="p-8 md:w-[40%]">
          <div>
            <h1 className=" font-bold text-3xl">
              {" "}
              Hello,{" "}
              <span className=" text-3xl font-thin capitalize">
                {user?.username} 👋
              </span>
            </h1>
            <p className="text-neutral-500 mt- w-3/4 text-sm mt-6">
              Nice to have you back, It's an exciting day!
              <br /> What would you like to work on today, or would you like to
              continue your lesson
            </p>
          </div>

          <div className="heading text-2xl font-bold mt-12">
            <h1>Available Courses.</h1>
          </div>
          <div>
            <AvailableCourses />
            <AvailableCourses />
            <AvailableCourses />
          </div>
        </div>
        <div className="mainview-side md:w-[60%] min-h-screen bg-[#f8f9fe] rounded-l-2xl md:m-4">
          <div className="w-full flex md:flex-row flex-col items-start p-6">
            <div className="md:w-2/5 w-[90vw] md:h-[50vh] h-full bg-white p-6 mr-6 rounded-xl">
              <div>
                <div>
                  <img src={doodle} className="h-28 w-full rounded-xl" />
                </div>
                <div className="relative">
                  <div className="absolute -top-4 ml-4 ">
                    <div className="w-[4rem] h-[4rem] bg-[#f9f8fe] flex items-center justify-center rounded-xl">
                      <FaUser />
                    </div>
                  </div>
                </div>
                <div className="mt-12 ml-4">
                  <h2 className="font-semibold mb-1">{user?.fullName}</h2>
                  <p className="flex flex-row items-center text-sm text-neutral-700">
                    <CiLocationOn /> Akure, Nigeria.
                  </p>
                </div>
                {/* courses and certifications */}
                <div className="mx-4 w-full flex flex-row mt-4">
                  <div className="md:w-[40%] h-full bg-[#f9f8fe] flex flex-col justify-between p-4 rounded-xl mr-4">
                    <div className="text-[#5840ba] mb-2">
                      {/* icon */}
                      <MdOutlineDiscount />
                    </div>
                    <div>
                      {/* details */}
                      <h1 className="text-[#5840ba] font-semibold text-3xl">
                        24
                      </h1>
                      <p className="text-sm text-[#a5a3a5]">Courses</p>
                    </div>
                  </div>
                  <div className="md:w-[40%] h-full bg-[#f9f8fe] flex flex-col justify-between p-4 rounded-xl">
                    <div className="text-[#5840ba] mb-2">
                      {/* icon */}
                      <AiOutlineCrown />
                    </div>
                    <div>
                      {/* details */}
                      <h1 className="text-[#5840ba] font-semibold text-3xl">
                        18
                      </h1>
                      <p className="text-sm text-[#a5a3a5]">Certifications</p>
                    </div>
                  </div>
                </div>
                {/*  */}
              </div>
            </div>
            <div className="md:w-[60%] w-[90vw] md:my-0 my-8">
              <div className="w-5/5 bg-white h-full p-4 rounded-xl flex flex-row items-center justify-around ">
                <div>
                  <img
                    src={medal}
                    alt="Medal illustration"
                    className="w-3/5 bg-neutral-200 rounded-xl"
                  />
                </div>
                <div>
                  <div>
                    <h1 className="text-3xl font-[500] headerFont">0.00XP</h1>
                    <p className="text-neutral-600">Point</p>
                  </div>
                  <div className="flex flex-row items-center mt-4">
                    <button className="px-7 py-2 bg-transparent rounded-lg text-black border-purple-600 border shadow-sm">
                      Redeem
                    </button>
                    <button className="px-7 py-2 bg-purple-600 rounded-lg text-white mx-4 shadow-sm">
                      Points
                    </button>
                  </div>
                </div>
              </div>

              <div className="flex flex-row w-[100%] my-5  ">
                <div className="w-[50%] h-full bg-[#ffb84c] p-4 rounded-xl mr-5">
                  <div className="flex flex-row items-start justify-between mb-4">
                    <div>
                      <img
                        src={target}
                        className="w-2/5 bg-[#f8c982] rounded-lg"
                      />
                    </div>
                    <div className="bg-white text-[#ffb84c] p-1 rounded-lg">
                      <RiArrowRightUpLine />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white font-[500] headingFont text-xl">
                      Consultation
                    </h2>
                    <p className="text-white text-sm mt-3">
                      Get a tutor to help your learning process
                    </p>
                  </div>
                </div>

                <div className="w-[50%] h-full bg-[#ed85ff] p-4 rounded-xl ">
                  <div className="flex flex-row items-start justify-between mb-4">
                    <div>
                      <img
                        src={target}
                        className="w-2/5 bg-[#f19dfd] rounded-lg"
                      />
                    </div>
                    <div className="bg-white text-[#ed85ff] p-1 rounded-lg">
                      <RiArrowRightUpLine />
                    </div>
                  </div>
                  <div>
                    <h2 className="text-white font-[500] headingFont text-xl">
                      Target
                    </h2>
                    <p className="text-white text-sm mt-3">
                      Set target reminders and your study timeline!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Main;
