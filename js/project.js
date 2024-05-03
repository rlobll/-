window.onload = function () {
  //   // 버튼 요소를 가져옵니다.
  //   const button1 = document.getElementById("button1");
  //   const button2 = document.getElementById("button2");
  //   const button3 = document.getElementById("button3");

  //   // 버튼 클릭 시 색상 변경 함수
  //   function changeColor(button) {
  //     if (button === button1) {
  //       // 1번 버튼 클릭 시
  //       button1.style.color = "black";
  //       button2.style.color = "#cbcbcb";
  //       button3.style.color = "#cbcbcb";
  //     } else if (button === button2) {
  //       // 2번 버튼 클릭 시
  //       button1.style.color = "#cbcbcb";
  //       button2.style.color = "black";
  //       button3.style.color = "#cbcbcb";
  //     } else if (button === button3) {
  //       // 3번 버튼 클릭 시
  //       button1.style.color = "#cbcbcb";
  //       button2.style.color = "#cbcbcb";
  //       button3.style.color = "black";
  //     }
  //   }

  //   // 각 버튼에 클릭 이벤트 리스너 추가
  //   button1.addEventListener("click", function () {
  //     changeColor(button1);
  //   });

  //   button2.addEventListener("click", function () {
  //     changeColor(button2);
  //   });

  //   button3.addEventListener("click", function () {
  //     changeColor(button3);
  //   });

  // 버튼 요소를 가져와 배열에 저장합니다.
  const buttons = [button1, button2, button3];

  // 버튼 클릭 시 색상 변경 함수
  function changeColor(clickedButton) {
    // 모든 버튼의 색상을 회색으로 변경합니다.
    buttons.forEach((button) => {
      button.style.color = "#cbcbcb";
    });

    // 클릭된 버튼의 색상을 검은색으로 변경합니다.
    clickedButton.style.color = "black";
  }

  // 각 버튼에 클릭 이벤트 리스너 추가
  buttons.forEach((button) => {
    button.addEventListener("click", function () {
      changeColor(button);
    });
  });
  //여기까지 버튼 색상 변경 코드

  //이미지

  // JavaScript 코드 시작
  // document.getElementById("button1").addEventListener("click", function () {
  //   // 버튼1을 클릭했을 때
  //   document.getElementById("list1").style.display = "block"; // list1을 보여줌
  //   document.getElementById("list2").style.display = "none"; // list2를 숨김
  //   document.getElementById("list3").style.display = "none"; // list3을 숨김
  // });

  // document.getElementById("button2").addEventListener("click", function () {
  //   // 버튼2를 클릭했을 때
  //   document.getElementById("list1").style.display = "none"; // list1을 숨김
  //   document.getElementById("list2").style.display = "block"; // list2를 보여줌
  //   document.getElementById("list3").style.display = "none"; // list3을 숨김
  // });

  // document.getElementById("button3").addEventListener("click", function () {
  //   // 버튼3을 클릭했을 때
  //   document.getElementById("list1").style.display = "none"; // list1을 숨김
  //   document.getElementById("list2").style.display = "none"; // list2를 숨김
  //   document.getElementById("list3").style.display = "block"; // list3을 보여줌
  // });

  // 버튼 개수와 목록 개수 설정
  var numButtons = 3;
  var numLists = 3;

  // 반복문을 통해 각 버튼에 이벤트 리스너 추가
  for (var i = 1; i <= numButtons; i++) {
    var button = document.getElementById("button" + i);
    button.addEventListener("click", function () {
      var buttonId = this.id.slice(-1); // 클릭한 버튼의 마지막 문자(숫자)를 추출
      // 해당 버튼에 대응하는 목록 보여주기
      for (var j = 1; j <= numLists; j++) {
        var list = document.getElementById("list" + j);
        if (j === parseInt(buttonId)) {
          list.style.display = "block";
        } else {
          list.style.display = "none";
        }
      }
    });
  }
};
