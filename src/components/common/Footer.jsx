import Image from "next/image";
import Link from "next/link";
import {
	FaGithub,
	FaLinkedin,
	FaRegCopyright,
	FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import logo from "@/assets/images/logo.png";

export default function Footer() {
	return (
		<div className="footer bg-accent text-background pt-12 lg:pt-20 px-5 md:px-0">
			<div className="container flex lg:flex-row flex-col gap-12 ">
				<div>
					<Link className="text-3xl font-inter font-bold" href="/">
						<Image src={logo} alt="Logo" className="xl:w-64 w-52" />
					</Link>
				</div>
				<section className="grid lg:grid-cols-5 gap-6 lg:gap-0 xl:gap-10">
					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Products
						</h3>
						<li>Bug Bounty</li>
						<li>Vulnerability Disclosure Policy</li>
						<li>Pentest Management</li>
						<li>Attack Surface Management</li>
						<li>Live Hacking Events</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Researchers
						</h3>
						<li>Start Hunting</li>
						<li>Public Programs</li>
						<li>Tools</li>
						<li>Ranking</li>
						<li>Dojo</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Resources
						</h3>
						<li>Blog</li>
						<li>Case Studies</li>
						<li>Videos</li>
						<li>API</li>
						<li>Github</li>
						<li>Newsletter</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Company
						</h3>
						<li>About RedhackSecurity</li>
						<li>Trust & Security</li>
						<li>Career</li>
						<li>Press</li>
						<li>Events</li>
						<li>Contact</li>
					</ul>

					<div className=" xl:text-lg font-gilroy list">
						<h3 className="text-base !pb-2 tracking-widest font-semibold uppercase border-b border-main">
							Follow us
						</h3>
						<ul className="flex items-center gap-5 lg:justify-between pt-2">
							<li>
								<a href="#">
									<FaLinkedin className="text-2xl xl:text-3xl" />
								</a>
							</li>
							<li>
								<a href="#">
									<FaXTwitter className="text-2xl xl:text-3xl" />
								</a>
							</li>
							<li>
								<a href="#">
									<FaYoutube className="text-2xl xl:text-3xl" />
								</a>
							</li>
							<li>
								<a href="#">
									<FaGithub className="text-2xl xl:text-3xl" />
								</a>
							</li>
						</ul>
					</div>
				</section>
			</div>
			<div className="container copyright">
				<h4 className="uppercase flex items-center">
					<FaRegCopyright />
					2025 RedhackSecurity
				</h4>
				<a href="#">Legal Notices</a>
				<a href="#">Privacy Policy</a>
				<a href="#">Cookies Policy</a>
				<a href="#">Change Cookie Preferences</a>
			</div>
		</div>
	);
}
