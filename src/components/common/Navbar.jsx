"use client";
import { FaAngleDown } from "react-icons/fa";
import { RiMenu4Line } from "react-icons/ri";
import logo from "@/assets/images/logo.png";
import { useContext, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { ThemeContext } from "@/app/context/ThemeContext";

export default function Navbar() {
	const [scrolled, setScrolled] = useState(false);
	const { setMobileNav } = useContext(ThemeContext);

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 0);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<nav
			className={`${
				scrolled ? "bg-[var(--color-accent)]" : "bg-transparent"
			} nav fixed top-0 z-40 w-full max-w-[1920px] py-6 lg:py-3 px-5 lg:px-0`}
		>
			<div className="container flex justify-between items-center text-background">
				<Link className="logo text-3xl  font-inter font-bold" href="/">
					<Image src={logo} alt="Logo" className="w-48 lg:w-48" />
				</Link>

				<ul className="lg:flex items-center gap-5 font-gilroy uppercase font-semibold hidden">
					<li className="dropdown">
						<Link href="/pentest">PenTest</Link>
					</li>

					<li className="dropdown">
						<span>
							Services <FaAngleDown />
						</span>
						<ul className="nav-dropdown">
							<h3>Services</h3>
							<li>
								<Link href="/services/penetration-testing-as-a-service">
									Penetration Testing As A Service (PTaaS)
								</Link>
							</li>
							<li>
								<Link href="/services/red-team-as-a-service">
									Red Team As A Service (RTaaS)
								</Link>
							</li>
							<li>
								<Link href="/services/attack-surface-management">
									Attack Surface Management (ASM)
								</Link>
							</li>
							<li>
								<Link href="/services/continoues-penetration-testing">
									Continoues Penetration Testing
								</Link>
							</li>
							<li>
								<Link href="/services/penetration-testing-service">
									Penetration Testing Service
								</Link>
							</li>
							<li>
								<Link href="/services/application-security-testing">
									Application Security Testing
								</Link>
							</li>
							<li>
								<Link href="/services/continuous-exposure-threat-management">
									Continuous Exposure Threat Management (CETM)
								</Link>
							</li>
						</ul>
					</li>

					<li className="dropdown">
						<span>
							Pricing <FaAngleDown />
						</span>
						<ul className="nav-dropdown">
							<h3>Pricing</h3>
							<li>
								<Link href="/">Pentesting</Link>
							</li>
							<li>
								<Link href="/">CETM </Link>
							</li>
						</ul>
					</li>

					<li className="dropdown">
						<span>
							Resources <FaAngleDown />
						</span>
						<ul className="nav-dropdown">
							<h3>Resources</h3>
							<li>
								<Link href="/">About us</Link>
							</li>
							<li>
								<Link href="/">Trust & Security</Link>
							</li>
							<li>
								<Link href="/">Blogs</Link>
							</li>
							<li>
								<Link href="/">Video</Link>
							</li>
							<li>
								<Link href="/">News</Link>
							</li>
							<li>
								<Link href="/">career</Link>
							</li>
						</ul>
					</li>
				</ul>

				<div className="space-x-4 navbar-button hidden lg:block">
					<button className="btn btn--nav">Login</button>
					<button className="btn btn--nav">Contact Us</button>
				</div>
				<button
					onClick={() => setMobileNav(true)}
					className="text-2xl opacity-70 hover:bg-background/10 p-1 rounded-full block lg:hidden"
				>
					<RiMenu4Line className="mt-1" />
				</button>
			</div>
		</nav>
	);
}
