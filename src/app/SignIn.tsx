"use client";
import { signIn } from "next-auth/react";
const SignIn = () => (
	<div>
		<button onClick={() => signIn("google")}>Sign In</button>
	</div>
);

export default SignIn;
