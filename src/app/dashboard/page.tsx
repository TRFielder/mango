import { Flex, Heading, Image, Stack, Text, Tooltip } from "../Components/ClientChakra";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import SignOut from "../SignOut";

const Dashboard = async () => {
	const session = await getServerSession(authOptions);

	return (
		<main>
			<Text>You are signed in</Text>
			<Text>Welcome to the dashboard, {session?.user?.name}</Text>
			<SignOut />
		</main>
	);
};

export default Dashboard;
