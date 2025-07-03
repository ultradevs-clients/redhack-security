import Banner from "@/components/common/Banner";
import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import StayAhead from "@/components/services/StayAhead";
import PentestingPowirngRedhackSecurity from "@/components/services/PentestingPowirngRedhackSecurity";
import PrecisionDrivenPenetrationTesting from "@/components/services/PrecisionDrivenPenetrationTesting";
import ExposeWeakness from "@/components/common/ExposeWeakness";
import FindFixSecurity from "@/components/services/FindFixSecurity";
import StrategicFusion from "@/components/services/StrategicFusion";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";
import ChoosePenetration from "@/components/services/ChoosePenetration";

export default function page() {
	return (
		<div>
			<Banner
				title="Offensive Penetration Testing Services"
				description="Identify vulnerabilities before attackers do with expert pentesting."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/contact-us" }}
				img={img}
			/>
			<StayAhead />
			<PentestingPowirngRedhackSecurity />
			<PrecisionDrivenPenetrationTesting />
			<ExposeWeakness />
			<FindFixSecurity />
			<StrategicFusion />
			<ChoosePenetration />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
