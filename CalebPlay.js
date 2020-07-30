var player;
var player2;

let index = 0;
let index2 = 0;

const trackName = ["I Want It That Way", "Welcome to My Life", "Não Sei Viver...", "Who Let The Dogs Out",
                    "Good Girls", "Hotel California", "Put Your Records On", "Barbie Girl", "Sk8er Boi",
                    "Show Me the Meaning..." ];
const trackSinger = ["Backstreet Boys", "Simple Plan", "CPM 22", "Baha Men",
                    "5 Seconds of Summer", "Eagles", "Corinne Bailey Rae", "Aqua", "Avril Lavigne",
                    "Backstreet Boys"];
const trackCover = ["url(https://i.imgur.com/fdHAAkT.jpg)",
                    "url(https://i.imgur.com/NbkpB8f.jpg)",
                    "url(https://i.imgur.com/fIxnyc1.jpg)",
                    "url(https://i.imgur.com/CNXJri9.jpg)",
                    "url(https://i.imgur.com/MpzkuRb.jpg)",
                    "url(https://i.imgur.com/9Quliag.jpg)",
                    "url(https://i.imgur.com/4fzE91e.jpg)",
                    "url(https://i.imgur.com/S2akGLv.jpg)",
                    "url(https://i.imgur.com/yBZpI3i.png)",
                    "url(https://i.imgur.com/IEC5KvP.jpg)" ];
                    
const trackName2 = ["That's What I Like", ];
const trackSinger2 = ["Bruno Mars", ];
const trackCover2 = ["url(https://i.imgur.com/Ctp3nTP.png)", ];

function onYouTubeIframeAPIReady() {
    onload=player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: '4fndeDfaWCg',
        playerVars: {
            color: 'white',
			playlist: 'r0U0AlLVqpk,DKqSeHVb8rw,Qkuu0Lwb5EM,292XUJ5jH7U,EqPtz5qN7HM,rjOhZZyn30k,ZyhrYis509A,IvAPUKhBumU,U2H0oaGIjVg',
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
        videoId: 'PMivT7MJ41M',
        playerVars: {
            color: 'white',
			playlist: 'PsO6ZnUZI0g,0yW7w8F2TVA',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange2
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
	if (index >= 0 && index < trackName.length - 1 && event.data == YT.PlayerState.ENDED) {
		index++;
		$("#title1").text(trackName[index]);
		$("#singer1").text(trackSinger[index]);
		$("#playerDiscCover1").css("background-image", trackCover[index]);
	}
}

function onPlayerStateChange2(event) {
	if (index >= 0 && index < trackName.length - 1 && event.data == YT.PlayerState.ENDED) {
    	index2++;
        $("#title2").text(trackName2[index2]);
		$("#singer2").text(trackSinger2[index2]);
		$("#playerDiscCover2").css("background-image", trackCover2[index2]);
	}
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
        $('#playerDisc2').css("right", "40px");
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
