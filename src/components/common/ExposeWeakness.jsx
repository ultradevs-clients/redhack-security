import Link from "next/link";
import React from "react";

export default function ExposeWeakness() {
	return (
		<div className="cta lg:py-20 py-12 lg:px-0 px-5 text-center">
			<div className="container">
				<h1 className="text-main !font-extrabold uppercase !font-inter">
					Expose Weakness Before Threats Exploit Them
				</h1>
				<p className="!font-gilroy font-semibold uppercase !text-2xl">
					Modern attackers don’t wait. They exploit weaknesses before
					you know they exist.
				</p>
				<p className="opacity-70 lg:w-8/12 mx-auto !pt-2">
					Penetration testing simulates real-world attacks to uncover
					security gaps in your infrastructure. It provides actionable
					insights, helping you mitigate risk, maintain compliance,
					and strengthen resilience. At RedHack Security Inc., we go
					beyond scannin we test like real adversaries.
				</p>
				<div className="mt-6">
					<Link href="/contact">
						<button className="btn text-background ">
							Book Your Expert Call
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
