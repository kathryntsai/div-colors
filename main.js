/*$("input[type=submit]").click(function(){
    $("<li />").html("item").appendTo("ul");
})*/

//$('body').append('<div>');
//$( ".container" ).append( $( "h2" ) );
//$( ".inner" ).append( '<div style="bgcolor:#0000FF; border: thin solid black">&nbsp</div>' );

/*for (var i = 0; i < 16; i++){
	
}*/

function createRow(a1, a2, a3, a4, a5){
	//var myRow = [];
	var myRow = "";
	for (var i = 0; i < 16; i++){
		if (i > 9){
			switch (i){
				case 10: var a6 = "A"; break;
				case 11: var a6 = "B"; break;
				case 12: var a6 = "C"; break;
				case 13: var a6 = "D"; break;
				case 14: var a6 = "E"; break;
				case 15: var a6 = "F"; break;
			}
		}
		else{
			var a6 = i;
		}
		var color = "#" + a1 + a2 + a3 + a4 + a5 + a6;
		//myRow.push('<td style="border: thin solid black; height:15px; width:15px; background-color:' + color + '">&nbsp</div>');
		myRow = myRow + '<td style="border: thin solid black; height:15px; width:15px; background-color:' + color + '">&nbsp</div>';
	}
	return myRow;
}
$(document).ready(function(){
	//var boardID = "r" + i + "c" + j;
	
	row1 = createRow(16, 16, 16, 16, 16);
	/*for (var i = 0; i < row1.length; i++){
		//$('body').append('<div backgroundColor="' + row1[i] + '">&nbsp</div>');
		//$('body').append('<div style="border: thin solid black; height:30px; width:15px; background-color:' + row1[i] + '">&nbsp</div>');
	}*/
	
	$('#myTable').append('<tr>' + row1 + '</tr>')
	
});