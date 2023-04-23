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
  RiMessage2Line,
  RiSettings5Line,
} from "react-icons/ri";
import Modal from "../components/modal/Modal";
import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/images/eval.jpg";

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
      className={`flex flex-row items-start md:h-screen layout rounded-3xl ${className} `}
    >
      {/* Navigation */}
      <div className="navigationRootBoxRoot">
        <div className="navigationRootBox">
          <div className="md:flex items-center flex-col hidden">
            <div className="font-dm font-medium my-8 ">
              <img src={logo} alt="" />
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
              <div className="nav-icon">
                <RiMessage2Line />
              </div>
              <div className="nav-icon">
                <RiSettings5Line />
              </div>
              <div className="nav-icon">
                <RiBubbleChartLine />
              </div>
            </div>
          </div>
          <div className="md:flex hidden">
            <div className="nav-icon text-[#9888d4]" onClick={handleSignOut}>
              <RiLoginBoxLine />
            </div>
          </div>
        </div>
      </div>

      {/* Page Content */}
      <div className="page-main">
        <div className="page-layout-bar"></div>
        <div className="relative rounded-xl">
          <div className="md:w-[90vw] rounded-xl">{children}</div>
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
                <div
                  className="nav-icon text-[#9888d4]"
                  onClick={handleSignOut}
                >
                  <RiLoginBoxLine />
                </div>
              </div>
            </div>
          </div>
        </div>
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
    </div>
  );
}

export default Layout;
