import React from "react";
import pentestinImg from "@/assets/images/pentest-benifit-1.webp";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function AdvancedPTaas() {
	return (
		<div className="advanced-ptaas bg-accent text-background text-center lg:py-20 py-12 lg:px-0 px-5">
			<div className="container">
				<h2>Advanced PTaaS with Deep Contextual Insights</h2>
				<p className="opacity-80">
					We provide a sophisticated PTaaS approach that delivers
					richer, more detailed insights across your entire attack
					surface. Our platform processes large volumes of data in
					real-time to detect complex patterns and anomalies at
					critical vulnerabilities, enabling faster, more effective
					penetration testing and stronger security outcomes.
				</p>
				<div className="flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-6 lg:pt-14">
					<div className="lg:w-2/5 flex items-center justify-center">
						<Image
							className="w-full"
							src={pentestinImg}
							alt="Pentesting Image"
						/>
					</div>
					<div className="lg:w-3/5 text-left">
						<h3 className="text-3xl font-semibold text-main">
							Penetration Testing as a Service (PTaaS)
						</h3>
						<ul className="space-y-3 pt-5 text-lg">
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Validate your security controls with expert
								precision
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Discover vulnerabilities across your entire
								attack surface
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Experience faster scheduling and streamlined
								test execution
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Get real-time results to accelerate risk
								reduction and remediation
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
