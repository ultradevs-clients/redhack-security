"use client";

import {
	Select,
	SelectContent,
	SelectGroup,
	SelectItem,
	SelectLabel,
	SelectTrigger,
	SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { FaAsterisk } from "react-icons/fa";
import PhoneInput from "@/components/contact/PhoneInput";
import { useState } from "react";

export default function page() {
	const [phone, setPhone] = useState("");

	return (
		<div className="contact-us">
			<div className="header ">
				<h2 className="!text-5xl">
					Connect With RedHack Security Inc.
				</h2>
				<p className="opacity-80">
					Tell us about your requirements, and our team will respond
					within 24 hours.
				</p>
			</div>

			<div className="container py-20">
				<form className="grid grid-cols-2 lg:w-8/12 mx-auto gap-x-20 gap-y-6">
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
							className="rounded-2xl border-accent/10 bg-accent/5 backdrop-blur-2xl"
						/>
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
							className="rounded-2xl border-accent/10 bg-accent/5 backdrop-blur-2xl"
						/>
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
							className="rounded-2xl border-accent/10 bg-accent/5 backdrop-blur-2xl"
						/>
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
							className="rounded-2xl border-accent/10 bg-accent/5 backdrop-blur-2xl"
						/>
					</div>
					<PhoneInput value={phone} onChange={setPhone} />

					{/* <Select>
						<SelectTrigger className="!text-main w-max">
							<SelectValue placeholder="Select a fruit" />
						</SelectTrigger>
						<SelectContent>
							<SelectGroup className="">
								<SelectLabel>Fruits</SelectLabel>
								<SelectItem
									className="!hover:bg-yellow-400"
									value="apple"
								>
									Apple
								</SelectItem>
								<SelectItem value="banana">Banana</SelectItem>
								<SelectItem value="blueberry">
									Blueberry
								</SelectItem>
								<SelectItem value="grapes">Grapes</SelectItem>
								<SelectItem value="pineapple">
									Pineapple
								</SelectItem>
							</SelectGroup>
						</SelectContent>
					</Select> */}
				</form>
			</div>
		</div>
	);
}
