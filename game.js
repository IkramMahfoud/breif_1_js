const holes = document.getElementsByClassName("hole");

hungryMole= '<img src="./hungry.png" alt="mole" class="mole"">'
sadMole= '<img src="./sad.png" alt="mole" class="mole" ">'
leavingMole = '<img data-index="8" src="./leaving.png" alt="mole" class="mole">'
feedingMole = '<img data-index="6" src="./fed.png" alt="mole" class="mole">'
happyMole = '<img data-index="6" src="./fed.png" alt="mole" class="mole">'
let statusMole = "hungry";

function getRandom()
{
  return Math.floor(Math.random() * 7);
}

setInterval(function () {
  const n = getRandom();
  const hole = holes[n];

  console.log(n);
  console.log(hole);

  hole.innerHTML = hungryMole;

  hole.querySelector(".mole").addEventListener("click", function () {
    statusMole = "happy"
    hole.innerHTML = happyMole;
  } )



  setTimeout(function () {
    if (statusMole == "hungry") { hole.innerHTML = sadMole};
  }, 1400);

  setTimeout(function () {
      hole.innerHTML = leavingMole;
  }, 2000);
  setTimeout(() => {
    hole.querySelector(".mole").remove();
  }, 2600)


}, 3000);


// function click(mole)
// {
//   if(mole.src === hungryMole){
//     holes[u].removeChild(holes[u].firstChild);
//     console.log();
//     holes[u].innerHTML = happyMole;
//       setTimeout(function () {
//         holes[u].removeChild(holes[u].firstChild);
//         holes[u].innerHTML = leavingMole;
//       },500)
//   }
// }
