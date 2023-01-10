function signin(){
     var pass=document.getElementById("password").value;
     var name=document.getElementById("username").value;
     if(name=='' || name==null)
     {
         alert("Please enter Details");
         return false;
     }
     else if( pass==null || pass==''){
           alert("Please Enter Password");
           return false;
     }
    else if(pass!="9555@Shiv")
    {
        alert("Wrong Password");
    return false;
    }
  
  
    else{
        return true;
    }
}

