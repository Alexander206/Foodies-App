import React, { useContext } from "react";
import { userContext } from "../routes/App";
import { Header } from "../containers/Header";
import { Footer } from "../containers/Footer";
import { LoadingPage } from "../containers/LoadingPage.jsx";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const { user, authUser } = useContext(userContext);
  const navigate = useNavigate();

  return (
    <>
      <LoadingPage />
      <Header />
      Profile
      <button
        onClick={() => {
          authUser({ auth: false });
        }}
      >
        Log Out <ion-icon name="log-out-outline"></ion-icon>
      </button>
      <Footer />
    </>
  );
};
