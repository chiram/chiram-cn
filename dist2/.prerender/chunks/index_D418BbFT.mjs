import { n as __exportAll, t as createComponent } from "./astro-component_BMUHZz05.mjs";
import { A as createAstro, S as addAttribute, d as renderComponent, x as renderHead, y as renderTemplate } from "./jsx-runtime_CXXmkpIb.mjs";
import { t as getCollection } from "./_astro_content_DIXH1VQZ.mjs";
import "./HeaderLink_Chqkg3BX.mjs";
import { n as $$Image, t as $$FormattedDate } from "./FormattedDate_ByynahIz.mjs";
import { i as $$BaseHead, n as $$Header, o as SITE_DESCRIPTION, r as $$Footer, s as SITE_TITLE, t as $$SchemaOrg } from "./SchemaOrg_fz_vV0hI.mjs";
//#region src/pages/blog/index.astro
var blog_exports = /* @__PURE__ */ __exportAll({
	default: () => $$Index,
	file: () => $$file,
	url: () => $$url
});
createAstro("https://chiram.cn");
var $$Index = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Index;
	const posts = (await getCollection("blog")).sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
	const collectionSchema = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: `Blog — ${SITE_TITLE}`,
		url: Astro.url?.toString(),
		inLanguage: "en",
		mainEntity: {
			"@type": "ItemList",
			itemListElement: posts.map((post, index) => ({
				"@type": "ListItem",
				position: index + 1,
				url: new URL(`/blog/${post.id}/`, Astro.site).toString(),
				name: post.data.title
			}))
		}
	};
	return renderTemplate`<html lang="en" data-astro-cid-x255k2k2><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": SITE_TITLE,
		"description": SITE_DESCRIPTION,
		"data-astro-cid-x255k2k2": true
	})}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, {
		"schema": collectionSchema,
		"data-astro-cid-x255k2k2": true
	})}${renderHead($$result)}</head><body data-astro-cid-x255k2k2>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-x255k2k2": true })}<main data-astro-cid-x255k2k2><section data-astro-cid-x255k2k2><ul data-astro-cid-x255k2k2>${posts.map((post) => renderTemplate`<li data-astro-cid-x255k2k2><a${addAttribute(`/blog/${post.id}/`, "href")} data-astro-cid-x255k2k2>${post.data.heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 720,
		"height": 360,
		"src": post.data.heroImage,
		"alt": "",
		"data-astro-cid-x255k2k2": true
	})}`}<h4 class="title" data-astro-cid-x255k2k2>${post.data.title}</h4><p class="date" data-astro-cid-x255k2k2>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": post.data.pubDate,
		"data-astro-cid-x255k2k2": true
	})}</p></a></li>`)}</ul></section></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-x255k2k2": true })}</body></html>`;
}, "C:/Users/zhu/chiram/src/pages/blog/index.astro", void 0);
var $$file = "C:/Users/zhu/chiram/src/pages/blog/index.astro";
var $$url = "/blog";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/index@_@astro
var page = () => blog_exports;
//#endregion
export { page };
