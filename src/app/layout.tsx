"use client";
// There is currently no support for ChakraProvider on the server side, however
// because the root layout is rendering children, anything component inside the {children} tree can be a server component no problem

import { Inter } from "next/font/google";
import Header from "./Layouts/Header";
import { SessionProvider } from "next-auth/react";
import { ChakraProvider } from "@chakra-ui/react";
import theme from "./theme";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Telemeasure",
	description: "The television metrology application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<ChakraProvider theme={theme}>
					<div>{children}</div>
				</ChakraProvider>
			</body>
		</html>
	);
}
