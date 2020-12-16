/* global $*/
let keyWord = document.getElementsByClassName(".image-text")
keyWord = Array.from(keyWord)
console.log(keyWord[1])
//キーワード入力で自動でイベント発生//
$("#search").on("input",searchEvent);
////
function searchEvent(){
  let results = [];
  let inputText = $(this).val();
  console.log("inputText");
  
   if(inputText) {
    $(".image-text").each(function(index,keyWord){
      if (keyWord.textContent.indexOf(inputText) != -1){
        results.push(keyWord.textContent);
        console.log(results);
        $.each(results,(index,keyWord) =>{
         $("image-content").removeClass("hidden");
        }
       
     ); }
    });
  }
}


    