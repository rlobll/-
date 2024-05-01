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
};
