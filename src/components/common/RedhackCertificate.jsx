import certificateImg1 from "@/assets/images/certificate-1.png";
import Image from "next/image";

const certificates = [
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
	{
		img: certificateImg1,
		alt: "",
	},
];
export default function RedhackCertificate() {
	return (
		<div className="redhack-certificate relative bg-accent z-0 overflow-hidden">
			<div className="lg:py-20 py-14 lg:px-0 px-5">
				<div className="container border-glow border-2 border-main rounded-3xl lg:px-20 lg:py-10 px-10 py-6">
					<h2 className="!normal-case !text-2xl lg:!text-4xl text-center text-background">
						Globally Certified Experts Powering RedHack Security
					</h2>
					<div className="flex mx-auto justify-start lg:justify-center items-center overflow-x-auto lg:pt-10 pt-5 gap-10 pb-5 scrollbar-thin scrollbar-hide">
						{certificates.map((certificate, idx) => (
							<Image
								key={idx}
								src={certificate.img}
								alt={certificate.alt}
								className="w-20 h-max"
							/>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
