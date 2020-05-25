/* TODO: Make these not global */
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
/* This returns an object resembling an array, not the buttons themselves */
var deleteButton = document.getElementsByClassName("deleteBtn");
var i="";
for (i=0;i<deleteButton.length;i++){
    var deleteIt=deleteButton[i];
    deleteIt.onclick = function(){
        // Add more here
    entry.style.display="none";
}
}

function addJob() { 
    /*TODO: Clean up this mess */
    var companyEntry = document.getElementById("company").value;
    var jobEntry = document.getElementById("job").value;
    
    if (companyName !=="" && jobTitle !==""){
        
    /* Add user input to an array */
        
        /* Every time the page gets refreshed and an entry added, the older entries get more and more screwed up */
        var companyArray = localStorage.getItem("companyTitle");
        var jobArray =  localStorage.getItem("jobTitle");
        
        companyArray = companyArray ? companyArray.split(','):[];
        jobArray = jobArray ? jobArray.split(','):[];
    companyArray.push(companyEntry);
    jobArray.push(jobEntry);

    /* Add the array into localStorage */
    localStorage.setItem("companyTitle", JSON.stringify(companyArray));
    localStorage.setItem("jobTitle", JSON.stringify(jobArray));

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
 console.log(localStorage);
    var companyArray = JSON.parse(localStorage.getItem("companyTitle"));
    var jobArray = JSON.parse(localStorage.getItem("jobTitle"));
    var i="";
    for (i=0;i<companyArray.length;i++){
         var entry = document.createElement("li");
    entry.appendChild(document.createTextNode(companyArray[i]));
    entry.appendChild(document.createTextNode(jobArray[i]));
        jobList.appendChild(entry);
    } 
}

    /*var a = localStorage.getItem("companyTitle");
    var b = localStorage.getItem("jobTitle");
    entry.appendChild(document.createTextNode(a));
    entry.appendChild(document.createTextNode(b));
    jobList.appendChild(entry);*/


