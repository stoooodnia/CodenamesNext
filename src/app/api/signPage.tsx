import {
  GithubSignInButton,
  GoogleSignInButton,
} from "~/app/_components/authButtons";
import { getServerSession } from "next-auth";
import { getServerAuthSession } from "~/server/auth";
import { redirect } from "next/navigation";
import { CredentialsForm } from "~/app/_components/credentialsForm";
import { getCsrfToken } from "next-auth/react";

export default async function SignInPage() {
  const session = await getServerAuthSession();

  console.log("Session: ", session);

  if (session) return redirect("/timeline");

  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center py-2">
      <div className="mt-10 flex flex-col items-center p-10 shadow-md">
        <h1 className="mb-4 mt-10 text-4xl font-bold">Sign In</h1>
        <GoogleSignInButton />
        <GithubSignInButton />
        <span className="mt-8 text-center text-2xl font-semibold text-white">
          Or
        </span>
        {/* <CredentialsSignInButton /> */}
        <CredentialsForm />
      </div>
    </div>
  );
}
