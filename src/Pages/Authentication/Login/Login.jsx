import ProFirstButton from "../../../Component/Button/ProFirstButton";
import LoginForm from "../../../Component/Form/LoginForm";
import useAuth from "../../../hook/useAuth";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import LoadingSpner from "../../../Component/LoadingSpner";
import { createUserRecord } from "../../../api/utils";
import bgprimary from "../../../assets/bg/bg-whit2.jpeg";
import { useState } from "react";

const Login = () => {
  const { signIn, loading, setLoading } = useAuth();
  const [logError, setLogError] = useState("");
  const navigate = useNavigate();
  const location = useLocation();

  // Show initial auth loading
  if (loading) return <LoadingSpner />;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    setLogError(""); 
    setLoading(true); // start loading

    try {
      const result = await signIn(email, password);

      if (result.user) {
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account login successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        const userData = {
          name: result?.user?.displayName,
          enail: result?.user?.email,
          photoURL: result?.user?.photoURL,
        };
        await createUserRecord(userData);
        form.reset();
        navigate(`${location.state ? location.state : "/"}`);
      }
    } catch (err) {
      setLogError(err.message); 
      toast.error(err.message);
    } finally {
      setLoading(false); // ✅ spinner off after success or error
    }
  };

  return (
    <div
      className="lg:p-10 bg-cover min-h-screen"
      style={{ backgroundImage: `url(${bgprimary})`, backgroundRepeat: "no-repeat" }}
    >
      <div className="max-w-7xl rounded-2xl p-4 grid grid-cols-1 md:grid-cols-3">
        <div className="md:col-span-1">
          <div className="bg-[#D25D5D90] pt-10 h-full text-white">
            <Link to={"/"}>
              <ProFirstButton />
            </Link>
            <div className="flex flex-col justify-center items-center">
              <p className="text-3xl font-semibold pt-5">Sign In Now</p>
              <div className="border-2 border-white px-20"></div>
              <div className="flex justify-center pt-4 pr-4">
                <Link
                  to={"/register"}
                  className="px-6 py-3 bg-[#D25D5D] text-white border-2 rounded"
                >
                  Sign Up
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* login form */}
        <div className="flex-1 md:flex md:justify-start md:items-start md:col-span-2 bg-white/20">
          <div className="py-20 pl-4 lg:pl-20 relative">
            {/* Overlay spinner */}
            {loading && (
              <div className="absolute inset-0 flex justify-center items-center bg-white/50 z-10">
                <LoadingSpner />
              </div>
            )}

            {/* Error message */}
            {logError && (
              <p className="text-red-600 mb-4 font-semibold relative z-20">
                {logError}
              </p>
            )}

            {/* Login form */}
            <div className={`${loading ? "opacity-50 pointer-events-none" : ""}`}>
              <LoginForm handleSubmit={handleSubmit} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
