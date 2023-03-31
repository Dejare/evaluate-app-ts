import { useState } from "react";
import "./layout.scss";
import {
  RiHome6Line,
  RiBuildingFill,
  RiBubbleChartLine,
  RiLoginBoxLine,
  RiNotification2Line,
  RiUser3Line,
  RiToggleLine,
} from "react-icons/ri";
import Modal from "../components/modal/Modal";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Layout({
  children,
  className,
}: {
  children: React.ReactNode;
  className: string;
}) {
  const { signOut, user } = useClerk();
  const [ModalShown, setModalShown] = useState(false);
  const handleSignOut = () => {
    setModalShown(true);
  };
  const navigate = useNavigate();
  console.log(user);
  return (
    <div
      className={`flex flex-row items-start md:h-screen layout ${className} `}
    >
      {/* Navigation */}
      <div className="navigationRootBox">
        <div className="md:block hidden">
          <div className="logo">
            <h1>E</h1>
          </div>
          <div className="navigation-icons">
            <div
              className="nav-icon"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <RiHome6Line />
            </div>
            <div className="nav-icon">
              <RiBuildingFill />
            </div>
            <div className="nav-icon">
              <RiBubbleChartLine />
            </div>
          </div>
        </div>

        <div className="md:flex hidden">
          <div className="nav-icon" onClick={handleSignOut}>
            <RiLoginBoxLine />
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-main">
        <div className="page-layout-bar">
          <div>
            <input type="text" name="" id="" />
          </div>
          <div className="page-bar-icons">
            <div className="bar-icon">
              <RiToggleLine />
            </div>
            <div className="bar-icon">
              <RiNotification2Line />
            </div>
            <div
              className="bar-icon flex flex-row items-center"
              onClick={() => {
                navigate("/dashboard/user-profile");
              }}
            >
              {/* <RiUser3Line /> */}
              <div className="w-12 h-12 ">
                <img
                  src={user?.profileImageUrl}
                  alt="Profile Image"
                  className="rounded-full w-12 h-12"
                />
              </div>
              <p className="text-sm ml-3 md:flex hidden"> {user?.username}</p>
            </div>
          </div>
        </div>
        <div>{children}</div>
      </div>
      {ModalShown && (
        <Modal>
          <div className="flex flex-row">
            <button
              className="px-9 py-5 bg-red-500 text-white"
              onClick={() => {
                signOut();
                navigate("/");
              }}
            >
              Sign Out
            </button>
            <button
              className="px-9 py-5 bg-neutral-900 text-white ml-5"
              onClick={() => setModalShown(false)}
            >
              Cancel
            </button>
          </div>
        </Modal>
      )}
      <div className="mobileNav md:hidden ">
        <div className="mobile-nav-container shadow-2xl">
          <div className="navigation-icons">
            <div
              className="nav-icon"
              onClick={() => {
                navigate("/dashboard");
              }}
            >
              <RiHome6Line />
            </div>
            <div className="nav-icon">
              <RiBuildingFill />
            </div>
            <div className="nav-icon">
              <RiBubbleChartLine />
            </div>
            <div className="nav-icon" onClick={handleSignOut}>
              <RiLoginBoxLine />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Layout;
