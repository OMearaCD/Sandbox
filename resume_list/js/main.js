/* TODO: you can probably make each entry an object, with the "job title" and "company name" properties */
const modal = document.getElementById("jobModal");
const li = document.getElementsByTagName("li");
var companyName = [];
var jobTitle = [];
var jobList = document.getElementById("list");

/* Modal control */
function openModal(){
    modal.style.display="block";    
}
function closeModal(){
    modal.style.display ="none";
}


/* Close functions */
        
function addDeleteBtn(){
/* Loop through the list and add a close button for each li (each li is a step of i) */

    var i="";
    for (i = 0;i<li.length;i++) {
        /* TODO: Replace the button with an icon */
        var remove = document.createElement("button");
        remove.className="deleteBtn";
        remove.appendChild(document.createTextNode("X"));
        li[i].appendChild(remove);
        
    }
}
/*TODO: Fix this */
/* This returns an object resembling an array, not the buttons themselves. Problem is probably that you're not calling this function on button click */
var deleteButton = document.getElementsByClassName("deleteBtn");

for (var i=0;i<deleteButton.length;i++){
    var deleteIt=deleteButton[i];
    deleteIt.onclick = function(){
        // Add more here
    alert("aaaah");
}
}

    
function addJob() { 
    // TODO: Clean up this mess 
    var companyEntry = document.getElementById("company").value;
    var jobEntry = document.getElementById("job").value;
    // Checking if both fields contain something 
    if (companyName !=="" && jobTitle !==""){
        
    // Add user input as well as what's already in localstorage to an array */

    companyName.push(companyEntry);
    jobTitle.push(jobEntry);
        console.log(companyName);
        console.log(jobTitle);
        
        /* Now you have an array of everything that was added on one page. These arrays empty on reload, so every time you add a new entry, you're running setItem, which overwrites localStorage with whatever has been added in this page. Anything already in there is removed. */

    /* Add the array into localStorage */
    localStorage.setItem("companyTitle", JSON.stringify(companyName));
    localStorage.setItem("jobTitle", JSON.stringify(jobTitle));

        var t= document.createTextNode(companyEntry);
        var h=document.createTextNode(jobEntry);
        var j = document.createElement("button");
        var entry = document.createElement("li");
        j.className="deleteBtn";
        j.appendChild(document.createTextNode("X"))
        entry.appendChild(j);
        entry.appendChild(t);
        entry.appendChild(h);
        jobList.appendChild(entry);
    
        modal.style.display="none";
    }
    else {
        alert("Please enter a company and position.");
    }
};

function getLists(){
 // Do this on page load
if (localStorage.getItem("companyTitle") !== null){companyName.push(localStorage.getItem("companyTitle"))
                            };
if (localStorage.getItem("jobTitle")!== null){
        jobTitle.push(localStorage.getItem("jobTitle"))
};
    
    var companyArray = JSON.parse(localStorage.getItem("companyTitle"));
    var jobArray = JSON.parse(localStorage.getItem("jobTitle"));
    var i="";
    for (i=0;i<companyArray.length;i++){
         var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(companyArray[i]));
    entry.appendChild(document.createTextNode(jobArray[i]));
        jobList.appendChild(entry);
        console.log(localStorage.getItem("companyTitle"))
    } 
}
