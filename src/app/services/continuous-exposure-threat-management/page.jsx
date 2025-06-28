import Banner from "@/components/common/Banner";
import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import PentestingDetails from "@/components/common/PentestingDetails";
import pentestImg1 from "@/assets/images/internal-pentesting.png";
import HowRedHackAligns from "@/components/services/HowRedHackAligns";

const pentestingServices = [
	{
		title: "Security Assessment & Prioritization",
		description:
			"Gain complete visibility across your digital assets through comprehensive vulnerability assessments and intelligent risk prioritization. RedHack Security helps your team identify, prioritize, and address the most critical threats—ensuring resources are focused where they matter most. Powered by our integrated PTaaS platform, Attack Surface Management (ASM), and continuous assessments, your defenses evolve proactively with every engagement.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Security Assessment & Prioritization Vulnerabilities",
		vulnerabilities: [
			{
				title: "Penetration Testing As A Service (PTaaS)",
			},
			{
				title: "Red Team As A Service (RTaaS)",
			},
			{
				title: "Attack Surface Management (ASM)",
			},
		],
	},
	{
		title: "Advanced Offensive Security Operations",
		description:
			"Simulate real-world cyberattacks to uncover hidden vulnerabilities before adversaries do. RedHack’s expert-led penetration testing, red teaming, and attack surface management deliver actionable insights into your defenses. From web apps and APIs to cloud, IoT, and social engineering, we replicate the tactics of sophisticated attackers—giving you the confidence to stay one step ahead.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Advanced Offensive Security Operations Vulnerabilities",
		vulnerabilities: [
			{
				title: "Network Penetration Testing",
			},
			{
				title: "Application Penetration Testing",
			},
			{
				title: "API Security Testing",
			},
			{
				title: "Mobile Application Testing",
			},
			{
				title: "Cloud Environment Testing",
			},
			{
				title: "IoT Security Assessments",
			},
			{
				title: "Thick Client Application Testing",
			},
			{
				title: "DevOps Infrastructure Testing",
			},
		],
	},
];

export default function page() {
	return (
		<div>
			<Banner
				title="RedHack Continuos Threat Exposure Management (CETM)"
				description="RedHack unifies PTaaS, ASM & Red Teaming for proactive security."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/" }}
				img={img}
			/>
			<ExposeWeakness />
			<PentestingDetails
				pentestingServices={pentestingServices}
				title={"CETM-Aligned Threat Management by RedHack"}
				desc={
					"Our three-step CETM framework empowers your security posture with continuous visibility, assessment, and response—keeping your organization secure in an ever-changing threat landscape."
				}
			/>
			<HowRedHackAligns />
		</div>
	);
}
