"use client";
import { EyeIcon, EyeSlashIcon } from "@heroicons/react/24/solid";
import { Button, Input, Typography } from "@material-tailwind/react";
import { useEffect, useState } from "react";
import { useAuth } from "../../../firebase/auth";
import Loading from "../loader/Loading";
import { useRegister } from "./hook/useRegister";



const RegistrationUI = () => {

  const [passwordShown, setPasswordShown] = useState(false);
  const togglePasswordVisiblity = () => setPasswordShown((cur) => !cur);
  const { handleSubmit, navigate, googleSignUp } = useRegister();
  const [gs, setGs] = useState({
    email: '',
    pass: '',
    name: ''
  })

  const setGsHand = (e) => {
    const key = e.target.name;
    const value = e.target.value;
    setGs(p => ({ ...p, [key]: value }));
  }

  return (
    <section className={"grid text-center items-center p-8" + h_screen}>
      <div>
        <Typography variant="h3" color="blue-gray" className="mb-2">
          Sign Up
        </Typography>
        <Typography className="mb-16 text-gray-600 font-normal text-[18px]">
          Nice to meet you! Enter your details to register.
        </Typography>
        <form action="#" className="mx-auto max-w-[24rem] text-left">
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Name
              </Typography>
            </label>
            <Input
              id="name"
              color="gray"
              size="lg"
              type="text"
              name="name"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={setGsHand}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="email">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Your Email
              </Typography>
            </label>
            <Input
              id="email"
              color="gray"
              size="lg"
              type="email"
              name="email"
              placeholder="name@mail.com"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              labelProps={{
                className: "hidden",
              }}
              onChange={setGsHand}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="password">
              <Typography
                variant="small"
                className="mb-2 block font-medium text-gray-900"
              >
                Password
              </Typography>
            </label>
            <Input
              size="lg"
              placeholder="********"
              labelProps={{
                className: "hidden",
              }}
              id={"pass"}
              name="pass"
              className="w-full placeholder:opacity-100 focus:border-t-primary border-t-blue-gray-200"
              type={passwordShown ? "text" : "password"}
              icon={
                <i onClick={togglePasswordVisiblity}>
                  {passwordShown ? (
                    <EyeIcon className="h-5 w-5" />
                  ) : (
                    <EyeSlashIcon className="h-5 w-5" />
                  )}
                </i>
              }
              onChange={setGsHand}
            />
          </div>
          <Button onClick={() => handleSubmit(gs.email, gs.pass,gs.name)} color="gray" size="lg" className="mt-6 h-10" fullWidth>
            sign up
          </Button>

          <Typography
            variant="small"
            color="gray"
            className="mt-4 text-center font-normal"
          >
            Already have an account?{" "}
            <a href="#" className="font-medium text-gray-900" onClick={() => {
              handleNavigate("login");
            }}>
              Sign In
            </a>
          </Typography>
        </form>
      </div>
    </section>
  );

}


const Registration = () => {
  const { authUser, isLoading } = useAuth();

  useEffect(() => {
    if (!isLoading && authUser) {
      navigate("deshboard");
    }
  }, [isLoading, authUser]);
  return isLoading || (!isLoading && authUser) ? (
    <Loading />
  ) : (
    <>

      <RegistrationUI />
      {/* <Formik
        initialValues={initialValues}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <main className="flex lg:h-[100vh]">
            <div className="w-full  p-8 md:p-14 flex items-center justify-center ">
              <div className="p-8 w-[600px]">
                <h1 className="text-6xl font-semibold">Sign Up</h1>
                <p className="mt-6 ml-1">
                  Already have an account ?{" "}
                  <span
                    className="underline hover:text-blue-400 cursor-pointer"
                    onClick={() => {
                      navigate("login");
                    }}
                  >
                    Login
                  </span>
                </p>

                <div
                  className="bg-black/[0.05] text-white w-full py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90 flex justify-center items-center gap-4 cursor-pointer group"
                  onClick={() => {
                    googleSignUp();
                  }}
                >
                  <FcGoogle size={22} />
                  <span className="font-medium text-black group-hover:text-white">
                    Login with Google
                  </span>
                </div>

                <div className="mt-10 pl-1 flex flex-col">
                  <label>Name</label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  />
                  <ErrorMessage
                    name="name"
                    component="div"
                    className="text-red-600 font-semibold"
                  />
                </div>
                <div className="mt-10 pl-1 flex flex-col">
                  <label>Email</label>
                  <Field
                    type="text"
                    name="email"
                    id="email"
                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  />
                  <ErrorMessage
                    name="email"
                    component="div"
                    className="text-red-600 font-semibold"
                  />
                </div>
                <div className="mt-10 pl-1 flex flex-col">
                  <label>Password</label>
                  <Field
                    type="password"
                    id="password"
                    name="password"
                    className="font-medium border-b border-black p-4 outline-0 focus-within:border-blue-400"
                  />
                  <ErrorMessage
                    name="password"
                    component="div"
                    className="text-red-600 font-semibold"
                  />
                </div>
                <button
                  type="submit"
                  className="bg-black text-white w-44 py-4 mt-10 rounded-full transition-transform hover:bg-black/[0.8] active:scale-90"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </main>
        </Form>
      </Formik> */}
    </>
  );
};

export default Registration;
