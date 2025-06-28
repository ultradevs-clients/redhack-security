import Banner from "@/components/common/Banner";
import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import Services from "@/components/pentest/Services";
import WhyRedhackPTaaS from "@/components/services/WhyRedhackPTaaS";
import AdvancedPTaas from "@/components/services/AdvancedPTaas";
import RedhackSecurity from "@/components/services/RedhackSecurity";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";
import EnterpriseSolutions from "@/components/pentest/EnterpriseSolutions";

export default function page() {
	return (
		<div>
			<Banner
				title="Offensive Penetration Testing as a Service (PTaaS)"
				description=" Trusted, Continuous Pentesting for Faster, Smarter Remediation"
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/" }}
				img={img}
			/>
			<ExposeWeakness />
			<Services />
			<WhyRedhackPTaaS />
			<AdvancedPTaas />
			<RedhackSecurity />
			<EnterpriseSolutions />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
