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

    if($("#pole1").prop("checked") == true) {
        if($("#svet1").prop("checked") == true) {
            $("a").attr("href", "pole/RED/index(3x3).html")
        }

        if($("#svet2").prop("checked") == true) {
            $("a").attr("href", "pole/VIOLET/index(3x3).html")
        
        }

        if($("#svet3").prop("checked") == true) {
              $("a").attr("href", "pole/BLUE/index(3x3).html")
            
            }
        } else {
            if($("#pole2").prop("checked") == true) {
                if($("#svet1").prop("checked") == true) {
                    $("a").attr("href", "pole/RED/index(4x4).html")
                }
        
                if($("#svet2").prop("checked") == true) {
                    $("a").attr("href", "pole/VIOLET/index(4x4).html")
                
                }
        
                if($("#svet3").prop("checked") == true) {
                      $("a").attr("href", "pole/BLUE/index(4x4).html")
                    
                    }
            } else {
                if($("#pole3").prop("checked") == true) {
                    if($("#svet1").prop("checked") == true) {
                        $("a").attr("href", "pole/RED/index(5x5).html")
                    }
            
                    if($("#svet2").prop("checked") == true) {
                        $("a").attr("href", "pole/VIOLET/index(5x5).html")
                    
                    }
            
                    if($("#svet3").prop("checked") == true) {
                          $("a").attr("href", "pole/BLUE/index(5x5).html")
                        
                        }
                    }
                }
            }
        })

$("#btn").on("click", function() {
    if($("#svet1").prop("checked") == false) { 
        if($("#svet2").prop("checked") == false) {
            if($("#svet3").prop("checked") == false) {
                $("a").attr("href", "")
                window.alert("Цвет поля должен быть выбран!");
            }
        }
    }
})