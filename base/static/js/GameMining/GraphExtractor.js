var GraphExtractor = {
  //Freebase Extractor Variables:
  name: "",
  type: "",
  search: function () {
    GraphExtractor.name = $('#query')[0].value;
    jQuery.get("https://www.googleapis.com/freebase/v1/mqlread", 'query= [{"name":"' + GraphExtractor.name + '","type":[]}]', function (data) {
      GraphExtractor.showTypes(data.result);
    });
  },
  get: function () {
    GraphExtractor.type = $('#type_select_from').val();
    jQuery.get("https://www.googleapis.com/freebase/v1/mqlread", 'query={"name":"' + GraphExtractor.name + '","type":"' + GraphExtractor.type +'","*":null}', function (data) {
      console.log(data);
      GraphExtractor.setGraph(data.result,true);
    });
  },
  getStar: function (name,type,time) {
    setTimeout(function(){
        console.log('pidiendo nombre '+ name + ' yipo '+ type);
        jQuery.get("https://www.googleapis.com/freebase/v1/mqlread", 'query={"name":"' + name + '","type":"' + type +'","*":null}', function (data) {
          console.log('montando estrella');
          console.log(data);
          GraphExtractor.setGraph(data.result,false);
        });
    },time);
  },
  init: function () {
  },
  showTypes: function (result) {
    $('#type_select_from').empty();
    $.each(result, function (k, v) {
      if (v.type instanceof Array)
      {
        for (var obj in v.type)
        {
          if (v.type[obj] !== "/common/topic" && v.type[obj] !== "/media_common/cataloged_instance")
          {
            $("#type_select_from").append('<option value=' + v.type[obj] + '>' + v.type[obj] + '</option>');
          }
        }
      }
    });
  },
  //*=[{}]
    setGraphNew: function (result,r) {
    GraphManager.init();
    var origin = GraphManager.graph.node({ "name" : result.name , "type" : GraphExtractor.type});
    var node;
    var time=1000;
    console.log(result);
    for (var i in result) {
        for (var j in result[i])
        {
              console.log(result[i]);
              node = GraphManager.graph.node({ "name" : result[i].name , "type" : result[i].type[0]});
              GraphManager.graph.rel(origin, {"name" : result[i].type[0] }, node);
        }
            /*if (v != null)
            {
         
            }*/
          }
    //});
  },


  //*=null
  setGraph: function (result,r) {
    GraphManager.init();
    var origin = GraphManager.graph.node({ "name" : result.name , "type" : GraphExtractor.type});
    var node;
    var time=1000;
    console.log(result);
    $.each(result, function (k, v) {
        if (k !== "name" && k !== "key" && k !== "guid" && k !== "mid" && k !== "id" && k !== "permission" && k !== "timestamp")
        {
          if (v instanceof Array)
          {
            for (var obj in v)
            {
            console.log(r);
              if(r)
              {
               console.log('entrando');
               //GraphExtractor.getStar(v[obj],k,time);
               time+=3000;
              }
              node = GraphManager.graph.node({ "name" : v[obj] , "type" : k});
              GraphManager.graph.rel(origin, k , node);
            }
          } else
          {
            if (v != null)
            {
              node = GraphManager.graph.node({ "name" : v , "type" : k});
              GraphManager.graph.rel(origin, {"name" : k }, node);
            }
          }
        }
    });
  }
};

