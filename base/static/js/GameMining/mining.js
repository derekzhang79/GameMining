$(document).ready(function(){
  String.prototype.replaceAll = function(str1, str2, ignore) 
  {
	  return this.replace(new RegExp(str1.replace(/([\/\,\!\\\^\$\{\}\[\]\(\)\.\*\+\?\|\<\>\-\&])/g,"\\$&"),(ignore?"gi":"g")),(typeof(str2)=="string")?str2.replace(/\$/g,"$$$$"):str2);
  }
  GraphExtractor.init();
  GraphManager.init();
  $("#second").hide();
  $("#third").hide();
  $(".chzn-select").chosen();

  $('#search-fb').click(function(){
  $("#second").show();
    GraphExtractor.search();
  });
  
  $('#extract-fb').click(function(){
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
      
        $('#answer0').hide();
        $('#answer1').hide();
        $('#answer2').hide();
        $('#answer3').hide();
});
