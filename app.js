import * as xml2json from "./xml2json.js";
const song = document.getElementById("song");
const playBtn = document.querySelector(".player-inner");
const durationTime = document.querySelector(".duration");
const remainingTime = document.querySelector(".remaining");
const rangeBar = document.querySelector(".range");
const musicThumbnail = document.querySelector(".music-thumb");
const canvas = document.getElementById("lyric-canvas");
const ctx = canvas.getContext("2d");
let lyricsJSON = {};
let timer = null;
let timerInMs = null;
let drawAgain = null;
let timeDiff = null;
let isPlaying = true;
let currentTimeInMs = 0;

song.addEventListener("ended", handleEndedSong);
function handleEndedSong() {
  init();
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
  fetch("./assets/lyric.xml")
    .then((response) => response.text())
    .then((xmlData) => {
      lyricsJSON = xmlToJson(xmlData);
      console.log(lyricsJSON);
      drawInit(lyricsJSON);
    })
    .catch((error) => console.error("Error:", error));
}
function xmlToJson(xml) {
  // Tạo một đối tượng DOM từ chuỗi XML
  const parser = new DOMParser();
  const doc = parser.parseFromString(xml, "application/xml");

  // Hàm convert JSON
  function parseNode(node) {
    let obj = {};

    // Nếu nút có các thuộc tính, lưu chúng vào đối tượng
    if (node.attributes.length > 0) {
      for (let i = 0; i < node.attributes.length; i++) {
        const attribute = node.attributes[i];
        obj[`_${attribute.name}`] = attribute.value;
      }
    }

    // Lặp qua các nút con và thêm chúng vào đối tượng
    for (let i = 0; i < node.children.length; i++) {
      const child = node.children[i];
      const childName = child.nodeName;

      if (typeof obj[childName] === "undefined") {
        obj[childName] = parseNode(child);
      } else {
        if (!Array.isArray(obj[childName])) {
          obj[childName] = [obj[childName]];
        }
        obj[childName].push(parseNode(child));
      }
    }

    // Nếu nút có nội dung văn bản, thêm nó vào đối tượng
    if (node.textContent.trim() !== "") {
      obj["__text"] = node.textContent;
    }

    return obj;
  }
  return parseNode(doc.documentElement);
}
function updateTime() {
  currentTimeInMs = song.currentTime;
}
const wordPositions = [];
function drawInit() {
  let y = 30;
  let x = 30; // Bắt đầu vẽ từ vị trí 32px để tạo lề

  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.font = "16px Arial";
  console.log(lyricsJSON);
  for (let j = 0; j < lyricsJSON.param.length; j++) {
    x = 32; // Reset x về 32px ở mỗi dòng
    for (let k = 0; k < lyricsJSON.param[j].i.length; k++) {
      let currentWord = lyricsJSON.param[j].i[k];
      ctx.fillStyle = "white";
      ctx.globalAlpha = 0.4;
      ctx.fillText(currentWord.__text, x, y);
      // Lưu lại tọa độ của từ vừa vẽ
      lyricsJSON.param[j].i[k].x = x;
      lyricsJSON.param[j].i[k].y = y;
      //  Lưu lại width và height của từ
      let textMetrics = ctx.measureText(currentWord.__text);
      let wordWidth = textMetrics.width;
      let wordHeight =
        textMetrics.actualBoundingBoxAscent +
        textMetrics.actualBoundingBoxDescent;
      lyricsJSON.param[j].i[k].width = wordWidth;
      lyricsJSON.param[j].i[k].height = wordHeight;
      x += ctx.measureText(currentWord.__text).width + 6; // Thêm khoảng cách giữa các từ
    }
    y += 30; // Tăng y sau mỗi dòng để hiển thị theo chiều dọc
  }
}
function highlightWord() {
  for (let j = 0; j < lyricsJSON.param.length; j++) {
    for (let k = 0; k < lyricsJSON.param[j].i.length; k++) {
      let currentWord = lyricsJSON.param[j].i[k];
      let currentWordStartTime = parseFloat(currentWord._va);
      if (currentTimeInMs >= currentWordStartTime) {
        timeDiff = 100;
        if (lyricsJSON.param[j + 1] && k == lyricsJSON.param[j].i.length - 1) {
          timeDiff = 200;
        }
        let xPos = currentWord.x;
        let yPos = currentWord.y;
        const characters = currentWord.__text.split("");
        characters.forEach((ch, index) => {
          setTimeout(() => {
            ctx.fillText(ch, xPos, yPos);
            xPos += ctx.measureText(ch).width; // Cập nhật vị trí x cho chữ cái tiếp theo
          }, timeDiff * (index + 1));
        });
      }
    }
  }
}

window.onload = () => {
  init();
  displayTimer();
};
