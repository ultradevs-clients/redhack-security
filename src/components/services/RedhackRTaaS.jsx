import Image from "next/image";
import React from "react";
import img from "@/assets/images/service-image-1.webp";

export default function RedhackRTaaS() {
	return (
		<div className="bg-accent text-background lg:px-0 px-5 advanced-ptaas">
			<section className="flex container flex-col  lg:flex-row w-full gap-12 lg:py-20 py-12 ">
				<figure className="lg:w-2/4 ">
					<Image
						className="w-full h-full object-cover rounded-lg"
						src={img}
						alt="Servive image"
					/>
				</figure>
				<div className="lg:w-2/4 text-left">
					<h2 className="!text-[27px] !normal-case">
						Test Your Defenses with RedHack RTaaS
					</h2>
					<p className="text-justify opacity-70 leading-relaxed">
						RedHack RTaaS blends expert-led red teaming with
						advanced tactics and tools to simulate real-world
						attacks. We assess your defenses by emulating real
						adversaries across diverse tech stacks—testing how ready
						your team is to detect, respond, and defend.
					</p>
					<p className="text-justify opacity-70 leading-relaxed !py-0">
						RedHack RTaaS blends expert-led red teaming with
						advanced tactics and tools to simulate real-world
						attacks. We assess your defenses by emulating real
						adversaries across diverse tech stacks—testing how ready
						your team is to detect, respond, and defend.
					</p>
				</div>
			</section>
		</div>
	);
}
