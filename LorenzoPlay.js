var player;
var player2;

let index = 0;
let index2 = 0;

const trackName = ["Il ballo delle incertezza", "Guerriero", "Vivo per lei", "Da grande", "Dejavu", "Naufrago",
					"Faccio un casino", "Litigare", "Salutalo da parte mia", "Per La Strade Una...",
					"Ti Avrei Voluto Dire" ];
const trackSinger = ["Ultimo", "Marco Mengoni", "Andrea Bocelli", "Benji & Fede", "Biondo", "Briga",
					"Coez", "Davide Petrella", "Einar", "Eros Ramazzotti feat. Luis Fonsi",
					"Federica Carta"];
const trackCover = ["url(https://i.imgur.com/3B89bpQ.jpg)",
                    "url(https://i.imgur.com/A7TrAT2.jpg)", 
                    "url(https://i.imgur.com/A7m0PKl.jpg)",
                    "url(https://i.imgur.com/Ba1rG8M.jpg)",
                    "url(https://i.imgur.com/WGVtBYT.jpg)",
                    "url(https://i.imgur.com/tcYuTlt.jpg)",
                    "url(https://i.imgur.com/f5iBfLv.jpg)",
					"url(https://i.imgur.com/B0UtcgE.jpg)",
					"url(https://i.imgur.com/PD9uxOa.jpg)",
					"url(https://i.imgur.com/Z2kzfLt.jpg)",
					"url(https://i.imgur.com/puHL2f8.jpg)" ];

const trackName2 = ["I Just Can't Wait...", "The A Team" ];
const trackSinger2 = ["From 'The Lion King'", "Ed Sheeran" ];
const trackCover2 = ["url(https://i.imgur.com/r7MJ81F.jpg)",
                        "url(https://i.imgur.com/raLthno.jpg)" ];

function onYouTubeIframeAPIReady() {
    onload=player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: 'EyZir4O5pu4',
        playerVars: {
            color: 'white',
			playlist: 'fK8LrzzC4-8,N3WOVnTz-Yo,cpX7EwbIlwg,a1K7D4RpaDs,lBLRFmC5CqM,H6qqA0SOkIs,1uIWjaloYkg,mYc9jSdhwMw,HdFE2jSVxfc',
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
        videoId: 'ysb_gxJ8LE4',
        playerVars: {
            color: 'white',
			playlist: 'UAWcs5H-qgQ',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange
        }
    });
}

// Both Players

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

function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.ENDED && index >= 0 && index < trackName.length - 1) {
        index++;
        $("h3").text(trackName[index]);
        $("h5").text(trackSinger[index]);
        $("#playerDiscCover1").css("background-image", trackCover[index]);
    }
    else if (event.data == YT.Player2State.ENDED && index >= 0 && index < trackName.length - 1) {
        index2++;
        $("h3").text(trackName[index]);
        $("h5").text(trackSinger[index]);
        $(".playerDiscCover").css("background-image", trackCover[index]); }
}

// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time1').text(formatTime( player.getCurrentTime() ));
    $('#duration1').text(formatTime( player.getDuration() ));
    $('#current-time2').text(formatTime( player2.getCurrentTime() ));
    $('#duration2').text(formatTime( player2.getDuration() ));
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
}

// Player 1

$('#playerCD1').on('click', function () { 
    $('#play1').css("display", "none");
    $('#pause1').css("display", "block");
    $('#playerDisc1').css("right", "40px");
    $('#playerDisc2').css("right", "210px");
    $("#title1").text(trackName[index]);
    $("#singer1").text(trackSinger[index]);
    $("#playerDiscCover1").css("background-image", trackCover[index]);
    player.playVideo(); 
    player2.pauseVideo(); 
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
    $("#title2").text(trackName2[index2]);
    $("#singer2").text(trackSinger2[index2]);
    $("#playerDiscCover2").css("background-image", trackCover2[index2]);
    player.pauseVideo(); 
    player2.playVideo(); 
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
