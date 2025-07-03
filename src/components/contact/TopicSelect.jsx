"use client";

import React from "react";
import {
	Select,
	SelectTrigger,
	SelectValue,
	SelectContent,
	SelectItem,
} from "@/components/ui/select";

const topics = [
	{ value: "support", label: "Customer Support" },
	{ value: "sales", label: "Sales Inquiry" },
	{ value: "partnership", label: "Partnership Opportunity" },
	{ value: "feedback", label: "Product Feedback" },
	{ value: "bug", label: "Report a Bug" },
	{ value: "other", label: "Other" },
];

export default function TopicSelect({ value, onChange }) {
	return (
		<Select id="topicSelect" value={value} onValueChange={onChange}>
			<SelectTrigger className="w-full py-5 backdrop-blur-3xl bg-accent/5 border-accent/10 hover:bg-accent/10 rounded-xl">
				<SelectValue placeholder="Select a topic" />
			</SelectTrigger>
			<SelectContent className="bg-background border-background/30">
				{topics.map((topic) => (
					<SelectItem
						key={topic.value}
						value={topic.value}
						className="flex items-center gap-2 px-2 py-1.5 text-sm rounded-sm
             aria-selected:bg-accent aria-selected:text-accent
             hover:bg-accent dark:hover:bg-accent/10
             dark:aria-selected:bg-accent/10 dark:aria-selected:text-accent"
					>
						{topic.label}
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
}
