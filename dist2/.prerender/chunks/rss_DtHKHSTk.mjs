import { n as __exportAll } from "./astro-component_BMUHZz05.mjs";
import { t as getCollection } from "./_astro_content_DIXH1VQZ.mjs";
import rss from "@astrojs/rss";
//#region src/pages/rss.xml.js
var rss_xml_exports = /* @__PURE__ */ __exportAll({ GET: () => GET });
async function GET(context) {
	const blog = await getCollection("blog");
	return rss({
		title: "chiram.cn",
		description: "trademarks registration",
		site: context.site,
		items: blog.map((post) => ({
			title: post.data.title,
			pubDate: post.data.pubDate,
			description: post.data.description,
			link: `/blog/${post.id.replace(/\.mdx?$/, "")}/`
		}))
	});
}
//#endregion
//#region \0virtual:astro:page:src/pages/rss.xml@_@js
var page = () => rss_xml_exports;
//#endregion
export { page };
