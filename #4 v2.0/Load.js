  var source;
  var style;
function init() {
  source = new ActiveXObject("Microsoft.XMLDOM");
  source.async = false;
  style = new ActiveXObject("Microsoft.XMLDOM");
  style.async = false;
  source.load("xml.xml");
  style.load("1.xsl");
  document.all.item("xslresult").innerHTML = source.transformNode(style);
  return true;
}
