import React from "react";
import { GoDotFill } from "react-icons/go";

export default function ChoosePenetration() {
	return (
		<div className="bg-accent services lg:px-0 px-5 lg:py-20 py-12 text-background">
			<div className="container">
				<h2>
					Choose Penetration Testing as a Service with RedHack
					Security{" "}
				</h2>
				<ul className="mx-auto w-full lg:pt-8 pt-4 space-y-4">
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Gain full visibility and control with continuous
						security testing across your entire stack.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						RedHack’s certified ethical hackers (OSCP, OSCE, CEH,
						eWPTX, CPTS, PNPT, eJPT, CRTP, CCSP) deliver on-demand
						third-party penetration testing through the secure
						RedHack Client Portal.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Test cloud, networks, APIs, web & mobile apps, IoT, and
						more with fast turnaround and expert support.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Ensure compliance with SOC 2, PCI DSS, HIPAA, GDPR, ISO
						27001, and others.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Identify vulnerabilities, assign remediation, access
						reports, and track progress easily.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Run automated scans, manual tests, and retests with one
						click.
					</li>
					<li className="flex items-center gap-2 text-lg">
						<GoDotFill className="text-main" />
						Enjoy continuous monitoring, scanning, and reporting for
						12 months after testing.
					</li>
				</ul>
			</div>
		</div>
	);
}
