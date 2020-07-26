var player;

const trackName = ["If You Want Love", "Stronger", "BMW", "lal"];
const trackSinger = ["NF", "Kanye West", "BMW", "bi"];
const trackCover = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://i.imgur.com/5BZ7vxg.jpg)", 
                    "url(https://images.genius.com/f3dc932dcf3a3d218d8e387297bf5afe.1000x1000x1.jpg)", 
					"url(https://images.genius.com/093524f55308e0c3a99f8d6f7746a3bf.1000x1000x1.jpg)"];
const trackBack = ["url(https://images2.imgbox.com/3e/e9/34oiP2E6_o.gif)", 
                    "url(https://i.imgur.com/CoXRvir.gif)", 
                    "url(https://images.genius.com/f3dc932dcf3a3d218d8e387297bf5afe.1000x1000x1.jpg)", 
					"url(https://images.genius.com/093524f55308e0c3a99f8d6f7746a3bf.1000x1000x1.jpg)"];					
let index = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
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