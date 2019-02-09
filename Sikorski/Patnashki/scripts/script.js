$('#conteiner3 :checkbox').change(function() {
    if (this.id == "svet1") {
        $('#conteiner3 :checkbox:not(#svet1)').prop("checked", false);
    } else {
        if (this.id == "svet2") {
            $('#conteiner3 :checkbox:not(#svet2)').prop("checked", false);
        } else {
            if (this.id == "svet3") {
                $('#conteiner3 :checkbox:not(#svet3)').prop("checked", false);
            }
           }
        }
});

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
});

$("#btn").on("click", function() {
    if($("#svet1").prop("checked") == false) { 
        if($("#svet2").prop("checked") == false) {
            if($("#svet3").prop("checked") == false) {
                $("a").attr("href", "")
                window.alert("Цвет поля должен быть выбран!");
            };
        };
    };
});