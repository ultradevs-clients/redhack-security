import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/service-image-1.webp";
import img2 from "@/assets/images/service-image-1.webp";
import img3 from "@/assets/images/service-image-1.webp";
import img4 from "@/assets/images/service-image-1.webp";
import img5 from "@/assets/images/service-image-1.webp";

const services = [
	{
		title: "Operational Efficiency & Cost Optimization",
		desc: "RedHack streamlines your entire security workflow by consolidating assets, vulnerabilities, and test findings into a single platform. This reduces the need for multiple tools, automates routine processes, and accelerates remediation—ultimately cutting costs and maximizing ROI across your security stack.",
		img: img1,
	},
	{
		title: "Enhanced Visibility & Intelligent Prioritization",
		desc: "Gain a centralized, real-time view of your attack surface with detailed contextual insights. Our platform empowers teams to prioritize vulnerabilities based on risk, business impact, and system dependencies—ensuring the most critical threats are addressed first.",
		img: img2,
	},
	{
		title: "Scalable & Integrated Security Architecture",
		desc: "Effortlessly scale your testing operations across teams, regions, or infrastructures. RedHack’s platform integrates seamlessly with existing tools and processes, supporting continuous growth without disrupting workflows or introducing complexity.",
		img: img3,
	},
	{
		title: "Actionable Insights & Executive Reporting",
		desc: "From technical breakdowns to high-level executive summaries, our customizable reporting framework supports every stakeholder. With unified dashboards and data-driven threat intelligence, your teams can make faster, more informed decisions based on business-critical context.",
		img: img4,
	},
	{
		title: " Expert Support & Attack Path Visualization",
		desc: "Backed by our elite cybersecurity team, RedHack delivers expert-led threat analysis and attack path validation. Visual mapping of interconnected assets and vulnerabilities helps you identify chokepoints and proactively block potential exploitation routes with precision.",
		img: img5,
	},
];

export default function RedhackUnified() {
	return (
		<div className="bg-accent text-background lg:px-0 px-5 service-details">
			<div className="container text-center lg:py-20 py-12">
				<h2> RedHack Unified Security Platform</h2>

				<div className="lg:space-y-20 space-y-5 pt-8 lg:pt-16">
					{services.map((item, idx) => (
						<section
							key={idx}
							className={`flex w-full gap-6  ${
								idx % 2 !== 0
									? " lg:flex-row-reverse flex-col"
									: "lg:flex-row flex-col"
							}`}
						>
							<figure className="lg:w-2/4 w-full">
								<Image
									className="w-full h-full object-cover rounded-lg"
									src={item.img}
									alt="Servive image"
								/>
							</figure>
							<div className="lg:w-2/4 text-left">
								<h2 className="!text-[27px] !normal-case">
									{item.title}
								</h2>
								<p className="text-justify opacity-70 leading-relaxed">
									{item.desc}
								</p>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
