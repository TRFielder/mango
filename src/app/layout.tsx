import { Inter } from "next/font/google";
import Header from "./Layouts/Header";
import { SessionProvider } from "next-auth/react";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "Telemeasure",
	description: "The television metrology application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header />
				<div>{children}</div>
			</body>
		</html>
	);
}
