import Banner from "@/components/common/Banner";
import React from "react";
import img from "@/assets/images/pentest-banner-image.webp";
import Accelerate from "@/components/services/Accelerate";
import RedhackUnified from "@/components/services/RedhackUnified";
import EnterpriseSolutions from "@/components/pentest/EnterpriseSolutions";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import CTA from "@/components/common/CTA";

export default function page() {
	return (
		<div>
			<Banner
				title="Offensive Continues Penetration Testing"
				description=" Continuous pentesting that accelerates security & reduces risk."
				btn1={{ name: "Book a Demo", path: "/" }}
				btn2={{ name: "Contact Us", path: "/" }}
				img={img}
			/>
			<Accelerate />
			<RedhackUnified />
			<EnterpriseSolutions />
			<RedhackCertificate />
			<CTA />
		</div>
	);
}
