import { GrShieldSecurity, GrVulnerability } from "react-icons/gr";
import { MdHideSource } from "react-icons/md";

export default function BannerBottom() {
	return (
		<div className="banner__bottom ">
			<section className="container grid lg:grid-cols-3 lg:gap-10 gap-8 lg:py-20 py-8 px-5 lg:px-0">
				<div>
					<div className="flex items-start lg:items-center gap-5">
						<GrShieldSecurity className="text-5xl text-main" />
						<div>
							<h3 className="text-2xl font-semibold">
								<span className="text-main">
									Enhance Security
								</span>{" "}
								<br />
								Posture
							</h3>
						</div>
					</div>

					<p className="text-accent opacity-70 text-justify">
						Boost your defenses with expert-driven penetration
						testing tailored to your unique infrastructure and
						threat landscape. On-demand, precise, and
						actionable—delivered when you need it most.
					</p>
				</div>

				<div>
					<div className="flex items-start lg:items-center gap-5">
						<MdHideSource className="text-5xl text-main" />
						<div>
							<h3 className="text-2xl font-semibold">
								<span className="text-main">
									Uncover Hidden
								</span>{" "}
								<br />
								Risks
							</h3>
						</div>
					</div>
					<p className="text-accent opacity-70 text-justify">
						Our Red Team mimics real attacker tactics to reveal
						deep, critical vulnerabilities beyond basic scans. Gain
						actionable insights to remediate risks faster and more
						effectively.
					</p>
				</div>

				<div>
					<div className="flex items-start lg:items-center gap-5">
						<GrVulnerability className="text-5xl text-main" />
						<div>
							<h3 className="text-2xl font-semibold">
								<span className="text-main">
									Unified Vulnerability
								</span>{" "}
								<br />
								Insight
							</h3>
						</div>
					</div>
					<p className="text-accent opacity-70 text-justify">
						Achieve full visibility over your attack surface—web,
						APIs, networks, and cloud—through a centralized
						dashboard. Prioritize risks efficiently with expert
						analysis and continuous monitoring.
					</p>
				</div>
			</section>
		</div>
	);
}
