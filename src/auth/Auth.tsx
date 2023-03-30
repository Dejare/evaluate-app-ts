import { useClerk } from "@clerk/clerk-react";
import { useNavigate } from "react-router-dom";

function Auth() {
  const navigate = useNavigate();
  const { signOut } = useClerk();
  const handleSignOut = () => {
    signOut();
    navigate("/");
  };
  return (
    <div>
      <button className="bg-black px-6 py-3 text-white" onClick={handleSignOut}>
        Sign Out
      </button>
    </div>
  );
}

export default Auth;
