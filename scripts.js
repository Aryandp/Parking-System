


    var n = prompt("enter the no. parking");
    for (i = 1; i <= n; i++) {
        $("table").append("<tr id='slot" + i + "''><td id='reg" + i + "''>empty</td><td id='colour" + i + "''>" +
            "<button id='btn-col" + i + "'' type='button' class=' bt btn btn-danger'></button></td><td>" + i + "</td><td id='operation" + i + "''>" +
            "<button id='remove" + i + "' class='btn btn-danger btn-sm remove' name='" + i + "'>" +
            "<span class='glyphicon glyphicoremove'></span>remove</button></td></tr>"
        );

    }

    var m = prompt("enter no of cars available");
    alert(n);
    alert(m);
    if( parseInt(n) < parseInt(m))
    {
        alert("less parking capacity");
    }
    else
    {
        for (i = 1; i <= m; i++) {
            var check;
            var col=colors[Math.floor(Math.random() * colors.length)];
            for (i = 1; i <= n; i++) {

                $(".btn-col").css("background-color",col );
                check = $("#reg" + i).html();
                if (check == "empty") {
                    $("#reg" + i).html("KA-"+st1+"-"+st2+"-"+st3+"  "+col);
                    $("#btn-col" + i).css("background-color",col );
                    break;

                }

            }


        }
    }



