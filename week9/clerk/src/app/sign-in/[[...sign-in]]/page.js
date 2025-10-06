import { SignIn } from "@clerk/nextjs";

export default function SignInPage() {
  return (
    <>
      <h1>Sign in to my app</h1>
      <SignIn />
    </>
  );
}
