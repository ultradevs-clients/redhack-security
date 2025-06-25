"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const solutions = [
	{
		id: 1,
		title: "Dedicated Project Manager",
		desc: "You will have a dedicated project manager assigned to your engagement who will oversee the entire security testing process. They will collaborate with you to understand your objectives, coordinate the testing activities, and ensure smooth communication and successful project completion.",
	},
	{
		id: 2,
		title: "Real-Time Progress Tracking",
		desc: "Our platform allows you to track your security testing progress in real time. You can access live updates and view detailed results instantly, keeping you informed at every stage without any delay.",
	},
	{
		id: 3,
		title: "Expert Remediation Guidance",
		desc: "Our team of experts provides detailed insights into identified vulnerabilities, supported by proof-of-concept demonstrations. They help you understand the severity and suggest the most effective strategies for mitigation.",
	},
	{
		id: 4,
		title: "Unlimited Retesting",
		desc: "To ensure your fixes are effective, we offer unlimited retesting at no additional cost. This service helps confirm that vulnerabilities have been fully resolved and your security posture is strengthened.",
	},
	{
		id: 5,
		title: "Unlimited Support & Ticketing",
		desc: "Benefit from unlimited support with the ability to create tickets as needed. Our team is always available to address your concerns, provide clarifications, and assist throughout the entire testing process.",
	},
	{
		id: 6,
		title: "Comprehensive Testing Checklist",
		desc: "Receive a customized checklist summarizing all vulnerable and secure areas identified during testing. This comprehensive report provides full visibility of your security status and ensures thorough, consistent coverage.",
	},
	{
		id: 7,
		title: "Certified and Auditable Reports",
		desc: "Get access to CREST-certified, audit-ready reports directly through the platform. These include detailed technical documents for security auditors and clear, executive-friendly summaries designed for management and board members.",
	},
];

export default function EnterpriceSolutions() {
	const [currentServiceId, setCurrentServiceId] = useState(1);
	const [currentService, setCurrentService] = useState([]);

	const handleService = (id) => {
		const result = solutions.find((solution) => solution.id === id);
		setCurrentServiceId(id);
		setCurrentService(result);
	};

	useEffect(() => {
		handleService(1);
	}, []);

	const [openSolutions, setOpenSolutions] = useState({});
	const toggleSolution = (index) => {
		setOpenSolutions((prev) => ({
			...prev,
			[index]: !prev[index],
		}));
	};
	return (
		<div className="bg-background lg:py-20 py-12 text-center lg:px-0 px-5">
			<div className="container">
				<h2>RedHack Security Enterprise Solutions</h2>
				<p className="opacity-80">
					RedHack Security offers a comprehensive range of
					professional services designed to elevate your security
					posture and optimize your client experience. Explore our
					tailored service packages to discover how we can support
					your unique security objectives effectively and efficiently.
				</p>

				<section className="lg:flex hidden gap-4">
					<div className="text-background space-y-4 hidden md:grid w-4/12 overflow-x-auto mx-auto rounded-lg ">
						{solutions.map((solution) => (
							<button
								key={solution.id}
								onClick={() => handleService(solution.id)}
								className={`btn-service-card !py-8 ${
									currentServiceId === solution.id
										? "bg-main"
										: "bg-accent/90 backdrop-blur-2xl"
								}`}
							>
								{solution.title}
							</button>
						))}
					</div>
					<div className="w-8/12 bg-accent/90 backdrop-blur-2xl rounded-xl p-14 text-left">
						<h2 className="text-main  !text-3xl">
							{currentService.title}
						</h2>
						<h3 className="text-background text-xl pt-10">
							{currentService.desc}
						</h3>
					</div>
				</section>

				<ul className="font-gilroy block lg:hidden font-semibold uppercase text-lg space-y-4 pb-10 border-b border-background/5 ">
					{solutions.map((item, index) => (
						<li key={index}>
							{/* Main item (with or without submenu) */}
							<div>
								{item ? (
									<button
										onClick={() => toggleSolution(index)}
										className={`flex items-center justify-between w-full bg-accent/90 text-background px-6 py-5 rounded-lg text-left ${
											openSolutions[index] && "bg-main"
										}`}
									>
										<span className="uppercase">
											{item.title}
										</span>
										<span>
											{openSolutions[index] ? (
												<FaAngleUp />
											) : (
												<FaAngleDown />
											)}
										</span>
									</button>
								) : (
									""
								)}
							</div>

							{/* Submenu */}
							{item.desc && openSolutions[index] && (
								<ul className="dropdown mt-1 bg-accent/90 backdrop-blur-2xl rounded-xl p-6 text-left">
									<h3 className="text-main !font-semibold">
										{item.title}
									</h3>
									<h3 className="text-background text-base normal-case pt-3">
										{item.desc}
									</h3>
								</ul>
							)}
						</li>
					))}
				</ul>
			</div>
		</div>
	);
}
