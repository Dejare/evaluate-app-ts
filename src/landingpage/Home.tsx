import { FaTwitter, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { AiFillPlayCircle } from "react-icons/ai";
import FeatureCard from "./FeatureCard";
import TestImage from '../assets/images/writetests.png'
import competitionImage from "../assets/images/competition.png";
import RewardsImage from "../assets/images/rewards.png";

function Home() {
  const navigate  = useNavigate()
  return (
    <div>
      <div className="min-h-[100vh]">
        <header className="flex flex-row justify-between p-8 items-center normal md:text-lg text-sm">
          <label htmlFor="Logo" className="mainText">
            Evaluate
          </label>
          <nav className="body">
            <p>MENU</p>
          </nav>
        </header>

        {/* heroo */}
        <div className="md:h-[70vh] min-h-[70vh] flex items-center justify-center">
          <div className="md:p-0 p-8 flex m-auto flex-col">
            <h1 className="md:text-7xl text-[30px] md:mt-0 m-auto text-center capitalize font-[500] mainText">
              Evaluate: Precise, Intuitive online testing system for students
            </h1>
            <p className="md:w-2/5 text-sm md:text-lg text-center font-normal m-auto mt-0">
              Evaluate offer precise and intuitive testing systems for student,
              offers resources and enhances academic standings
            </p>
            <div className="flex flex-col  md:flex-row my-5 m-auto justify-center items-center">
              <button
                className="md:mr-5 btnTypeOne text-sm my-5 md:my-0"
                onClick={() => {
                  navigate("/sign-in");
                }}
              >
                <a> Get Started</a>
              </button>
              <button className="btnTypeTwo flex flex-row items-center text-sm">
                {" "}
                <AiFillPlayCircle className="mr-3 text-xl" /> Watch How It Works
              </button>
            </div>
          </div>
        </div>
      </div>

      <section className="min-h-[100vh]">
        <h1 className=" m-auto text-7xl font-[500] flex justify-center">
          Features
        </h1>
        <div className="flex flex-col md:flex-row m-auto items-center justify-center md:px-12 px-8">
          <FeatureCard
            bg="#2D75EC"
            featureHeading="Write Tests"
            featureText="Evaluate systems works as a personal computer based test program. This enanbles you to write tests anywhere, anytime. 

"
            imgSrc={TestImage}
          />
          <FeatureCard
            bg="#6263F7"
            featureHeading="Active Competitions"
            featureText="Weekly, Bi-weekly, Monthly competitions will be held and winners gets to claim brag points which will be redeemable (coming soon)"
            imgSrc={competitionImage}
          />
          <FeatureCard
            bg="#41C18A"
            featureHeading="Rewards"
            featureText="Students with enough brag points will be able to exchange their points for swags, gifts or even monetary rewards"
            imgSrc={RewardsImage}
          />
        </div>
      </section>
      <section className="min-h-full ">
        <div className="w-5/6 min-h-[60vh] md:h-[50vh] bg-gray-800 rounded-2xl m-auto my-5 flex items-center justify-center md:p-0 designBg mt-12">
          <div className="mx-6">
            <h1 className=" text-white md:text-7xl font-[500] text-3xl text-center flex items-center w-full m-auto justify-center">
              Ready to get evaluated?
            </h1>
            <p className="text-white md:flex items-center text-center hidden w-full m-auto justify-center">
              Test Knowledge | Push Forward | Fight Harder
            </p>
            <button className="flex m-auto btnTypeThree items-center justify-center my-5 ">
              <a href="/auth"> Get Started</a>
            </button>
          </div>
        </div>

        <div className="socialIcons flex flex-row m-auto items-center justify-center mt-20  text-gray-300 text-center text-5xl">
          <FaFacebook className="bg-gray-500  mx-4 rounded-full p-4" />
          <FaTwitter className="bg-gray-500  mx-4 rounded-full p-4" />
          <FaLinkedin className="bg-gray-500  mx-4 rounded-full p-4" />{" "}
          <FaInstagram className="bg-gray-500  mx-4 rounded-full p-4" />
        </div>
        <p className="text-center text-gray-600 coolvetica my-10 mb-12">
          2022 | Evaluate{" "}
        </p>
      </section>
    </div>
  );
}

export default Home;
