

var n = prompt("enter the no. parking");
for (i = 1; i <= n; i++) {
    $("table").append("<tr id='slot" + i + "''><td id='reg" + i + "''>empty</td><td id='colour" + i + "''>" +
        "<button id='btn-col" + i + "'' type='button' class=' bt btn btn-danger'></button></td><td>" + i + "</td><td id='operation" + i + "''>" +
        "<button id='remove" + i + "' class='btn btn-danger btn-sm remove' name='" + i + "'>" +
        "<span class='glyphicon'></span></button></td></tr>"
    );

}