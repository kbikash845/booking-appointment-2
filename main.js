let item=document.getElementById("items");


item.addEventListener("submit",onsubmit);
//making function
function onsubmit(e){
    e.preventDefault();
    let name=e.target.name.value;
    let email=e.target.email.value;

    //create new variable for creating string like stru
let myObj={
            name,
            email
           
        };
 //// send data fronted to the backend
  axios.post("https://crudcrud.com/api/d286a9f1d515457294c0e24d087397a9/appointmentdata",myObj)
  .then((response)=>{
      console.log(response)
  })
  .catch((error)=>{
   console.log(error);
  })

        let x=JSON.stringify(myObj);
        localStorage.setItem(myObj.name,x);
        showOnUserScreen(myObj);

function showOnUserScreen(myObj){
    //create new element store data
    let ul=document.getElementById("users");
    let li=document.createElement("li");
    li.textContent=myObj.name + "-" + myObj.email ;
    ul.appendChild(li);


//create delete btn
    let deletebtn=document.createElement("input");
    deletebtn.type="button";
    deletebtn.value="Delete";
    
//append in li
    li.appendChild(deletebtn); 
//append li inside userList
    ul.appendChild(li);

    deletebtn.onclick=(e)=>{
        localStorage.removeItem(myObj.name);
        ul.removeChild(li);
        
    }
    //create edit btn
    let editbtn=document.createElement("input");
    editbtn.type="button";
    editbtn.value="Edit";
    // console.log(editbtn);
    //append in li
    li.appendChild(editbtn); 
    //append li inside userList
    ul.appendChild(li);

    editbtn.onclick=(e)=>{
       //populating the userdetails
        document.getElementById("name").value=myObj.name;
        document.getElementById("email").value=myObj.email;
        
        localStorage.removeItem(myObj.name);
        ul.removeChild(li);
    }
    

}
}