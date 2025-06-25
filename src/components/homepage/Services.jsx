"use client";
import { useEffect, useState } from "react";
import serviceImage1 from "@/assets/images/service-image-1.webp";
import companyLogo1 from "@/assets/images/company-logo-1.webp";
import companyLogo2 from "@/assets/images/company-logo-2.webp";
import companyLogo3 from "@/assets/images/company-logo-3.webp";
import companyLogo4 from "@/assets/images/company-logo-4.webp";
import companyLogo5 from "@/assets/images/company-logo-5.webp";
import companyLogo6 from "@/assets/images/company-logo-6.webp";
import companyLogo7 from "@/assets/images/company-logo-7.webp";
import Image from "next/image";

const services = [
	{
		id: 1,
		buttonName: "Pentest",
		title: "Penetration Testing as a Service (PTaaS)",
		description:
			"Our PTaaS delivers continuous, expert-driven penetration testing combined with real-time reporting and actionable remediation guidance. This scalable solution accelerates vulnerability identification and resolution, eliminating the delays and constraints associated with traditional penetration testing models.",
		image: serviceImage1,
		demoLink: "/",
		productLink: "/",
	},
	{
		id: 2,
		buttonName: "Red Ops",
		title: "Red Team as a Service (RTaaS)",
		description:
			"Our RTaaS offers advanced, stealthy simulations of real-world cyberattacks to rigorously evaluate your organization’s detection, response, and defense mechanisms. Led by seasoned red team professionals, we expose hidden risks, validate security controls, and continuously enhance your security posture without disrupting business operations.",
		image: serviceImage1,
		demoLink: "/",
		productLink: "/",
	},
	{
		id: 3,
		buttonName: "Surface",
		title: "Attack Surface Management (ASM)",
		description:
			"ASM is a proactive, continuous cybersecurity discipline that identifies, monitors, and reduces your organization’s exposed digital assets and vulnerabilities. By delivering real-time visibility and comprehensive risk mitigation across all attack vectors, ASM prevents unauthorized access and minimizes breach potential.",
		image: serviceImage1,
		demoLink: "/",
		productLink: "/",
	},
	{
		id: 4,
		buttonName: "Auto Test",
		title: "Continuous Penetration Testing (CTP)",
		description:
			"CTP is an ongoing security engagement that persistently replicates sophisticated cyberattacks to discover and remediate vulnerabilities before they can be exploited. This adaptive approach ensures your defenses evolve with emerging threats, maintaining robust and uninterrupted protection.",
		image: serviceImage1,
		demoLink: "/",
		productLink: "/",
	},
	{
		id: 5,
		buttonName: "Threat Mgmt",
		title: "Continuous Exposure Threat Management (CETM)",
		description:
			"CETM is a dynamic threat management framework that continuously detects, assesses, and mitigates exposure risks within your digital environment. By enabling real-time threat identification and response, CETM significantly reduces your attack surface and strengthens overall cybersecurity resilience.",
		image: serviceImage1,
		demoLink: "/",
		productLink: "/",
	},
];

const companyLogos = [
	{
		img: companyLogo1,
	},
	{
		img: companyLogo2,
	},
	{
		img: companyLogo3,
	},
	{
		img: companyLogo4,
	},
	{
		img: companyLogo5,
	},
	{
		img: companyLogo6,
	},
	{
		img: companyLogo7,
	},
];

export default function Services() {
	const [currentServiceId, setCurrentServiceId] = useState(1);
	const [currentService, setCurrentService] = useState([]);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleService = (id) => {
		const result = services.find((service) => service.id === id);
		setCurrentServiceId(id);
		setCurrentService(result);
	};

	useEffect(() => {
		handleService(1);
	}, []);

	return (
		<div className="service bg-accent text-background pt-18 lg:pt-32 pb-14">
			<div className="container px-5 lg:px-0 text-center">
				<h2 className="!font-inter">
					Expert-Led Offensive Security Services
				</h2>

				<div className="bg-background/10 hidden md:block w-max overflow-x-auto mx-auto rounded-lg my-12">
					{services.map((service) => (
						<button
							key={service.id}
							onClick={() => handleService(service.id)}
							className={`btn-service-card ${
								currentServiceId === service.id
									? "bg-main"
									: "bg-transparent"
							}`}
						>
							{service.buttonName}
						</button>
					))}
				</div>

				{/* Mobile Dropdown */}
				<div className="md:hidden w-full max-w-xs mx-auto mt-6 text-left">
					<div className="relative">
						<button
							onClick={() => setDropdownOpen(!dropdownOpen)}
							className="w-full px-6 py-5 text-lg rounded-lg bg-main font-semibold font-gilroy flex justify-between items-center"
						>
							{currentService.buttonName}
							<svg
								className="w-4 h-4 ml-2"
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth={2}
									d="M19 9l-7 7-7-7"
								/>
							</svg>
						</button>

						{dropdownOpen && (
							<ul className="absolute z-50 mt-1 text-sm space-y-2 py-3 w-full rounded-lg bg-background overflow-hidden">
								{services.map((service) => (
									<li
										key={service.id}
										onClick={() => {
											handleService(service.id);
											setDropdownOpen(false);
										}}
										className={`cursor-pointer px-5 py-2 text-sm ${
											currentServiceId === service.id
												? "bg-main text-background"
												: "bg-background text-accent"
										}`}
									>
										{service.buttonName}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<section className="flex flex-col lg:flex-row w-full gap-12 py-6 lg:mb-32 mb-28">
					<figure className="lg:w-2/4 lg:p-3 ">
						<Image
							className="w-full h-full object-cover rounded-lg"
							src={currentService?.image}
							alt="Servive image"
						/>
					</figure>
					<div className="lg:w-2/4 text-left">
						<h2 className="!text-[27px] !normal-case">
							{currentService.title}
						</h2>
						<p className="text-justify opacity-70 leading-relaxed">
							{currentService.description}
						</p>
						<div className="space-x-6 space-y-4 pt-2">
							<button className="btn ">GET A DEMO</button>

							<button className="btn btn--outline">
								OUR SERVICE
							</button>
						</div>
					</div>
				</section>
				<h2 className="!text-xl lg:!text-2xl ">
					Trusted Protection — For Small Businesses and Large
					Enterprises Alike
				</h2>
				<div className="flex mx-auto justify-start lg:justify-center items-center overflow-x-auto lg:pt-10 pt-5 gap-10 pb-5 scrollbar-thin scrollbar-hide">
					{companyLogos.map((company, idx) => (
						<Image
							key={idx}
							src={company.img}
							alt="company logo"
							className="lg:w-28 w-20 h-max"
						/>
					))}
				</div>
			</div>
		</div>
	);
}
