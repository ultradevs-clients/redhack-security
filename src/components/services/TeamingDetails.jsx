"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { HiOutlineChevronRight } from "react-icons/hi";

const serviceDetails = [
	{
		title: "External Red Teaming",
		description:
			"We simulate real-world attacks on your public-facing infrastructure—like firewalls, servers, and routers—to uncover exploitable vulnerabilities. Our red team mimics external threat actors to assess potential breach impact and strengthen your external defense.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "External Network Penetration",
				description:
					"We test your externally accessible systems using sophisticated attack methods to identify entry points and gain unauthorized access. This rigorous assessment reveals exploitable weaknesses in firewalls, routers, and servers, enabling you to fortify your defenses against real-world attackers.",
			},
			{
				title: "Web Application Exploitation",
				description:
					"Our experts conduct targeted attacks on your web applications, hunting for flaws that could lead to data breaches, unauthorized access, or service disruption. By exposing vulnerabilities in your critical apps, we help ensure robust protection against the most prevalent web-based threats.",
			},
			{
				title: "Social Engineering Assessment",
				description:
					"We evaluate your organization’s human security layer through simulated phishing, vishing, and other social manipulation tactics. This testing measures employee susceptibility and informs your security awareness programs to better guard against deceptive attacks.",
			},
			{
				title: "Wireless Network Exploitation",
				description:
					"Our team probes your wireless infrastructure to detect weaknesses in Wi-Fi encryption, configurations, and access controls. By exploiting these gaps, we identify potential entry points that attackers might use to infiltrate your internal network.",
			},
			{
				title: "Supply Chain Vulnerability Analysis",
				description:
					"We examine your third-party vendors and supply chain partners for security weaknesses. By simulating attacks against these external connections, we help you understand and mitigate risks that could indirectly compromise your enterprise.",
			},
			{
				title: "Internet of Things (IoT) Exploitation",
				description:
					"Our ethical hackers assess the security of IoT devices and industrial control systems connected to your network. This evaluation uncovers vulnerabilities that could lead to operational disruptions or unauthorized access to critical infrastructure.",
			},
			{
				title: "Cloud Security Exploitation",
				description:
					"We perform thorough security assessments of your cloud environments, reviewing configurations, access controls, and data protections. Our red team identifies gaps that could expose your cloud assets, ensuring your cloud deployments remain resilient against evolving threats.",
			},
			{
				title: "Purple Team Engagement",
				description:
					"Our red and your blue team collaborate closely in real-time, sharing insights and tactics during simulated attacks. This joint effort enhances your security posture by continuously refining detection, response, and mitigation capabilities.",
			},
		],
	},
	{
		title: "Internal Red Teaming",
		description:
			"Internal red teaming simulates scenarios where your IT environment is already breached—whether through insider threats or attackers using stolen credentials. This helps assess how well your defenses detect and respond to threats within the network.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "On-Network Red Teaming",
				description:
					"We emulate attackers already inside your network by performing lateral movement, privilege escalation, and targeting sensitive assets. This approach tests how effectively your security team detects and responds to threats moving laterally or escalating privileges.",
			},
			{
				title: "Social Engineering Red Teaming",
				description:
					"Our team executes advanced social engineering campaigns, such as phishing and pretexting, targeting your employees. This helps assess the human factor in your security and guides improvements in training and awareness to reduce risk.",
			},
			{
				title: "Application Red Teaming",
				description:
					"We rigorously test the security of your enterprise applications, exploiting vulnerabilities to gain unauthorized access or disrupt services. This helps you shore up application defenses and minimize risk from software-level threats.",
			},
			{
				title: "Credential Theft and Abuse",
				description:
					"Our red team attempts to steal and misuse credentials to evaluate the strength of your identity controls. This includes testing password policies, multi-factor authentication, and overall identity protection against credential-based intrusions.",
			},
			{
				title: "Insider Threat Simulation",
				description:
					"We simulate malicious insider activities such as data theft and sabotage to uncover gaps in your internal controls. This exercise helps you detect and mitigate risks that originate within your organization.",
			},
			{
				title: "Data Exfiltration",
				description:
					"Our team tests your ability to detect unauthorized attempts to extract sensitive data stealthily. This ensures your defenses can identify and prevent critical data breaches before they cause harm.",
			},
			{
				title: "Blue Team Collaboration",
				description:
					"While not a direct internal red teaming task, partnering with your blue team in collaborative “purple team” exercises helps refine your overall defenses. We share attack insights, analyze response effectiveness, and strengthen your security posture together.",
			},
		],
	},
	{
		title: "Hybrid Red Teaming",
		description:
			" At RedHack Security, we combine traditional red teaming with penetration testing and close collaboration with your defenders. Our adaptive approach delivers realistic, high-impact assessments tailored to your organization’s risk profile and objectives—driving meaningful improvements to your security posture.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Scenario-Based Red Teaming",
				description:
					"Our team designs sophisticated, multi-layered attack scenarios that closely replicate real-world threats across various attack vectors. These dynamic simulations push your defenders to react in real time, offering a realistic evaluation of your organization’s detection, response, and adaptive defense capabilities. This ensures your security teams are battle-ready against evolving threats.",
			},
			{
				title: "Adversarial Machine Learning",
				description:
					"We emulate advanced attackers who leverage machine learning techniques to adapt and evolve their tactics on-the-fly, directly responding to your defenses. This cutting-edge assessment challenges the robustness of your AI-powered security systems and tests your team’s ability to identify and counteract intelligent, evolving cyber threats effectively.",
			},
			{
				title: "Hybrid Purple Teaming",
				description:
					"Our approach integrates offensive and defensive security experts working side-by-side in a collaborative environment. By simulating authentic attack scenarios while cooperating with your internal defenders, we amplify your organization’s ability to detect, respond, and recover swiftly—building a stronger, more resilient cybersecurity posture.",
			},
			{
				title: "IT & OT Environment Exploitation",
				description:
					"We simulate complex threats that span both IT networks and Operational Technology (OT) systems, targeting your critical infrastructure. This comprehensive exercise measures your security team’s preparedness to detect, isolate, and mitigate sophisticated cross-domain attacks that could disrupt both digital and physical operations.",
			},
			{
				title: "Supply Chain Exploitation",
				description:
					"Our assessments extend beyond your immediate network to include third-party vendors and supply chain partners. By simulating realistic supply chain attacks, we expose potential external vulnerabilities that could be exploited to breach your internal defenses. This proactive approach helps you mitigate risks arising from interconnected business relationships.",
			},
		],
	},
	{
		title: "Purple Teaming",
		description:
			"Purple Teaming fosters a collaborative environment where our red team partners closely with your blue team. By combining offensive tactics with defensive expertise, this approach enhances your organization’s ability to detect, respond to, and mitigate cyber threats—strengthening your overall security posture through continuous knowledge sharing and joint exercises.",
		buttonLink: "",
		rightSideCards: [
			{
				title: "Rapid Incident Response Drills",
				description:
					"Our red team simulates realistic cyberattacks on your IT environment, challenging your blue team to quickly detect, contain, and neutralize threats. This exercise sharpens your incident response capabilities and strengthens coordination between offensive and defensive teams for faster, more effective threat management.",
			},
			{
				title: "Detection Scenario Workshops",
				description:
					"Our red and blue teams collaborate to craft realistic attack scenarios, allowing your blue team to practice detection and response in a controlled setting. This hands-on exercise deepens your team’s expertise in identifying and countering advanced threats effectively.",
			},
			{
				title: "SIEM Evaluation",
				description:
					"Our red team crafts custom attack scenarios designed to test and evade your organization’s SIEM detection capabilities. Collaborating with your blue team, we help fine-tune SIEM rules and alerts to strengthen detection and response against advanced threats.",
			},
			{
				title: "Shadow IT Assessment",
				description:
					"Our red team uncovers unauthorized devices and services operating within your enterprise network. This enables your blue team to enhance detection and implement effective mitigation strategies, closing critical security gaps.",
			},
			{
				title: "Social Engineering",
				description:
					"Our red team designs targeted phishing campaigns and social engineering exercises to evaluate employee awareness and training effectiveness. Your blue team analyzes the results to strengthen user education and security posture.",
			},
			{
				title: "Secure Development Lifecycle Evaluation",
				description:
					"Our red team assesses the security posture of your application development processes. Collaborating with your blue team, we help integrate secure coding practices based on identified risks and findings.",
			},
			{
				title: "Vendor & Third-Party Risk Assessment",
				description:
					"Our red team simulates attacks originating from compromised third-party vendors to evaluate your enterprise’s exposure to supply chain threats. Your blue team’s detection and response capabilities are tested, helping you mitigate risks before vendor onboarding or during mergers and acquisitions.",
			},
		],
	},
];

export default function TeamingDetails() {
	const [openId, setOpenId] = useState(null);

	const toggle = (id) => {
		setOpenId(openId === id ? null : id);
	};
	return (
		<div className="service-details bg-accent text-background lg:py-20 py-12 relative">
			<div className="container">
				<h2 className="!font-inter bg-background/10 absolute py-10  text-center w-full top-0 left-0 px-5 ">
					Comprehensive Penetration Testing Across Critical Domains
				</h2>

				<div className="pt-56 lg:pt-32 lg:space-y-26 space-y-14">
					{serviceDetails.map((service, idx) => (
						<section
							key={idx}
							className={`flex w-full lg:gap-20 gap-10 lg:px-0 px-5 ${
								idx % 2 !== 0
									? "lg:flex-row flex-col-reverse"
									: "lg:flex-row-reverse flex-col-reverse"
							}`}
						>
							<div className="lg:w-2/4 bg-background/0 h-max lg:p-8 space-y-4">
								{service.rightSideCards.map((card, subIdx) => {
									const uniqueId = `${service.title}-${subIdx}`;
									return (
										<div
											key={uniqueId}
											className="rounded-md shadow-sm overflow-hidden"
										>
											<button
												className="w-full cursor-pointer bg-main/50 text-background rounded-sm text-left px-6 py-4 font-medium transition flex items-center justify-between"
												onClick={() => toggle(uniqueId)}
											>
												{card.title}{" "}
												<HiOutlineChevronRight />
											</button>
											<AnimatePresence initial={false}>
												{openId === uniqueId && (
													<motion.div
														key="content"
														initial={{
															height: 0,
															opacity: 0,
														}}
														animate={{
															height: "auto",
															opacity: 1,
														}}
														exit={{
															height: 0,
															opacity: 0,
														}}
														transition={{
															duration: 0.3,
														}}
														className="overflow-hidden mt-2 rounded-sm"
													>
														<div className="py-3 w-full px-5 bg-accent/20 text-background">
															{card.description}
														</div>
													</motion.div>
												)}
											</AnimatePresence>
										</div>
									);
								})}
							</div>
							<div className="lg:w-2/4 text-left">
								<h2 className="!text-[27px]">
									{service.title}
								</h2>

								<p className="text-justify opacity-70 leading-relaxed">
									{service.description}
								</p>

								<div className="space-y-4 pt-8">
									<button className="btn ">learn more</button>
								</div>
							</div>
						</section>
					))}
				</div>
			</div>
		</div>
	);
}
