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

 	if(input === "?MAIN")	{
      message.reply(getDraco());

      message.reply(get3d());

      message.reply(getGil());

      message.reply(getOcl());

      message.reply(getNova());

    }

    else if (input ==="?DRACO"){
      message.reply(getDraco());
    }

    else if (input ==="?NOVA"){
      message.reply(getNova());
    }

    else if (input ==="?RINGLEADER"){
      message.reply(getOcl());
    }

    else if (input ==="?GIL"){
      message.reply(getGil());
    }

    else if (input ==="?3D"){
      message.reply(get3d());
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

    message.reply("These might be wrong ,  get me the pop + repop times!!!!! :D");

    //Solus, Ana, hq-warbeast
    var lastHq = 1608051600000;
    var hqRepop = 14400000; //4 hours  to ms
    var hqName= "Solus, Ana, warbeast";
    var hqPopMsg = getNextPop( hqName,lastHq,hqRepop);
    message.reply(hqPopMsg);

    //hq ratmoth, argol drone
    var lastHqRat = 1605509100000;
    var hqRatRepop = 14400000; //4 hours  to ms
    var hqRatName= "HQ ratmoth, argol drone";
    var hqRatPopMsg = getNextPop( hqRatName,lastHqRat,hqRatRepop);
    //message.reply(hqRatPopMsg);


    }

    else if (input === "?OTHER"){
      // dims, ether cali

      message.reply(getEq());

      message.reply(getPig());

      message.reply(getK1());

    }


    else if (input === "?EQ"){
      message.reply(getEq());
    }

    else if (input === "?PIG"){
      message.reply(getPig());
    }

    else if (input === "?HERODIAN"){
      message.reply(getHerodian());
      message.reply("Herodian Pb pop time changes after maintenance, this tiem is the earlies and it can be anytime +2 hours");
      }

    else if (input === "?HELP"){

      message.reply("Use the follow command to see PB's:  ?Main,  ?Elan, ?HQ, ?Other"  );;
      message.reply("Or you can also type the PB name: ?Draco, ?Ringleader , ?Nova , etc"  );;
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

function getOcl(){
  //ocl  96h  345600000
  var lastOcl = 1605323280000;
  var oclRepop = 	345600000; // 96 hours in ms
  var oclName= "RingLeader";
  var oclPopMsg = getNextPop( oclName,lastOcl,oclRepop);
  return oclPopMsg;
}

function getNova(){
  //Nova
  var lastNova = 1608050700000;
  var novaRepop = 14400000; //4 hours  to ms
  var novaName= "Nova";
  var novaPopMsg = getNextPop( novaName,lastNova,novaRepop);
  return novaPopMsg;
}

function getGil(){
  //gil  every 96.5    - 14/11 14:40
  var lastGil = 1605364800000;
  var gilRepop = 	347400000; // 96.5 hours in ms
  var gilName= "Gil";
  var gilPopMsg = getNextPop( gilName,lastGil,gilRepop);
  return gilPopMsg;
}

function getDraco(){
  //draco pop on 15/11/2020  -
  var lastDraco= 1605438480000;
  var dracoRePop= 115200000;  // 32 hours in ms
  var dracoName= "Draco";
  var dracoPopMsg = getNextPop( dracoName,lastDraco,dracoRePop);
  return dracoPopMsg;
}

function get3d(){
  //last 3d =   14/11/2020
  var last3D = 1605343200000;
  var threeDRepop = 230400000; // 64 hours in ms
  var threeDName= "3D";
  var threeDPopMsg = getNextPop( threeDName,last3D,threeDRepop);
  return threeDPopMsg;
}

function getEq(){
  //EQ .. 22:02
  var lastEq = 1605564150000;
  var eqRepop = 14430000; //4 hours 30 secs to ms
  var eqName= "EQ";
  var eqPopMsg = getNextPop( eqName,lastEq,eqRepop);
  return eqPopMsg;
}

function getPig(){
  //gold pig 10:43 ?
  var lastPig = 1605523380000;
  var pigRepop = 86400000; //24 hours to ms
  var pigName= "Gold Pig";
  var pigPopMsg = getNextPop( pigName,lastPig,pigRepop);
  return pigPopMsg;
}

function getK1(){
  //k1 - 20:44
  var lastk = 1605559440000;
  var kRepop = 28800000; // 8 hours to ms
  var kName= "K1/K2";
  var kPopMsg = getNextPop( kName,lastk,kRepop);
  return kPopMsg
}

function getHerodian(){
  var lastHero = 1605403080000;
  var heroRepop = 	86400000; // 24 hours in ms
  var heroName= "herodian";
  var heroPopMsg = getNextPop( heroName,lastHero,heroRepop);
  return heroPopMsg;

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
