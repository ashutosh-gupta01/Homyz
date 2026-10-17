
import { useContext, useEffect } from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { Outlet } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import UserDetailContext from "../../context/UserDetailsContext";
import { useMutation } from "react-query";
import { createUser } from "../../utils/api";
import useFavourites from "../../hooks/useFavourites";
import useBookings from "../../hooks/useBookings";

const Layout = () => {
  useFavourites();
  useBookings();

  const {
    isAuthenticated,
    user,
    getAccessTokenSilently,
  } = useAuth0();

  const { setUserDetails } = useContext(UserDetailContext);

  const { mutate } = useMutation({
    mutationKey: ["registerUser", user?.email],
    mutationFn: (token) => createUser(user?.email, token),
    onError: (error) => {
      console.error(
        "User registration failed:",
        error.response?.data || error.message
      );
    },
  });

  useEffect(() => {
    if (!isAuthenticated || !user?.email) return;

    let cancelled = false;

    const getTokenAndRegister = async () => {
      try {
        const token = await getAccessTokenSilently({
          authorizationParams: {
            audience: "http://localhost:8000",
            scope: "openid profile email",
          },
        });

        if (cancelled) return;

        localStorage.setItem("access_token", token);

        setUserDetails((prev) => ({
          ...prev,
          token,
        }));

        // Register the authenticated user in the database.
        mutate(token);
      } catch (error) {
        console.error(
          "Auth token or registration error:",
          error.response?.data || error.message
        );
      }
    };

    getTokenAndRegister();

    return () => {
      cancelled = true;
    };
  }, [
    isAuthenticated,
    user?.email,
    getAccessTokenSilently,
    setUserDetails,
    mutate,
  ]);

  return (
    <>
      <div style={{ background: "var(--black)", overflow: "hidden" }}>
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
