
function  phr() {
var spaces=0
var voyelle=0
var wor=document.getElementById("wordsNB")
var char=document.getElementById("characterNb")
var voy=document.getElementById("voyelle")
const ph= document.getElementById("phText").value 
    
    for (let i = 0; i< ph.length; i++) {
      if (ph[i]==' ') {
          spaces++ 
          
      }
      if( ph[i]=='a' ||ph[i]=='e'|| ph[i]=='u' ||ph[i]=='i' || ph[i]=='y'|| ph[i]=='o'|| ph[i]=='A'|| ph[i]=='O'|| ph[i]=='E'|| ph[i]=='Y'|| ph[i]=='I'|| ph[i]=='U'){
          voyelle++

      }
     
       
    }
    const WordsNb= spaces+1
    console.log(`The number of words in the sentence is : ${WordsNb}`)
    const characterNb =ph.length - spaces-1 
    console.log(`the number of characters is : ${characterNb}`)
    console.log(`The number of vowels in the sentence is : ${voyelle}`)
    wor.innerHTML=`The number of words in the sentence is : ${WordsNb}`
    char.innerHTML=`the number of characters is : ${characterNb}`
    voy.innerHTML=`The number of vowels in the sentence is : ${voyelle}`
}