import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/service-image-1.webp";
import img2 from "@/assets/images/service-image-1.webp";
import img3 from "@/assets/images/service-image-1.webp";
import img4 from "@/assets/images/service-image-1.webp";
import img5 from "@/assets/images/service-image-1.webp";
import img6 from "@/assets/images/service-image-1.webp";

const services = [
	{
		title: "Identify Vulnerabilities",
		desc: "RedHack’s RTaaS identifies security gaps across your technology, processes, and people. By uncovering real-world vulnerabilities, we help your security team gain actionable insights into potential breach points—empowering them to proactively strengthen your defenses.",
		img: img1,
	},
	{
		title: "Test Defense Mechanisms",
		desc: "We simulate real-world attack scenarios to rigorously test your existing security controls—firewalls, intrusion detection systems, access policies, and more. This helps ensure your defenses are not only present but effective, exposing gaps before adversaries can exploit them.",
		img: img2,
	},
	{
		title: "Enhance Incident Response ",
		desc: "Our red team simulates real-world attacks to thoroughly evaluate your incident response readiness. This exercise helps you measure how effectively your blue team detects, contains, and neutralizes threats—empowering faster, more coordinated reactions to cyber incidents.",
		img: img3,
	},
	{
		title: "Data-Driven Actionable Insights",
		desc: "Leveraging deep expertise in attack methods and Tactics, Techniques, and Procedures (TTPs), our advanced algorithms and AI-powered models analyze vast data streams in real-time. This enables the identification of subtle patterns and anomalies, providing precise insights to inform decisions and proactively reduce security risks.",
		img: img4,
	},
	{
		title: "Continuous Improvement",
		desc: "Red teaming is an ongoing process that drives continuous enhancement of your security posture. Our continuous penetration testing verifies and strengthens the effectiveness of your red and blue team operations over time.",
		img: img5,
	},
	{
		title: "Enhance Security Awareness",
		desc: "Red team exercises play a crucial role in increasing employee awareness of cybersecurity threats. By exposing your team to real-world attack simulations, these exercises reinforce the importance of following security best practices and promote a proactive security culture within your organization.",
		img: img6,
	},
];

export default function ServiceRTaaSMethodology() {
	return (
		<div className="bg-accent text-background lg:px-0 px-5 service-details">
			<div className="container text-center lg:py-20 py-12">
				<h2>RedHack Red Teaming as a Service (RTaaS) Methodology</h2>
				<p className="opacity-80">
					RedHack Red Team as a Service (RTaaS) empowers organizations
					to proactively enhance their security posture through
					advanced adversarial simulations. Designed to uncover and
					validate potential entry points before a real breach occurs,
					RedHack’s RTaaS reveals how your IT infrastructure can be
					compromised across various attack vectors. In the event of a
					ransomware incident or data breach, our expert team stands
					ready to support your response and deliver rapid, effective
					remediation.
				</p>

				<div className="lg:space-y-20 space-y-5 lg:pt-10">
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
