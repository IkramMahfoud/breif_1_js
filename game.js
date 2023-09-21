const holes = document.getElementsByClassName("hole");

feedingMole = '<img data-index="6" src="./fed.png" alt="mole" class="mole">'
happyMole = '<img data-index="6" src="./fed.png" alt="mole" class="mole">'
leavingMole = '<img data-index="8" src="./leaving.png" alt="mole" class="mole">'

function hungryMole(u) {
  return '<img data-index="'+u+'" src="./hungry.png" alt="mole" class="mole" onclick="click(this)">'
}
// console.log(t);
function getRandom()
{
  return Math.floor(Math.random() * 7);
}

setInterval(function ()
{
  let n = getRandom()
  console.log(n);
  console.log(holes[n]);
  holes[n].innerHTML = hungryMole(n);
  setTimeout(function(){
    holes[n].removeChild(holes[n].firstChild);
  },2000)
}, 1000);

function click(mole)
{
  u = mole.data_index;
  if(mole.src === hungryMole){
    holes[u].removeChild(holes[u].firstChild);
    console.log();
    holes[u].innerHTML = happyMole;
      setTimeout(function () {
        holes[u].removeChild(holes[u].firstChild);
        holes[u].innerHTML = leavingMole;
      },500)
  }
}
