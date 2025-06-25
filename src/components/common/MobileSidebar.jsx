"use client";
import { useContext } from "react";
import { MdOutlineClose } from "react-icons/md";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
import { useState } from "react";
import logo from "@/assets/images/logo.png";
import { ThemeContext } from "@/app/context/ThemeContext";
import Link from "next/link";
import Image from "next/image";

export default function MobileSidebar() {
	const { mobileNav, setMobileNav } = useContext(ThemeContext);

	const menuItems = [
		{
			title: "Services",
			submenu: [
				{ title: "Penetration Testing As A Service(PTaaS)", link: "" },
				{ title: "Red Team As A Service (RTaaS)", link: "" },
				{ title: "Attack Surface Management(ASM)", link: "" },
				{ title: "Continoues Penetration Testing(CTP)", link: "" },
				{ title: "Penetration Testing Service", link: "" },
				{ title: "Application Security Testing", link: "" },
				{
					title: "Continuous Exposure Threat Management(CETM)",
					link: "",
				},
			],
		},
		{
			title: "Pricing",
			submenu: [
				{ title: "Pentesting", link: "" },
				{ title: "CETM", link: "" },
			],
		},
		{
			title: "Resources",
			submenu: [
				{ title: "About us", link: "" },
				{ title: "Trust & Security", link: "" },
				{ title: "Blogs", link: "" },
				{ title: "Video", link: "" },
				{ title: "News", link: "" },
				{ title: "Career", link: "" },
			],
		},
		{
			title: "Pentest",
			link: "/pentest",
		},
	];

	const [openMenus, setOpenMenus] = useState({});

	const toggleMenu = (index) => {
		setOpenMenus((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};

	return (
		mobileNav && (
			<div className="mobile-nav absolute z-50 top-0 left-0 w-full min-h-screen bg-accent px-5 text-background">
				<nav className="flex items-center justify-between py-6">
					<Link
						className="logo text-3xl  font-inter font-bold"
						href="/"
					>
						<Image className="w-48 " src={logo} alt="Logo" />
					</Link>

					<button
						onClick={() => setMobileNav(false)}
						className="text-2xl opacity-70 hover:bg-background/10 p-1 rounded-full block lg:hidden"
					>
						<MdOutlineClose className="mt-1" />
					</button>
				</nav>

				<ul className="font-gilroy font-semibold uppercase text-lg space-y-4 pb-10 border-b border-background/5 ">
					{menuItems.map((item, index) => (
						<li key={index}>
							{/* Main item (with or without submenu) */}
							<div>
								{item.submenu ? (
									<button
										onClick={() => toggleMenu(index)}
										className="flex items-center justify-between w-full"
									>
										<span className="uppercase">
											{item.title}
										</span>
										<span>
											{openMenus[index] ? (
												<FaAngleUp />
											) : (
												<FaAngleDown />
											)}
										</span>
									</button>
								) : (
									<a href={item.link}>{item.title}</a>
								)}
							</div>

							{/* Submenu */}
							{item.submenu && openMenus[index] && (
								<ul className="dropdown">
									<h3>{item.title}</h3>
									{item.submenu.map((subItem, subIndex) => (
										<li key={subIndex}>
											<a
												href={subItem.link}
												className="block"
											>
												{subItem.title}
											</a>
										</li>
									))}
								</ul>
							)}
						</li>
					))}
				</ul>

				<div className="space-y-4 navbar-button py-8">
					<button className="btn btn--nav">Login</button>
					<button className="btn btn--nav">Contact Us</button>
				</div>
			</div>
		)
	);
}
