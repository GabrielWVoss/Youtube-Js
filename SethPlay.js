var player;
var player2;
var player3;
var player4;

let index = 0;
let index2 = 0;
let index3 = 0;
let index4 = 0;

const trackName = ["If You Want Love", "Stronger", "Need You Still", "Not Afraid", "Sober", "Trauma",
                    "Toosie Slide", "Stan Spotfy Recorded", "you should see me...", "Can't Lie",
                    "'Till I Collapse", "Remember the Name", "Different Hos", "Ser Maior", "Only God Can Judge Me",
                    "Febre de Mudança", "In Da Club", "De Hora em Hora", "Smack That" ];
const trackSinger = ["NF", "Kanye West", "Ivan B feat. Keith Fontano", "Eminem", "G-Eazy feat. Charlie Puth", "NF",
                    "Drake", "Alec Benjamin", "Billie Eilish", "Ali Gatie",
                    "Eminem", "Fort Minor, Mike Shinoda", "Blackbear", "Katari SC feat. Blaut", "2Pac",
                    "3030 feat. Emicida", "50 Cent", "A.D.Z", "Akon feat. Eminem" ];
const trackCover = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://i.imgur.com/5BZ7vxg.jpg)", 
                    "url(https://i.imgur.com/bfKgV91.jpg)", 
                    "url(https://i.imgur.com/RRFrOq0.jpg)",
                    "url(https://i.imgur.com/nksm6aY.png)",
                    "url(https://i.imgur.com/3jitHJ1.jpg)",
                    "url(https://i.imgur.com/LQ807IS.jpg)",
                    "url(https://i.imgur.com/Jo9Yg77.jpg)",
                    "url(https://i.imgur.com/6eYNzML.jpg)",
                    "url(https://i.imgur.com/O8SKcU1.jpg)",
                    "url(https://i.imgur.com/7dbsDvw.jpg)",
                    "url(https://i.imgur.com/tRu0Ufs.png)",
                    "url(https://i.imgur.com/PlX1jLt.jpg)",
                    "url(https://i.imgur.com/EHmlFWo.jpg)",
                    "url(https://i.imgur.com/Qd8tssG.jpg)",
                    "url(https://i.imgur.com/6t7ONWE.jpg)",
                    "url(https://i.imgur.com/nCHlLCX.jpg)",
                    "url(https://i.imgur.com/Nc5kmRP.jpg)",
                    "url(https://i.imgur.com/ma5w92R.jpg)" ];
                    
const trackName2 = ["If You Want", "Stronger", "BMW", "lal"];
const trackSinger2 = ["NF", "Kanye West", "BMW", "bi"];
const trackCover2 = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://64.media.tumblr.com/c1a3de323a967d96e8ca238eaeac2e6c/tumblr_ov3ke6DjdP1v7655qo1_500.gifv)", 
                    "url(https://uploads.spiritfanfiction.com/usuarios/jornal/e-hora-de-dar-tchau-12244618-280220182359.gif)", 
                    "url(https://images.genius.com/093524f55308e0c3a99f8d6f7746a3bf.1000x1000x1.jpg)"];

const trackName3 = ["I Just Can't Wait...", "The A Team" ];
const trackSinger3 = ["From 'The Lion King'", "Marshmello" ];
const trackCover3 = ["url(https://i.imgur.com/r7MJ81F.jpg)",
					"url(https://i.imgur.com/qHGhfOR.jpg)" ];

const trackName4 = ["I Just Can't Wait...", "The A Team" ];
const trackSinger4 = ["From 'The Lion King'", "Marshmello"  ];
const trackCover4 = ["url(https://i.imgur.com/r7MJ81F.jpg)",
					"url(https://i.imgur.com/qHGhfOR.jpg)" ];

function onYouTubeIframeAPIReady() {
    onload=player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: 'LfxY1sg5_rw',
        playerVars: {
            color: 'white',
			playlist: 'PsO6ZnUZI0g,EVzUk-uk_Nc,j5-yKhDd64s,8OARiNiJ_w8,akhttJU-0mc,xXuGq4Xf77g,bELPHxnaAFk,Ah0Ys50CqO8,y7ogiYZDsLI,ytQ5CYE1VZw,VDvr08sCPOc,4hBwH3thlPs,SkK2J9M1e1s,5gLoEBbZNis,854WQhuSISc,5qm8PH4xAss,87qgnEJGcTE,bKDdT_nyP54',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange
        }
    })

    onload=player2 = new YT.Player('video2', {
        width: 600,
        height: 400,
        videoId: 'LfxY1sg5_rw',
        playerVars: {
            color: 'white',
			playlist: 'PsO6ZnUZI0g,0yW7w8F2TVA',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange2
        }
    })

    onload=player3 = new YT.Player('video3', {
        width: 600,
        height: 400,
        videoId: 'ysb_gxJ8LE4',
        playerVars: {
            color: 'white',
			playlist: 'UAWcs5H-qgQ,',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange3
        }
    });
    
	onload=player4 = new YT.Player('video4', {
        width: 600,
        height: 400,
        videoId: 'ysb_gxJ8LE4',
        playerVars: {
            color: 'white',
			playlist: 'UAWcs5H-qgQ,',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange4
        }
    });
}

// All Players

function initialize(){
    // Update the controls on load
    updateTimerDisplay();
    updateProgressBar();
	
	console.log("Update");
    // Start interval to update elapsed time display and
    // the elapsed part of the progress bar every second.
    time_update_interval = setInterval(function () {
		console.log("Update");
        updateTimerDisplay();
        updateProgressBar();
    }, 1000)
}

// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
	$('#current-time1').text(formatTime( player.getCurrentTime() ));
    $('#duration1').text(formatTime( player.getDuration() ));
    $('#current-time2').text(formatTime( player2.getCurrentTime() ));
	$('#duration2').text(formatTime( player2.getDuration() ));
	$('#current-time3').text(formatTime( player3.getCurrentTime() ));
	$('#duration3').text(formatTime( player3.getDuration() ));
	$('#current-time4').text(formatTime( player4.getCurrentTime() ));
    $('#duration4').text(formatTime( player4.getDuration() ));
}

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
	$('#progress-bar1').val((player.getCurrentTime() / player.getDuration()) * 100);
	$('#progress-bar2').val((player2.getCurrentTime() / player2.getDuration()) * 100);
	$('#progress-bar3').val((player3.getCurrentTime() / player3.getDuration()) * 100);
    $('#progress-bar4').val((player4.getCurrentTime() / player4.getDuration()) * 100);
}

// Player 1

function onPlayerStateChange(event) {
	if (index >= 0 && index < trackName.length - 1 && event.data == YT.PlayerState.ENDED) {
		index++;
		$("#title1").text(trackName[index]);
		$("#singer1").text(trackSinger[index]);
		$("#playerDiscCover1").css("background-image", trackCover[index]);
	}
}

$('#playerCD1').on('click', function () { 
    $('#play1').css("display", "none");
    $('#pause1').css("display", "block");
    $('#playerDisc1').css("right", "40px");
	$('#playerDisc2').css("right", "210px");
	$('#playerDisc3').css("right", "210px");
	$('#playerDisc4').css("right", "210px");
    $("#title1").text(trackName[index]);
    $("#singer1").text(trackSinger[index]);
    $("#playerDiscCover1").css("background-image", trackCover[index]);
    player.playVideo(); 
    player2.pauseVideo(); 
    player3.pauseVideo(); 
    player4.pauseVideo(); 
});

$('#play1').on('click', function () { 
    $('#play1').css("display", "none");
    $('#pause1').css("display", "block");
    $('#playerDisc1').css("right", "40px");
    player.playVideo(); 
});

$('#pause1').on('click', function () {
    $('#play1').css("display", "block");
    $('#pause1').css("display", "none");
    $('#playerDisc1').css("right", "150px");
    player.pauseVideo(); 
});

$('#next1').on('click', function () {
    if (index >= 0 && index < trackName.length - 1) {
        index++;
        $("#title1").text(trackName[index]);
        $("#singer1").text(trackSinger[index]);
        $("#playerDiscCover1").css("background-image", trackCover[index]);
        $('#play1').css("display", "none");
		$('#pause1').css("display", "block");
		$('#playerDisc1').css("right", "40px");
        player.nextVideo() }
});

$('#prev1').on('click', function () { 
    if (index > 0 && index < trackName.length) {
   		index--;
        $("#title1").text(trackName[index]);
        $("#singer1").text(trackSinger[index]);
        $("#playerDiscCover1").css("background-image", trackCover[index]);
        $('#play1').css("display", "none");
		$('#pause1').css("display", "block");
		$('#playerDisc1').css("right", "40px");
		player.previousVideo() }
});

$('#progress-bar1').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});

// Player 2

function onPlayerStateChange2(event) {
	if (index2 >= 0 && index2 < trackName2.length - 1 && event.data == YT.PlayerState.ENDED) {
    	index2++;
        $("#title2").text(trackName2[index2]);
		$("#singer2").text(trackSinger2[index2]);
		$("#playerDiscCover2").css("background-image", trackCover2[index2]);
	}
}

$('#play2').on('click', function () { 
    $('#play2').css("display", "none");
    $('#pause2').css("display", "block");
    $('#playerDisc2').css("right", "40px");
    player2.playVideo(); 
});

$('#playerCD2').on('click', function () { 
    $('#play2').css("display", "none");
    $('#pause2').css("display", "block");
    $('#playerDisc1').css("right", "210px");
	$('#playerDisc2').css("right", "40px");
	$('#playerDisc3').css("right", "210px");
	$('#playerDisc4').css("right", "210px");
    $("#title2").text(trackName2[index2]);
    $("#singer2").text(trackSinger2[index2]);
    $("#playerDiscCover2").css("background-image", trackCover2[index2]);
    player.pauseVideo(); 
    player2.playVideo();
    player3.pauseVideo(); 
    player4.pauseVideo(); 
});

$('#pause2').on('click', function () {
    $('#play2').css("display", "block");
    $('#pause2').css("display", "none");
    $('#playerDisc2').css("right", "150px");
    player2.pauseVideo(); 
});

$('#next2').on('click', function () {
    if (index2 >= 0 && index2 < trackName2.length - 1) {
        index2++;
        $("#title2").text(trackName2[index2]);
        $("#singer2").text(trackSinger2[index2]);
        $("#playerDiscCover2").css("background-image", trackCover2[index2]);
        $('#play2').css("display", "none");
		$('#pause2').css("display", "block");
		$('#playerDisc2').css("right", "40px");
        player2.nextVideo() }
});

$('#prev2').on('click', function () { 
    if (index2 > 0 && index2 < trackName2.length) {
   		index2--;
        $("#title2").text(trackName2[index2]);
        $("#singer2").text(trackSinger2[index2]);
        $("#playerDiscCover2").css("background-image", trackCover2[index2]);
        $('#play2').css("display", "none");
		$('#pause2').css("display", "block");
		$('#playerDisc2').css("right", "40px");
		player2.previousVideo() }
});

$('#progress-bar2').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player2.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player2.seekTo(newTime);

});

// Player 3 (Ship)

function onPlayerStateChange3(event) {
	if (index3 >= 0 && index3 < trackName3.length - 1 && event.data == YT.PlayerState.ENDED) {
		index3++;
		$("#title3").text(trackName3[index3]);
		$("#singer3").text(trackSinger3[index3]);
		$("#playerDiscCover3").css("background-image", trackCover3[index3]);
	}
}

$('#playerCD3').on('click', function () { 
    $('#play3').css("display", "none");
    $('#pause3').css("display", "block");
    $('#playerDisc3').css("right", "40px");
	$('#playerDisc4').css("right", "210px");
	$('#playerDisc1').css("right", "210px");
	$('#playerDisc2').css("right", "210px");
    $("#title3").text(trackName3[index3]);
    $("#singer3").text(trackSinger3[index3]);
    $("#playerDiscCover3").css("background-image", trackCover3[index3]);
    player.pauseVideo(); 
    player2.pauseVideo(); 
    player3.playVideo(); 
    player4.pauseVideo(); 
});

$('#play3').on('click', function () { 
    $('#play3').css("display", "none");
    $('#pause3').css("display", "block");
    $('#playerDisc3').css("right", "40px");
    player3.playVideo(); 
});

$('#pause3').on('click', function () {
    $('#play3').css("display", "block");
    $('#pause3').css("display", "none");
    $('#playerDisc3').css("right", "150px");
    player3.pauseVideo(); 
});

$('#next3').on('click', function () {
    if (index3 >= 0 && index3 < trackName3.length - 1) {
        index3++;
        $("#title3").text(trackName3[index3]);
        $("#singer3").text(trackSinger3[index3]);
        $("#playerDiscCover3").css("background-image", trackCover3[index3]);
        $('#play3').css("display", "none");
		$('#pause3').css("display", "block");
		$('#playerDisc3').css("right", "40px");
        player3.nextVideo() }
});

$('#prev3').on('click', function () { 
    if (index3 > 0 && index3 < trackName3.length) {
   		index3--;
        $("#title3").text(trackName3[index3]);
        $("#singer3").text(trackSinger3[index3]);
        $("#playerDiscCover3").css("background-image", trackCover3[index3]);
        $('#play3').css("display", "none");
		$('#pause3').css("display", "block");
		$('#playerDisc3').css("right", "40px");
		player3.previousVideo() }
});

$('#progress-bar3').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player3.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player3.seekTo(newTime);

});

// Player 4 (Ship)

function onPlayerStateChange4(event) {
	if (index4 >= 0 && index4 < trackName4.length - 1 && event.data == YT.PlayerState.ENDED) {
		index4++;
		$("#title4").text(trackName4[index4]);
		$("#singer4").text(trackSinger4[index4]);
		$("#playerDiscCover4").css("background-image", trackCover4[index4]);
	}
}

$('#playerCD4').on('click', function () { 
    $('#play4').css("display", "none");
    $('#pause4').css("display", "block");
    $('#playerDisc4').css("right", "40px");
	$('#playerDisc3').css("right", "210px");
	$('#playerDisc1').css("right", "210px");
	$('#playerDisc2').css("right", "210px");
    $("#title4").text(trackName4[index4]);
    $("#singer4").text(trackSinger4[index4]);
    $("#playerDiscCover4").css("background-image", trackCover4[index4]);
    player.pauseVideo(); 
    player2.pauseVideo(); 
    player4.playVideo(); 
    player3.pauseVideo(); 
});

$('#play4').on('click', function () { 
    $('#play4').css("display", "none");
    $('#pause4').css("display", "block");
    $('#playerDisc4').css("right", "40px");
    player4.playVideo(); 
});

$('#pause4').on('click', function () {
    $('#play4').css("display", "block");
    $('#pause4').css("display", "none");
    $('#playerDisc4').css("right", "150px");
    player4.pauseVideo(); 
});

$('#next4').on('click', function () {
    if (index4 >= 0 && index4 < trackName4.length - 1) {
        index4++;
        $("#title4").text(trackName4[index4]);
        $("#singer4").text(trackSinger4[index4]);
        $("#playerDiscCover4").css("background-image", trackCover3[index4]);
        $('#play4').css("display", "none");
		$('#pause4').css("display", "block");
		$('#playerDisc4').css("right", "40px");
        player4.nextVideo() }
});

$('#prev4').on('click', function () { 
    if (index4 > 0 && index4 < trackName4.length) {
   		index4--;
        $("#title4").text(trackName4[index4]);
        $("#singer4").text(trackSinger4[index4]);
        $("#playerDiscCover4").css("background-image", trackCover4[index4]);
        $('#play4').css("display", "none");
		$('#pause4').css("display", "block");
		$('#playerDisc4').css("right", "40px");
		player4.previousVideo() }
});

$('#progress-bar4').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player4.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player4.seekTo(newTime);
});