import Banner from "@/components/common/Banner";
import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import EvidenceBasedRisk from "@/components/services/EvidenceBasedRisk";
import SurfaceCoverage from "@/components/services/SurfaceCoverage";
import WhyRedHackASM from "@/components/services/WhyRedHackASM";
import PentestingDetails from "@/components/common/PentestingDetails";
import pentestImg1 from "@/assets/images/pentest-service.png";
import pentestImg2 from "@/assets/images/pentest-service2.png";
import pentestImg3 from "@/assets/images/internal-pentesting.png";
import pentestImg4 from "@/assets/images/internal-pentesting.png";
import pentestImg5 from "@/assets/images/internal-pentesting.png";
import EnterpriseSolutions from "@/components/pentest/EnterpriseSolutions";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";

const pentestingServices = [
	{
		title: "Asset Discovery",
		description:
			"RedHack’s Attack Surface Management continuously discovers and inventories all exposed assets and critical attacker entry points within your security ecosystem. This includes assets owned internally as well as those managed by third parties such as cloud providers, partners, supply chain vendors, and external contractors.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Asset Discovery Vulnerabilities",
		vulnerabilities: [
			{
				title: "Internal and External: Total count of known and unknown exposed assets",
			},
			{
				title: "External: IP addresses, IP blocks, websites, and subdomains",
			},
			{
				title: "Asset locations across your infrastructure",
			},
			{
				title: "Technologies in use",
			},
			{
				title: "Shadow IT: Unmanaged assets and their locations",
			},
			{
				title: "Dark Web exposures and risks detected",
			},
		],
	},
	{
		title: "Asset Inventory & Classification",
		description:
			"After identifying all assets during the Asset Discovery phase, RedHack’s platform categorizes and classifies them based on risk severity, sensitivity, and their importance to security and business operations. This organized inventory serves as a foundation for targeted penetration testing and red teaming efforts, ensuring focus on the highest-risk assets aligned with your real-world threat landscape.",
		buttonLink: "",
		image: pentestImg2,
		subtitle: "Asset Inventory & Classification Vulnerabilities",
		vulnerabilities: [
			{
				title: "Risk-Based Categorization",
			},
			{
				title: "Real-Time Asset Inventory",
			},
			{
				title: "Automated Classification",
			},
			{
				title: "Penetration Testing Ready",
			},
			{
				title: "Continuous Surface Evaluation",
			},
		],
	},
	{
		title: "Vulnerability Identification & Risk Assessment",
		description:
			"At this stage, all exposed assets and potential attacker entry points across your attack surface are identified, cataloged, and classified. RedHack’s platform analyzes these attack vectors by evaluating threats, attacker profiles, Tactics, Techniques, and Procedures (TTPs), along with the potential impact of successful exploits.",
		description2:
			"Leveraging extensive expertise and contextual knowledge of diverse technology stacks, RedHack extracts detailed data for historical context and workflow management, delivering evidence-based remediation guidance. The platform provides comprehensive insights,  ",
		buttonLink: "",
		image: pentestImg3,
		subtitle:
			"Vulnerability Identification & Risk Assessment Vulnerabilities",
		vulnerabilities: [
			{
				title: "Asset-specific vulnerabilities with associated logs",
			},
			{
				title: "Impacted assets and their locations",
			},
			{
				title: "CVSS scores and vulnerability vector classifications",
			},
			{
				title: "Proof of Concept (PoC) demonstrations for vulnerabilities",
			},
			{
				title: "Cloud environment vulnerabilities across AWS, Azure, and GCP instances",
			},
		],
	},
	{
		title: "Threat-Based Asset Prioritization & Scoring",
		description:
			"RedHack’s platform intelligently prioritizes vulnerabilities based on severity, business impact, and exploitation likelihood. Our advanced risk scoring system integrates OSINT intelligence, CVSS data, and breach history to assign criticality levels to each asset and its associated vulnerabilities.",
		buttonLink: "",
		image: pentestImg4,
		subtitle: "Threat-Based Asset Prioritization & Scoring Vulnerabilities",
		vulnerabilities: [
			{
				title: "Prioritized risks across known and unknown assets",
			},
			{
				title: "Detection of Shadow IT and unmanaged assets",
			},
			{
				title: "Insights into Dark Web exposures",
			},
			{
				title: "Real-time alerts for already compromised data",
			},
		],
	},
	{
		title: "Risk Mitigation & Intelligence Reporting",
		description:
			"Once vulnerabilities and exposed assets have been identified, classified, and prioritized, RedHack works closely with your team to develop and execute an effective remediation plan.",
		description2:
			"Our platform provides real-time visibility into risk exposure, offering actionable insights that empower your security and DevSecOps teams to mitigate threats faster. With continuous access to your evolving attack surface, you can strengthen defenses.",
		buttonLink: "",
		image: pentestImg5,
		subtitle: "Risk Mitigation & Intelligence Reporting Vulnerabilities",
		vulnerabilities: [
			{
				title: "Prioritized list of high-risk assets and vulnerabilities",
			},
			{
				title: "Detailed remediation guidance based on threat context",
			},
			{
				title: "Expert support from RedHack security professionals",
			},
			{
				title: "Actionable reports tailored for technical and executive teams",
			},
			{
				title: "Full platform access and reporting tools throughout the engagement",
			},
		],
	},
];

export default function page() {
	return (
		<div>
			<Banner
				title="Offensive Attack Surface management(ASM)"
				description="RedHack ASM continuously finds and prioritizes critical attacker entry points."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/" }}
				img={img}
			/>
			<ExposeWeakness />
			<EvidenceBasedRisk />
			<SurfaceCoverage />
			<WhyRedHackASM />
			<PentestingDetails
				pentestingServices={pentestingServices}
				title={"Offensive Attack Surface Management (ASM)"}
				desc={
					"Continuous discovery and monitoring of your attack surface to identify exposures and assess risk in real-time. RedHack helps you map, prioritize, and manage assets with evidence-based insights — accelerating security testing and driving stronger, more effective protection."
				}
				button={{ name: "Learn More", to: "/contact" }}
			/>
			<EnterpriseSolutions />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
