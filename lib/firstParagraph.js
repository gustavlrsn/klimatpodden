export default htmlString => {
  const start = htmlString.indexOf("<p>");
  const end = htmlString.indexOf("</p>");
  return htmlString.substring(start, end).replace(/<\/?[^>]+(>|$)/g, "");
};
