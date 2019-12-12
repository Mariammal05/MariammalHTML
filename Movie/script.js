function validateForm(){
    var title = document.forms["editMovie"]["title"].value;
    if(title==""){
        alert("Title is required");
        return false;
    }
    var titlelength = title.length;
    if(titlelength < 2|| titlelength > 65){
        alert("Title should have 2 to 65 characters");
        return false;
    }
    var gross=document.forms["editMovie"]["boxoffice"].value;
    if(isNaN(gross)) {
        alert("Gross has to be a number");
        return false;
   }
   if(gross==""){
   alert("Box Office is required.");
   return false;
   }
   var Genre = document.forms["editMovie"]["Genre"].value;
    if (Genre== "0"){
        alert("Select one genre");
        return false;
    }
   
   var dateOflaunch = document.forms["editMovie"]["dateOflaunch"].value;
    if(dateOflaunch==""){
        alert("Date Of launch is required");
        return false;
    }
    if(!dateOflaunch.match(/^0[1-9]|[12][0-9]|3[01])[\-\/.}](?:(0[1-9]|1[012])[\-\/.])(19|20)[0-9]{2})$/)){
        alert("Incorrect date format.Expected format(dd/mm/yyyy)");
        return false;
    }
    
    
       
 }
 function deleteRow(r) {
    var i = r.parentNode.parentNode.rowIndex;
    document.getElementById("table_id").deleteRow(i);
    document.getElementById("span").innerHTML="Movie removed from favorites successfully"
    addColumn();
  }
  function addColumn(){
    var totalrows = document.getElementById("table_id").rows.length;
    datarows = (totalrows-2);
    document.getElementById("val").innerHTML=datarows;
    if(datarows==0){
        window.open("favorites-empty.html");
    }
}
          
 