var player;
var player2;

let index = 0;
let index2 = 0;

const trackName = ["If You Want Love", "Stronger", "Need You Still", "Not Afraid", "Sober", "Trauma",
                    "Toosie Slide", "Stan Spotfy Recorded", "you should see me...", "Can't Lie",
                    "'Till I Collapse", "Remember the Name", "Different Hos", "Ser Maior", "Only God Can Judge Me" ];
const trackSinger = ["NF", "Kanye West", "Ivan B feat. Keith Fontano", "Eminem", "G-Eazy feat. Charlie Puth", "NF",
                    "Drake", "Alec Benjamin", "Billie Eilish", "Ali Gatie",
                    "Eminem", "Fort Minor, Mike Shinoda", "Blackbear", "Katari SC feat. Blaut", "2Pac" ];
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
                    "url(https://i.imgur.com/Qd8tssG.jpg)" ];
                    
const trackName2 = ["If You Want", "Stronger", "BMW", "lal"];
const trackSinger2 = ["NF", "Kanye West", "BMW", "bi"];
const trackCover2 = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://64.media.tumblr.com/c1a3de323a967d96e8ca238eaeac2e6c/tumblr_ov3ke6DjdP1v7655qo1_500.gifv)", 
                    "url(https://uploads.spiritfanfiction.com/usuarios/jornal/e-hora-de-dar-tchau-12244618-280220182359.gif)", 
					"url(https://images.genius.com/093524f55308e0c3a99f8d6f7746a3bf.1000x1000x1.jpg)"];
const trackBack2 = ["url(https://i.imgur.com/zmAR40Y.jpg)", 
                    "url(https://i.imgur.com/5BZ7vxg.jpg)", 
                    "url(https://images.genius.com/f3dc932dcf3a3d218d8e387297bf5afe.1000x1000x1.jpg)", 
					"url(https://images.genius.com/093524f55308e0c3a99f8d6f7746a3bf.1000x1000x1.jpg)"];		


function onYouTubeIframeAPIReady() {
    onload=player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: 'LfxY1sg5_rw',
        playerVars: {
            color: 'white',
			playlist: 'PsO6ZnUZI0g,EVzUk-uk_Nc,j5-yKhDd64s,8OARiNiJ_w8,akhttJU-0mc,xXuGq4Xf77g,bELPHxnaAFk,Ah0Ys50CqO8,y7ogiYZDsLI,ytQ5CYE1VZw,VDvr08sCPOc,4hBwH3thlPs,SkK2J9M1e1s,5gLoEBbZNis',
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
		player2.previousVideo() }
});

$('#progress-bar2').on('mouseup touchend', function (e) {

    // Calculate the new time for the video.
    // new time in seconds = total duration in seconds * ( value of range input / 100 )
    var newTime = player2.getDuration() * (e.target.value / 100);

    // Skip video to new time.
    player2.seekTo(newTime);

});

