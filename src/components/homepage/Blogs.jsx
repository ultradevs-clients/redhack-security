"use client";
import { useState } from "react";
import blogImg1 from "@/assets/images/blog-image-1.webp";
import { RiArrowLeftLine, RiArrowRightLine } from "react-icons/ri";
import Image from "next/image";

const blogs = [
	{
		image: blogImg1,
		title: "critical signatur-spooting vulnerability in openpgp.js hits the headlines",
		link: "",
	},
	{
		image: blogImg1,
		title: "critical signatur-spooting vulnerability in openpgp.js hits the headlines",
		link: "",
	},
	{
		image: blogImg1,
		title: "critical signatur-spooting vulnerability in openpgp.js hits the headlines",
		link: "",
	},
];

export default function Blogs() {
	const [currentIndex, setCurrentIndex] = useState(0);
	const nextCard = () => {
		setCurrentIndex((prev) => (prev + 1) % blogs.length);
	};

	const prevCard = () => {
		setCurrentIndex((prev) => (prev - 1 + blogs.length) % blogs.length);
	};

	return (
		<div className="blog bg-accent lg:py-20 py-12 px-5 lg:px-0">
			<div className="container">
				<div className="flex lg:flex-row flex-col lg:gap-0 gap-10 justify-between items-center text-background">
					<h2>Learn More & Stay Informed </h2>
					<button className="btn">Read Our Blog</button>
				</div>
				<section className="hidden lg:grid grid-cols-3 gap-10 pt-10">
					{blogs.map((blog, idx) => (
						<div
							key={idx}
							className="w-full bg-background rounded-2xl overflow-hidden cursor-pointer card"
						>
							<Image src={blog.image} alt="blog image" />
							<div className="p-6">
								<h3 className="uppercase text-xl font-gilroy font-semibold">
									{blog.title}
								</h3>
								<a
									href="#"
									className="text-xl pt-4 text-main flex items-center gap-2 font-semibold"
								>
									Read More <RiArrowRightLine />
								</a>
							</div>
						</div>
					))}
				</section>
				{/* Mobile Slider */}
				<div className="pt-8 lg:hidden">
					<div className="w-full bg-background rounded-2xl overflow-hidden cursor-pointer card">
						<Image
							src={blogs[currentIndex].image}
							alt="blog image"
						/>
						<div className="p-6">
							<h3 className="uppercase text-xl font-gilroy font-semibold">
								{blogs[currentIndex].title}
							</h3>
							<a
								href="#"
								className="text-xl pt-4 text-main flex items-center gap-2 font-semibold"
							>
								Read More <RiArrowRightLine />
							</a>
						</div>
					</div>

					<div className="flex justify-center pt-8 gap-4 text-background">
						<button onClick={prevCard} className="p-4">
							<RiArrowLeftLine className="text-3xl" />
						</button>
						<button onClick={nextCard} className="p-4">
							<RiArrowRightLine className="text-3xl" />
						</button>
					</div>
				</div>
			</div>
		</div>
	);
}
