import { SignUpComp } from "@/components/auth";
import { SimpleFooter } from "@/widgets/layout";

export const SignUp = () => {
  return (
    <>
      <div className="absolute inset-0 z-0 h-full w-full bg-primary" />
      <SignUpComp />
      <div className="container absolute bottom-6 left-2/4 z-10 mx-auto -translate-x-2/4 text-white">
        <SimpleFooter />
      </div>
    </>
  );
};

export default SignUp;
