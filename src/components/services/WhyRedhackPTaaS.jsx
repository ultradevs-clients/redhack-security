"use client";
import { useEffect, useState } from "react";
import serviceImage1 from "@/assets/images/service-image-1.webp";

import Image from "next/image";

const services = [
	{
		id: 1,
		title: "Black Box Testing",
		image: serviceImage1,
		desc: "Black box testing simulates a real-world attack from an external threat actor with no prior knowledge of the target system. This approach helps evaluate how well your external defenses hold up against unknown threats, providing valuable insight into the effectiveness of perimeter security and public-facing assets.",
		desc2: "Black box testing simulates a real-world attack from an external threat actor with no prior knowledge of the target system. This approach helps evaluate how well your external defenses hold up against unknown threats, providing valuable insight into the effectiveness of perimeter security and public-facing assets.",
	},
	{
		id: 2,
		title: "Gray Box Testing",
		image: serviceImage1,
		desc: "Gray box testing provides a balanced approach by combining limited internal knowledge with an external testing perspective. With partial access and contextual insights from the client, this method enables a more targeted, efficient, and realistic evaluation of system security — uncovering vulnerabilities that may be missed in purely black box or white box assessments.",
		desc2: "Black box testing simulates a real-world attack from an external threat actor with no prior knowledge of the target system. This approach helps evaluate how well your external defenses hold up against unknown threats, providing valuable insight into the effectiveness of perimeter security and public-facing assets.",
	},
	{
		id: 3,
		title: "White Box Testing",
		image: serviceImage1,
		desc: "White box testing involves a thorough assessment with full knowledge of the target system, including internal and external architecture. This simulates an insider attack or a threat actor with deep system insight, enabling a comprehensive evaluation to identify vulnerabilities that may remain hidden from external testing methods.",
		desc2: "Black box testing simulates a real-world attack from an external threat actor with no prior knowledge of the target system. This approach helps evaluate how well your external defenses hold up against unknown threats, providing valuable insight into the effectiveness of perimeter security and public-facing assets.",
	},
];

export default function WhyRedhackPTaaS() {
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
		<div className="text-background bg-accent lg:py-20 py-12  text-center border-t border-background/10 border-b lg:px-0 px-5">
			<div className="container">
				<h2>Why RedHack PTaaS?</h2>
				<p className="opacity-80">
					RedHack’s Penetration Testing as a Service (PTaaS) delivers
					continuous, comprehensive, and certified testing designed to
					fit your unique security needs. We give you the flexibility
					to choose the right methodology and testing approach —
					whether it's black-box, gray-box, or white-box — all while
					ensuring expert-led insights, faster remediation, and
					seamless integration into your development cycle.
				</p>

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
							{service.title}
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
										{service.title}
									</li>
								))}
							</ul>
						)}
					</div>
				</div>

				<section className="flex flex-col lg:flex-row w-full gap-12 py-6 ">
					<figure className="lg:w-2/4 lg:p-3 ">
						<Image
							className="w-full h-full object-cover rounded-lg"
							src={currentService?.image}
							alt="Servive image"
						/>
					</figure>
					<div className="lg:w-2/4 text-left">
						<h2 className="!text-[27px] !normal-case">
							{currentService?.title}
						</h2>
						<p className="text-justify opacity-70 leading-relaxed">
							{currentService?.desc}
						</p>
						<p className="text-justify !py-0 opacity-70 leading-relaxed">
							{currentService?.desc2}
						</p>
					</div>
				</section>
			</div>
		</div>
	);
}
