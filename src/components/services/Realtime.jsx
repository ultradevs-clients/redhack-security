import Link from "next/link";
import React from "react";

export default function Realtime() {
	return (
		<div className="cta lg:py-20 py-12 lg:px-0 px-5 text-center">
			<div className="container">
				<h2 className="text-main !text-5xl !font-extrabold uppercase !font-inter">
					Real-Time Results. Every Time. Maximum Impact.
				</h2>

				<p className="opacity-70 lg:w-8/12 mx-auto ">
					At RedHack Security Inc., we deliver lightning-fast,
					reliable penetration testing insights that empower you to
					act immediately and stay ahead of evolving threats. Our
					automated, evidence-based approach ensures maximum security
					impact with every test.
				</p>
				<div className="mt-6">
					<Link href="/contact">
						<button className="btn text-background ">
							BOOK YOUR DISCVERY CALL
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
}
