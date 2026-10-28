import antfu from "@antfu/eslint-config";
import prettier from "eslint-config-prettier";

export default antfu(
	{
		astro: true,
		stylistic: false,
	},
	prettier,
);
