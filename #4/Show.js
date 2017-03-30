sum = 0, x = 1, x1 = 0;/* r1 = -1;*/
/*function f1(){
	var table = document.getElementById("table");
	if (!x1)
	{
		x1 = x;
		r1+=2;
		table.insertRow(x);
		table.rows[x].insertCell(0);
		table.rows[x].style.background = "white";
		table.rows[x].onclick = "hid1()";
		table.rows[x].cells[0].appendChild(document.createTextNode("banana"));
		table.rows[x].insertCell(1);
		table.rows[x].cells[1].appendChild(document.createTextNode(r1));
		document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue) - 1;	
		sum += 3;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
		x++;
	}
	else if (document.getElementById("a1").firstChild.nodeValue > 0)
	{
		r1++;
		table.rows[x1].cells[1].firstChild.nodeValue = r1;
		document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue) - 1;
		sum += 3;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}*/

function f1(){
	if (document.getElementById("a1").firstChild.nodeValue > 0)
	{
		document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue) - 1;	
		document.getElementById("r1").firstChild.nodeValue = parseInt(document.getElementById("r1").firstChild.nodeValue) + 1;
		sum += 3;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f2(){
	if (document.getElementById("a2").firstChild.nodeValue > 0)
	{
		document.getElementById("a2").firstChild.nodeValue = parseInt(document.getElementById("a2").firstChild.nodeValue) - 1;	
		document.getElementById("r2").firstChild.nodeValue = parseInt(document.getElementById("r2").firstChild.nodeValue) + 1;
		sum += 6;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f3(){
	if (document.getElementById("a3").firstChild.nodeValue > 0)
	{
		document.getElementById("a3").firstChild.nodeValue = parseInt(document.getElementById("a3").firstChild.nodeValue) - 1;	
		document.getElementById("r3").firstChild.nodeValue = parseInt(document.getElementById("r3").firstChild.nodeValue) + 1;
		sum += 7;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f4(){
	if (document.getElementById("a4").firstChild.nodeValue > 0)
	{
		document.getElementById("a4").firstChild.nodeValue = parseInt(document.getElementById("a4").firstChild.nodeValue) - 1;	
		document.getElementById("r4").firstChild.nodeValue = parseInt(document.getElementById("r4").firstChild.nodeValue) + 1;
		sum += 5;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f5(){
	if (document.getElementById("a5").firstChild.nodeValue > 0)
	{
		document.getElementById("a5").firstChild.nodeValue = parseInt(document.getElementById("a5").firstChild.nodeValue) - 1;	
		document.getElementById("r5").firstChild.nodeValue = parseInt(document.getElementById("r5").firstChild.nodeValue) + 1;
		sum += 4;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f6(){
	if (document.getElementById("a6").firstChild.nodeValue > 0)
	{
		document.getElementById("a6").firstChild.nodeValue = parseInt(document.getElementById("a6").firstChild.nodeValue) - 1;	
		document.getElementById("r6").firstChild.nodeValue = parseInt(document.getElementById("r6").firstChild.nodeValue) + 1;
		sum += 8;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f7(){
	if (document.getElementById("a7").firstChild.nodeValue > 0)
	{
		document.getElementById("a7").firstChild.nodeValue = parseInt(document.getElementById("a7").firstChild.nodeValue) - 1;	
		document.getElementById("r7").firstChild.nodeValue = parseInt(document.getElementById("r7").firstChild.nodeValue) + 1;
		sum += 10;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f8(){
	if (document.getElementById("a8").firstChild.nodeValue > 0)
	{
		document.getElementById("a8").firstChild.nodeValue = parseInt(document.getElementById("a8").firstChild.nodeValue) - 1;	
		document.getElementById("r8").firstChild.nodeValue = parseInt(document.getElementById("r8").firstChild.nodeValue) + 1;
		sum += 20;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

function f9(){
	if (document.getElementById("a9").firstChild.nodeValue > 0)
	{
		document.getElementById("a9").firstChild.nodeValue = parseInt(document.getElementById("a9").firstChild.nodeValue) - 1;	
		document.getElementById("r9").firstChild.nodeValue = parseInt(document.getElementById("r9").firstChild.nodeValue) + 1;
		sum += 15;
		document.all.item("res").innerHTML = "<b>" + sum + " грн." + "</b>";
	}
}

