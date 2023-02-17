import LoginImage from "./images/login-background.jpg";
import LoginContent from "./LoginContent";

const Login = () => {
  return (
    <div
      id="Container"
      className=" overflow-hidden	flex-col flex text-center h-[100vh]"
    >
      <div
        id="Content"
        className="mb-3 w-full flex flex-col box-border	h-full px-20 py-10 min-h-[100vh] relative justify-center items-center align-middle"
      >
        <LoginContent />
        <img
          className=" inset-0 absolute w-full bg-cover bg-top h-full bg-no-repeat -z-10"
          src={LoginImage}
          alt="LoginBackgroundImage"
        />
      </div>
    </div>
  );
};
export default Login;
