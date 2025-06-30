import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/service-image-1.webp";
import img2 from "@/assets/images/service-image-1.webp";
import img3 from "@/assets/images/service-image-1.webp";
import img4 from "@/assets/images/service-image-1.webp";

const services = [
	{
		title: "Flexible Testing Aligned with Your Business Needs",
		desc: "Choose the testing approach that fits your organization best—human-led, continuous, or hybrid. RedHack provides the agility to adapt to your application security goals without compromising on precision or performance.",
		img: img1,
	},

	{
		title: "Live & On-Demand AppSec Testing at Your Fingertips",
		desc: "Gain full control over your application security lifecycle. Add assets anytime, initiate live or on-demand testing, perform retests to validate fixes, and generate tailored reports—all through a unified and intuitive platform.",
		img: img2,
	},

	{
		title: "Integrate Security Seamlessly into DevSecOps",
		desc: "Embed security into every phase of your software development lifecycle. RedHack empowers your teams to identify vulnerabilities early, automate testing efficiently, and scale secure development without slowing innovation.",
		img: img3,
	},

	{
		title: "Accelerate Compliance & Secure Code Delivery",
		desc: "Maintain compliance and secure every release with confidence. Through continuous testing and regular audits, RedHack ensures faster vulnerability detection, remediation, and complete coverage of your apps and APIs.",
		img: img4,
	},
];

export default function ApplicationSecurityTesting() {
	return (
		<div className="bg-accent text-background lg:px-0 px-5 service-details">
			<div className="container text-center lg:py-20 py-12">
				<h2>Application Security Testing for Scalable Performance</h2>
				<p className="opacity-80">
					RedHack’s application security testing adapts to your unique
					business and security needs—delivering the flexibility to
					choose your preferred testing methodology while ensuring
					speed and scalability for any environment.
				</p>
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
