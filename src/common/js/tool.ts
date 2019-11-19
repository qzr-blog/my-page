export function delHtmlTag(str: String) {
  return str.replace(/<[^>]+>/g, '') //正则去掉所有的html标记
}
