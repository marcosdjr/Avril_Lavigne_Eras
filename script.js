const btnTexto = document.querySelector("#btn"); // Captura o botão no DOM pelo id

const eras = [
  ["Let Go", "./images/al-1.jpg","https://www.dailymotion.com/embed/video/x7ya3br","#edf6f9"],
  ["Under My Skin","./images/al-2.jpg","https://www.youtube.com/embed/2tlVYJeRc30","#d00000"],
  ["The Best Damn Thing","./images/al-3-2.jpg","https://www.dailymotion.com/embed/video/x1uv6h","#ff006e"],
  ["Goodbye Lullaby","./images/al-4.jpg","https://www.dailymotion.com/embed/video/xhwfnc","#4c956c"],
  ["Avril Lavigne",  "./images/al-5.jpg","https://www.dailymotion.com/embed/video/x1xnic3","#fee231"],
  ["Head Above Water","./images/al-6.jpg","https://www.dailymotion.com/embed/video/x6w43g5","#168aad"],
  ["AL7","./images/al-hair.jpeg","https://www.youtube.com/embed/An0B0vvqcmY","#ff006e"]
];

let selectEra = 0;


btnTexto.addEventListener("click", function () {

  const changeTitle = document.getElementById("title");
  const changeImage = document.getElementById("image");
  const changeVideo = document.getElementById("video");
  const changeColor = document.getElementById("title");

  if (selectEra < 7) {
    changeTitle.innerHTML = eras[selectEra][0];
    changeImage.src = eras[selectEra][1];
    changeVideo.src = eras[selectEra][2];
    changeColor.style.color = eras[selectEra][3];
    
    selectEra++;
    

  } else {
    selectEra = 0;
    
    changeTitle.innerHTML = eras[selectEra][0];
    changeImage.src = eras[selectEra][1];
    changeVideo.src = eras[selectEra][2];
    changeColor.style.color = eras[selectEra][3];

    selectEra++;
    
  }
});

