/*	function hid1(){	
		var table = document.getElementById("table");
		if (r1 == 1)
		{		
			table.deleteRow(x1);
			r1=-1;
			x1=0;
			x--;
			sum -= 3;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue)+1;
		}
		else if (sum > 0)
		{
			r1--;
			table.rows[x1].cells[1].firstChild.nodeValue = r1;
			sum -= 3;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue)+1;

		}
	}*/
	function hid1(){
		if (sum > 0)
		{
			sum -= 3;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a1").firstChild.nodeValue = parseInt(document.getElementById("a1").firstChild.nodeValue)+1;
			document.getElementById("r1").firstChild.nodeValue = parseInt(document.getElementById("r1").firstChild.nodeValue)-1;
		}
	}
	function hid2(){
		if (sum > 0)
		{
			sum -= 6;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a2").firstChild.nodeValue = parseInt(document.getElementById("a2").firstChild.nodeValue)+1;
			document.getElementById("r2").firstChild.nodeValue = parseInt(document.getElementById("r2").firstChild.nodeValue)-1;
		}
	}
	function hid3(){
		if (sum > 0)
		{
			sum -= 7;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a3").firstChild.nodeValue = parseInt(document.getElementById("a3").firstChild.nodeValue)+1;
			document.getElementById("r3").firstChild.nodeValue = parseInt(document.getElementById("r3").firstChild.nodeValue)-1;
		}
	}
	function hid4(){
		if (sum > 0)
		{
			sum -= 5;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a4").firstChild.nodeValue = parseInt(document.getElementById("a4").firstChild.nodeValue)+1;
			document.getElementById("r4").firstChild.nodeValue = parseInt(document.getElementById("r4").firstChild.nodeValue)-1;
		}
	}
	function hid5(){
		if (sum > 0)
		{
			sum -= 4;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a5").firstChild.nodeValue = parseInt(document.getElementById("a5").firstChild.nodeValue)+1;
			document.getElementById("r5").firstChild.nodeValue = parseInt(document.getElementById("r5").firstChild.nodeValue)-1;
		}
	}
	function hid6(){
		if (sum > 0)
		{
			sum -= 8;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a6").firstChild.nodeValue = parseInt(document.getElementById("a6").firstChild.nodeValue)+1;
			document.getElementById("r6").firstChild.nodeValue = parseInt(document.getElementById("r6").firstChild.nodeValue)-1;
		}
	}
	function hid7(){
		if (sum > 0)
		{
			sum -= 10;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a7").firstChild.nodeValue = parseInt(document.getElementById("a7").firstChild.nodeValue)+1;
			document.getElementById("r7").firstChild.nodeValue = parseInt(document.getElementById("r7").firstChild.nodeValue)-1;
		}
	}
	function hid8(){
		if (sum > 0)
		{
			sum -= 20;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a8").firstChild.nodeValue = parseInt(document.getElementById("a8").firstChild.nodeValue)+1;
			document.getElementById("r8").firstChild.nodeValue = parseInt(document.getElementById("r8").firstChild.nodeValue)-1;
		}
	}
	function hid9(){
		if (sum > 0)
		{
			sum -= 15;
			document.all.item("res").innerHTML = sum + " грн.";
			document.getElementById("a9").firstChild.nodeValue = parseInt(document.getElementById("a9").firstChild.nodeValue)+1;
			document.getElementById("r9").firstChild.nodeValue = parseInt(document.getElementById("r9").firstChild.nodeValue)-1;
		}
	}
