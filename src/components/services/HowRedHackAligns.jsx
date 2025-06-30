"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const solutions = [
	{
		id: 1,
		title: "Unified Security Platform",
		content:
			"RedHack delivers a unified platform that integrates PTaaS, continuous penetration testing, automated scanning, Attack Surface Management (ASM), and red teaming adversarial testing. This seamless integration streamlines workflows, consolidates evidence-based security findings, enhances asset visibility, and empowers proactive threat management.",
	},

	{
		id: 2,
		title: "Platform Technology & Tool Alignment",
		content:
			"Our platform is built with cutting-edge technology, aligning advanced tools for penetration testing, continuous assessments, and automated vulnerability scanning. RedHack’s cohesive toolset ensures thorough analysis and efficient remediation workflows, supporting a robust and agile security posture.",
	},

	{
		id: 3,
		title: "Proactive Threat Exposure Monitoring",
		content:
			"RedHack elevates threat exposure management through constant monitoring, automated retesting, intelligent vulnerability prioritization, and fast, actionable reporting. Our platform supports frequent security evaluations across diverse environments—networks, applications, APIs, and cloud—ensuring evolving risks are identified and mitigated promptly.",
	},

	{
		id: 4,
		title: "Strengths & Unique Benefits",
		content:
			"RedHack offers a comprehensive offensive security solution featuring on-demand retesting, compliance-aligned reporting, continuous exposure validation, and customizable frameworks. These strengths make RedHack an ideal choice for enterprises seeking full-spectrum, adaptive threat exposure management tailored to modern cyber challenge",
	},
];

export default function HowRedHackAligns() {
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
		<div className="services bg-accent text-background pt-12 lg:pt-24 lg:pb-32 pb-5">
			<div className="container px-5 lg:px-0 text-center">
				<h2 className="!font-inter ">How RedHack Aligns With CETM</h2>
				<p className="opacity-80">
					RedHack stands out with its comprehensive, integrated
					platform offering a broad spectrum of adversarial and
					continuous security testing services. This makes RedHack an
					ideal partner for organizations seeking a complete and
					proactive threat exposure management solution aligned with
					the CETM framework.
				</p>

				<section className="lg:flex hidden gap-4 pt-6">
					<div className="text-background space-y-4 hidden md:grid w-4/12 overflow-x-auto mx-auto rounded-lg ">
						{solutions.map((solution) => (
							<button
								key={solution.id}
								onClick={() => handleService(solution.id)}
								className={`btn-service-card !py-8 ${
									currentServiceId === solution.id
										? "bg-main"
										: "bg-background/10 backdrop-blur-2xl"
								}`}
							>
								{solution.title}
							</button>
						))}
					</div>
					<div className="w-8/12 bg-background/10 backdrop-blur-2xl rounded-xl p-14 text-left">
						<h2 className="text-main  !text-3xl">
							{currentService.title}
						</h2>
						<h3 className="text-background text-xl pt-10">
							{currentService.content}
						</h3>
					</div>
				</section>

				<ul className="font-gilroy block lg:hidden font-semibold uppercase text-lg space-y-4 pb-10 border-b border-background/5 ">
					{solutions.map((item, index) => (
						<li key={index}>
							{/* Main item (with or without submenu) */}
							<div>
								{item.content ? (
									<button
										onClick={() => toggleSolution(index)}
										className={`flex items-center justify-between w-full bg-background/10 text-background px-6 py-5 rounded-lg text-left ${
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
							{item.content && openSolutions[index] && (
								<ul className="dropdown mt-1 bg-background/10 backdrop-blur-2xl rounded-xl p-6 text-left">
									<h3 className="text-main !font-semibold">
										{item.title}
									</h3>
									<h3 className="text-background text-base normal-case pt-3">
										{item.content}
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
