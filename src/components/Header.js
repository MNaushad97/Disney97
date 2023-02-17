import SigningOut from "./SigningOut";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import LOGO from "./images/logo.svg";
import NavMenu from "./NavMenu";
import Mould_Button from "./Mould_Button";
import { auth, provider } from "../../src/firebase";
import { useDispatch, useSelector } from "react-redux";
import {
  selectUserName,
  selectUserPhoto,
  setUserLoginDetails,
  setSignOutState,
} from "../features/user/userSlice";

function Header() {
  const dispatch = useDispatch();
  const userName = useSelector(selectUserName);
  const userPhoto = useSelector(selectUserPhoto);
  const navigate = useNavigate();
  useEffect(() => {
    auth.onAuthStateChanged(async (user) => {
      if (user) {
        setUser(user);
        navigate("/home");
      }
    });
  }, [userName]);

  function handleAuthentication() {
    if (!userName) {
      auth
        .signInWithPopup(provider)
        .then((result) => {
          setUser(result.user);
        })
        .catch((error) => {
          alert(error.message);
        });
    } else if (userName) {
      auth
        .signOut()
        .then(() => {
          dispatch(setSignOutState());
          navigate("/");
        })
        .catch((err) => alert(err.message));
    }
  }

  const setUser = (user) => {
    dispatch(
      setUserLoginDetails({
        name: user.displayName,
        email: user.email,
        photo: user.photoURL,
      })
    );
  };
  return (
    <>
      <nav
        className="fixed inset-x-0 top-0 h-[70px] bg-[#090b13] flex justify-between items-center
         md:w-auto md:px-9 md:tracking-[16px] z-20"
      >
        <div className=" -mt-2 -ml-4 p-0 sm:w-[40px] md:w-[60px] lg:w-[80px] max-h-[70px] text-[0] lg:inline-block">
          <img src={LOGO} alt="logo" className="block ml-4     " />
        </div>
        {/* if user not logged in show login button else NavBar */}
        {!userName ? (
          <Mould_Button name="Login" onClick={handleAuthentication} />
        ) : (
          <>
            <NavMenu />
            <SigningOut
              userPhoto={userPhoto}
              name={userName}
              signout={handleAuthentication}
            />
          </>
        )}
      </nav>
    </>
  );
}

export default Header;
