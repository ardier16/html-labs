 var source;
  var style;
/*function init() {
  source = new ActiveXObject("Microsoft.XMLDOM");
  source.async = false;
  style = new ActiveXObject("Microsoft.XMLDOM");
  style.async = false;
  source.load("xml.xml");
  style.load("1.xsl");
  document.all.item("xslresult").innerHTML = source.transformNode(style);
  return true;
}*/


function loadXML(fileName){
  var xmlFile = null;
  
 if(document.implementation && document.implementation.createDocument){
    xmlFile = document.implementation.createDocument("", "", null)
  }
  else alert ("ERROR");

  xmlFile.async = false;
  try{
    xmlFile.load(fileName);
  }
  catch(e){
    alert("ERROR");
  }

  return(xmlFile);
}

function getStylingResult(xmlFileName, xslFileName){
  var xmlContent = loadXML(xmlFileName);
  var xslContent = loadXML(xslFileName);

 if (window.XSLTProcessor){
    var xsltProcessor = new XSLTProcessor();
    xsltProcessor.importStylesheet(xslContent);

    var resultDocument = xsltProcessor.transformToDocument(xmlContent);
    var xmls = new XMLSerializer();
    return xmls.serializeToString(resultDocument);
  }

}

function init(){
  document.all.item("xslresult").innerHTML = getStylingResult("xml.xml", "1.xsl");
}