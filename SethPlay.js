var player;

const trackName = ["If You Want Love", "Stronger", "Need You Still", "Warriors", "Not Afraid", "Calm Snow",
                        "Sober", "Trauma", "We're Tired", "Human", "Toosie Slide", "Stan Spotfy Recorded",
                        "you should see me..."];
const trackSinger = ["NF", "Kanye West", "Ivan B feat. Keith Fontano", "Imagine Dragons", "Eminem", "I See Stars",
                        "G-Eazy feat. Charlie Puth", "NF", "The Blancos feat. Joyner Lucas", "The Killers",
                        "Drake", "Alec Benjamin", "Billie Eilish"];
const trackCover = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://i.imgur.com/5BZ7vxg.jpg)", 
                    "url(https://i.imgur.com/bfKgV91.jpg)", 
                    "url(https://i.imgur.com/lOpDLkq.jpg)",
                    "url(https://i.imgur.com/RRFrOq0.jpg)",
                    "url(https://i.imgur.com/AGixERK.jpg)",
                    "url(https://i.imgur.com/nksm6aY.png)",
                    "url(https://i.imgur.com/3jitHJ1.jpg)",
                    "url(https://i.imgur.com/Rkgzah9.jpg)",
                    "url(https://i.imgur.com/zsLvzVv.png)",
                    "url(https://i.imgur.com/LQ807IS.jpg)",
                    "url(https://i.imgur.com/Jo9Yg77.jpg)",
                    "url(https://i.imgur.com/6eYNzML.jpg)" ];
const trackBack = ["url(https://images2.imgbox.com/3e/e9/34oiP2E6_o.gif)", 
                    "url(https://i.imgur.com/CoXRvir.gif)", 
                    "url(https://images2.imgbox.com/27/96/lLrZ1Sg3_o.gif)", 
                    "url(https://i.imgur.com/I4j4SMS.gif)",
                    "url(https://i.imgur.com/CIRAFDn.gif)",
                    "url(https://images2.imgbox.com/c5/d3/WiCQoecO_o.gif)",
                    "url(https://images2.imgbox.com/49/d2/JNo3O55t_o.gif)",
                    "url(https://images2.imgbox.com/8a/dd/tCb0VnTc_o.gif)",
                    "url(https://images2.imgbox.com/29/c2/xIiarIbV_o.gif)",
                    "url(https://images2.imgbox.com/8e/93/2a4LrmpW_o.gif)",
                    "url(https://images2.imgbox.com/87/a4/oqKNLfh1_o.gif)",
                    "url(https://images2.imgbox.com/f5/da/91Z2X238_o.gif)",
                    "url(https://images2.imgbox.com/86/f9/h8VeP7Qz_o.gif)" ];					
let index = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: 'LfxY1sg5_rw',
        playerVars: {
            color: 'white',
            playlist: 'PsO6ZnUZI0g,EVzUk-uk_Nc,o3W5ngVTtRE,j5-yKhDd64s,LXvkrEwy0Xs,HKIIgYFhQlE,akhttJU-0mc,m0J8GY1BmDU, k4jR9P9YJGo, xXuGq4Xf77g, 5Qtirss0tAM, Ah0Ys50CqO8',
			controls: '0',
        },
        events: {
            'onReady': initialize,
            'onStateChange': onPlayerStateChange
        }
    });
}

function initialize(){
    $(".title").text(trackName[index]);
	$(".singer").text(trackSinger[index]);
	$(".you-back").css("background-image", trackBack[index]);
    $(".cover-current").css("background-image", trackCover[index]);
    $(".cover-next").css("background-image", trackCover[index + 1]);
    $(".cover-prev").css("background-image", trackCover[index - 1]);

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
		$(".title").text(trackName[index]);
		$(".singer").text(trackSinger[index]);
		$(".you-back").css("background-image", trackBack[index]);
		$(".cover-current").css("background-image", trackCover[index]);
		$(".cover-next").css("background-image", trackCover[index + 1]);
		$(".cover-prev").css("background-image", trackCover[index - 1]); }
}

$('#next').on('click', function () {
    if (index >= 0 && index < trackName.length - 1) {
        index++;
        $('#play').css("display", "none");
		$('#pause').css("display", "block");
		$(".you-back").css("background-image", trackBack[index]);
		$(".cover-current").css("background-image", trackCover[index]);
        $(".cover-next").css("background-image", trackCover[index + 1]);
        $(".cover-prev").css("background-image", trackCover[index - 1]);
        $(".title").text(trackName[index]);
        $(".singer").text(trackSinger[index]);
        player.nextVideo() }
});

$('#prev').on('click', function () { 
    if (index > 0 && index < trackName.length) {
   		index--;
		$('#play').css("display", "none");
		$('#pause').css("display", "block");
		$(".you-back").css("background-image", trackBack[index]);
		$(".cover-current").css("background-image", trackCover[index]);
		$(".cover-next").css("background-image", trackCover[index + 1]);
		$(".cover-prev").css("background-image", trackCover[index - 1]);
		$(".title").text(trackName[index]);
		$(".singer").text(trackSinger[index]);
		player.previousVideo() }
});

$('#play').on('click', function () { 
    $('#play').css("display", "none");
    $('#pause').css("display", "block");
    player.playVideo(); 
});

$('#pause').on('click', function () {
    $('#play').css("display", "block");
    $('#pause').css("display", "none");
    player.pauseVideo(); 
});

// This function is called by initialize()
function updateTimerDisplay(){
    // Update current time text display.
    $('#current-time').text(formatTime( player.getCurrentTime() ));
    $('#duration').text(formatTime( player.getDuration() ));
}

function formatTime(time){
    time = Math.round(time);

    var minutes = Math.floor(time / 60),
    seconds = time - minutes * 60;

    seconds = seconds < 10 ? '0' + seconds : seconds;

    return minutes + ":" + seconds;
}

$('#progress-bar').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player.seekTo(newTime);

});

// This function is called by initialize()
function updateProgressBar(){
    // Update the value of our progress bar accordingly.
    $('#progress-bar').val((player.getCurrentTime() / player.getDuration()) * 100);
}