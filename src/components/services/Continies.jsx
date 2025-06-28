import React from "react";
import pentestinImg from "@/assets/images/pentest-benifit-1.webp";
import Image from "next/image";
import { GoDotFill } from "react-icons/go";

export default function Continies() {
	return (
		<div className=" text-accent text-center lg:py-20 py-12 lg:px-0 px-5">
			<div className="container">
				<h2>Why Redhack RTaaS?</h2>
				<p className="opacity-80">
					RedHack Security’s RTaaS simulates real attacks to find your
					security gaps. With AI-driven analysis, we quickly spot
					hidden risks and help you strengthen defenses. Get faster,
					clearer insights to improve your security posture.
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
						<h3 className="text-3xl font-semibold text-main pb-2">
							Continies Offensive Pentesting And Red Teaming
						</h3>
						<p className="!py-0 opacity-80 ">
							REDHACK – WHERE OFFENSIVE MEETS DEFENSIVE
						</p>
						<ul className="space-y-3 pt-5 text-lg">
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Identify and validate potential attack vectors
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Simulate real-world intrusions through expert
								red team operations
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Execute advanced threat scenarios aligned with
								modern TTPs
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Enhance security testing efficiency and drive
								actionable outcomes
							</li>
							<li className="flex items-center gap-2">
								<GoDotFill className="text-main" />
								Provide strategic insights to strengthen your
								overall security posture{" "}
							</li>
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}
