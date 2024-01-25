$(document).ready(function() {
    var variantsDiv = $("#variant-options-div");
    var hasVariantsCheckbox = $("#hasVariants");

    // Your logic here
    hasVariantsCheckbox.on("change", function() {
      toggleVariants();
    });

    function toggleVariants() {
      if (hasVariantsCheckbox.prop("checked")) {
        variantsDiv.show();
      } else {
        variantsDiv.hide();
      }
    }


    $("#variant-types").on("change", function() {
        var variant = $(this).val();
        if(variant == "size") {
            $(".variant-option-sizes").show(); 
        }else if(variant == "color") {
            $(".variant-option-colors").show();
        }else {
            $(".variant-option-sizes").hide();
            $(".variant-option-colors").hide();
        }

      });

      $("#done-btn").on("click", function() {
        $(".variants-container").show();

        var colors = String($("#color").val()).split(',');
        var sizes =  String($("#sizes").val()).split(',');
        
        $('.variants-container-appended').empty()
        for (var i = 0; i < colors.length; i++) {
              for(var j = 0; j < sizes.length; j ++) {
                var color = colors[i];
                var size = sizes[j];
                var combination = ""
                if(color.length > 0 && size.length > 0) {
                   combination = color + "/" + size;
                }else if (color.length > 0){
                  combination = color;
                }else if(size.length > 0) {
                  combination = size;
                }

                if(combination == "") {
                  alert("Select variant options");
                  break;
                }
                var element = `
                <div class="element">
                    <label for="checkbox${i+j}"> ${colors[i]}/ ${sizes[j]}</label>
                    <input type="text" placeholder="Price">
                    <input type="text" placeholder="Quantity">
                    <button type="button">Edit</button>
                </div>
            `;
               $('.variants-container-appended').append(element);
              }
        }

        $('.variants-container-appended').show();

      });


  });