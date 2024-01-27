const increase =document.getElementById('increaseBt');
const decrease =document.getElementById('decreaseBt');
const reset =document.getElementById('resetBt');
const countLabel=document.getElementById('countLabel');
let count=0;
increaseBt.onclick = function() {
count++;
countLabel.textContent=count;
}
decrease.onclick=function(){
    count--;
    countLabel.textContent=count;

}
reset.onclick = function(){
    count=0;
    countLabel.textContent=count;
}