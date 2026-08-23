import { n as __exportAll, t as createComponent } from "./astro-component_BMUHZz05.mjs";
import { A as createAstro, d as renderComponent, y as renderTemplate } from "./jsx-runtime_CXXmkpIb.mjs";
import { n as renderEntry, t as getCollection } from "./_astro_content_DIXH1VQZ.mjs";
import "./HeaderLink_Chqkg3BX.mjs";
import { t as $$BlogPost } from "./BlogPost_D6svPp_-.mjs";
//#region src/pages/blog/[...slug].astro
var ____slug__exports = /* @__PURE__ */ __exportAll({
	default: () => $$Component,
	file: () => $$file,
	getStaticPaths: () => getStaticPaths,
	url: () => $$url
});
createAstro("https://chiram.cn");
async function getStaticPaths() {
	return (await getCollection("blog")).map((post) => ({
		params: { slug: post.id },
		props: post
	}));
}
var $$Component = createComponent(async ($$result, $$props, $$slots) => {
	const Astro = $$result.createAstro($$props, $$slots);
	Astro.self = $$Component;
	const post = Astro.props;
	const { Content } = await renderEntry(post);
	return renderTemplate`${renderComponent($$result, "BlogPost", $$BlogPost, { ...post.data }, { "default": ($$result) => renderTemplate`${renderComponent($$result, "Content", Content, {})}` })}`;
}, "C:/Users/zhu/chiram/src/pages/blog/[...slug].astro", void 0);
var $$file = "C:/Users/zhu/chiram/src/pages/blog/[...slug].astro";
var $$url = "/blog/[...slug]";
//#endregion
//#region \0virtual:astro:page:src/pages/blog/[...slug]@_@astro
var page = () => ____slug__exports;
//#endregion
export { page };
