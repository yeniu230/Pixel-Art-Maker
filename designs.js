// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid() {
    let tr = "";
    let td = "";
    for (var y = 1; y <= 4; y++){
    	for (var x = 1; x <= 4; x++) {td += "<td></td>";}
    tr += "<tr>" + td + "</tr>";
    };
    return tr;
}
$("[typy='submit']").click($("#pixel_canvas").append(makeGrid()));
$("td").click(function(){
    let color = $("#colorPicker").val();
    $(this).css("background", color);
})
