import logoutImg from "../assets/logout-2-svgrepo-com.svg";
import { signOut } from "firebase/auth/cordova";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";

export default function ProfilePage() {
  const navigate = useNavigate();
  const logoutHandler = async () => {
    await signOut(auth);
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/onboarding");
  };

  return (
    <div className="bg-[#8ecae6] h-full flex justify-center items-center text-2xl  flex-col">
      <p>Profile Page</p>
      <br />
      <img src={logoutImg} onClick={logoutHandler} />
    </div>
  );
}
