var terms = new Array();
var max = 7;
            
for (i=1;i<=max;i++) { 
    terms[i] = new Array();
}
            
terms[1]['search'] = 'apple iphone 11 pro max'; 
terms[1]['des'] = 'Apple iPhone 11 Pro Max'; 
terms[1]['lnk'] = '#';

terms[2]['search'] = 'apple iphone 11 pro'; 
terms[2]['des'] = 'Apple iPhone 11 Pro'; 
terms[2]['lnk'] = '#';

terms[3]['search'] = 'apple iphone 11'; 
terms[3]['des'] = 'Apple iPhone 11'; 
terms[3]['lnk'] = '#';

terms[4]['search'] = 'apple iphone xs max'; 
terms[4]['des'] = 'Apple iPhone XS Max'; 
terms[4]['lnk'] = '#';

terms[5]['search'] = 'apple iphone xs'; 
terms[5]['des'] = 'Apple iPhone XS'; 
terms[5]['lnk'] = '#';

terms[6]['search'] = 'apple iphone xr'; 
terms[6]['des'] = 'Apple iPhone XR'; 
terms[6]['lnk'] = '#';

terms[7]['search'] = 'apple iphone x'; 
terms[7]['des'] = 'Apple iPhone X'; 
terms[7]['lnk'] = '#';


function desktopsearch() {
    var input = document.getElementById('headersearchinput').value.toLowerCase();
    var i=0;
    var list="";
    var pos=-1;

    if(input!="") { 
        for(i=1; i<=max; i++) { 
            pos= terms[i]['search'].indexOf(input);

            if(pos!=-1) { 

                list= list + '<a class="desktopsearchqueryresults" href="'+terms[i]['lnk']+'">' + terms[i]['des'] + '</a>' + '<br>'; 

            }   
            pos=-1;
        }

        if(list==""){ 
            document.getElementById("desktopsearchresults").innerHTML = "";
            document.getElementById("desktopsearchresults").style.display = "none";
        } else { 
            document.getElementById("desktopsearchresults").innerHTML = list;
            document.getElementById("desktopsearchresults").style.display = "block";
        }
    }
}






var terms = new Array();
  var max = 7;
              
  for (i=1;i<=max;i++) { 
      terms[i] = new Array();
  }
              
  terms[1]['search'] = 'apple iphone 11 pro max'; 
  terms[1]['des'] = 'Apple iPhone 11 Pro Max'; 
  terms[1]['lnk'] = '#';
  
  terms[2]['search'] = 'apple iphone 11 pro'; 
  terms[2]['des'] = 'Apple iPhone 11 Pro'; 
  terms[2]['lnk'] = '#';
  
  terms[3]['search'] = 'apple iphone 11'; 
  terms[3]['des'] = 'Apple iPhone 11'; 
  terms[3]['lnk'] = '#';
  
  terms[4]['search'] = 'apple iphone xs max'; 
  terms[4]['des'] = 'Apple iPhone XS Max'; 
  terms[4]['lnk'] = '#';
  
  terms[5]['search'] = 'apple iphone xs'; 
  terms[5]['des'] = 'Apple iPhone XS'; 
  terms[5]['lnk'] = '#';
  
  terms[6]['search'] = 'apple iphone xr'; 
  terms[6]['des'] = 'Apple iPhone XR'; 
  terms[6]['lnk'] = '#';
  
  terms[7]['search'] = 'apple iphone x'; 
  terms[7]['des'] = 'Apple iPhone X'; 
  terms[7]['lnk'] = '#';
  
  
  function mobilesearch() {
      var input = document.getElementById('mobilesearchinput').value.toLowerCase();
      var i=0;
      var list="";
      var pos=-1;
  
      if(input!="") { 
          for(i=1; i<=max; i++) { 
              pos= terms[i]['search'].indexOf(input);
  
              if(pos!=-1) { 
  
                  list= list + '<a class="mobilesearchqueryresults" href="'+terms[i]['lnk']+'">' + terms[i]['des'] + '</a>' + '<br>'; 
  
              }   
              pos=-1;
          }
  
          if(list==""){ 
              document.getElementById("mobilesearchresults").innerHTML = "";
              document.getElementById("mobilesearchresults").style.display = "none";
          } else { 
              document.getElementById("mobilesearchresults").innerHTML = list;
              document.getElementById("desktopsearchresults").style.display = "block";
          }
      }
  }












$(function(){
  if (localStorage && localStorage["checked"]) {
    var localStoredData = JSON.parse(localStorage["checked"]);
    var checkboxes = $("input[name='theme']");
    for (var i = 0; i < checkboxes.length; i++) {
      for (var j = 0; j < localStoredData.length; j++) {
        if (checkboxes[i].value == localStoredData[j]) {
          checkboxes[i].checked = true;
        }
      }
    }
    localStorage.removeItem('checked');
  }
  $("#switchcolor").click(function() {
    var data = $("input[name='theme']:checked").map(function() {
      return this.value;
    }).get();
    localStorage['checked'] = JSON.stringify(data);
  })
})
