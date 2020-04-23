import remark from "remark";
import html from "remark-html";

export default async function markdownToHtml(markdown) {
  const result = await remark()
    .data("settings", { commonmark: true })
    .use(html)
    .process(markdown);
  return result.toString();
}
