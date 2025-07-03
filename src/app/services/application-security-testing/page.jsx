import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import Banner from "@/components/common/Banner";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import ApplicationSecurityTesting from "@/components/services/ApplicationSecurityTesting";
import ApplicationSecurityCards from "@/components/services/ApplicationSecurityCards";
import PentestingDetails from "@/components/common/PentestingDetails";
import pentestImg1 from "@/assets/images/internal-pentesting.png";
import RedHackComprehensive from "@/components/services/RedHackComprehensive";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";

const pentestingServices = [
	{
		title: "Application Peneting",
		description:
			"RedHack’s application security penetration testing is integrated across the entire Software Development Life Cycle (SDLC), empowering DevOps teams to proactively assess, identify, and remediate vulnerabilities at every critical stage — from initial design and development, through testing and deployment, to post-release maintenance. This ensures that security is embedded into the application from the ground up, reducing risk and accelerating secure software delivery. ",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Application Peneting Vulnerabilities",
		vulnerabilities: [
			{
				title: "Define secure requirements & design",
			},
			{
				title: "Analyze source code for security vulnerabilities",
			},
			{
				title: "Testing running applications",
			},
			{
				title: "Assess server and application configurations",
			},
			{
				title: "Check patches for regressions or new bugs",
			},
		],
	},
	{
		title: "Dynamic Application Security Testing (DAST)",
		description:
			"RedHack’s DAST is a black-box penetration testing approach that evaluates a running application from the outside by sending various inputs and analyzing its responses. This method helps identify security vulnerabilities without access to the source code. Typically performed later in the development lifecycle, DAST is ideal for testing applications in production or staging environments to uncover real-world risks. ",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Dynamic Application Security Testing (DAST) Vulnerabilities",
		vulnerabilities: [
			{
				title: "Identify vulnerable applications across your environment",
			},
			{
				title: "Discover CVEs in open-source components ",
			},
			{
				title: "Detect runtime vulnerabilities during execution",
			},
			{
				title: "Customize reports and schedule targeted retesting",
			},
		],
	},
	{
		title: "Static Application Security Testing (SAST)",
		description:
			"RedHack Security’s SAST uses a white-box testing approach to analyze source code for security vulnerabilities that could expose your applications to attacks. By scanning code before compilation, it helps identify and fix issues early in development, strengthening your security posture from the start.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Static Application Security Testing (SAST) Vulnerabilities",
		vulnerabilities: [
			{
				title: "Identify vulnerabilities early in the development lifecycle",
			},
			{
				title: "Get real-time feedback to fix issues early in the SDLC",
			},
			{
				title: "Release applications faster with customizable reporting",
			},
			{
				title: "Run live or on-demand scans to ensure secure source code",
			},
		],
	},
	{
		title: "Secure Code Review",
		description:
			"RedHack Security conducts thorough secure code reviews by analyzing your application’s source code to detect vulnerabilities and security weaknesses. This includes reviewing secure code repositories to ensure comprehensive protection and strengthen your application’s overall security posture.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Secure Code Review Vulnerabilities",
		vulnerabilities: [
			{
				title: "Identify vulnerabilities early in development",
			},
			{
				title: "Improve code quality and reduce logic flaws",
			},
			{
				title: "Detect backdoors and insecure implementations",
			},
			{
				title: "Lower compliance and legal risks efficiently",
			},
		],
	},
	{
		title: "API Fuzz Testing",
		description:
			"RedHack Security employs advanced fuzz testing techniques to evaluate APIs by sending malformed or random data inputs. This method uncovers hidden vulnerabilities by analyzing API behavior under unexpected conditions, helping to identify exploitable weaknesses and strengthen your application’s security defenses. ",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "API Fuzz Testing Vulnerabilities",
		vulnerabilities: [
			{
				title: "Reveal vulnerabilities missed by other methods",
			},
			{
				title: "Strengthen overall application security posture",
			},
			{
				title: "Improve efficiency with automated input generation",
			},
			{
				title: "Detect issues early in both development and deployment",
			},
		],
	},
	{
		title: "Application Security Posture Management",
		description:
			"A continuous and proactive approach to monitor, assess, and improve your application’s overall security health. This service provides real-time visibility, risk prioritization, and compliance tracking to maintain strong security posture throughout your software ecosystem.",
		buttonLink: "",
		image: pentestImg1,
		subtitle: "Application Security Posture Management Vulnerabilities",
		vulnerabilities: [
			{
				title: "Continuously identify and manage vulnerabilities",
			},
			{
				title: "Strengthen compliance across security standards",
			},
			{
				title: "Improve awareness with real-time feedback loops",
			},
			{
				title: "Prioritize risks with detailed application assessments",
			},
		],
	},
];

export default function page() {
	return (
		<div>
			<Banner
				title=" Offensive  Application Penetration Testing"
				description="Identify critical flaws with real-world attack simulations by experts."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/contact-us" }}
				img={img}
			/>
			<ExposeWeakness />
			<ApplicationSecurityTesting />
			<ApplicationSecurityCards />
			<PentestingDetails
				pentestingServices={pentestingServices}
				title={"RedHack Real-Time Application Security Solutions"}
				desc={
					"Comprehensive Penetration Testing Across Critical Domains involves systematically assessing and identifying vulnerabilities in key areas of an organization's infrastructure, applications, and networks to ensure robust security and resilience against cyber threats."
				}
			/>
			<RedHackComprehensive />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
