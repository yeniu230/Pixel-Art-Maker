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

 $("[type='submit']").on("click",function(event){
    $("#pixel_canvas").empty();
    var widthJun, heightJi, piexl;
    widthJun = Number($("#input_width").val());
    heightJi = Number($("#input_height").val());
    piexl = makeGrid(widthJun,heightJi);
    $("#pixel_canvas").append(piexl);
    event.preventDefault();
});

$("#pixel_canvas").on("click", "td", function(){
    let color = $("#colorPicker").val();
    $(this).css("background", color);
})
