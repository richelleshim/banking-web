import AuthForm from "@/components/AuthForm";
import { getLoggedInUser } from "@/app/lib/actions/user.actions";

const SignUp = async () => {
  const loggedInUser = await getLoggedInUser();
  console.log(loggedInUser);

  return (
    <section className="flex-center size-full max-sm:px-6">
      <AuthForm type="sign-up"></AuthForm>
    </section>
  );
};

export default SignUp;
