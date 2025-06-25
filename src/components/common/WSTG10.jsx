const list = [
	{
		num: "A1",
		title: "Broken Access Control",
	},
	{
		num: "A2",
		title: "Cryptographic Failures",
	},
	{
		num: "A3",
		title: "Injection",
	},
	{
		num: "A4",
		title: "Insecure Design",
	},
	{
		num: "A5",
		title: "Security Misconfiguration",
	},
	{
		num: "A6",
		title: "Vulnerable and Outdated Components",
	},
	{
		num: "A7",
		title: "Identification and Authentication Failures",
	},
	{
		num: "A8",
		title: "Software and Data Integrity Failures",
	},
	{
		num: "A9",
		title: "Security Logging and Monitoring Failures",
	},
	{
		num: "A10",
		title: "Server-Side Request Forgery (SSRF)",
	},
];

export default function WSTG10() {
	return (
		<div className="wstg10 bg-background py-12 lg:py-24">
			<div className="container items-center lg:px-0 px-5 flex lg:flex-row flex-col justify-between lg:gap-14 gap-6">
				<div className="lg:w-2/4">
					<h2 className="!normal-case">
						OWASP Top 10 Web Application Vulns
					</h2>
					<p className="lg:mb-6">
						The OWASP Top 10 highlights the most critical security
						risks for web applications and serves as a trusted guide
						for developers, security experts, and organizations to
						prioritize security efforts. This list is regularly
						updated to keep pace with the ever-changing threat
						landscape, helping you stay protected against emerging
						risks.
					</p>

					<h2 className="!normal-case">
						RedHack Security OWASP Web Application Penetration
						Testing
					</h2>
					<p>
						RedHack Security Inc. follows OWASP (Open Web
						Application Security Project) standards to deliver a
						comprehensive assessment of your organization’s web
						application security. Each OWASP domain is thoroughly
						evaluated to identify vulnerabilities, with detailed,
						actionable reports provided to help you strengthen your
						defenses.
					</p>
				</div>
				<div className="lg:w-2/4 border-2 bg-background rounded-3xl border-main border-glow p-8 ">
					<ul className="space-y-4">
						{list.map((item, idx) => (
							<li
								key={idx}
								className="bg-accent/10 px-4 py-4 rounded-xl flex items-center gap-10 font-semibold"
							>
								<span>{item.num}</span>
								<span>{item.title}</span>
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
