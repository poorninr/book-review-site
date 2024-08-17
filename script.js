var formbutton=document.getElementById("formbtn");
var backcontainer=document.querySelector(".addbookcontainer");
var addbook=document.querySelector(".addbook");
formbutton.addEventListener('click',function()
{
    backcontainer.style.display="block";
    addbook.style.display="block";
})

var cancelbtn=document.getElementById("cancelbtn");
cancelbtn.addEventListener('click',function(){
    backcontainer.style.display="none";
    addbook.style.display="none";
})

var bodycontent=document.querySelector(".bodycontent");
var bookcontent=document.querySelector(".bookcontent");
var bookname1=document.getElementById("bookname1");
var author1=document.getElementById("author1");
var textarea1=document.getElementById("textarea1");
var addbtn1=document.getElementById("addbtn1");
var form1=document.getElementById("form1");

addbtn1.addEventListener('click',function(event){
    event.preventDefault();
    var newdiv=document.createElement("div");
    newdiv.setAttribute("class","bookcontent");
    newdiv.innerHTML= `<h2>${bookname1.value}</h2>
    <h5>${author1.value}</h5>
    <p>${textarea1.value}</p>
    <button onclick="deletefunction(event)">Delete</button>`
    bodycontent.append(newdiv);
    backcontainer.style.display="none";
    addbook.style.display="none";
    form1.reset();
})


function deletefunction(event)
{
    event.target.parentElement.remove();
}




// Another design

