import { t as createComponent } from "./astro-component_BMUHZz05.mjs";
import { A as createAstro, d as renderComponent, g as renderSlot, x as renderHead, y as renderTemplate } from "./jsx-runtime_CXXmkpIb.mjs";
import "./HeaderLink_Chqkg3BX.mjs";
import { n as $$Image, t as $$FormattedDate } from "./FormattedDate_ByynahIz.mjs";
import { a as SITE_AUTHOR, i as $$BaseHead, n as $$Header, r as $$Footer, s as SITE_TITLE, t as $$SchemaOrg } from "./SchemaOrg_fz_vV0hI.mjs";
//#region src/layouts/BlogPost.astro
createAstro("https://chiram.cn");
var $$BlogPost = createComponent(($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$BlogPost;
	const { title, description, pubDate, updatedDate, heroImage } = Astro.props;
	const siteUrl = Astro.site?.toString();
	const pageUrl = Astro.url?.toString();
	const imageUrl = heroImage ? new URL(heroImage.src, Astro.site).toString() : void 0;
	const schema = {
		"@context": "https://schema.org",
		"@type": "Article",
		headline: title,
		description,
		url: pageUrl,
		datePublished: pubDate.toISOString(),
		dateModified: (updatedDate ?? pubDate).toISOString(),
		author: {
			"@type": "Person",
			name: SITE_AUTHOR
		},
		publisher: {
			"@type": "Organization",
			name: SITE_TITLE,
			url: siteUrl
		},
		inLanguage: "en",
		...imageUrl ? { image: imageUrl } : {}
	};
	return renderTemplate`<html lang="en" data-astro-cid-tldeq5d5><head>${renderComponent($$result, "BaseHead", $$BaseHead, {
		"title": title,
		"description": description,
		"data-astro-cid-tldeq5d5": true
	})}${renderComponent($$result, "SchemaOrg", $$SchemaOrg, {
		"schema": schema,
		"data-astro-cid-tldeq5d5": true
	})}${renderHead($$result)}</head><body data-astro-cid-tldeq5d5>${renderComponent($$result, "Header", $$Header, { "data-astro-cid-tldeq5d5": true })}<main data-astro-cid-tldeq5d5><article data-astro-cid-tldeq5d5><div class="hero-image" data-astro-cid-tldeq5d5>${heroImage && renderTemplate`${renderComponent($$result, "Image", $$Image, {
		"width": 1020,
		"height": 510,
		"src": heroImage,
		"alt": "",
		"data-astro-cid-tldeq5d5": true
	})}`}</div><div class="prose" data-astro-cid-tldeq5d5><div class="title" data-astro-cid-tldeq5d5><div class="date" data-astro-cid-tldeq5d5>${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": pubDate,
		"data-astro-cid-tldeq5d5": true
	})}${updatedDate && renderTemplate`<div class="last-updated-on" data-astro-cid-tldeq5d5>Last updated on ${renderComponent($$result, "FormattedDate", $$FormattedDate, {
		"date": updatedDate,
		"data-astro-cid-tldeq5d5": true
	})}</div>`}</div><h1 data-astro-cid-tldeq5d5>${title}</h1><hr data-astro-cid-tldeq5d5></div>${renderSlot($$result, $$slots["default"])}</div></article></main>${renderComponent($$result, "Footer", $$Footer, { "data-astro-cid-tldeq5d5": true })}</body></html>`;
}, "C:/Users/zhu/chiram/src/layouts/BlogPost.astro", void 0);
//#endregion
export { $$BlogPost as t };
