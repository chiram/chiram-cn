import { t as createComponent } from "./astro-component_BMUHZz05.mjs";
import { A as createAstro, S as addAttribute, b as maybeRenderHead, g as renderSlot, i as spreadAttributes, y as renderTemplate } from "./jsx-runtime_CXXmkpIb.mjs";
//#region src/components/HeaderLink.astro
createAstro("https://chiram.cn");
var $$HeaderLink = createComponent(($$result, $$props, $$slots) => {
	const Astro2 = $$result.createAstro($$props, $$slots);
	Astro2.self = $$HeaderLink;
	const { href, class: className, ...props } = Astro2.props;
	const pathname = Astro2.url.pathname.replace("/", "");
	const subpath = pathname.match(/[^\/]+/g);
	const isActive = href === pathname || href === "/" + (subpath?.[0] || "");
	return renderTemplate`${maybeRenderHead($$result)}<a${addAttribute(href, "href")}${addAttribute([className, { active: isActive }], "class:list")}${spreadAttributes(props)} data-astro-cid-evkijfd6>${renderSlot($$result, $$slots["default"])}</a>`;
}, "C:/Users/zhu/chiram/src/components/HeaderLink.astro", void 0);
//#endregion
export { $$HeaderLink as t };
