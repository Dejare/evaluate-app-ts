import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import Home from "./landingpage/Home";
import "./assets/styles/main.scss";
import {
  ClerkProvider,
  SignedIn,
  SignedOut,
  SignIn,
  SignUp,
} from "@clerk/clerk-react";
import Auth from "./auth/Auth";

function App() {
  function ClerkProviderWithRoutes() {
    const navigate = useNavigate();
    const clerk_pub_key =
      "pk_test_Y2hhcm1lZC1ncmFja2xlLTc5LmNsZXJrLmFjY291bnRzLmRldiQ";

    return (
      <>
        <ClerkProvider
          publishableKey={clerk_pub_key}
          navigate={(to: any) => navigate(to)}
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/sign-in/*"
              element={
                <SignIn
                  routing="path"
                  path="/sign-in"
                  appearance={{
                    elements: {
                      rootBox:
                        "w-screen flex items-center justify-center h-screen",
                      card: "md:w-[35vw]",
                      headerTitle:
                        "text-3xl tracking-normal font-[500] headerFont",
                      formFieldInput: "py-4",
                    },
                  }}
                />
              }
            />
            <Route
              path="/sign-up/*"
              element={
                <SignUp
                  routing="path"
                  path="/sign-up"
                  appearance={{
                    elements: {
                      rootBox:
                        "w-screen flex items-center justify-center h-screen",
                      card: "md:w-[35vw]",
                      headerTitle:
                        "text-3xl tracking-normal font-[500] headerFont",
                      formFieldInput: "py-4",
                    },
                  }}
                />
              }
            />
            <Route path="/dashboard" element={<Auth />} />
          </Routes>
        </ClerkProvider>
      </>
    );
  }

  return (
    <BrowserRouter>
      <ClerkProviderWithRoutes />
    </BrowserRouter>
  );
}

export default App;
