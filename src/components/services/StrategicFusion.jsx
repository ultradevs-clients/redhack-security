"use client";
import { useState } from "react";
import serviceImg from "@/assets/images/our-service-image-1.webp";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

const ourServices = [
	{
		logo: serviceImg,
		title: "Certified Ethical Hackers",
		desc: "RedHack’s penetration tests are conducted exclusively by our in-house, certified ethical hackers located globally. Our skilled security experts specialize in uncovering complex vulnerabilities that automated tools often miss. While advanced AI assists with validation and routine tasks, our testers manually probe to identify hidden risks and attack vectors beyond technology’s reach.",
	},
	{
		logo: serviceImg,
		title: "AI-Driven Testing",
		desc: "RedHack employs a robust AI-powered automation framework to streamline vulnerability detection, validation, and analysis. As pioneers in integrating AI into penetration testing, every RedHack tester is trained to leverage AI tools that accelerate thorough and accurate results. Each engagement enhances and evolves our proprietary AI capabilities.",
	},
	{
		logo: serviceImg,
		title: "Secure Cloud Platform",
		desc: "All testing services are delivered through the RedHack Cloud Platform — a secure, compliant, and scalable environment designed for efficient penetration testing and vulnerability management. Our platform meets industry standards including SOC 2, ISO 27001, GDPR, HIPAA, and PCI DSS, providing clients with a seamless experience for retesting, scanning, and detailed reporting for up to one year after testing begins.",
	},
];

export default function StrategicFusion() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const nextCard = () => {
		setCurrentIndex((prev) => (prev + 1) % ourServices.length);
	};

	const prevCard = () => {
		setCurrentIndex(
			(prev) => (prev - 1 + ourServices.length) % ourServices.length
		);
	};

	return (
		<div className="our-service lg:py-20 py-12 px-5 lg:px-5">
			<div className="container">
				<div className="text-center gap-8 lg:gap-0 justify-between items-center">
					<h2>
						RedHack’s Strategic Fusion of Manual Expertise, AI, and
						Cloud-Driven Automation
					</h2>
					<p>
						RedHack delivers expert manual penetration testing by
						certified ethical hackers, enhanced with AI, automation,
						and a secure cloud platform for efficient, high-quality
						results. Our approach ensures comprehensive security
						insights to proactively protect your critical assets.
					</p>
				</div>
				<section className="lg:grid hidden grid-cols-3 gap-5 pt-12">
					{ourServices.map((service, idx) => (
						<div
							key={idx}
							className="w-full bg-background border border-accent/30 p-8 rounded-2xl"
						>
							<Image
								src={service.logo}
								alt="service logo"
								className="w-32 mx-auto"
							/>
							<p className="opacity-70">"{service.desc}"</p>
							<h3 className="text-xl font-semibold">
								{service.title}
							</h3>
						</div>
					))}
				</section>

				{/* Mobile Slider */}
				<div className="pt-8 lg:hidden">
					<div className="w-full bg-background border border-accent/30 p-8 rounded-2xl">
						<Image
							src={ourServices[currentIndex].logo}
							alt="service logo"
							className="w-32 mx-auto"
						/>
						<p className="opacity-70">
							"{ourServices[currentIndex].desc}"
						</p>
						<h3 className="text-xl font-semibold">
							{ourServices[currentIndex].title}
						</h3>
					</div>

					<div className="flex justify-center pt-8 gap-4">
						<button onClick={prevCard} className="p-4">
							<RiArrowLeftLine className="text-3xl" />
						</button>
						<button onClick={nextCard} className="p-4">
							<RiArrowRightLine className="text-3xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
