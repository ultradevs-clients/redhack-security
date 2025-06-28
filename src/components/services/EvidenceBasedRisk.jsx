"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const serviceDetails = [
	{
		title: "Internal Attack Surface Management (ASM)",
		description:
			"RedHack’s ASM continuously scans your internal infrastructure to identify and prioritize vulnerable assets and critical entry points, including Shadow IT risks. Our expert analysts investigate potential incidents to confirm true positives and sensitive exposures. We provide data-driven insights and evidence-backed reports to help you strengthen your internal security posture.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Employee Workstations and Computing Devices",
				description:
					"Employee workstations and computers are frequent targets for cyber threats. Malware, phishing campaigns, and other malicious software can compromise these critical endpoints.",
			},
			{
				title: "Critical Internal Server Infrastructure",
				description:
					"Internal servers hosting applications, databases, and sensitive information are high-value targets. Unauthorized access can result in data breaches or operational disruptions.",
			},
			{
				title: "Core Network Components and Infrastructure",
				description:
					"Core network components such as routers, switches, and firewalls are vital assets. If compromised, attackers can gain control over internal network traffic and systems.",
			},
			{
				title: "Endpoints",
				description:
					"Peripheral devices including printers, scanners, and other connected hardware can serve as entry points for attackers aiming to infiltrate the internal network.",
			},
			{
				title: "Authentication and Authorization Systems",
				description:
					"Systems managing user identity, authentication, and access control are primary targets for attackers attempting to compromise user credentials, especially privileged accounts.",
			},
			{
				title: "Internal Applications",
				description:
					"Both custom-developed and third-party applications used within the organization may contain vulnerabilities that could be exploited by threat actors.",
			},
			{
				title: "Internal APIs",
				description:
					"APIs that facilitate communication between software applications must be secured rigorously, as exposed or vulnerable APIs present significant attack vectors.",
			},
			{
				title: "Mobile Devices",
				description:
					"Employee mobile devices, including smartphones and tablets, that access the internal network introduce additional security risks if not properly managed and secured.",
			},
			{
				title: "Internet of Things (IoT) Assets",
				description:
					"Internet of Things (IoT) devices such as smart appliances and industrial sensors connected to the network can be exploited if left unsecured.",
			},
			{
				title: "Shadow IT",
				description:
					"Technologies or solutions developed or adopted outside the centralized IT governance pose security risks and increase the organization's vulnerability exposure.",
			},
		],
	},
	{
		title: "External Attack Surface Management(ASM)",
		description:
			"The external attack surface includes all assets exposed to the public internet and potential cyber threats. RedHack Security’s ASM continuously scans these external assets — including Shadow IT and Dark Web exposures — to identify risks and vulnerabilities that could lead to security incidents, enabling proactive defense and risk mitigation.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Web Applications",
				description:
					"Public-facing websites, customer portals, and content platforms often serve as entry points for attackers. RedHack evaluates these assets for vulnerabilities in logic, input validation, and outdated components.",
			},
			{
				title: "External APIs",
				description:
					"APIs that interface with external systems can leak data or expose functions if misconfigured. We assess these endpoints for authentication flaws, rate-limiting gaps, and injection vectors.",
			},
			{
				title: "Cloud Infrastructure & Services",
				description:
					"Infrastructure hosted on AWS, Azure, GCP, or similar platforms is scanned for insecure configurations, exposed buckets, and vulnerable services that could be exploited by attackers.",
			},
			{
				title: "Supply Chain & Vendor Integrations",
				description:
					"Third-party integrations and APIs, if compromised, can pose a significant risk. RedHack helps identify weak links in your vendor ecosystem and assesses inherited exposure.",
			},
			{
				title: "Domains & DNS Infrastructure",
				description:
					"We analyze your domain assets for misconfigurations, subdomain takeovers, DNS hijacking, and spoofing risks that could disrupt service or redirect traffic maliciously.",
			},
			{
				title: "Authentication Interfaces",
				description:
					"Public login pages and exposed auth endpoints are evaluated for brute force, credential stuffing, and session management weaknesses to prevent unauthorized access.",
			},
			{
				title: "Remote Access Services",
				description:
					"RDP, VPNs, and other remote access solutions are reviewed for exposure, patch status, and brute-force protection to ensure only authorized users can connect.",
			},
			{
				title: "Web & App Servers",
				description:
					"RedHack audits web servers for unpatched software, default configurations, and known exploits to reduce the risk of remote code execution or privilege escalation.",
			},
			{
				title: "Exposed Source Code Repositories",
				description:
					"We identify and assess publicly exposed GitHub, GitLab, and Bitbucket repositories for hardcoded secrets, credentials, and business logic disclosure.",
			},
			{
				title: "Shadow IT Assets",
				description:
					"Undocumented or unauthorized systems running outside formal IT oversight are located and assessed for vulnerabilities, ensuring complete visibility and control.",
			},
			{
				title: "Dark Web Exposure",
				description:
					"We monitor the dark web for compromised credentials, leaked corporate data, and mentions of your brand to identify potential breaches and proactively reduce risk.",
			},
		],
	},
];

export default function EvidenceBasedRisk() {
	const [openId, setOpenId] = useState(null);

	const toggle = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="service-details bg-accent text-background lg:py-20 py-12 relative">
			<div className="container text-center">
				<h2 className="!font-inter text-center w-full  px-5 ">
					Evidence-Based Risk Prioritization & Remediation
				</h2>
				<p className="opacity-80">
					RedHack Attack Surface Management (ASM) delivers deep,
					contextual insights beyond the attacker’s perspective,
					identifying exposed assets and their critical entry points.
					This evidence-based approach enables realistic risk
					assessment and drives effective prioritization and
					remediation strategies.
				</p>

				<div className="pt-56 lg:pt-32 lg:space-y-26 space-y-14">
					{serviceDetails.map((service, idx) => (
						<section
							key={idx}
							className={`flex w-full lg:gap-20 gap-10 lg:px-0 px-5 ${
								idx % 2 !== 0
									? "lg:flex-row flex-col-reverse"
									: "lg:flex-row-reverse flex-col-reverse"
							}`}
						>
							<div className="lg:w-2/4 bg-background/0 h-max lg:p-8 space-y-4">
								{service.rightSideCards.map((card, subIdx) => {
									const uniqueId = `${service.title}-${subIdx}`;
									return (
										<div
											key={uniqueId}
											className="rounded-md shadow-sm overflow-hidden"
										>
											<button
												className="w-full cursor-pointer bg-main/50 text-background rounded-sm text-left px-6 py-4 font-medium transition flex items-center justify-between"
												onClick={() => toggle(uniqueId)}
											>
												{card.title}{" "}
												<HiOutlineChevronRight />
											</button>
											<AnimatePresence initial={false}>
												{openId === uniqueId && (
													<motion.div
														key="content"
														initial={{
															height: 0,
															opacity: 0,
														}}
														animate={{
															height: "auto",
															opacity: 1,
														}}
														exit={{
															height: 0,
															opacity: 0,
														}}
														transition={{
															duration: 0.3,
														}}
														className="overflow-hidden mt-2 rounded-sm"
													>
														<div className="py-3 w-full px-5 bg-accent/20 text-background">
															{card.description}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									);
								})}
							</div>
							<div className="lg:w-2/4 text-left">
								<h2 className="!text-[27px]">
									{service.title}
								</h2>

								<p className="text-justify opacity-70 leading-relaxed">
									{service.description}
								</p>

								<div className="space-y-4 pt-8">
									<button className="btn ">learn more</button>
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
