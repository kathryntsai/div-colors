function hexSwitch(val){
	var val2;
	switch (val){
		case 10: val2 = "A"; break;
		case 11: val2 = "B"; break;
		case 12: val2 = "C"; break;
		case 13: val2 = "D"; break;
		case 14: val2 = "E"; break;
		case 15: val2 = "F"; break;
		default: val2 = val;
	}
	return val2;
}

function createRow(i1, i2, i3, i4, i5){
	var myLDiv = "";
	var a1 = hexSwitch(i1);
	var a2 = hexSwitch(i2);
	var a3 = hexSwitch(i3);
	var a4 = hexSwitch(i4);
	var a5 = hexSwitch(i5);
	
	for (i6 = 0; i6 < 16; i6++){
		var a6 = hexSwitch(i6);
		var color = "#" + a1 + a2 + a3 + a4 + a5 + a6;
		myLDiv = myLDiv + '<div style="border: thin solid black; height:10px; width:10px; background-color:' + color + '">' + '&nbsp' + '</div>'; //color
	}
	return myLDiv;
}

$('.scroll').jscroll();

var rowSize = 16;

//for (var i1 = 0; i1 < rowSize; i1++){
	//for (var i2 = 0; i2 < rowSize; i2++){
		for (i3 = 0; i3 < rowSize; i3++){
			for (i4 = 0; i4 < rowSize; i4++){
				for (i5 = 0; i5 < rowSize; i5++){
					thisRow = createRow("A", "A", i3, i4, i5)
					$('#myTable').append('<tr><td>' + thisRow + '</td></tr>')
				}
			}
		}
	//}
//}