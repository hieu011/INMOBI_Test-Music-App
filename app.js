const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicThumbnail = document.querySelector(".music-thumb");
const canvas = document.getElementById("lyric-canvas");
const lines = null;
const ctx = canvas.getContext("2d");
const lyricsJSON = {
  lines: [
    {
      i: [
        {
          _va: "35.144",
          __text: "Hồn",
        },
        {
          _va: "35.587997",
          __text: "lỡ",
        },
        {
          _va: "36.006",
          __text: "sa",
        },
        {
          _va: "36.475998",
          __text: "vào",
        },
        {
          _va: "36.972",
          __text: "đôi",
        },
        {
          _va: "37.495",
          __text: "mắt",
        },
        {
          _va: "37.939",
          __text: "em",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "42.641",
          __text: "Chiều",
        },
        {
          _va: "43.085",
          __text: "nao",
        },
        {
          _va: "43.476997",
          __text: "xõa",
        },
        {
          _va: "43.869",
          __text: "tóc",
        },
        {
          _va: "44.443",
          __text: "ngồi",
        },
        {
          _va: "45.017998",
          __text: "bên",
        },
        {
          _va: "45.488",
          __text: "rèm",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "49.276",
          __text: "Thầm",
        },
        {
          _va: "49.694",
          __text: "ước",
        },
        {
          _va: "50.059998",
          __text: "nhưng",
        },
        {
          _va: "50.503998",
          __text: "nào",
        },
        {
          _va: "51.026",
          __text: "đâu",
        },
        {
          _va: "51.575",
          __text: "dám",
        },
        {
          _va: "52.097",
          __text: "nói",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "53.325",
          __text: "Khép",
        },
        {
          _va: "53.769",
          __text: "tâm",
        },
        {
          _va: "54.37",
          __text: "tư",
        },
        {
          _va: "54.971",
          __text: "lại",
        },
        {
          _va: "55.415",
          __text: "thôi",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "56.669",
          __text: "Đường",
        },
        {
          _va: "57.139",
          __text: "hoa",
        },
        {
          _va: "57.766",
          __text: "vẫn",
        },
        {
          _va: "57.922",
          __text: "chưa",
        },
        {
          _va: "58.471",
          __text: "mở",
        },
        {
          _va: "58.940998",
          __text: "lối",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "62.572",
          __text: "Đời",
        },
        {
          _va: "63.042",
          __text: "lắm",
        },
        {
          _va: "63.408",
          __text: "phong",
        },
        {
          _va: "63.8",
          __text: "trần",
        },
        {
          _va: "64.34901",
          __text: "tay",
        },
        {
          _va: "64.949005",
          __text: "trắng",
        },
        {
          _va: "65.289",
          __text: "tay",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "69.26",
          __text: "Trời",
        },
        {
          _va: "69.73",
          __text: "đông",
        },
        {
          _va: "70.122",
          __text: "ngại",
        },
        {
          _va: "70.513",
          __text: "gió",
        },
        {
          _va: "71.036",
          __text: "lùa",
        },
        {
          _va: "71.637",
          __text: "vai",
        },
        {
          _va: "72.133",
          __text: "gầy",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "75.973",
          __text: "Lầu",
        },
        {
          _va: "76.39101",
          __text: "kín",
        },
        {
          _va: "76.783005",
          __text: "trăng",
        },
        {
          _va: "77.149",
          __text: "về",
        },
        {
          _va: "77.723",
          __text: "không",
        },
        {
          _va: "78.272",
          __text: "lối",
        },
        {
          _va: "78.768005",
          __text: "chiếu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "80.100006",
          __text: "Gác",
        },
        {
          _va: "80.518005",
          __text: "cao",
        },
        {
          _va: "81.171005",
          __text: "ngăn",
        },
        {
          _va: "81.746",
          __text: "niềm",
        },
        {
          _va: "82.269005",
          __text: "yêu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "83.444",
          __text: "Thì",
        },
        {
          _va: "83.888",
          __text: "thôi",
        },
        {
          _va: "84.515",
          __text: "mơ",
        },
        {
          _va: "84.672005",
          __text: "ước",
        },
        {
          _va: "85.168",
          __text: "chi",
        },
        {
          _va: "85.769005",
          __text: "nhiều",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "91.411",
          __text: "Bên",
        },
        {
          _va: "92.117004",
          __text: "nhau",
        },
        {
          _va: "93.292",
          __text: "sao",
        },
        {
          _va: "93.815",
          __text: "tình",
        },
        {
          _va: "94.416",
          __text: "xa",
        },
        {
          _va: "95.042",
          __text: "vạn",
        },
        {
          _va: "95.539",
          __text: "lý",
        },
        {
          _va: "96.740005",
          __text: "cách",
        },
        {
          _va: "97.263",
          __text: "biệt",
        },
        {
          _va: "97.838005",
          __text: "mấy",
        },
        {
          _va: "98.491005",
          __text: "sơn",
        },
        {
          _va: "98.935005",
          __text: "khê",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "101.233",
          __text: "Ngày",
        },
        {
          _va: "102.148",
          __text: "đi",
        },
        {
          _va: "103.34901",
          __text: "mắt",
        },
        {
          _va: "103.767006",
          __text: "em",
        },
        {
          _va: "104.473",
          __text: "xanh",
        },
        {
          _va: "105.126",
          __text: "biển",
        },
        {
          _va: "105.596",
          __text: "sâu,",
        },
        {
          _va: "106.719",
          __text: "mắt",
        },
        {
          _va: "107.137",
          __text: "tôi",
        },
        {
          _va: "107.921005",
          __text: "rưng",
        },
        {
          _va: "108.469",
          __text: "rưng",
        },
        {
          _va: "108.913",
          __text: "sầu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "110.455",
          __text: "Lặng",
        },
        {
          _va: "111.108",
          __text: "nghe",
        },
        {
          _va: "111.709",
          __text: "tiếng",
        },
        {
          _va: "112.205",
          __text: "pháo",
        },
        {
          _va: "112.962006",
          __text: "tiễn",
        },
        {
          _va: "113.824005",
          __text: "ai",
        },
        {
          _va: "114.582",
          __text: "qua",
        },
        {
          _va: "114.922005",
          __text: "cầu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "115.496",
          __text: "Đường",
        },
        {
          _va: "116.228004",
          __text: "phố",
        },
        {
          _va: "116.72401",
          __text: "muôn",
        },
        {
          _va: "117.064",
          __text: "màu",
        },
        {
          _va: "117.534004",
          __text: "sao",
        },
        {
          _va: "118.082",
          __text: "thiếu",
        },
        {
          _va: "118.579",
          __text: "em",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "122.628006",
          __text: "Về",
        },
        {
          _va: "123.046005",
          __text: "đâu",
        },
        {
          _va: "123.464005",
          __text: "làn",
        },
        {
          _va: "123.882",
          __text: "tóc",
        },
        {
          _va: "124.404",
          __text: "xõa",
        },
        {
          _va: "124.979004",
          __text: "bên",
        },
        {
          _va: "125.449005",
          __text: "rèm",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "129.263",
          __text: "Lầu",
        },
        {
          _va: "129.707",
          __text: "vắng",
        },
        {
          _va: "130.073",
          __text: "không",
        },
        {
          _va: "130.464",
          __text: "người",
        },
        {
          _va: "131.118",
          __text: "song",
        },
        {
          _va: "131.666",
          __text: "khép",
        },
        {
          _va: "132.18901",
          __text: "kín",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "133.46901",
          __text: "Nhớ",
        },
        {
          _va: "133.91301",
          __text: "em",
        },
        {
          _va: "134.461",
          __text: "tôi",
        },
        {
          _va: "135.088",
          __text: "gọi",
        },
        {
          _va: "135.584",
          __text: "tên,",
        },
        {
          _va: "136.70801",
          __text: "chỉ",
        },
        {
          _va: "137.20401",
          __text: "nghe",
        },
        {
          _va: "137.85701",
          __text: "tiếng",
        },
        {
          _va: "138.171",
          __text: "lá",
        },
        {
          _va: "139.059",
          __text: "rơi",
        },
        {
          _va: "139.58101",
          __text: "thềm",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "168.10701",
          __text: "Bên",
        },
        {
          _va: "169.021",
          __text: "nhau",
        },
        {
          _va: "170.06601",
          __text: "sao",
        },
        {
          _va: "170.48401",
          __text: "tình",
        },
        {
          _va: "171.11101",
          __text: "xa",
        },
        {
          _va: "171.738",
          __text: "vạn",
        },
        {
          _va: "172.20801",
          __text: "lý",
        },
        {
          _va: "173.358",
          __text: "cách",
        },
        {
          _va: "173.828",
          __text: "biệt",
        },
        {
          _va: "174.429",
          __text: "mấy",
        },
        {
          _va: "175.134",
          __text: "sơn",
        },
        {
          _va: "175.552",
          __text: "khê",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "177.981",
          __text: "Ngày",
        },
        {
          _va: "178.713",
          __text: "đi",
        },
        {
          _va: "180.019",
          __text: "mắt",
        },
        {
          _va: "180.489",
          __text: "em",
        },
        {
          _va: "181.09",
          __text: "xanh",
        },
        {
          _va: "181.743",
          __text: "biển",
        },
        {
          _va: "182.161",
          __text: "sâu,",
        },
        {
          _va: "183.389",
          __text: "mắt",
        },
        {
          _va: "183.83301",
          __text: "tôi",
        },
        {
          _va: "184.46",
          __text: "rưng",
        },
        {
          _va: "185.087",
          __text: "rưng",
        },
        {
          _va: "185.531",
          __text: "sầu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "187.15001",
          __text: "Lặng",
        },
        {
          _va: "187.856",
          __text: "nghe",
        },
        {
          _va: "188.378",
          __text: "tiếng",
        },
        {
          _va: "188.639",
          __text: "pháo",
        },
        {
          _va: "189.031",
          __text: "tiễn",
        },
        {
          _va: "189.58",
          __text: "ai",
        },
        {
          _va: "189.97101",
          __text: "qua",
        },
        {
          _va: "191.878",
          __text: "cầu",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "192.479",
          __text: "Đường",
        },
        {
          _va: "192.949",
          __text: "phố",
        },
        {
          _va: "193.472",
          __text: "muôn",
        },
        {
          _va: "193.864",
          __text: "màu",
        },
        {
          _va: "194.464",
          __text: "sao",
        },
        {
          _va: "195.039",
          __text: "thiếu",
        },
        {
          _va: "195.536",
          __text: "em",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "199.271",
          __text: "Về",
        },
        {
          _va: "199.68901",
          __text: "đâu",
        },
        {
          _va: "200.133",
          __text: "làn",
        },
        {
          _va: "200.52501",
          __text: "tóc",
        },
        {
          _va: "201.047",
          __text: "xõa",
        },
        {
          _va: "201.62201",
          __text: "bên",
        },
        {
          _va: "202.144",
          __text: "rèm",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "205.932",
          __text: "Lầu",
        },
        {
          _va: "206.35",
          __text: "vắng",
        },
        {
          _va: "206.742",
          __text: "không",
        },
        {
          _va: "207.108",
          __text: "người",
        },
        {
          _va: "207.709",
          __text: "song",
        },
        {
          _va: "208.336",
          __text: "khép",
        },
        {
          _va: "208.806",
          __text: "kín",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "210.033",
          __text: "Nhớ",
        },
        {
          _va: "210.478",
          __text: "em",
        },
        {
          _va: "211.104",
          __text: "tôi",
        },
        {
          _va: "211.627",
          __text: "gọi",
        },
        {
          _va: "212.149",
          __text: "tên,",
        },
        {
          _va: "213.429",
          __text: "chỉ",
        },
        {
          _va: "213.90001",
          __text: "nghe",
        },
        {
          _va: "214.709",
          __text: "tiếng",
        },
        {
          _va: "215.284",
          __text: "lá",
        },
        {
          _va: "215.493",
          __text: "rơi",
        },
        {
          _va: "215.83301",
          __text: "thềm",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "219.307",
          __text: "Lầu",
        },
        {
          _va: "219.699",
          __text: "vắng",
        },
        {
          _va: "220.117",
          __text: "không",
        },
        {
          _va: "220.535",
          __text: "người",
        },
        {
          _va: "221.162",
          __text: "song",
        },
        {
          _va: "221.684",
          __text: "khép",
        },
        {
          _va: "222.233",
          __text: "kín",
        },
      ],
      _s: "b",
    },
    {
      i: [
        {
          _va: "223.513",
          __text: "Nhớ",
        },
        {
          _va: "223.904",
          __text: "em",
        },
        {
          _va: "224.558",
          __text: "tôi",
        },
        {
          _va: "225.184",
          __text: "gọi",
        },
        {
          _va: "225.602",
          __text: "tên,",
        },
        {
          _va: "226.935",
          __text: "chỉ",
        },
        {
          _va: "229.05101",
          __text: "nghe",
        },
        {
          _va: "232.96901",
          __text: "tiếng",
        },
        {
          _va: "234.06601",
          __text: "lá",
        },
        {
          _va: "235.13701",
          __text: "rơi",
        },
        {
          _va: "236.522",
          __text: "thềm",
        },
      ],
      _s: "b",
    },
  ],
};
let isPlaying = true;
let currentTimeInMs = 0;

song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  init();
  drawInit();
  song.play();
  displayTimer();
}

playBtn.addEventListener("click", playPause);
function playPause() {
  if (isPlaying) {
    musicThumbnail.classList.add("is-playing");
    song.play();
    playBtn.innerHTML = `<ion-icon name="pause-circle"></ion-icon>`;
    isPlaying = false;
    timer = setInterval(displayTimer, 500);
    timerInMs = setInterval(updateTime, 100);
    drawAgain = setInterval(highlightWord, 100);
  } else {
    musicThumbnail.classList.remove("is-playing");
    song.pause();
    playBtn.innerHTML = `<ion-icon name="play"></ion-icon>`;
    isPlaying = true;
    clearInterval(timer);
    clearInterval(timerInMs);
    clearInterval(drawAgain);
  }
}
function displayTimer() {
  const { duration, currentTime } = song;
  rangeBar.max = duration;
  rangeBar.value = currentTime;
  remainingTime.textContent = formatTimer(currentTime);
  if (!duration) {
    durationTime.textContent = "00:00";
  } else {
    durationTime.textContent = formatTimer(duration);
  }
}
function formatTimer(number) {
  const minutes = Math.floor(number / 60);
  const seconds = Math.floor(number - minutes * 60);
  return `${minutes < 10 ? "0" + minutes : minutes}:${
    seconds < 10 ? "0" + seconds : seconds
  }`;
}
rangeBar.addEventListener("change", handleChangeBar);
function handleChangeBar() {
  song.currentTime = rangeBar.value;
  drawInit();
  highlightWord();
}
function init() {
  song.setAttribute("src", `./assets/beat.mp3`);
}
function updateTime() {
  currentTimeInMs = song.currentTime;
}
const wordPositions = [];
function drawInit() {
  let y = 32;
  let x = 30; // Bắt đầu vẽ từ vị trí 32px để tạo lề

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "16px Arial";

  for (let j = 0; j < lyricsJSON.lines.length; j++) {
    x = 32; // Reset x về 32px ở mỗi dòng
    for (let k = 0; k < lyricsJSON.lines[j].i.length; k++) {
      let currentWord = lyricsJSON.lines[j].i[k];
      ctx.fillStyle = "white";
      ctx.globalAlpha = 0.4;
      ctx.fillText(currentWord.__text, x, y);
      // Lưu lại tọa độ của từ vừa vẽ
      lyricsJSON.lines[j].i[k].x = x;
      lyricsJSON.lines[j].i[k].y = y;
      //  Lưu lại width và height của từ
      let textMetrics = ctx.measureText(currentWord.__text);
      let wordWidth = textMetrics.width;
      let wordHeight =
        textMetrics.actualBoundingBoxAscent +
        textMetrics.actualBoundingBoxDescent;
      lyricsJSON.lines[j].i[k].width = wordWidth;
      lyricsJSON.lines[j].i[k].height = wordHeight;
      x += ctx.measureText(currentWord.__text).width + 6; // Thêm khoảng cách giữa các từ
    }
    y += 32; // Tăng y sau mỗi dòng để hiển thị theo chiều dọc
  }
  console.log(lyricsJSON);
}
function highlightWord() {
  for (let j = 0; j < lyricsJSON.lines.length; j++) {
    for (let k = 0; k < lyricsJSON.lines[j].i.length; k++) {
      let currentWord = lyricsJSON.lines[j].i[k];
      let currentWordStartTime = parseFloat(currentWord._va);
      if (currentTimeInMs >= currentWordStartTime) {
        timeDiff = 100;
        if( lyricsJSON.lines[j+1] && (k == lyricsJSON.lines[j].i.length - 1)) {
          timeDiff = 300;
        }
        let xPos = currentWord.x;
        let yPos = currentWord.y;
        const characters = currentWord.__text.split('');
        characters.forEach((ch, index) => {
          setTimeout(() => {
            ctx.fillText(ch, xPos, yPos);
            xPos += ctx.measureText(ch).width; // Cập nhật vị trí x cho chữ cái tiếp theo
          }, timeDiff * (index+1));
        });
      }
    }
  }
}

window.onload = () => {
  init();
  drawInit();
  displayTimer();
};
