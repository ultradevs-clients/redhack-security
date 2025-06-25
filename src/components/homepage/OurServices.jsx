"use client";
import { useState } from "react";
import serviceImg from "@/assets/images/our-service-image-1.webp";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

const ourServices = [
	{
		logo: serviceImg,
		title: "Red Team Experts",
		desc: "Our Red Team Experts execute advanced, realistic cyberattack simulations that reveal critical vulnerabilities. Their deep expertise helps organizations proactively strengthen defenses and elevate their security posture with precision and thoroughness.",
	},
	{
		logo: serviceImg,
		title: "Research-Backed Methods ",
		desc: "We apply cutting-edge cybersecurity research and threat intelligence to craft customized testing strategies. This proactive, data-driven approach uncovers complex risks early, keeping clients ahead of evolving cyber threats with innovative solutions.",
	},
	{
		logo: serviceImg,
		title: "Ethical & Transparent  ",
		desc: "We uphold the highest ethical standards and maintain full transparency throughout every engagement. Clear communication and responsible data handling build lasting trust, ensuring clients have complete confidence in our security services.",
	},
];
export default function OurServices() {
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
				<div className="flex lg:flex-row flex-col gap-8 lg:gap-0 justify-between items-center">
					<h2>What Makes Us Different</h2>
					<button className="btn btn--outline text-main !normal-case">
						Our Services
					</button>
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
