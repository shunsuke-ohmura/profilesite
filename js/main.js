/* global $ MobileDetect */


/* グーグルマップ */
let map;

let marker;
let center = {
  lat: 35.658578, // 緯度
  lng: 139.745425 // 経度
};
let infoWindow;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: center,
    zoom: 16,
  });
  marker = new google.maps.Marker({ // マーカーの追加
    position: center, // マーカーを立てる位置を指定
    map: map // マーカーを立てる地図を指定
  });
  infoWindow = new google.maps.InfoWindow({ // 吹き出しの追加
    content: '<div class="speech--bubble">東京タワー</div>' // 吹き出しに表示する内容
  });
  marker.addListener('click', function() { // マーカーをクリックしたとき
    infoWindow.open(map, marker); // 吹き出しの表示
  });
}


/*　グラレーション　*/
window.onload = function() {
  Particles.init({
    selector: '.background',
    sizeVariations: 30,
    color: [
      '#0bd', 'rgba(0,187,221,.5)', 'rgba(0,187,221,.2)'
    ]
  });
};


//下に
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'down') {　
      $(this.element).addClass('fadeInUp');
    } else { //処理消す
      $(this.element).removeClass('fadeInUp');
    }
  },

  offset: '50%',
});

/*
//上に
$('.animated').waypoint({
  handler(direction) {
    if (direction === 'up') {
      $(this.element).addClass('fadeOutUp');
    } else {　//処理消す
      $(this.element).removeClass('fadeOutUp');
    }
  },

  offset: '50%',
});
*/

$('.nav-link').on('click', (e) => {
  const destination = $(e.target).attr('href');

  // ハンバーガーメニューが開いている場合は閉じる
  $('.navbar-toggler:visible').trigger('click');
});



$(function() {
  let topBtn = $('.to-top');
  //ボタンを非表示にする
  topBtn.hide();
  //スクロールしてページトップから100に達したらボタンを表示
  $(window).scroll(function () {
    if ($(this).scrollTop() > 100) {
      //フェードインで表示
      topBtn.fadeIn();
    } else {
    //フェードアウトで非表示
      topBtn.fadeOut();
    }
  });

  //スクロールしてトップへ戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 500);
    return false;
  });
});





// ボタンを押すと、勉強期間が出る
$("#btn1").on("click", function()  {
  let dateStart = new Date("2020/08/11"); 
  let today = new Date(); 
  today = new Date(today.getFullYear(), today.getMonth(), today.getDate(), 0, 0, 0); 
  let msecDiff = today.getTime() - dateStart.getTime();
  let dayDiff = Math.floor(msecDiff / 1000 / 60 / 60 / 24);
  let message = `${dayDiff}日です。`
  // 画面にメッセージを表示する
  $("#tBox").val(message);
});