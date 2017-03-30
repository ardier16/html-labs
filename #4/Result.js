function result(){
	
	str = "<h1 style='color: red'><center>"+"Ваш заказ"+"</center></h1>"+"<br>";
	str +=  "<table border='1' cellpadding='6 style='margin-top: 0px; margin-left: 100; width: 50%' align='center'>"+
			"<tr bgcolor='#CCCCCC'>" + "<td align='center' style='width: 300'>Наименование</td>" + "<td align='center' style='width: 300'>Цена</td>" + 
			"<td align='center' style='width: 300'>Количество</td>" + "<td align='center' style='width: 300'>Сумма</td></tr>";

	if (document.getElementById("r1").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Бананы</td>" + "<td align='center'>3 грн.</td>" + "<td align='center'>" + document.getElementById("r1").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r1").firstChild.nodeValue*3 + " грн."+ "</td></tr>";
	if (document.getElementById("r2").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Апельсины</td>" + "<td align='center'>6 грн.</td>" + "<td align='center'>" + document.getElementById("r2").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r2").firstChild.nodeValue*6 + " грн."+ "</td></tr>";	
	if (document.getElementById("r3").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Груши</td>" + "<td align='center'>7 грн.</td>" + "<td align='center'>" + document.getElementById("r3").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r3").firstChild.nodeValue*7 + " грн."+ "</td></tr>";	
	if (document.getElementById("r4").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Помидоры</td>" + "<td align='center'>5 грн.</td>" + "<td align='center'>" + document.getElementById("r4").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r4").firstChild.nodeValue*5 + " грн."+ "</td></tr>";	
	if (document.getElementById("r5").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Огурцы</td>" + "<td align='center'>4 грн.</td>" + "<td align='center'>" + document.getElementById("r5").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r5").firstChild.nodeValue*4 + " грн."+ "</td></tr>";	
	if (document.getElementById("r6").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Капуста</td>" + "<td align='center'>8 грн.</td>" + "<td align='center'>" + document.getElementById("r6").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r6").firstChild.nodeValue*8 + " грн."+ "</td></tr>";	
	if (document.getElementById("r7").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Молоко</td>" + "<td align='center'>10 грн.</td>" + "<td align='center'>" + document.getElementById("r7").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r7").firstChild.nodeValue*10 + " грн."+ "</td></tr>";	
	if (document.getElementById("r8").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Йогурт</td>" + "<td align='center'>20 грн.</td>" + "<td align='center'>" + document.getElementById("r8").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r8").firstChild.nodeValue*20 + " грн."+ "</td></tr>";	
	if (document.getElementById("r9").firstChild.nodeValue > 0)
		str += "<tr>" + "<td align='center'>Кефир</td>" + "<td align='center'>15 грн.</td>" + "<td align='center'>" + document.getElementById("r9").firstChild.nodeValue + " шт." +
			   "</td>" + "<td align='center'>" + document.getElementById("r9").firstChild.nodeValue*15 + " грн."+ "</td></tr>";	
		
	str += "<tr><td align='center' style='width: 300'>Общая сумма</td>" + "<td colspan='3' align='center'>" + sum + " грн.</td>";
	
	var newWin = window.open();
	newWin.document.write(str);
}