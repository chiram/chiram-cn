import { n as __exportAll, t as createComponent } from "./astro-component_BMUHZz05.mjs";
import { A as createAstro, d as renderComponent, x as renderHead, y as renderTemplate } from "./jsx-runtime_CXXmkpIb.mjs";
import "./HeaderLink_Chqkg3BX.mjs";
import { i as $$BaseHead, n as $$Header, o as SITE_DESCRIPTION, r as $$Footer, s as SITE_TITLE, t as $$SchemaOrg } from "./SchemaOrg_fz_vV0hI.mjs";
//#region src/pages/index.astro
var pages_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => ""
});
createAstro("https://chiram.cn");
var $$Index = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const orgId = new URL("#organization", Astro.site).toString();
	const schema = [{
		"@context": "https://schema.org",
		"@type": "Organization",
		"@id": orgId,
		name: SITE_TITLE,
		url: Astro.site?.toString(),
		description: SITE_DESCRIPTION
	}, {
		"@context": "https://schema.org",
		"@type": "WebSite",
		name: SITE_TITLE,
		url: Astro.site?.toString(),
		description: SITE_DESCRIPTION,
		inLanguage: "en",
		publisher: {
			"@type": "Organization",
			"@id": orgId
		}
	}];
	return renderTemplate`<html lang="en"><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION
	})}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, { "schema": schema })}${renderHead($$result)}</head><body>${renderComponent($$result, "Header", $$Header, {})}<main><h1>🧑‍🚀 Hello, Astronaut!</h1><p>Welcome to the official <a href="https://astro.build/">Astro</a> blog starter template. This template serves as a lightweight, minimally-styled starting point for anyone looking to build a personal website, blog, or portfolio with Astro.</p><p>This template comes with a few integrations already configured in your<code>astro.config.mjs</code> file. You can customize your setup with<a href="https://astro.build/integrations">Astro Integrations</a> to add tools like Tailwind, React, or Vue to your project.</p><p>Here are a few ideas on how to get started with the template:</p><ul><li>Edit this page in <code>src/pages/index.astro</code></li><li>Edit the site header items in <code>src/components/Header.astro</code></li><li>Add your name to the footer in <code>src/components/Footer.astro</code></li><li>Check out the included blog posts in <code>src/content/blog/</code></li><li>Customize the blog post page layout in <code>src/layouts/BlogPost.astro</code></li></ul><p>Have fun! If you get stuck, remember to<a href="https://docs.astro.build/">read the docs</a>or <a href="https://astro.build/chat">join us on Discord</a> to ask questions.</p><p>Looking for a blog template with a bit more personality? Check out<a href="https://github.com/Charca/astro-blog-template">astro-blog-template</a>by <a href="https://twitter.com/Charca">Maxi Ferreira</a>.</p></main>${renderComponent($$result, "Footer", $$Footer, {})}</body></html>`;
}, "C:/Users/zhu/chiram/src/pages/index.astro", void 0);
var $$file = "C:/Users/zhu/chiram/src/pages/index.astro";
//#endregion
//#region \0virtual:astro:page:src/pages/index@_@astro
var page = () => pages_exports;
//#endregion
export { page };
