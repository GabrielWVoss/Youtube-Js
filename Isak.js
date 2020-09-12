var player;
var player2;
var player3;
var player4;

let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

const trackName = [
  "'Till I Collapse",
  "No Topo",
  "Trauma",
  "Canção Infantil",
  "Poeti estinti",
  "Negro Drama",
  "Marvins Room",
  "Nicole",
  "I Mean It",
  "I Fall Apart",
];
const trackSinger = [
  "Eminem",
  "Katari SC",
  "NF",
  "Pineapple Stormtv",
  "DJ Fastcut",
  "Racionais MC's",
  "Drake",
  "Choice feat. Xamã",
  "G-Eazy feat. Remo",
  "Post Malone",
];
const trackCover = [
  "url(https://i.imgur.com/j9f4XR0.jpg)",
  "url(https://i.imgur.com/TUZbQEh.jpg)",
  "url(https://i.imgur.com/WgqHeEy.jpg)",
  "url(https://i.imgur.com/W9Eh2gA.jpg)",
  "url(https://i.imgur.com/KFlaRIG.jpg)",
  "url(https://i.imgur.com/8TH0mzV.jpg)",
  "url(https://i.imgur.com/qrWZ6QN.jpg)",
  "url(https://i.imgur.com/95olSnM.jpg)",
  "url(https://i.imgur.com/syUbFBk.jpg)",
  "url(https://i.imgur.com/I5oYj7h.jpg)",
];

const trackName2 = [
  "Sem Roteiro",
  "Lie",
  "DM",
  "Stay",
  "Sereia",
  "idfc",
  "Baila Mais",
  "TVTB",
  "LEAL",
  "I Love It",
];
const trackSinger2 = [
  "Katari SC",
  "NF",
  "Matheus Queiroz feat. Go Dassisti",
  "Post Malone",
  "Costa Gold feat. Jay Kay",
  "blackbear",
  "Orgânico, SóCIRO",
  "Fedez feat. Dark Polo Gang",
  "Djonga",
  "Kanye West feat. Lil Pump",
];
const trackCover2 = [
  "url(https://i.imgur.com/86GkJlE.jpg)",
  "url(https://i.imgur.com/TNVK9Qq.jpg)",
  "url(https://i.imgur.com/WHjU9hn.jpg)",
  "url(https://i.imgur.com/88Klxbp.jpg)",
  "url(https://i.imgur.com/gEG7otc.jpg)",
  "url(https://i.imgur.com/tdhVcRl.jpg)",
  "url(https://i.imgur.com/MHRrsqR.jpg)",
  "url(https://i.imgur.com/AQat7sp.jpg)",
  "url(https://i.imgur.com/8KCV9xl.jpg)",
  "url(https://i.imgur.com/eEDD3l6.jpg)",
];

const trackName3 = ["I Just Can't Wait..."];
const trackSinger3 = ["From 'The Lion King'"];
const trackCover3 = ["url(https://i.imgur.com/r7MJ81F.jpg)"];

const trackName4 = ["I Just Can't Wait..."];
const trackSinger4 = ["From 'The Lion King'"];
const trackCover4 = ["url(https://i.imgur.com/r7MJ81F.jpg)"];

function onYouTubeIframeAPIReady() {
  onload = player = new YT.Player("video", {
    width: 600,
    height: 400,
    videoId: "Obim8BYGnOE",
    playerVars: {
      playlist:
        "8qMlVRg0W80,akhttJU-0mc,Ri-eF5PJ2X0,1JhW4gb27Hg,1DybpDjuxBY,JDb3ZZD4bA0,u7mkcDcWpOc,4MjSoquXAZ4,7a66clRobKI",
    },
    events: {
      onReady: initialize,
      onStateChange: onPlayerStateChange,
    },
  });

  onload = player2 = new YT.Player("video2", {
    width: 600,
    height: 400,
    videoId: "g7rpvWgK1QQ",
    playerVars: {
      playlist:
        "B1dmRjyN0CQ, tguduMQbmE8, 4Ukh9aQBzWc, eWPhsUrVqhc,v0pjeUTad2I, suhKnlhyMao, ePLH3kl7yXs, sEhOY55CSng,   Y_ixswnkhtA",
    },
    events: {
      onReady: initialize,
      onStateChange: onPlayerStateChange2,
    },
  });

  /* onload = player3 = new YT.Player("video3", {
    width: 600,
    height: 400,
    videoId: "ysb_gxJ8LE4",
    playerVars: {
      color: "white",
      playlist: "",
      controls: "0",
    },
    events: {
      onReady: initialize,
      onStateChange: onPlayerStateChange3,
    },
  });

  onload = player4 = new YT.Player("video4", {
    width: 600,
    height: 400,
    videoId: "ysb_gxJ8LE4",
    playerVars: {
      color: "white",
      playlist: "",
      controls: "0",
    },
    events: {
      onReady: initialize,
      onStateChange: onPlayerStateChange4,
    },
  }); */
}

// All Players

function initialize() {
  // Update the controls on load
  updateTimerDisplay();
  updateProgressBar();

  // Start interval to update elapsed time display and
  // the elapsed part of the progress bar every second.
  time_update_interval = setInterval(function () {
    updateTimerDisplay();
    updateProgressBar();
  }, 1000);
}

// This function is called by initialize()
function updateTimerDisplay() {
  // Update current time text display.
  $("#current-time1").text(formatTime(player.getCurrentTime()));
  $("#duration1").text(formatTime(player.getDuration()));
  $("#current-time2").text(formatTime(player2.getCurrentTime()));
  $("#duration2").text(formatTime(player2.getDuration()));
  // $("#current-time3").text(formatTime(player3.getCurrentTime()));
  // $("#duration3").text(formatTime(player3.getDuration()));
  // $("#current-time4").text(formatTime(player4.getCurrentTime()));
  // $("#duration4").text(formatTime(player4.getDuration()));
}

function formatTime(time) {
  time = Math.round(time);

  var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

  seconds = seconds < 10 ? "0" + seconds : seconds;

  return minutes + ":" + seconds;
}

// This function is called by initialize()
function updateProgressBar() {
  // Update the value of our progress bar accordingly.
  $("#progress-bar1").val(
    (player.getCurrentTime() / player.getDuration()) * 100
  );
  $("#progress-bar2").val(
    (player2.getCurrentTime() / player2.getDuration()) * 100
  );
  /*  $("#progress-bar3").val(
    (player3.getCurrentTime() / player3.getDuration()) * 100
  );
  $("#progress-bar4").val(
    (player4.getCurrentTime() / player4.getDuration()) * 100
  ); */
}

// Player 1

function onPlayerStateChange(event) {
  if (
    index >= 0 &&
    index < trackName.length - 1 &&
    event.data == YT.PlayerState.ENDED
  ) {
    index++;
    $("#title1").text(trackName[index]);
    $("#singer1").text(trackSinger[index]);
    $("#playerDiscCover1").css("background-image", trackCover[index]);
  }
}

$("#playerCD1").on("click", function () {
  $("#play1").css("display", "none");
  $("#pause1").css("display", "block");
  $("#playerDisc1").css("right", "40px");
  $("#playerDisc2").css("right", "210px");
  $("#playerDisc3").css("right", "210px");
  $("#playerDisc4").css("right", "210px");
  $("#title1").text(trackName[index]);
  $("#singer1").text(trackSinger[index]);
  $("#playerDiscCover1").css("background-image", trackCover[index]);
  player.playVideo();
  player2.pauseVideo();
  //  player3.pauseVideo();
  // player4.pauseVideo();
});

$("#play1").on("click", function () {
  $("#play1").css("display", "none");
  $("#pause1").css("display", "block");
  $("#playerDisc1").css("right", "40px");
  player.playVideo();
});

$("#pause1").on("click", function () {
  $("#play1").css("display", "block");
  $("#pause1").css("display", "none");
  $("#playerDisc1").css("right", "150px");
  player.pauseVideo();
});

$("#next1").on("click", function () {
  if (index >= 0 && index < trackName.length - 1) {
    index++;
    $("#title1").text(trackName[index]);
    $("#singer1").text(trackSinger[index]);
    $("#playerDiscCover1").css("background-image", trackCover[index]);
    $("#play1").css("display", "none");
    $("#pause1").css("display", "block");
    $("#playerDisc1").css("right", "40px");
    player.nextVideo();
  }
});

$("#prev1").on("click", function () {
  if (index > 0 && index < trackName.length) {
    index--;
    $("#title1").text(trackName[index]);
    $("#singer1").text(trackSinger[index]);
    $("#playerDiscCover1").css("background-image", trackCover[index]);
    $("#play1").css("display", "none");
    $("#pause1").css("display", "block");
    $("#playerDisc1").css("right", "40px");
    player.previousVideo();
  }
});

$("#progress-bar1").on("mouseup touchend", function (e) {
  // Calculate the new time for the video.
  // new time in seconds = total duration in seconds * ( value of range input / 100 )
  var newTime = player.getDuration() * (e.target.value / 100);

  // Skip video to new time.
  player.seekTo(newTime);
});

// Player 2

function onPlayerStateChange2(event) {
  if (
    index2 >= 0 &&
    index2 < trackName2.length - 1 &&
    event.data == YT.PlayerState.ENDED
  ) {
    index2++;
    $("#title2").text(trackName2[index2]);
    $("#singer2").text(trackSinger2[index2]);
    $("#playerDiscCover2").css("background-image", trackCover2[index2]);
  }
}

$("#play2").on("click", function () {
  $("#play2").css("display", "none");
  $("#pause2").css("display", "block");
  $("#playerDisc2").css("right", "40px");
  player2.playVideo();
});

$("#playerCD2").on("click", function () {
  $("#play2").css("display", "none");
  $("#pause2").css("display", "block");
  $("#playerDisc1").css("right", "210px");
  $("#playerDisc2").css("right", "40px");
  $("#playerDisc3").css("right", "210px");
  $("#playerDisc4").css("right", "210px");
  $("#title2").text(trackName2[index2]);
  $("#singer2").text(trackSinger2[index2]);
  $("#playerDiscCover2").css("background-image", trackCover2[index2]);
  player.pauseVideo();
  player2.playVideo();
  //  player3.pauseVideo();
  //  player4.pauseVideo();
});

$("#pause2").on("click", function () {
  $("#play2").css("display", "block");
  $("#pause2").css("display", "none");
  $("#playerDisc2").css("right", "150px");
  player2.pauseVideo();
});

$("#next2").on("click", function () {
  if (index2 >= 0 && index2 < trackName2.length - 1) {
    index2++;
    $("#title2").text(trackName2[index2]);
    $("#singer2").text(trackSinger2[index2]);
    $("#playerDiscCover2").css("background-image", trackCover2[index2]);
    $("#play2").css("display", "none");
    $("#pause2").css("display", "block");
    $("#playerDisc2").css("right", "40px");
    player2.nextVideo();
  }
});

$("#prev2").on("click", function () {
  if (index2 > 0 && index2 < trackName2.length) {
    index2--;
    $("#title2").text(trackName2[index2]);
    $("#singer2").text(trackSinger2[index2]);
    $("#playerDiscCover2").css("background-image", trackCover2[index2]);
    $("#play2").css("display", "none");
    $("#pause2").css("display", "block");
    $("#playerDisc2").css("right", "40px");
    player2.previousVideo();
  }
});

$("#progress-bar2").on("mouseup touchend", function (e) {
  // Calculate the new time for the video.
  // new time in seconds = total duration in seconds * ( value of range input / 100 )
  var newTime = player2.getDuration() * (e.target.value / 100);

  // Skip video to new time.
  player2.seekTo(newTime);
});

/*// Player 3 (Ship)

function onPlayerStateChange3(event) {
  if (
    index3 >= 0 &&
    index3 < trackName3.length - 1 &&
    event.data == YT.PlayerState.ENDED
  ) {
    index3++;
    $("#title3").text(trackName3[index3]);
    $("#singer3").text(trackSinger3[index3]);
    $("#playerDiscCover3").css("background-image", trackCover3[index3]);
  }
}

$("#playerCD3").on("click", function () {
  $("#play3").css("display", "none");
  $("#pause3").css("display", "block");
  $("#playerDisc3").css("right", "40px");
  $("#playerDisc4").css("right", "210px");
  $("#playerDisc1").css("right", "210px");
  $("#playerDisc2").css("right", "210px");
  $("#title3").text(trackName3[index3]);
  $("#singer3").text(trackSinger3[index3]);
  $("#playerDiscCover3").css("background-image", trackCover3[index3]);
  player.pauseVideo();
  player2.pauseVideo();
  player3.playVideo();
  player4.pauseVideo();
});

$("#play3").on("click", function () {
  $("#play3").css("display", "none");
  $("#pause3").css("display", "block");
  $("#playerDisc3").css("right", "40px");
  player3.playVideo();
});

$("#pause3").on("click", function () {
  $("#play3").css("display", "block");
  $("#pause3").css("display", "none");
  $("#playerDisc3").css("right", "150px");
  player3.pauseVideo();
});

$("#next3").on("click", function () {
  if (index3 >= 0 && index3 < trackName3.length - 1) {
    index3++;
    $("#title3").text(trackName3[index3]);
    $("#singer3").text(trackSinger3[index3]);
    $("#playerDiscCover3").css("background-image", trackCover3[index3]);
    $("#play3").css("display", "none");
    $("#pause3").css("display", "block");
    $("#playerDisc3").css("right", "40px");
    player3.nextVideo();
  }
});

$("#prev3").on("click", function () {
  if (index3 > 0 && index3 < trackName3.length) {
    index3--;
    $("#title3").text(trackName3[index3]);
    $("#singer3").text(trackSinger3[index3]);
    $("#playerDiscCover3").css("background-image", trackCover3[index3]);
    $("#play3").css("display", "none");
    $("#pause3").css("display", "block");
    $("#playerDisc3").css("right", "40px");
    player3.previousVideo();
  }
});

$("#progress-bar3").on("mouseup touchend", function (e) {
  // Calculate the new time for the video.
  // new time in seconds = total duration in seconds * ( value of range input / 100 )
  var newTime = player3.getDuration() * (e.target.value / 100);

  // Skip video to new time.
  player3.seekTo(newTime);
});

// Player 4 (Ship)

function onPlayerStateChange4(event) {
  if (
    index4 >= 0 &&
    index4 < trackName4.length - 1 &&
    event.data == YT.PlayerState.ENDED
  ) {
    index4++;
    $("#title4").text(trackName4[index4]);
    $("#singer4").text(trackSinger4[index4]);
    $("#playerDiscCover4").css("background-image", trackCover4[index4]);
  }
}

$("#playerCD4").on("click", function () {
  $("#play4").css("display", "none");
  $("#pause4").css("display", "block");
  $("#playerDisc4").css("right", "40px");
  $("#playerDisc3").css("right", "210px");
  $("#playerDisc1").css("right", "210px");
  $("#playerDisc2").css("right", "210px");
  $("#title4").text(trackName4[index4]);
  $("#singer4").text(trackSinger4[index4]);
  $("#playerDiscCover4").css("background-image", trackCover4[index4]);
  player.pauseVideo();
  player2.pauseVideo();
  player4.playVideo();
  player3.pauseVideo();
});

$("#play4").on("click", function () {
  $("#play4").css("display", "none");
  $("#pause4").css("display", "block");
  $("#playerDisc4").css("right", "40px");
  player4.playVideo();
});

$("#pause4").on("click", function () {
  $("#play4").css("display", "block");
  $("#pause4").css("display", "none");
  $("#playerDisc4").css("right", "150px");
  player4.pauseVideo();
});

$("#next4").on("click", function () {
  if (index4 >= 0 && index4 < trackName4.length - 1) {
    index4++;
    $("#title4").text(trackName4[index4]);
    $("#singer4").text(trackSinger4[index4]);
    $("#playerDiscCover4").css("background-image", trackCover3[index4]);
    $("#play4").css("display", "none");
    $("#pause4").css("display", "block");
    $("#playerDisc4").css("right", "40px");
    player4.nextVideo();
  }
});

$("#prev4").on("click", function () {
  if (index4 > 0 && index4 < trackName4.length) {
    index4--;
    $("#title4").text(trackName4[index4]);
    $("#singer4").text(trackSinger4[index4]);
    $("#playerDiscCover4").css("background-image", trackCover4[index4]);
    $("#play4").css("display", "none");
    $("#pause4").css("display", "block");
    $("#playerDisc4").css("right", "40px");
    player4.previousVideo();
  }
});

$("#progress-bar4").on("mouseup touchend", function (e) {
  // Calculate the new time for the video.
  // new time in seconds = total duration in seconds * ( value of range input / 100 )
  var newTime = player4.getDuration() * (e.target.value / 100);

  // Skip video to new time.
  player4.seekTo(newTime);
});
*/
