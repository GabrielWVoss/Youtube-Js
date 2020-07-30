var player;
var player2;

let index = 0;
let index2 = 0;

const trackName = ["Il ballo delle incertezza", "Guerriero", "Vivo per lei", "Da grande", "Dejavu", "Naufrago",
					"Faccio un casino", "Litigare", "Salutalo da parte mia", "Per La Strade Una...",
					"Ti Avrei Voluto Dire", "Prima di ogni cosa", "Disastro", "Dopo di noi nemmeno...",
					"Voglio solo te", "To ho voluto bene...", "Nera",
					"Come(te)" ];
const trackSinger = ["Ultimo", "Marco Mengoni", "Andrea Bocelli", "Benji & Fede", "Biondo", "Briga",
					"Coez", "Davide Petrella", "Einar", "Eros Ramazzotti feat. Luis Fonsi",
					"Federica Carta", "Fedez", "GionnyScandal", "Briga", "Irama", "Marco Mengoni", "Irama",
					"GionnyScandal" ];
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
					"url(https://i.imgur.com/puHL2f8.jpg)",
					"url(https://i.imgur.com/dyBzKyz.png)",
					"url(https://i.imgur.com/OYFpieD.jpg)",
					"url(https://i.imgur.com/AwFti3p.jpg)",
					"url(https://i.imgur.com/rfNDOnf.jpg)",
					"url(https://i.imgur.com/6t8VNof.jpg)",
					"url(https://i.imgur.com/rfNDOnf.jpg)",
					"url(https://i.imgur.com/OYFpieD.jpg)"];

const trackName2 = ["I Just Can't Wait...", "The A Team", "Superman (It's Not Easy)", "Hakuna Matata",
					"Can I Be Him", "Free Fallin'", "Love Yourself", "Lego House", "Just Like You", "7 Years",
					"She Will Be Loved", "You Can Cry", "No Sleep", "Small Bump", "Passerby",
					"Two of Us", "Scared to Be Lonely" ];
const trackSinger2 = ["From 'The Lion King'", "Ed Sheeran", "Five for Fighting", "From 'The Lion King'",
					"James Arthur", "John Mayer", "Justin Bieber", "Ed Sheeran", "Louis Tomlison", "Lukas Graham",
					"Maroon 5", "Marshmello", "Martin Garrix feat. Bonn", "Ed Sheeran", "Patrick Droney",
					"Louis Tomlison", "Martin Garrix feat. Dua Lipa"  ];
const trackCover2 = ["url(https://i.imgur.com/r7MJ81F.jpg)",
						"url(https://i.imgur.com/raLthno.jpg)",
						"url(https://i.imgur.com/oorJ4Wu.jpg)",
						"url(https://i.imgur.com/r7MJ81F.jpg)",
						"url(https://i.imgur.com/qAwR4Mz.jpg)",
						"url(https://i.imgur.com/TMTUNDZ.jpg)",
						"url(https://i.imgur.com/yeRyySp.png)",
						"url(https://i.imgur.com/r7LOAUT.jpg)",
						"url(https://i.imgur.com/wELXTZQ.jpg)",
						"url(https://i.imgur.com/7O2uJuL.jpg)",
						"url(https://i.imgur.com/n8aeWrY.jpg)",
						"url(https://i.imgur.com/IblIb5X.jpg)",
						"url(https://i.imgur.com/hGjNDzk.png)",
						"url(https://i.imgur.com/r7LOAUT.jpg)",
						"url(https://i.imgur.com/VQ4tnAq.jpg)",
						"url(https://i.imgur.com/yzXzDxj.jpg)",
						"url(https://i.imgur.com/qHGhfOR.jpg)" ];

function onYouTubeIframeAPIReady() {
    onload=player = new YT.Player('video', {
        width: 600,
        height: 400,
        videoId: 'EyZir4O5pu4',
        playerVars: {
            color: 'white',
			playlist: 'fK8LrzzC4-8,N3WOVnTz-Yo,cpX7EwbIlwg,a1K7D4RpaDs,lBLRFmC5CqM,H6qqA0SOkIs,1uIWjaloYkg,mYc9jSdhwMw,HdFE2jSVxfc,o4ltA8aQdpE,2qz3wVaE4sk,atDBhNfnDaE,WejfHZdzi1I,ARqpqyA49y0,ZSLewGyjhiw,4T3ZV0zcxWA',
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
			playlist: 'UAWcs5H-qgQ,GRz4FY0ZcwI,_YzVcRVJGmQ,mcXv4w-cm3U,20Ov0cDPZy8,TMSIR210mRg,UMXTZR4Z5LQ,qvXXMsiQBDg,Q0bnAmfGQC8,pUVxaYdgS_Q,XJT7I0sLdD0,JxzKNHfNRdI,A_af256mnTE,EUnfV73qN0w,5oX_gwwACls,e2vBLd5Egnk',
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
