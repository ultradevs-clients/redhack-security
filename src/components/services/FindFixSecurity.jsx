"use client";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";

const solutions = [
	{
		id: 1,
		title: "Expert-Led Vulnerability Testing",
		content:
			"Proactively identify, exploit, and remediate real-world security weaknesses across your applications, networks, and APIs. RedHack’s offensive testing is designed to uncover hidden vulnerabilities before attackers do—ensuring your digital infrastructure is secure, resilient, and compliant.",
	},
	{
		id: 2,
		title: "Certified In-House Pentesters",
		content:
			"RedHack’s penetration tests are conducted by full-time, in-house security professionals with advanced certifications including OSCP, eWPTX, CEH, and SANS. Our team brings deep technical expertise and offensive mindset to every engagement, offering human-led insights beyond automated tools.",
	},
	{
		id: 3,
		title: "Fast Delivery & Real-Time Support",
		content:
			"We prioritize both speed and quality. RedHack ensures fast project delivery without sacrificing depth, while providing real-time updates, responsive communication, and full visibility through the RedHack Client Dashboard—keeping you informed every step of the way.",
	},
	{
		id: 4,
		title: "Compliance-Ready Assessments",
		content:
			"Whether you're preparing for SOC 2, PCI DSS, HIPAA, ISO 27001, or other compliance audits, RedHack delivers custom-tailored penetration testing aligned with regulatory and business objectives. Our audit-ready reports help you meet and exceed industry standards.",
	},
	{
		id: 5,
		title: "Unlimited Retesting Assurance",
		content:
			"Once your team applies fixes, RedHack provides unlimited retesting to verify that all vulnerabilities have been fully resolved. We deliver updated reports that reflect your current security posture—no extra fees, no hidden conditions.",
	},
	{
		id: 6,
		title: "Smart Platform. Continuous Coverage.",
		content:
			"RedHack’s powerful client platform gives you 24/7 access to automated scans, manual test requests, vulnerability tracking, remediation timelines, and reporting. It’s your centralized hub for managing offensive security engagements with full transparency and control.",
	},
];

export default function FindFixSecurity() {
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
		<div className="services bg-accent pt-12 lg:pt-24 lg:pb-32 pb-5">
			<div className="container px-5 lg:px-0 text-center">
				<h2 className="!font-inter lg:pb-12 pb-8 text-background">
					Find and Fix Security Gaps with RedHack’s Expert Penetration
					Testing
				</h2>

				<section className="lg:flex hidden gap-4">
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
