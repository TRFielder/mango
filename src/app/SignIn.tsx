"use client";
import { signIn } from "next-auth/react";
import { FcGoogle } from "react-icons/fc";
import { Button, Center, Text } from "@chakra-ui/react";

const SignIn = () => (
	<Center p={8}>
		<Button onClick={() => signIn("google")} w={"full"} maxW={"md"} variant={"outline"} leftIcon={<FcGoogle />}>
			<Center>
				<Text>Sign in with Google</Text>
			</Center>
		</Button>
	</Center>
);

export default SignIn;
