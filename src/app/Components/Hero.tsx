import { Flex, Heading, Image, Stack, Text, Tooltip, Button } from "./ClientChakra";
import HeroButtons from "./HeroButtons";
import { useColorMode } from "./ClientChakra";

const Hero = () => {
	return (
		<Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
			<Flex p={8} flex={1} align={"center"} justify={"center"}>
				<Stack spacing={6} w={"full"} maxW={"lg"}>
					<Heading fontSize={{ base: "3xl", md: "4x1", lg: "5x1" }}>
						<Text
							as={"span"}
							position={"relative"}
							color={"white"}
							_after={{
								content: "''",
								width: "full",
								height: "30%",
								position: "absolute",
								bottom: 1,
								left: 0,
								bg: "blue.400",
								zIndex: -1,
							}}
						>
							Measure
						</Text>
						<br />{" "}
						<Text color={"blue.400"} as={"span"}>
							Your mangos
						</Text>{" "}
					</Heading>
					<Text fontSize={{ base: "md", lg: "lg" }} color={"white"}>
						Mango is a tool to track your enjoyment of the manga you read. Rate each chapter and compare it against others - share your opinion with
						your friends or see how your views stack up against the global average.
					</Text>
					<Stack direction={{ base: "column", md: "row" }} spacing={4}>
						<HeroButtons />
					</Stack>
				</Stack>
			</Flex>
			<Flex flex={1}>
				<Tooltip label="Photo by Catherine Heath on Unsplash" placement={"left"}>
					<Image
						objectFit={"cover"}
						alt={"Ginger cat sitting close to a laptop. The cat's eyes are half-closed as it looks at the laptop screen"}
						src="https://images.unsplash.com/photo-1547960450-2ea08b931270?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
					></Image>
				</Tooltip>
			</Flex>
		</Stack>
	);
};
export default Hero;
