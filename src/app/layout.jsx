import { Inter } from "next/font/google";
import "../assets/css/globals.css";
import { gilroy } from "@/fonts";
import ThemeProvider from "./context/ThemeContext";
import MobileNavWrapper from "@/components/common/MobileNavWrapper";
import Navbar from "@/components/common/Navbar";
import Footer from "@/components/common/Footer";

const inter = Inter({
	subsets: ["latin"],
});

export const metadata = {
	title: "RedhackSecurity",
	description: "",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`max-w-[1920px] mx-auto ${inter.className}`}>
				<ThemeProvider>
					<MobileNavWrapper />

					<>
						<Navbar />
						{children}
						<Footer />
					</>
				</ThemeProvider>
			</body>
		</html>
	);
}
