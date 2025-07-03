"use client";

import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "@/components/contact/PhoneInput";
import { useState } from "react";
import { CountrySelect } from "@/components/contact/CountrySelect";
import TopicSelect from "@/components/contact/TopicSelect";
import { Textarea } from "@/components/ui/textarea";
import { useForm, Controller } from "react-hook-form";

export default function page() {
	const {
		register,
		handleSubmit,

		control,
		formState: { errors },
	} = useForm({
		defaultValues: {
			country: "BD",
			topic: "support",
		},
	});

	const onSubmit = (data) => {
		console.log("Submitted Data:", data);
	};

	return (
		<div className="contact-us">
			<div className="header px-5 lg:px-0">
				<h2 className="lg:!text-5xl">
					Connect With RedHack Security Inc.
				</h2>
				<p className="opacity-80">
					Tell us about your requirements, and our team will respond
					within 24 hours.
				</p>
			</div>

			<div className="container py-8 lg:py-20 px-5 lg:px-0">
				<form
					onSubmit={handleSubmit(onSubmit)}
					className="space-y-3 lg:space-y-0 lg:grid grid-cols-2 items-end lg:w-8/12 mx-auto lg:gap-x-10 xl:gap-x-20 lg:gap-y-6"
				>
					<div className="grid w-full items-center gap-3">
						<Label htmlFor="firstName">
							First name
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
						</Label>
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
						<Label htmlFor="lastName">
							Last name
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
						</Label>
						<Input
							type="text"
							id="lastName"
							className="rounded-2xl py-5 border-accent/10 bg-accent/5 backdrop-blur-2xl"
							{...register("lastName", {
								required: "Last name is required",
							})}
						/>
						{errors.lastName && (
							<p className="text-red-500 !text-xs !py-0">
								{errors.lastName.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3">
						<Label htmlFor="email">
							E-mail address
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
							<br />
						</Label>
						<h6 className="text-xs -mb-2 -mt-1 opacity-60">
							Please enter a valid buseness email address
						</h6>
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
						<Label htmlFor="phoneNumber">
							Phone number
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
							<br />
						</Label>
						<h6 className="text-xs -mb-2 -mt-1 opacity-60">
							Country code
						</h6>
						<Controller
							name="phone"
							control={control}
							render={({ field }) => (
								<PhoneInput
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>
						{errors.phone && (
							<p className="text-red-500 !py-0 !text-xs">
								{errors.phone.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3">
						<Label htmlFor="companyName">
							Company name
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
						</Label>
						<Input
							type="text"
							id="companyName"
							className="rounded-2xl py-5 border-accent/10 bg-accent/5 backdrop-blur-2xl"
							{...register("companyName", {
								required: "Company name is required",
							})}
						/>
						{errors.companyName && (
							<p className="text-red-500 !py-0 !text-xs">
								{errors.companyName.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3">
						<Label htmlFor="countrySelect">
							Country
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
							<br />
						</Label>
						<h6 className="text-xs -mb-2 -mt-1 opacity-60">
							Used to route your request to the right regional
							tram.
						</h6>

						<Controller
							name="country"
							control={control}
							rules={{ required: "Country is required" }}
							render={({ field }) => (
								<CountrySelect
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>
						{errors.country && (
							<p className="text-red-500 !py-0 !text-xs mt-1">
								{errors.country.message}
							</p>
						)}
					</div>

					<div className="grid w-full items-center gap-3 col-span-2">
						<Label htmlFor="topicSelect">
							What would you like to talk about?
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
							<br />
						</Label>
						<h6 className="text-xs -mb-2 -mt-1 opacity-60">
							This helps us direct you to the right team and get
							back to you faster.
						</h6>

						<Controller
							name="topic"
							control={control}
							rules={{ required: "Topic is required" }}
							render={({ field }) => (
								<TopicSelect
									value={field.value}
									onChange={field.onChange}
								/>
							)}
						/>
						{errors.topic && (
							<p className="text-red-500 !py-0 !text-xs mt-1">
								{errors.topic.message}
							</p>
						)}

						{/* <TopicSelect
							value={selectedTopic}
							onChange={setSelectedTopic}
						/> */}
					</div>

					<div className="grid w-full items-center gap-3 col-span-2">
						<Label htmlFor="message">
							Message
							<sup>
								<FaAsterisk className="text-main text-[7px] -ml-1 mt-1" />
							</sup>
						</Label>
						<Textarea
							id="message"
							className="rounded-2xl py-5 min-h-24 border-accent/10 bg-accent/5 backdrop-blur-2xl"
							{...register("message", {
								required: "Message is required",
								minLength: {
									value: 10,
									message:
										"Message must be at least 10 characters",
								},
							})}
						/>
						{errors.message && (
							<p className="text-red-500 !py-0 !text-xs">
								{errors.message.message}
							</p>
						)}
					</div>
					<h6 className="text-sm opacity-90 col-span-2">
						At Redhacksecurity, we value your time and privacy. We
						use the information you provide to us to ensure you hear
						about topics that interest you. You can update your
						preferences at any time by clicking the links in the
						footer of our emails. You can read more about how we use
						your personal information in our{" "}
						<a href="#" className="underline text-indigo-600">
							Privacy Policy
						</a>
					</h6>
					<div className="col-span-2 flex justify-center pt-5">
						<button className="btn !text-sm !py-2 !rounded-full text-background">
							Send
						</button>
					</div>
				</form>
			</div>
		</div>
	);
}
