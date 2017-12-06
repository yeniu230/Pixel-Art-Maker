// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

function makeGrid(numWidth, numHeight) {
    let tr = "";
    let td = "";
    for (var x = 1; x <= numWidth; x++) {td += "<td></td>";}
    for (var y = 1; y <= numHeight; y++) {tr += "<tr>" + td + "</tr>";}
    return tr;
}
let width = Number($("#input_width").val());
let height = Number($("#input_height").val());
$("[typy='submit']").click($("#pixel_canvas").append(makeGrid(10,10)));
$("td").click(function(){
    let color = $("#colorPicker").val();
    $(this).css("background", color);
})
