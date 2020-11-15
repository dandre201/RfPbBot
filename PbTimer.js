require("dotenv").config()
const Discord = require('discord.js');
 const client = new Discord.Client();

var NOTIFY_CHANNEL;

client.on('ready', () => {
 NOTIFY_CHANNEL = bot.channels.cache.get('jimbo_test'); // Channel to send notification
 //NOTIFY_CHANNEL = bot.channels.cache.get('prototype_general'); // Channel to send notification

 });

 // all itmes are in UK bases (gmt+0)
 //server time might be different

 client.on("message", function(message) {
 	var input = message.content.toUpperCase();
 	if(input === "?MAIN")
 	{

  //draco pop on 15/11/2020  -
  var lastDraco= 1605438480000;
  var dracoRePop= 115200000;  // 32 hours in ms
  var dracoName= "Draco";
  var dracoPopMsg = getNextPop( dracoName,lastDraco,dracoRePop);
  message.reply(dracoPopMsg);


  //last 3d =   14/11/2020
  var last3D = 1605343200000;
  var threeDRepop = 230400000; // 64 hours in ms
  var threeDName= "3D";
  var threeDPopMsg = getNextPop( threeDName,last3D,threeDRepop);
  message.reply(threeDPopMsg);

  //gil  every 96.5    - 14/11 14:40
  var lastGil = 1605364800000;
  var gilRepop = 	347400000; // 96.5 hours in ms
  var gilName= "Gil";
  var gilPopMsg = getNextPop( gilName,lastGil,gilRepop);
  message.reply(gilPopMsg);


  //herodian 24h  86400000
  var lastHero = 42;
  var heroRepop = 	86400000; // 24 hours in ms
  var heroName= "herodian";
  var heroPopMsg = getNextPop( heroName,lastHero,heroRepop);
  //message.reply(heroPopMsg);


  //ocl  96h  345600000
  var lastOcl = 42;
  var oclRepop = 	345600000; // 96 hours in ms
  var oclName= "RingLeader";
  var oclPopMsg = getNextPop( oclName,lastOcl,oclRepop);
  //message.reply(oclPopMsg);

    }

    else if (input === "?ELAN"){

      //normal elan pop- RJ, tarava,blink 2, SS
      var lastElan = 1605300300000;
      var elanRepop = 115200000; // 32 hours in ms
      var elanName= "Main Elan(RJ etc)";
      var elanPopMsg = getNextPop( elanName,lastElan,elanRepop);
      message.reply(elanPopMsg);

      //cali elan
      var lastCaliElan = 1605377280000;
      var caliElanRepop = 115200000; // 32 hours in ms
      var caliElanName= "cali Elan";
      var caliElanPopMsg = getNextPop( caliElanName,lastCaliElan,caliElanRepop);
      message.reply(caliElanPopMsg);

      //blink elan
      var lastblinkElan = 1605464820000;
      var blinkElanRepop = 86400000; // 32 hours in ms
      var blinkElanName= "blink Elan";
      var blinkElanPopMsg = getNextPop( blinkElanName,lastblinkElan,blinkElanRepop);
      message.reply(blinkElanPopMsg);

    }

    else if (input === "?HQ"){
// need to check time , repop should be 4 hours

    }

    else if (input === "?OTHER"){
      // dims, pig, k1/k2 i guess etc

    }

    else if (input === "?HELP"){

      var result = ("use the follow command to see PB's:  ?Main,  ?Elan, ?HQ, ?Other"  );
      message.reply(result);
    }
 });


function getNextPop(pbName,lastPB, pbRePop){
var d = new Date();

  if(lastPB + pbRePop >= d.getTime() )
  {
  var pbTimeLeft= new Date((lastPB + pbRePop) - d.getTime());
  var pbtime =msToTime(pbTimeLeft);
  var result = ("the next "+ pbName + " pb pops in : " + pbtime  );
  return result;

    }
    else if (lastPB + pbRePop <= d.getTime() ) {
      do {lastPB += pbRePop }
      while(lastPB + pbRePop <= d.getTime());

      var pbTimeLeft= new Date((lastPB + pbRePop) - d.getTime());
      var pbtime =msToTime(pbTimeLeft);
      var result = ("the next "+ pbName + " pb pops in : " + pbtime  );;

      return result;
    }
    else {
      var result = ("bobo "  );
      return result;
    }
}

 function  msToTime(duration) {
    var milliseconds = parseInt((duration % 1000) / 100),
      seconds = Math.floor((duration / 1000) % 60),
      minutes = Math.floor((duration / (1000 * 60)) % 60),
      hours = Math.floor((duration / (1000 * 60 * 60)) % 24),
      days = Math.floor(duration /(24 * 60 * 60 * 1000));

    hours = (hours < 10) ? "0" + hours : hours;
    minutes = (minutes < 10) ? "0" + minutes : minutes;
    seconds = (seconds < 10) ? "0" + seconds : seconds;

    if(days ===0){    return hours + " hours ," + minutes + " mins"}
    else if (days ===1) {   return days + " day ," + hours + " hours ," + minutes + " mins";
    }
    else {
      return days + " days ," + hours + " hours ," + minutes + " mins ";
    }
  }

client.login(process.env.BOT_TOKEN);
