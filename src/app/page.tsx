import Image from "next/image";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import Hero from "./Components/Hero";
import SignOut from "./SignOut";

export default async function Home() {
	const session = await getServerSession(authOptions);

	return (
		<main>
			{session?.user?.name ? (
				<>
					<p>You are signed in</p>
					<p>Welcome, {session.user.name}</p>
					<SignOut />
				</>
			) : (
				<Hero />
			)}
		</main>
	);
}
