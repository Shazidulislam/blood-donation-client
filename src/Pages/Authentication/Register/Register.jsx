import React, { useState } from "react";
import Lottie from "lottie-react";
import RegisterForm from "../../../Component/Form/RegisterForm";
import ProFirstButton from "../../../Component/Button/ProFirstButton";
import useAuth from "../../../hook/useAuth";
import { Link, useNavigate } from "react-router";
import Swal from "sweetalert2";
import { createUserRecord, imageUpload } from "../../../api/utils";
import LoadingSpner from "../../../Component/LoadingSpner";
import bgwhite from "../../../assets/bg/bg-whit2.jpeg";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const [selectDistrict, setSelectDistrict] = useState("");
  // context data
  const { createUser, updateUser, setUser, loading } = useAuth();
  if (loading) return <LoadingSpner />;

  const handleRegister = async (e) => {
    e.preventDefault();
    const form = e.target;

    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;
    const confirmPassword = form.Confirm_Password.value;
    const image = form?.image?.files[0];
    const blood_group = form.blood_group.value;
    const district = selectDistrict;
    const upazila = form.upazila.value;

    setError("");

    //  validations
    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword ||
      !blood_group ||
      !district ||
      !upazila ||
      !image
    ) {
      return setError("Please fill out all fields and upload a profile image.");
    }
    //password validation
    if (password !== confirmPassword) {
      return setError("Password and Confirm Password do not match.");
    }

    if (!/(?=.*[A-Z])/.test(password)) {
      return setError("Must have an Uppercase letter in the password.");
    }

    if (!/(?=.*[a-z])/.test(password)) {
      return setError("Must have a Lowercase letter in the password.");
    }

    if (!/(?=.*\d)/.test(password)) {
      return setError("Must have one number in the password.");
    }

    if (password.length < 6) {
      return setError("Password must be at least 6 characters long.");
    }
    //start tyr catch
    try {
      //file to image use imgbb
      const imageURL = await imageUpload(image);
      const submissionData = {
        name,
        email,
        blood_group,
        district,
        upazila,
        imageURL,
      };
      console.log(submissionData);

      // Create user
      const result = await createUser(email, password);

      if (result.user) {
        // Update profile
        await updateUser({ displayName: name, photoURL: imageURL });
        setUser({
          ...result?.user,
          displayName: name,
          photoURL: imageURL,
        });

        const userData = {
          name,
          email,
          photoURL: imageURL,
          blood_group,
          district_id: district,
          upazila,
        };
        await createUserRecord(userData);
        // Success alert and reset form
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: "Your account was created successfully!",
          showConfirmButton: false,
          timer: 1500,
        });

        form.reset();
        navigate(location.state ? location.state : "/");
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div
      className="bg-gray-300 lg:p-10 mx-auto bg-cover "
      style={{
        backgroundImage: `url(${bgwhite})`,
        backgroundRepeat: "no-repeat",
      }}
    >
      {/* form */}
      <div className=" grid grid-cols-1 md:grid-cols-3 text-white   ">
        {/* content */}
        <div className="bg-[#D25D5D90] col-span-1 ">
          <div className="pt-10">
            <Link to={"/"}>
              <ProFirstButton></ProFirstButton>
            </Link>
          </div>
          <div className="pt-32">
            <h2 className="mb-3 text-3xl lg:text-5xl flex flex-col justify-center items-center font-semibold text-center">
              Sign up Now
            </h2>
            <div className="border-b-4 border-white mx-6"></div>
          </div>
        </div>
        {/* from */}
        <div className="bg-white/20 col-span-2 shadow-2xl">
          <div className="flex justify-end pt-4 pr-4">
            <Link
              to={"/login"}
              className="px-6 py-3 bg-[#D25D5D] cursor-pointer rounded border-2 shadow border-white"
            >
              Log In
            </Link>
          </div>
          <RegisterForm
            handleRegister={handleRegister}
            setSelectDistrict={setSelectDistrict}
            error={error}
          ></RegisterForm>
        </div>
      </div>
    </div>
  );
};

export default Register;
