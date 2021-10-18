var input = document.getElementById("userInput");
var button = document.getElementById("enter");
var ul = document.querySelector("ul");


function inputLength()
{
  return input.value.length;
}

function createListElement()
{
  var li = document.createElement("li");
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value ="";
}

function addElementAfterClick()
{
  if(inputLength() >0)
  {
    createListElement();
  }
}

function addElementAfterKeyPress(event)
{
  if(inputLength() >0 && event.keyCode === 13)
  {
    createListElement();
  }
}

button.addEventListener("click", addElementAfterClick);
input.addEventListener("keypress", addElementAfterKeyPress);
