"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useForm } from "react-hook-form";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";
import googleLogo from "@/assets/images/google.png";
import Image from "next/image";
import loading from "../../../public/animations/animationData.json";
import Lottie from "lottie-react";

export default function page() {
	// const {
	// 	register,
	// 	handleSubmit,

	// 	control,
	// 	formState: { errors },
	// } = useForm();

	// const onSubmit = (data) => {
	// 	console.log("Submitted Data:", data);
	// };
	return (
		<div className="contact-us">
			<div className="header !h-screen px-5 lg:px-0 text-center">
				<div className="lg:-my-28">
					<Lottie
						animationData={loading}
						loop={true}
						autoplay={true}
					/>
				</div>
				<h2 className="lg:!text-5xl">Client Portal – In Development</h2>
				<p className="opacity-80">
					We’re working behind the scenes to bring you a secure,
					intelligent, and seamless login experience.
				</p>
				<p className="opacity-80">
					The RedHack Security Client Portal will be live soon — built
					for speed, trust, and performance.
				</p>
			</div>

			{/* <div className="container py-8 lg:py-10 px-5 lg:px-0">
				<div className="w-5/12 mx-auto pb-5 space-y-4">
					<h3 className="text-2xl font-bold">Create your account</h3>
					<button className="flex items-center gap-3 justify-center w-full border border-accent/10 bg-accent/5 py-2 rounded-2xl hover:bg-accent/10 duration-150 cursor-pointer ">
						<Image
							className="w-4"
							src={googleLogo}
							alt="Googlr logo"
						/>{" "}
						Continue with Google
					</button>
					<div className="flex items-center gap-3 pt-2">
						<div className="w-full h-[1px] bg-accent/10" />
						<span className="opacity-70">or</span>
						<div className="w-full h-[1px] bg-accent/10" />
					</div>
				</div>
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-5 lg:w-5/12 mx-auto lg:gap-x-10 xl:gap-x-20 lg:gap-y-6"
				>
					<div className="grid w-full items-center gap-3">
						<Label htmlFor="firstName">Full name</Label>
						<Input
							type="text"
							id="firstName"
							className="rounded-2xl py-5 border-accent/10 bg-accent/5 backdrop-blur-2xl"
							{...register("firstName", {
								required: "First name is required",
								maxLength: {
									value: 20,
									message: "Max length is 20 characters",
								},
							})}
						/>
						{errors.firstName && (
							<p className="text-red-500 !text-xs !py-0">
								{errors.firstName.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3">
						<Label htmlFor="email">
							Email
							<br />
						</Label>

						<Input
							type="email"
							id="email"
							className="rounded-2xl py-5 border-accent/10 bg-accent/5 backdrop-blur-2xl"
							{...register("email", {
								required: "Email is required",
								pattern: {
									value: /^\S+@\S+\.\S+$/,
									message: "Invalid email address",
								},
							})}
						/>
						{errors.email && (
							<p className="text-red-500 !py-0 !text-xs">
								{errors.email.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3">
						<Label htmlFor="password">
							Password
							<br />
						</Label>

						<div className="relative">
							<Input
								type="password"
								id="password"
								className="rounded-2xl py-5 border-accent/10 bg-accent/5 backdrop-blur-2xl"
								{...register("password", {
									required: "Password is required",
									pattern: {
										value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]).{8,}$/,
										message:
											"Password must be at least 8 characters and include uppercase, lowercase, number, and special character",
									},
								})}
							/>
						</div>
						{errors.password && (
							<p className="text-red-500 !py-0 !text-xs">
								{errors.password.message}
							</p>
						)}
					</div>

					<div className="flex items-center gap-3">
						<Checkbox
							id="terms"
							className="data-[state=checked]:bg-main data-[state=checked]:border-main [&_svg]:text-white"
						/>
						<Label htmlFor="terms">Remember me</Label>
					</div>

					<div className="col-span-2 flex justify-center pt-5">
						<button className="btn !w-full !text-sm !py-2 !rounded-full text-background">
							Register
						</button>
					</div>
					<h6 className="text-sm text-center">
						Already have an account?{" "}
						<Link
							href="#"
							className="text-main font-medium hover:underline"
						>
							Login
						</Link>
					</h6>
				</form>
			</div> */}
		</div>
	);
}
