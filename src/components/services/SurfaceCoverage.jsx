"use client";
import { useState } from "react";
import img2 from "@/assets/images/pentest-benifit-1.webp";
import img3 from "@/assets/images/pentest-benifit-1.webp";
import img1 from "@/assets/images/pentest-benifit-1.webp";
import img4 from "@/assets/images/pentest-benifit-1.webp";
import img5 from "@/assets/images/pentest-benifit-1.webp";
import img6 from "@/assets/images/pentest-benifit-1.webp";
import img7 from "@/assets/images/pentest-benifit-1.webp";
import img8 from "@/assets/images/pentest-benifit-1.webp";
import { useEffect } from "react";
import Image from "next/image";

const benifits = [
	{
		id: 1,
		title: "Known Assets",
		desc: "Officially inventoried systems and applications managed by your IT or security teams. These include documented domains, servers, IPs, and infrastructure actively maintained and monitored.",
		img: img1,
	},
	{
		id: 2,
		title: "Shadow Assets",
		desc: "Untracked or forgotten digital assets created without formal approval, such as test servers, old subdomains, or unsanctioned tools. These increase the risk of unmonitored vulnerabilities.",
		img: img2,
	},
	{
		id: 3,
		title: "Third-Party Risks",
		desc: "Vulnerabilities introduced by vendors, suppliers, or integrated platforms. Weaknesses in your supply chain can be exploited to access your network or sensitive data.",
		img: img3,
	},
	{
		id: 4,
		title: "Imposter Assets",
		desc: "Malicious or fraudulent assets designed to mimic your brand or digital infrastructure. These may include phishing domains, spoofed emails, or fake apps used in social engineering attacks.",
		img: img4,
	},
	{
		id: 5,
		title: "Cloud Environments",
		desc: "Public, private, or hybrid cloud systems used to host applications or data. Misconfigurations, exposed storage, or weak access controls can lead to serious breaches.",
		img: img5,
	},
	{
		id: 6,
		title: "On-Premise Systems",
		desc: "Local servers, databases, and devices hosted within your physical infrastructure. These require proper segmentation, patching, and monitoring to avoid internal exploitation.",
		img: img6,
	},
	{
		id: 7,
		title: "Internet-Facing Assets",
		desc: "Publicly accessible systems like web apps, APIs, DNS, or email servers. These are directly exposed to external threats and require continuous security validation.",
		img: img7,
	},
	{
		id: 8,
		title: "Dark Web Exposure",
		desc: "Leaked credentials, stolen data, or sensitive information associated with your organization that may appear on underground forums or marketplaces. Monitoring helps detect and contain threats early.",
		img: img8,
	},
];

export default function SurfaceCoverage() {
	const [currentServiceId, setCurrentServiceId] = useState(1);
	const [currentService, setCurrentService] = useState([]);
	const [dropdownOpen, setDropdownOpen] = useState(false);

	const handleService = (id) => {
		const result = benifits.find((benifit) => benifit.id === id);
		setCurrentServiceId(id);
		setCurrentService(result);
	};

	useEffect(() => {
		handleService(1);
	}, []);

	return (
		<div className="service border-t border-background/10 bg-accent text-background pt-18 lg:pt-32 lg:pb-14">
			<div className="container px-5 lg:px-0 text-center">
				<h2 className="!font-inter pb-12">
					RedHack’s Approach to End-to-End Attack Surface Coverage
				</h2>

				<div className="bg-background/10 hidden md:grid grid-cols-4 w-full overflow-x-auto mx-auto rounded-lg ">
					{benifits.slice(0, 4).map((benifit) => (
						<button
							key={benifit.id}
							onClick={() => handleService(benifit.id)}
							className={`btn-service-card ${
								currentServiceId === benifit.id
									? "bg-main"
									: "bg-transparent"
							}`}
						>
							{benifit.title}
						</button>
					))}
				</div>
				<div className="bg-background/10 hidden md:grid grid-cols-4 w-full overflow-x-auto mx-auto rounded-lg mt-4 mb-12">
					{benifits.slice(4).map((benifit) => (
						<button
							key={benifit.id}
							onClick={() => handleService(benifit.id)}
							className={`btn-service-card ${
								currentServiceId === benifit.id
									? "bg-main"
									: "bg-transparent"
							}`}
						>
							{benifit.title}
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
							{currentService.title}
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
								{benifits.map((benifit) => (
									<li
										key={benifit.id}
										onClick={() => {
											handleService(benifit.id);
											setDropdownOpen(false);
										}}
										className={`cursor-pointer px-5 py-2 text-sm ${
											currentServiceId === benifit.id
												? "bg-main text-background"
												: "bg-background text-accent"
										}`}
									>
										{benifit.title}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<section className="flex flex-col lg:flex-row w-full gap-12 py-6  ">
					<figure className="lg:w-2/4  ">
						<Image
							className="w-full h-full object-cover rounded-lg"
							src={currentService.img}
							alt="servive image"
						/>
					</figure>
					<div className="lg:w-2/4 text-left py-3">
						<h2 className="!text-[27px] !normal-case">
							{currentService.title}
						</h2>
						<p className="text-justify opacity-70 leading-relaxed">
							{currentService.desc}
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
