import Image from "next/image";
import { getServerSession } from "next-auth";
import { signIn, signOut } from "next-auth/react";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SignIn from "./SignIn";
import SignOut from "./SignOut";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			{session?.user?.name ? (
				<section>
					<p>You are signed in</p>
					<p>Welcome, {session.user.name}</p>
					<SignOut />
				</section>
			) : (
				<SignIn />
			)}
		</main>
	);
}
