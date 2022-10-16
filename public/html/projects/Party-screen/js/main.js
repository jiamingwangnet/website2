const popups = document.querySelector("#popups");
const musicIframe = document.querySelector("#musicIframe");
const title = document.querySelector("#title");
const background = document.querySelector("#background");

const settings = {
    music: "",
    musicRaw: "",
    musicVolume: 100,
    backgroundColors: ["e62e2e", "e6872e", "6dd2e", "2ee62e", "2edae6", "2e6ee6", "d22ee6", "e62ea6"],
    title: "Playing!!!",
    bpm: 100,
    colorIndex: 0,
    shuffle: false,
    fullscreen: false,

    changeMusic: function (music) {
        //set the music to the new music without the youtube link
        settings.music = music.substring(music.indexOf("=") + 1);
        settings.musicRaw = music;
    },

    changeVolume: function (volume) {
        settings.musicVolume = volume;
    },

    changeBackgroundColor: function (colors) {
        settings.backgroundColors = colors;
    },

    changeBPM: function (bpm) {
        settings.bpm = bpm;
    },

    changeShuffle: function(shuffle)
    {
        settings.shuffle = shuffle;
    },

    changeTitle: function(title)
    {
        settings.title = title;
    },
    changeFullscreen: function(fullscreen)
    {
        settings.fullscreen = fullscreen;

        // fullscreen the window
        if (settings.fullscreen) {
            document.body.requestFullscreen();
        }
        else
        {
            document.exitFullscreen();
        }
    }
}

function displaySettings() {
    const popup = document.querySelector("#settings");

    if (popup.style.display != "block") {
        popup.style.display = "block";

        const music = document.querySelector('#inputMusic');
        const volume = document.querySelector('#inputVolume');
        const colors = document.querySelector('#inputColors');
        const bpm = document.querySelector('#inputBPM');
        const titleText = document.querySelector('#inputTitle');

        music.value = settings.music;
        volume.value = settings.musicVolume;
        colors.value = settings.backgroundColors.join(',');
        bpm.value = settings.bpm;
        titleText.value = settings.title;
    }
    else {
        popup.style.display = "none";
    }
}
let timeout;

function start() {
    let music = document.querySelector('#inputMusic').value;
    let volume = document.querySelector('#inputVolume').value;
    let colors = document.querySelector('#inputColors').value;
    let bpm = document.querySelector('#inputBPM').value;
    let titleText = document.querySelector('#inputTitle').value;

    let startBtns = document.querySelectorAll(".startBtn");
    startBtns[0].style.display = "none";
    startBtns[1].style.display = "block";

    if(music != "")
    {
        settings.changeMusic(music);
    }
    if(volume != "")
    {
        settings.changeVolume(volume);
    }
    if(colors != "")
    {
        settings.changeBackgroundColor(colors.split(','));
    }
    if(bpm != "")
    {
        settings.changeBPM(bpm);
    }
    if(titleText != "")
    {
        settings.changeTitle(titleText);
    }

    clearTimeout(timeout);
    const popup = document.querySelector("#settings");
    if (popup.style.display !== "none")
        popup.style.display = 'none';

    let player;

    //check if the video is a playlist
    if (settings.musicRaw.includes("list=")) {
        player = new YT.Player('musicFrame', {
            width: 560,
            height: 316,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'showinfo': 0,
                'modestbranding': 0,
                'loop': 1,
                'fs': 0,
                'cc_load_policty': 0,
                'iv_load_policy': 3,

                listType: 'playlist',
                list: settings.music
            },
            events: {
                'onReady': function (e) {
                    e.target.setVolume(settings.musicVolume);      // YOU CAN SET VALUE TO 100 FOR MAX VOLUME.
                    e.target.unMute();
                    e.target.setShuffle(settings.shuffle);
                    e.target.playVideoAt(0);
                },
                'onStateChange': function (e) {
                    if (e.data === YT.PlayerState.ENDED) {
                        e.target.playVideo();
                    }
                }
            }
        });
    }
    else 
    {
        player = new YT.Player('musicFrame', {
            videoId: settings.music,
            width: 560,
            height: 316,
            playerVars: {
                'autoplay': 1,
                'controls': 1,
                'showinfo': 0,
                'modestbranding': 0,
                'loop': 1,
                'fs': 0,
                'cc_load_policty': 0,
                'iv_load_policy': 3,
            },
            events: {
                'onReady': function (e) {
                    e.target.setVolume(settings.musicVolume);      // YOU CAN SET VALUE TO 100 FOR MAX VOLUME.
                    e.target.unMute();
                },
                'onStateChange': function (e) {
                    if (e.data === YT.PlayerState.ENDED) {
                        e.target.playVideo();
                    }
                }
            }
        });
    }

    title.innerHTML = settings.title;
}

function update() {
    background.style.backgroundColor = "#" + settings.backgroundColors[settings.colorIndex];
    settings.colorIndex++;

    //if the colorindex is over the color list, reset it
    if (settings.colorIndex + 1 > settings.backgroundColors.length) {
        settings.colorIndex = 0;
    }
    timeout = setTimeout(update, Math.floor(60000 / settings.bpm));
}
