var colors = ['black', 'blue', 'red','white'];
// myDiv.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
$(document).ready(function () {

    var n = prompt("enter the no. parking");
    for (i = 1; i <= n; i++) {
        $("table").append("<tr id='slot" + i + "''><td id='reg" + i + "''>empty</td><td id='colour" + i + "''>" +
            "<button id='btn-col" + i + "'' type='button' class=' bt btn btn-danger'></button></td><td>" + i + "</td><td id='operation" + i + "''>" +
            "<button id='remove" + i + "' class='btn btn-danger btn-sm remove' name='" + i + "'>" +
            "<span class='glyphicon glyphicon'></span>remove</button></td></tr>"
        );

    }

    var m = prompt("enter no of cars available");
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
                var st1=Math.floor(10 + (99 - 10) * Math.random());
                var st2=Math.random().toString(36).replace(/[^a-z]+/g, '').substr(0, 2).toUpperCase();
                var st3=Math.floor(1000 + (9999 - 1000) * Math.random());
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

    $("#allocateParkingSlot").click(function () {
        var registrationNo = $("#registrationNo").val();
        var check;
        var count;
        var i;
        for (i = 1; i <= n; i++) {
            check = $("#reg" + i).html();
            if (check == "empty") {
                $("#reg" + i).html(registrationNo);
                var col=colors[Math.floor(Math.random() * colors.length)];
                $("#btn-col" + i).css("background-color",col );
                break;

            }




        }
        $("#registrationNo").val("");


        if( parseInt(i) > parseInt(n))
        {
            alert("less parking capacity");
        }


    });

    $(".remove").click(function () {
        var remove = $(this).attr("name");
        $("#reg" + remove).html("empty");
        $("#btn-col" + remove).css("background-color","transparent" );
    });

    $("#startSearch").click(function () {
        var colour = $("#searchByColour").val();
        alert(colour);
    });

});