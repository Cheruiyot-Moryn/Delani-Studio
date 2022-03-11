$(function(){
    $("form#form34A").submit(function(event){
      // event.preventDefault();
      var name = $("input#MERGE1").val();
      var email = $("input#MERGE0").val();
      var message = $("textarea#comment").val();
      if ($("input#MERGE1").val() && $("input#MERGE0").val()){
        alert (name + ", we have received your message. Thank you for reaching out to us.");
      }
      else {
        alert("Please enter your name and email!");
      }
    });
});

$(function(){
    $("#work1").mouseenter(function(){
      $("#overlay").show();
    }).mouseleave(function(){
      $("#overlay").hide();
    });
  });
  $(function(){
    $("#work2").mouseenter(function(){
      $("#work2-overlay").show();
    }).mouseleave(function(){
      $("#work2-overlay").hide();
    });
  });
  $(function(){
    $("#work3").mouseenter(function(){
      $("#work3-overlay").show();
    }).mouseleave(function(){
      $("#work3-overlay").hide();
    });
  });
  $(function(){
    $("#work4").mouseenter(function(){
      $("#work4-overlay").show();
    }).mouseleave(function(){
      $("#work4-overlay").hide();
    });
  });
  $(function(){
    $("#work5").mouseenter(function(){
      $("#work5-overlay").show();
    }).mouseleave(function(){
      $("#work5-overlay").hide();
    });
    $("#work6").mouseenter(function(){
        $("#work6-overlay").show();
      }).mouseleave(function(){
        $("#work6-overlay").hide();
      });
      $("#work6").mouseenter(function(){
        $("#work6-overlay").show();
      }).mouseleave(function(){
        $("#work6-overlay").hide();
      });
      $("#work8").mouseenter(function(){
        $("#work8-overlay8").show();
      }).mouseleave(function(){
        $("#work8-overlay8").hide();
      });
    });

    $(function(){
        $(".design").click(function(){
          $("#design,design").toggle("slow");
        })
      })
      $(function(){
        $(".design").click(function(){
          $("#design,design").toggle("slow");
        })
      })

      $(function(){
        $(".development").click(function(){
          $("#development,development").toggle("slow");
        })
      })
      $(function(){
        $(".development").click(function(){
          $("#development,development").toggle("slow");
        })
      })

      $(function(){
        $(".product management").click(function(){
          $("#product management,product management").toggle("slow");
        })
      })
      $(function(){
        $(".product management").click(function(){
          $("#product management,product management").toggle("slow");
        })
      })
    