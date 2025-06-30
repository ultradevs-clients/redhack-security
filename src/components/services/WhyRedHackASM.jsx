import Link from "next/link";
import React from "react";

export default function WhyRedHackASM() {
	return (
		<div className="cta lg:py-20 py-12 lg:px-0 px-5 text-center">
			<div className="container">
				<h2 className="text-main !text-5xl !font-extrabold uppercase !font-inter">
					Why RedHack ASM
				</h2>
				<p className="!font-gilroy font-semibold uppercase !text-2xl">
					RedHack delivers comprehensive Attack Surface Management
					(ASM) with continuous discovery of internal and external
					assets, enabling clear visibility into your organization’s
					real security risks for focused testing.
				</p>
				<p className="opacity-70 lg:w-8/12 mx-auto !pt-2">
					By combining expert knowledge of attacker methods with
					AI-powered analysis, RedHack provides deep contextual
					insights across your entire attack surface, rapidly
					pinpointing critical vulnerabilities to enhance the
					efficiency and effectiveness of your ASM strategy.
				</p>
			</div>
		</div>
	);
}
