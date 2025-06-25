import CTA from "@/components/common/CTA";
import RedhackCertificate from "@/components/common/RedhackCertificate";
import Banner from "@/components/homepage/Banner";
import Blogs from "@/components/homepage/Blogs";
import OurServices from "@/components/homepage/OurServices";
import Services from "@/components/homepage/Services";

export default function page() {
	return (
		<div className="overflow-hidden">
			<Banner />
			<Services />
			<OurServices />
			<Blogs />
			<CTA />
			<RedhackCertificate />
		</div>
	);
}
