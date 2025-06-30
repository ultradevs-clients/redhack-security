"use client";

import React, { useState, useEffect } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Popover,
	PopoverTrigger,
	PopoverContent,
} from "@/components/ui/popover";
import {
	Command,
	CommandInput,
	CommandList,
	CommandGroup,
	CommandItem,
	CommandEmpty,
} from "@/components/ui/command";
import { ScrollArea } from "@/components/ui/scroll-area";
import { ChevronsUpDown, Check } from "lucide-react";
import flags from "react-phone-number-input/flags";
import { getCountryCallingCode } from "react-phone-number-input";

export default function PhoneInput({ onChange, defaultCountry = "US" }) {
	const [country, setCountry] = useState(defaultCountry);
	const [nationalNumber, setNationalNumber] = useState("");

	const countries = manualCountryList;

	const fullNumber = `+${getCountryCallingCode(country)}${nationalNumber}`;

	useEffect(() => {
		onChange?.(fullNumber);
	}, [country, nationalNumber]);

	return (
		<div className="flex w-full">
			<CountrySelect
				value={country}
				onChange={setCountry}
				options={countries}
			/>
			<div className="flex items-center px-2 bg-muted  text-sm country-code">
				+{getCountryCallingCode(country)}
			</div>
			<Input
				type="tel"
				className="rounded-s-none rounded-e-2xl number-input "
				value={nationalNumber}
				onChange={(e) => {
					const onlyDigits = e.target.value.replace(/\D/g, "");
					setNationalNumber(onlyDigits);
				}}
			/>
		</div>
	);
}

function CountrySelect({ value, onChange, options }) {
	const [open, setOpen] = useState(false);
	const [search, setSearch] = useState("");

	return (
		<Popover open={open} onOpenChange={setOpen}>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					className="rounded-e-none rounded-s-2xl hover:bg-accent/10 border-accent/10 bg-accent/5 flex gap-1 min-w-[80px]"
				>
					<Flag country={value} />
					<ChevronsUpDown className="w-4 h-4 ml-1" />
				</Button>
			</PopoverTrigger>
			<PopoverContent className="w-72 p-0 bg-background border-background/20">
				<Command>
					<CommandInput
						value={search}
						onValueChange={setSearch}
						placeholder="Search country..."
					/>
					<CommandList>
						<ScrollArea className="h-60">
							<CommandEmpty>No country found.</CommandEmpty>
							<CommandGroup>
								{options
									.filter((o) =>
										o.label
											.toLowerCase()
											.includes(search.toLowerCase())
									)
									.map((option) => (
										<CommandItem
											key={option.value}
											onSelect={() => {
												onChange(option.value);
												setOpen(false);
											}}
											className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm
             aria-selected:bg-accent aria-selected:text-accent
             hover:bg-accent dark:hover:bg-accent/10
             dark:aria-selected:bg-accent/10 dark:aria-selected:text-accent"
										>
											<Flag country={option.value} />
											<span className="flex-1 text-sm">
												{option.label}
											</span>
											<span className="text-muted-foreground text-sm">
												+
												{getCountryCallingCode(
													option.value
												)}
											</span>
											{value === option.value && (
												<Check className="w-4 h-4 ml-auto" />
											)}
										</CommandItem>
									))}
							</CommandGroup>
						</ScrollArea>
					</CommandList>
				</Command>
			</PopoverContent>
		</Popover>
	);
}

function Flag({ country }) {
	const FlagIcon = flags[country];
	return (
		<span className="w-5 h-3 rounded-sm overflow-hidden">
			{FlagIcon ? <FlagIcon title={country} /> : null}
		</span>
	);
}

const manualCountryList = [
	{ value: "US", label: "United States" },
	{ value: "IN", label: "India" },
	{ value: "GB", label: "United Kingdom" },
	{ value: "CA", label: "Canada" },
	{ value: "AU", label: "Australia" },
	{ value: "DE", label: "Germany" },
	{ value: "FR", label: "France" },
	{ value: "JP", label: "Japan" },
	{ value: "CN", label: "China" },
	{ value: "BR", label: "Brazil" },
	{ value: "ZA", label: "South Africa" },
	{ value: "NG", label: "Nigeria" },
	{ value: "RU", label: "Russia" },
	{ value: "IT", label: "Italy" },
	{ value: "ES", label: "Spain" },
	{ value: "MX", label: "Mexico" },
	{ value: "AR", label: "Argentina" },
	{ value: "KR", label: "South Korea" },
	{ value: "SE", label: "Sweden" },
	{ value: "NL", label: "Netherlands" },
	// ✅ Add or reorder as needed
];
