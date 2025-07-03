"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const serviceDetails = [
	{
		title: "Proactive Threat Management with RedHack",
		subtitle: "",
		description:
			"RedHack offers a fully integrated security platform aligned with Continuous Exposure Threat Management (CETM). Combining advanced offensive security with continuous threat monitoring, we provide a proactive solution to manage evolving cyber risks, reduce exposure, and strengthen security posture.",
		subDescription:
			"Our approach helps enterprises build robust threat management programs that maximize ROI and deliver real business value.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Penetration Testing as a Service (PTaaS)",
				description:
					"RedHack’s PTaaS combines expert-led penetration testing with continuous assessments to identify vulnerabilities and verify fixes. This approach speeds up risk prioritization, reduces operational burden, and cuts costs on tools and expertise.",
			},
			{
				title: "Continuous Penetration Testing",
				description:
					"RedHack performs ongoing penetration tests and automated scans across applications, APIs, networks, cloud environments, DevOps, and IoT to ensure thorough, scalable security coverage.",
			},
			{
				title: "Attack Surface Management (ASM)",
				description:
					" RedHack’s ASM continuously maps and prioritizes critical assets and entry points, providing deep insights beyond typical attacker views. This helps create an effective, risk-based remediation roadmap.",
			},
			{
				title: "Red Teaming as a Service (RTaaS)",
				description:
					"RedHack’s RTaaS simulates advanced attacker tactics to test organizational defenses and response capabilities. These exercises reveal security gaps and improve readiness against sophisticated threats.",
			},
		],
	},
	{
		title: "Building a Resilient CTEM Program with RedHack",
		subtitle: "",
		description:
			"At RedHack Security Inc., we believe building a strong Continuous Threat Exposure Management (CTEM) program shouldn't be complex—but strategic. Our approach is built on collaboration, clarity, and continuous improvement. We help organizations establish a clear roadmap by aligning people, processes, and technology to actively reduce threat exposure and strengthen cyber resilience.",
		subDescription: "",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Dedicated Cybersecurity Team",
				description:
					"Appoint skilled professionals focused on continuous threat identification, validation, and response.",
			},
			{
				title: "Integrated Threat Intelligence",
				description:
					"Combine real-time threat intelligence with vulnerability assessments for context-aware decisions.",
			},
			{
				title: "Proactive Incident Response",
				description:
					"Prepare for real-world attacks with clear, tested protocols to reduce downtime and damage.",
			},
			{
				title: "Regular Security Assessments",
				description:
					"Perform scheduled audits and red team simulations to discover blind spots and fix them early.",
			},
			{
				title: "Continuous Testing & Monitoring",
				description:
					"Ensure 24/7 visibility with automated scans, ongoing penetration testing, and alert-driven monitoring.",
			},
			{
				title: "Cybersecurity Awareness Culture",
				description:
					"Involve every level of your organization through training, simulations, and awareness campaigns.",
			},
		],
	},
];

export default function ServiceDetails() {
	const [openId, setOpenId] = useState(null);

	const toggle = (id) => {
		setOpenId(openId === id ? null : id);
	};

	return (
		<div className="service-details bg-accent text-background lg:py-20 py-12 relative">
			<div className="container">
				<h2 className="!font-inter bg-background/10 absolute py-10  text-center w-full top-0 left-0 px-5 ">
					Comprehensive Penetration Testing Across Critical Domains
				</h2>

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
								<h3 className="text-lg pt-3 font-semibold opacity-80">
									{service.subtitle}
								</h3>
								<p className="text-justify opacity-70 leading-relaxed">
									{service.description}
								</p>
								<p className="text-justify opacity-70 leading-relaxed !py-0">
									{service.subDescription}
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
