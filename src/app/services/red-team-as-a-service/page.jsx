import Banner from "@/components/common/Banner";
import img from "@/assets/images/pentest-banner-image.webp";

import React from "react";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import RedhackRTaaS from "@/components/services/RedhackRTaaS";
import TeamingDetails from "@/components/services/TeamingDetails";
import Continies from "@/components/services/Continies";
import ServiceRTaaSMethodology from "@/components/services/ServiceRTaaSMethodology";
import PentestBenifits from "@/components/pentest/PentestBenifits";
import EnterpriseSolutions from "@/components/pentest/EnterpriseSolutions";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";

export default function page() {
	return (
		<div>
			<Banner
				title="Offensive Red Team as a Service (RTasS)"
				description="Simulate real attacks to uncover gaps in your cyber defenses."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/contact-us" }}
				img={img}
			/>
			<ExposeWeakness />
			<RedhackRTaaS />
			<TeamingDetails />
			<Continies />
			<ServiceRTaaSMethodology />
			<PentestBenifits />
			<EnterpriseSolutions />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
