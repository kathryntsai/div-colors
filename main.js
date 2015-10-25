function hexSwitch(val){
	switch (val){
		case 10: var val2 = "A"; break;
		case 11: var val2 = "B"; break;
		case 12: var val2 = "C"; break;
		case 13: var val2 = "D"; break;
		case 14: var val2 = "E"; break;
		case 15: var val2 = "F"; break;
		default: var val2 = val;
	}
	return val2;
}

function createRow(i1, i2, i3, i4, i5){
	var myRow = "";
	var a1 = hexSwitch(i1);
	var a2 = hexSwitch(i2);
	var a3 = hexSwitch(i3);
	var a4 = hexSwitch(i4);
	var a5 = hexSwitch(i5);
	
	for (var i6 = 0; i6 < 16; i6++){
		var a6 = hexSwitch(i6);
		var color = "#" + a1 + a2 + a3 + a4 + a5 + a6;
		myRow = myRow + '<td style="border: thin solid black; height:15px; width:15px; background-color:' + color + '">' + '&nbsp' + '</div>'; //color
	}
	return myRow;
}

$('.scroll').jscroll();

//$(document).ready(function(){
//$(window).scroll(function() {
//if($(window).scrollTop() == $(document).height() - $(window).height()) {
	var rowSize = 16;

	for (var i1 = 0; i1 < rowSize; i1++){
		for (var i2 = 0; i2 < rowSize; i2++){
			for (var i3 = 0; i3 < rowSize; i3++){
				for (var i4 = 0; i4 < rowSize; i4++){
					for (var i5 = 0; i5 < rowSize; i5++){
						//thisRow = createRow("A", "A", i3, i4, i5); //i1, i2
						thisRow = createRow("A", "A", i4, i5, i3)
						$('#myTable').append('<tr>' + thisRow + '</tr>')
					}
				}
			}
		}
	}
//}
//});