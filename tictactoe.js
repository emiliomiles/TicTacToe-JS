let player = "X";
let winner = null;
let Xwins = 0;
let Owins = 0;

function start()
{
  for(let i = 1; i<10; i++)
  {
    clear(i);
  }
  winner = null;
  changeMessage(player + " makes the first move.");
}

function changeMessage(m)
{
  document.getElementById("message").innerText = m;
}

function changeXwins(m)
{
    document.getElementById("Xwins").innerText = m;
}

function changeOwins(m)
{
    document.getElementById("Owins").innerText = m;
}

function place(cell)
{
  if(winner != null)
  {
    if(winner == "none")
    {
      changeMessage("Cat's game. Shame.");
    }
    else
    {
      changeMessage(player + " has won the game! You go first next game.");
    }
  }
  else
  {
    if(cell.innerText == "")
    {
      if(player === "X")
      {
        cell.style.color = "#333333";
      }
      else {
        cell.style.color = "dimgray";
      }
      cell.innerText = player;
      switchTurn();
    }
    else
    {
      changeMessage("That spot has already been picked. *sigh* Try again.");
    }
  }
}

function switchTurn()
{

  if(endgameCheck(player) === true)
  {
    changeMessage(player + " has won the game! You go first next game.");
    winner = player;
    if(player === "X")
    {
      Xwins++;
      changeXwins("X WINS: " + Xwins);
    }
    else
    {
      Owins++;
      changeOwins("O WINS: " + Owins);
    }
  }
  else
  {
    if(tieCheck() === true)
    {
      changeMessage("Cat's game. Shame.");
      winner = "none";
    }
    else
    {
      if(player === "X")
      {
        player = "O";
        document.getElementById("message").innerText = player + " makes the next move!";
      }
      else
      {
        player = "X";
        document.getElementById("message").innerText = player + " makes the next move!";
      }
    }
  }
}

function winCheck(spot1, spot2, spot3, player)
{
  var win = false;
  if(getSpot(spot1) == player && getSpot(spot2) == player && getSpot(spot3) == player)
  {
    win = true;
  }
  return win;
}

function tieCheck()
{
  var filledOut = false;
  var fillCheck = 9;
  var compare = 0;
  for(let i=1; i<10; i++)
  {
    if(getSpot(i) == "X" || getSpot(i) == "O")
    {
      compare++;
    }
  }
  if(compare == fillCheck)
  {
    filledOut = true;
  }
  return filledOut;
}

function getSpot(id)
{
  return document.getElementById(id).innerText;
}

function endgameCheck(player)
{
  var win = false;
  if(winCheck(1,2,3,player) || winCheck(4,5,6,player) || winCheck(7,8,9,player) ||
     winCheck(1,4,7,player) || winCheck(2,5,8,player) || winCheck(3,6,9,player) ||
     winCheck(1,5,9,player) || winCheck(3,5,7,player))
  {
    win = true;
  }
  return win;
}

function clear(id)
{
  document.getElementById(id).innerText = "";
}
