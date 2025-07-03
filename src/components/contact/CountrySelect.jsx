"use client";

import React from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";
import flags from "react-phone-number-input/flags";
import { manualCountryList } from "@/provider/manualCountryList";

export function CountrySelect({ value, onChange }) {
	return (
		<Select id="countrySelect" value={value} onValueChange={onChange}>
			<SelectTrigger className="w-full py-5 backdrop-blur-3xl bg-accent/5 border-accent/10 hover:bg-accent/10 rounded-xl">
				<div className="flex items-center gap-2">
					<Flag country={value} />
					<SelectValue placeholder="Select a country" />
				</div>
			</SelectTrigger>
			<SelectContent className=" bg-background border-background/30">
				{manualCountryList.map((option) => (
					<SelectItem
						key={option.value}
						value={option.value}
						className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm
             aria-selected:bg-accent aria-selected:text-accent
             hover:bg-accent dark:hover:bg-accent/10
             dark:aria-selected:bg-accent/10 dark:aria-selected:text-accent"
					>
						<span className="flex-1">{option.label}</span>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
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
