import React from "react";
import pentestinImg from "@/assets/images/pentest-benifit-1.webp";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function () {
	return (
		<div className="advanced-ptaas bg-accent text-background text-center lg:py-20 py-12 lg:px-0 px-5">
			<div className="container">
				<h2>Why Choose RedHack Security Inc.?</h2>

				<div className="flex lg:flex-row flex-col justify-between items-center lg:gap-20 gap-6 lg:pt-14">
					<div className="lg:w-2/5 flex items-center justify-center">
						<Image
							className="w-full"
							src={pentestinImg}
							alt="Pentesting Image"
						/>
					</div>
					<div className="lg:w-3/5 text-left">
						<ul className="space-y-3 pt-5 text-lg">
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Accelerated Penetration Testing: Slash testing
								time by up to 50% without compromising quality.
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Cost-Effective Solutions: Reduce your Total Cost
								of Ownership (TCO) by 50%, maximizing your
								security budget.
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Automated Evidence Collection: Get precise,
								actionable data faster with our cutting-edge
								automation.
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Expert-Led Services: Benefit from a team of
								certified cybersecurity professionals with
								proven track records.
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Real-Time, Contextual Insights: Stay ahead of
								threats with instant, relevant vulnerability
								analysis.
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Trusted by Industry Leaders: Join our growing
								list of satisfied clients who rely on us for
								critical security needs.
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
