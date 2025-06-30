import Image from "next/image";
import React from "react";
import img1 from "@/assets/images/service-image-1.webp";
import img2 from "@/assets/images/service-image-1.webp";
import img3 from "@/assets/images/service-image-1.webp";
import img4 from "@/assets/images/service-image-1.webp";

const services = [
	{
		title: "Effortless Onboarding ",
		desc: "Before testing begins, RedHack Security collaborates closely with your team to define a clear and detailed scope for the penetration test. Through our secure RedHack Client Portal, we collect and validate essential information—including infrastructure details, domains, servers, IP ranges, and exclusions. Once finalized, your dedicated project manager will schedule the testing timeline to align with your operational needs.",
		img: img1,
	},
	{
		title: "Secure Penetration Execution",
		desc: "RedHack’s expert team initiates the testing process by simulating real-world attacks to uncover vulnerabilities, misconfigurations, and exploitable weaknesses. All testing is performed with precision using both manual techniques and advanced tooling—aligned with globally recognized standards such as OWASP and PTES. Your systems and data are treated with the highest level of care throughout the engagement.",
		img: img2,
	},
	{
		title: "Actionable Risk Reporting",
		desc: "Upon completion of the initial assessment, we deliver a comprehensive report outlining identified risks and tailored remediation steps. The report is crafted for both technical and executive audiences, ensuring DevSecOps teams can take immediate action while decision-makers stay informed. Access remediation insights and support directly through the RedHack Client Console.",
		img: img3,
	},
	{
		title: "Retesting & Final Validation",
		desc: "After your team applies the recommended fixes, RedHack performs a full retest to verify remediation effectiveness. A final report is issued reflecting the updated security posture—highlighting resolved and remaining issues. Upon successful validation, we provide a penetration testing certificate valid for 12 months, reinforcing your commitment to proactive security.",
		img: img4,
	},
];

export default function PrecisionDrivenPenetrationTesting() {
	return (
		<div className="bg-accent text-background lg:px-0 px-5 service-details border-t border-background/10">
			<div className="container text-center lg:py-20 py-12">
				<h2 className="pb-12">
					RedHack’s Proven Approach to Precision-Driven Penetration
					Testing
				</h2>

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
