function ani2(){
 document.getElementById('notify').className = 'notification2'
 setTimeout(hide, 400)
}
function hide(){
 document.getElementById('notify').style.display = 'none'
}

function awaitpl(){
	    document.getElementById('notify').style.display = ''
	    document.getElementById('notify').className = 'notification'
      setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#c5c7ff>Tải gói dữ liệu...</h1>'; }, 50);
      setTimeout(function(){document.getElementById("log").innerHTML="<h1 style=color:#c5c7ff>"+LoadedMSG+"</h1>"; }, 800);
      setTimeout(ani2, 4000);
}

function load_exploit(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#c5c7ff>Đang bẻ khoá.. Vui lòng đợi !!!</h1>'; }, 50); 
}

function load_exploit_already(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#c5c7ff>Gói bẻ khoá đã tải xong !!!</h1>'; }, 50); 
    setTimeout(ani2, 4000);
}

function goldhen_already(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#c5c7ff>Đã tải xong trình nạp tệp nhị phân GoldHen !!!</h1>'; }, 50); 
    setTimeout(ani2, 4000);
}

function load_exploit_done(){
    document.getElementById('notify').style.display = ''
    document.getElementById('notify').className = 'notification'
    setTimeout(function(){document.getElementById('log').innerHTML ='<h1 style=color:#c5c7ff>Bẻ khoá thành công !!! GoldHEN v2.4b18.10 được nạp !!!</h1>'; }, 50); 
    setTimeout(ani2, 4000);
}

function LoadFromGHBLS(PLfile){
 var req=new XMLHttpRequest();
 req.open("GET","http://127.0.0.1:9090/status");
 req.send();
 req.onerror=function(){alert("Không thể tải GÓI DỮ LIỆU vì máy chủ BinLoader chưa chạy");return;};
 req.onload=function(){
  var responseJson=JSON.parse(req.responseText);
  if(responseJson.status=="ready"){
   getPayload(PLfile,function(req){if((req.status===200||req.status===304)&&req.response){sendPayload("http://127.0.0.1:9090",req.response);}});
  }
  else{alert("Không thể tải GÓI DỮ LIỆU vì máy chủ BinLoader đang bận");return;}
 };
 var getPayload=function(pl,onLoadEndCallback){
  var req=new XMLHttpRequest();
  req.open('GET',pl);
  req.send();
  req.responseType="arraybuffer";
  req.onload=function(event){if(onLoadEndCallback)onLoadEndCallback(req,event);};
 };
 var sendPayload=function(url,data,onLoadEndCallback){
  var req=new XMLHttpRequest();
  req.open("POST",url,true);
  req.send(data);req.onload=function(event){awaitpl();if(onLoadEndCallback)onLoadEndCallback(req,event);};
 };
}

function CalcTime(dur){hrs=Math.floor(dur/1000/60/60);min=Math.floor(dur/1000/60-hrs*60);sec=Math.floor(dur/1000-min*60);mil=dur.toString().slice(-3);if (min!=0){ShowDuration=" - WK Exploited In : "+min+" minute"+(min==1?"":"s")+", "+sec+" second"+(sec==1?"":"s");}else {ShowDuration=" - Exploited In: "+sec+" second"+(sec==1?"":"s");}}
function StartTimer(){StartTime=Date.now();}
function EndTimer(){EndTime=Date.now();CalcTime(EndTime=Date.now()-StartTime);document.title+=ShowDuration;}