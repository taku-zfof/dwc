 let user_hand = prompt("じゃんけんの手を入力");

 let jshand = getJShand();

 let judge = winlose(user_hand,jshand);

 if(user_hand == null){
   alert ("またチャレンジしてね");
 }else if(judge=="false"){
   alert ("グー・チョキ・パーのいずれかを入力してください");
   location.reload();
 }else{
   alert('あなたの選んだ手は' + user_hand + 'です。\nJavaScriptの選んだ手は' + jshand + 'です。\n結果は' + judge + 'です。');
 }

   function getJShand(){
     let js_hand
     let js_hand_num = Math.floor(Math.random() *3 );

     if(js_hand_num==0){
       js_hand = "グー";
     } else if(js_hand_num==1){
       js_hand = "チョキ";
     }else if(js_hand_num==2){
       js_hand= "パー";
     }

     return js_hand;
   }

  function winlose(user,js){
    let winLoseStr;

    if(user == "グー"){
    if(js == "グー"){
      winLoseStr = "あいこ";
    } else if(js == "チョキ"){
      winLoseStr = "勝ち";
    } else if(js == "パー"){
      winLoseStr = "負け";
    }
  } else if(user == "チョキ"){
    if(js == "グー"){
      winLoseStr = "負け";
    } else if(js == "チョキ"){
      winLoseStr = "あいこ";
    } else if(js == "パー"){
      winLoseStr = "勝ち";
    }
  } else if(user == "パー"){
    if(js == "グー"){
      winLoseStr = "勝ち";
    } else if(js == "チョキ"){
      winLoseStr = "負け";
    } else if(js == "パー"){
      winLoseStr = "あいこ";
    }
  }else{
    winLoseStr ="false";
  }

   return winLoseStr;
  }

