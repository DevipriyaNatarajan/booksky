//selecting popup box popup overlay button
var popupoverlay=document.querySelector(".popup-overlay")
var popupbox=document.querySelector(".popup-box")
var addpopupbutton=document.getElementById("add-popup-button")

addpopupbutton.addEventListener("click",function(){
  popupoverlay.style.display="block"
  popupbox.style.display="block"
  
})

//select cancel button
var cancelpopup=document.getElementById("cancel-popup")
cancelpopup.addEventListener("click",function(event){
  event.preventDefault()
  popupoverlay.style.display="none"
  popupbox.style.display="none"
})
//select container,addbook,book-title-input,book-author-input,book-description-input
var container=document.querySelector(".container")
var addbook=document.getElementById("add-book")
var booktitleinput=document.getElementById("book-title-input")
var bookauthorinput=document.getElementById("book-author-input")
var bookdescriptioninput=document.getElementById("book-description-input")

addbook.addEventListener("click",function(event){
  event.preventDefault()

  var div=document.createElement("div")
  div.setAttribute("class","book-container")
  div.innerHTML=` <h2>${booktitleinput.value}</h2>
  <h5>${bookauthorinput.value}</h5>
  <p>${bookdescriptioninput.value}</p>
  <button onclick="deletebook(event)">Detele</button>`
  container.append(div)
  popupoverlay.style.display="none"
  popupbox.style.display="none"
  form.reset();
  
})
function deletebook(event){
  event.target.parentElement.remove()
  

}
// Select the form element
var form = document.getElementById("resetter");

// Select the reset button
var resetButton = document.getElementById("reset");

// Add event listener to the reset button
resetButton.addEventListener("click", function(event) {
  event.preventDefault(); // Prevent default form submission behavior
  form.reset();
    
});

