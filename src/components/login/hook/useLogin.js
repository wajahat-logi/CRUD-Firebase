import { useRouter } from "next/navigation";
import { loginSchema } from "../schema/loginSchema";

import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

import { auth } from "../../../../firebase/firebase";
import { useToastMessages } from "../../message/useToastMessages";

const provider = new GoogleAuthProvider();

export const useLogin = () => {
  const router = useRouter();

  const { Success, Warn } = useToastMessages();
  const initialValues = {
    email: "",
    password: "",
  };

  const handleNavigate = (url) => {
    router.push(`/${url}`);
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      Success("Login DONE 😄");
      handleNavigate("deshboard");
    } catch (error) {
      console.error("Error..", error);
      Warn("Something Wrong :(");
    }
  };

  const handleSubmit = async (email, password) => {
    try {
      const user = await signInWithEmailAndPassword(auth, email, password);
      Success("Login DONE 😄");
      handleNavigate("deshboard");
    } catch (error) {
      Warn("Something Wrong  😑!");
    }
  };

  return {
    initialValues,
    schema: loginSchema,
    handleNavigate,
    handleSubmit,
    googleSignIn: handleGoogleSignUp,
  };
};
