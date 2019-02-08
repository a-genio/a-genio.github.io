

$("input").on("click", function() {
    var s = document.getElementById("pole1"),
        m = document.getElementById("pole2"),
        b = document.getElementById("pole3");

    if(s.checked == true) {
        $("a").attr("href", "index(3x3).html")
    } else {
        if(m.checked == true) {
            $("a").attr("href", "index(4x4).html")
        } else {
            if(b.checked == true) {
                $("a").attr("href", "index(5x5).html")
            };
        };
    };
})