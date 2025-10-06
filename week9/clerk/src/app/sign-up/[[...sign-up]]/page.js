import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <>
      <h1>Sign up to my app</h1>
      <SignUp />
    </>
  );
}
