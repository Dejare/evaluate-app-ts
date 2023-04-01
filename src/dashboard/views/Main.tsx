import { useClerk } from "@clerk/clerk-react";
import AvailableCourses from "../components/modal/AvailableCourses";
import IntroCard from "../components/modal/IntroCard";
import TestCard from "../components/modal/test/TestCard";
import Layout from "../layout/Layout";

function Main() {
  const { user, session } = useClerk();
  console.log(session);
  console.log(user);
  return (
    <Layout className="">
      <div className="p-8">
        <div>
          <h1 className="text-sm font-[500] font">
            {" "}
            Hello, <br />{" "}
            <span className="text-purple-600 text-3xl font-normal capitalize">
              {user?.username} 👋
            </span>
          </h1>
          <p className="text-neutral-600 mt-6">
            Nice to have you back, <br /> What would you like to work on today?
          </p>
        </div>

        <div className="heading text-2xl font-[500] mt-12">
          <h1>Available Courses.</h1>
        </div>
        <div>
          <AvailableCourses />
          <AvailableCourses />
          <AvailableCourses />
        </div>
      </div>
    </Layout>
  );
}

export default Main;
