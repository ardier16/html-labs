<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
<xsl:template match="/">
<p><h1 style="color: red"><center>Интернет-магазин "Ням-ням"</center></h1></p>
<p><h2><center style=" 	margin-top: 10px; margin-left: 0px;	width: 50%; text-align: center">Фрукты</center></h2></p>
<table border="1" cellpadding="6" align="" style=" 	margin-top: 10px; margin-left: 0px;	width: 50%; text-align: center">
  <tr bgcolor="#CCCCCC">
    <td align="center" style="width: 70"><strong><a href="#"><xsl:value-of select="//i1"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i2"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i3"/></a></strong></td>
    <td align="center" style="width: 130"><strong><a href="#"><xsl:value-of select="//i4"/></a></strong></td>	
  </tr>
    <xsl:for-each select="pricelist/fruits/banan">
  <xsl:sort order="ascending" select="id"/>
  <tr  onclick="f1()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a1"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/fruits/apelsin">
  <xsl:sort order="ascending" select="id"/>
  <tr  onclick="f2()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a2"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/fruits/gr">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f3()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a3"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
</table>
<p><h2><center style=" 	margin-top: 10px; margin-left: 0px;	width: 50%; text-align: center">Овощи</center></h2></p>
<table border="1" cellpadding="6" align="" style=" 	margin-top: 0px; margin-left: 0px;	width: 50%; text-align: center">
  <tr bgcolor="#CCCCCC">
    <td align="center" style="width: 70"><strong><a href="#"><xsl:value-of select="//i1"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i2"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i3"/></a></strong></td>
    <td align="center" style="width: 130"><strong><a href="#"><xsl:value-of select="//i4"/></a></strong></td>	
  </tr>
    <xsl:for-each select="pricelist/vegetables/pom">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f4()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a4"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/vegetables/og">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f5()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a5"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/vegetables/kap">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f6()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a6"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
</table>
<p><h2><center style=" 	margin-top: 10px; margin-left: 0px;	width: 50%; text-align: center">Молочные продукты</center></h2></p>
<table border="1" cellpadding="6" align="" style=" 	margin-top: 10px; margin-left: 0px;	width: 50%; text-align: center">
  <tr bgcolor="#CCCCCC">
    <td align="center" style="width: 70"><strong><a href="#"><xsl:value-of select="//i1"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i2"/></a></strong></td>
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i3"/></a></strong></td>
    <td align="center" style="width: 130"><strong><a href="#"><xsl:value-of select="//i4"/></a></strong></td>	
  </tr>
    <xsl:for-each select="pricelist/milk/mol">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f7()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a7"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/milk/jog">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f8()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a8"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/milk/kef">
  <xsl:sort order="ascending" select="id"/>
  <tr onclick="f9()" bgcolor="#F5F5F5">
    <td><a href="#"><xsl:value-of select="id"/></a></td>
    <td><xsl:value-of select="name"/> </td>
    <td><xsl:value-of select="price"/></td>
    <td id="a9"><xsl:value-of select="amount"/></td>	
  </tr>
  </xsl:for-each>
</table>
<p></p><p><h1><center style="width:45%; text-align: center; margin-left: 55%; margin-top: -550px">Ваша корзина</center></h1></p>
<table border="1" cellpadding="6" align="" style="width:45%; text-align: center; margin-left: 55%; margin-top: 10px">
  <tr bgcolor="#CCCCCC">
    <td align="center" style="width: 300"><strong><a href="#"><xsl:value-of select="//i2"/></a></strong></td>
	<td align="center" style="width: 50"><strong><a href="#">Количество</a></strong></td>	
  </tr>
  <xsl:for-each select="pricelist/fruits/banan">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d1" bgcolor="#F5F5F5" onclick="hid1()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r1">0</td>	
  </tr>
  </xsl:for-each>
    <xsl:for-each select="pricelist/fruits/apelsin">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d2" bgcolor="#F5F5F5" onclick="hid2()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r2">0</td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/fruits/gr">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d3" bgcolor="#F5F5F5" onclick="hid3()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r3">0</td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/vegetables/pom">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d4" bgcolor="#F5F5F5" onclick="hid4()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r4">0</td>	
  </tr>
  </xsl:for-each>
      <xsl:for-each select="pricelist/vegetables/og">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d5" bgcolor="#F5F5F5" onclick="hid5()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r5">0</td>	
  </tr>
  </xsl:for-each>
        <xsl:for-each select="pricelist/vegetables/kap">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d6" bgcolor="#F5F5F5" onclick="hid6()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r6">0</td>	
  </tr>
  </xsl:for-each>
        <xsl:for-each select="pricelist/milk/mol">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d7" bgcolor="#F5F5F5" onclick="hid7()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r7">0</td>	
  </tr>
  </xsl:for-each>
        <xsl:for-each select="pricelist/milk/jog">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d8" bgcolor="#F5F5F5" onclick="hid8()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r8">0</td>	
  </tr>
  </xsl:for-each>
        <xsl:for-each select="pricelist/milk/kef">
  <xsl:sort order="ascending" select="id"/>
  <tr id="d9" bgcolor="#F5F5F5" onclick="hid9()">
    <td><xsl:value-of select="name"/> </td>
	<td id="r9">0</td>	
  </tr>
  </xsl:for-each>
    <tr><td bgcolor="red"> Сумма </td><td id="res" bgcolor="#C0C0C0"><b>0 грн.</b></td>
  </tr>
</table>	
</xsl:template>
</xsl:stylesheet>