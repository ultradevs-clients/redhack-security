import Image from "next/image";
import Link from "next/link";

export default function Banner({ title, description, btn1, btn2, img }) {
	return (
		<div className="banner-container">
			<div className="banner pentest lg:pb-0 pb-12 overflow-hidden">
				<div className="container flex lg:flex-row flex-col items-center h-full">
					<section className="lg:px-10 px-5 lg:w-2/4 w-full pt-10 md:pt-20 lg:pt-0 pb-16">
						<h1 className="text-background !text-4xl lg:!text-5xl lg:w-11/12 ">
							{title}
						</h1>
						<p className="font-semibold text-background w-10/12 lg:w-4/6">
							{description}
						</p>
						<div className="text-background flex lg:flex-row flex-col lg:gap-6 gap-4 text-lg pt-8">
							<Link href={btn1.path}>
								<button className="btn">{btn1.name}</button>
							</Link>
							<Link href={btn2.path}>
								<button className="btn btn--outline">
									{btn2.name}
								</button>
							</Link>
						</div>
					</section>
					<section className="lg:w-2/4">
						<Image
							src={img}
							alt="Banner Image"
							className="w-2/3 rounded-lg mx-auto"
						/>
					</section>
				</div>
			</div>
		</div>
	);
}
