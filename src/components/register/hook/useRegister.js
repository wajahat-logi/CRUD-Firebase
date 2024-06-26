"use client";

import { useRouter } from "next/navigation";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";

import { registerSchema } from "../schema/registerSchema";

import { auth } from "../../../../firebase/firebase";
import { useAuth } from "../../../../firebase/auth";
import { useToastMessages } from "../../message/useToastMessages";

const provider = new GoogleAuthProvider();

export const useRegister = () => {
  const router = useRouter();

  const { Success, Warn } = useToastMessages();
  const { setAuthUser } = useAuth();
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleNavigate = (url) => {
    router.push(`/${url}`);
  };

  const handleGoogleSignUp = async () => {
    try {
      await signInWithPopup(auth, provider);
      Success("LoggedIn 😄");
      handleNavigate("deshboard");
    } catch (error) {
      console.error("Error..", error);
      Warn("Something Wrong :(");
    }
  };

  const handleSubmit = async (email,password,name) => {

    try {
      const { user } = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, { displayName: name });
      setAuthUser({
        uid: user.uid,
        email: user.email,
        name: user.displayName,
      });
      Success("Registration DONE 😄");
      handleNavigate("deshboard");
      resetForm();
    } catch (error) {
      Warn("Something Wrong  😑!");
    }
  };

  return {
    initialValues,
    schema: registerSchema,
    handleSubmit,
    navigate: handleNavigate,
    googleSignUp: handleGoogleSignUp,
  };
};
