set = function(){
	String.prototype.replaceAll = function(str1, str2, ignore) 
	{
	  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
	};
$('#search-fb').click(function(){
	$('#search-content').hide();
	$('#search-msg').html("<h2>Loading content...</h2>");
	$('#search-msg').show();
	$('#second').show();

    GraphExtractor.search();
  });
  
  $('#extract-fb').click(function(){
	$('#play-content').hide();
	$('#play-msg').html("<h2>Adding content...</h2>");
	$('#play-msg').show();
    $("#third").show();
    GraphExtractor.get();
  });
  
  $('#extract-rec').click(function(){
    GraphExtractor.getRec();
  });

  $('#create-quiz').click(function(){
    QuizConstructor.createQuiz("CULTUREPLEX_GRAPH")
  });

	$('#create-quiz-fb').click(function(){
		$("#create-quiz-fb").hide();
		QuizConstructor.createQuiz("FREEBASE_GRAPH")
    });

	$('#showEdges').click(function(){
	  GraphManager.manageShowEdges();
	});

	$('#answer0').click(function(){
	  QuizConstructor.checkAnswer(0);
	});
	$('#answer1').click(function(){
	  QuizConstructor.checkAnswer(1);
	});
	$('#answer2').click(function(){
	  QuizConstructor.checkAnswer(2);
	});
	$('#answer3').click(function(){
	  QuizConstructor.checkAnswer(3);
	});
	$("#query").keyup(function(event){
		if(event.keyCode == 13){
		   $("#search-fb").click();
		}
	});
};
start = function(){
   /*
      $('#extract-fb').click(function() { 
          /*$.blockUI({ css: { 
              border: 'none', 
              padding: '15px', 
              backgroundColor: '#000', 
              '-webkit-border-radius': '10px', 
              '-moz-border-radius': '10px', 
              opacity: .5, 
              color: '#fff' 
          } });
          }); 
   */
  GraphManager.initSigma();
  GraphExtractor.init();
  GraphManager.init();
  $("#second").hide();
  $("#third").hide();
  $(".chzn-select").chosen();

  

	$('#answer0').hide();
	$('#answer1').hide();
	$('#answer2').hide();
	$('#answer3').hide();

	//Setting button behaviours for enter key up.
	
};
