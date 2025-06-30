import Image from "next/image";
import Link from "next/link";
import {
	FaDiscord,
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
				<section className="grid lg:grid-cols-5 xl:grid-cols-6 gap-6 lg:gap-y-10 xl:gap-10">
					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Pentesting
						</h3>
						<li>
							<Link href={"/"}>Web App</Link>
						</li>
						<li>
							<Link href={"/"}>Mobile App</Link>
						</li>
						<li>
							<Link href={"/"}>API</Link>
						</li>
						<li>
							<Link href={"/"}>Network</Link>
						</li>
						<li>
							<Link href={"/"}>Cloud</Link>
						</li>
						<li>
							<Link href={"/"}>Server & Endpoint</Link>
						</li>
						<li>
							<Link href={"/"}>IoT</Link>
						</li>
						<li>
							<Link href={"/"}>DevOps</Link>
						</li>
						<li>
							<Link href={"/"}>Thick Client</Link>
						</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Compliance
						</h3>
						<li>
							<Link href={"/"}>PCI DSS</Link>
						</li>
						<li>
							<Link href={"/"}>HIPAA</Link>
						</li>
						<li>
							<Link href={"/"}>GDPR</Link>
						</li>
						<li>
							<Link href={"/"}>ISO 27001</Link>
						</li>
						<li>
							<Link href={"/"}>SOC 2</Link>
						</li>
						<li>
							<Link href={"/"}>CREST</Link>
						</li>
						<li>
							<Link href={"/"}>NIST</Link>
						</li>
						<li>
							<Link href={"/"}>Vendor Audit</Link>
						</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Resources
						</h3>
						<li>
							<Link href={"/"}>Blogs</Link>
						</li>
						<li>
							<Link href={"/"}>Demos</Link>
						</li>
						<li>
							<Link href={"/"}>Reports</Link>
						</li>
						<li>
							<Link href={"/"}>Media</Link>
						</li>
						<li>
							<Link href={"/"}>Videos</Link>
						</li>
						<li>
							<Link href={"/"}>FAQ</Link>
						</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Company
						</h3>
						<li>
							<Link href={"/"}>About</Link>
						</li>
						<li>
							<Link href={"/"}>Team</Link>
						</li>
						<li>
							<Link href={"/"}>Clients</Link>
						</li>
						<li>
							<Link href={"/"}>Careers</Link>
						</li>
						<li>
							<Link href={"/"}>Contact</Link>
						</li>
					</ul>

					<ul className=" xl:text-lg font-gilroy list">
						<h3 className="text-xl font-semibold uppercase">
							Security
						</h3>
						<li>
							<Link href={"/"}>VDP</Link>
						</li>
						<li>
							<Link href={"/"}>Hall of Fame</Link>
						</li>
						<li>
							<Link href={"/"}>Report Bug</Link>
						</li>
						<li>
							<Link href={"/"}>Join Hackers</Link>
						</li>
					</ul>

					<div className=" xl:text-lg font-gilroy list">
						<h3 className="text-base !pb-2 tracking-widest font-semibold uppercase border-b border-main">
							Follow us
						</h3>
						<ul className="flex flex-wrap gap-5  pt-2">
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
							<li>
								<a href="#">
									<FaDiscord className="text-2xl xl:text-3xl" />
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
