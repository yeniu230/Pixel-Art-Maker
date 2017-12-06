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

$("[type='submit']").click(function(){
     var widthJun, heightJi, piexl;
     widthJun = Number($("#input_width").val());
     heightJi = Number($("#input_height").val());
     piexl = makeGrid(widthJun,heightJi);
     $("#pixel_canvas").append(piexl);
})

$("td").click(function(){
    let color = $("#colorPicker").val();
    $(this).css("background", color);
})
