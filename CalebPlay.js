var player;

const trackName = ["I Want It That Way", "Welcome to My Life", "Não Sei Viver...", "That's What I Like",
                    "3005", "Who Let The Dogs Out", "Good Girls", "Boys Will Be Boys", "If You Don't Love Yourself",
                    "Hotel California", "Young Blood", "Put Your Records On" ];
const trackSinger = ["Backstreet Boys", "Simple Plan", "CPM 22", "Bruno Mars", 
                    "Childish Gambino", "Baha Men", "5 Seconds of Summer", "Dua Lipa", "The Script",
                    "Eagles", "5 Seconds of Summer", "Corinne Bailey Rae"];
const trackCover = ["url(https://i.imgur.com/fdHAAkT.jpg)",
                    "url(https://i.imgur.com/NbkpB8f.jpg)",
                    "url(https://i.imgur.com/fIxnyc1.jpg)",
                    "url(https://i.imgur.com/VlWlCXk.jpg)",
                    "url(https://i.imgur.com/pjXdyM9.jpg)",
                    "url(https://i.imgur.com/CNXJri9.jpg)",
                    "url(https://i.imgur.com/MpzkuRb.jpg)",
                    "url(https://i.imgur.com/wgxhvl5.jpg)",
                    "url(https://i.imgur.com/iBng3Eb.jpg)",
                    "url(https://i.imgur.com/9Quliag.jpg)",
                    "url(https://i.imgur.com/Y4TIIy5.png)",
                    "url(https://i.imgur.com/4fzE91e.jpg)" ];

const trackBack = ["url(https://images2.imgbox.com/31/59/MfhseZbR_o.gif)",
                    "url(https://i.imgur.com/fSIxdME.gif)",
                    "url(https://images2.imgbox.com/d2/73/zD6XDiZH_o.gif)",
                    "url(https://i.imgur.com/ltwxaGz.gif)",
                    "url(https://images2.imgbox.com/c0/0e/Oqp86bxg_o.gif)",
                    "url(https://images2.imgbox.com/a8/cf/cHXqkscL_o.gif)",
                    "url(https://i.imgur.com/J1g4MvY.gif)",
                    "url(https://images2.imgbox.com/8d/53/mXR9Of1a_o.gif)",
                    "url(https://i.imgur.com/pmDp8cb.gif)",
                    "url(https://i.imgur.com/QlJ3cWt.gif)",
                    "url(https://images2.imgbox.com/ef/75/NUzOEjDZ_o.gif)",
                    "url(https://i.imgur.com/4pRK50y.gif)" ];					
let index = 0;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('video-placeholder', {
        width: 600,
        height: 400,
        videoId: '4fndeDfaWCg',
        playerVars: {
            color: 'white',
            playlist: 'r0U0AlLVqpk,iQhVPNY7S9k,PMivT7MJ41M,tG35R8F2j8k,Qkuu0Lwb5EM,292XUJ5jH7U,k0QWX2M7W7M,oVSHtf2Tb-E,EqPtz5qN7HM,Jqs5EaAaueA,BSpoa7TsiD0',
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