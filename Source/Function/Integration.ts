/**
 * @module Integration
 *
 */
export default (_Option: Option = {}): AstroIntegration => {
	for (const Option in _Option) {
		if (
			Object.prototype.hasOwnProperty.call(_Option, Option) &&
			_Option[Option] === true
		) {
			_Option[Option] = Default[Option as keyof typeof Default];
		}
	}

	return {
		name: "astro-short-urls",
		hooks: {
			"astro:build:done": async () => {},
		},
	};
};

export const { default: Default } = await import("../Variable/Option.js");

import type Option from "../Interface/Option.js";

import type { AstroIntegration } from "astro";

export const { default: Merge } = await import(
	"typescript-esbuild/Target/Function/Merge.js"
);
