let todoname=document.querySelector("#todoname");
let desc=document.querySelector("#desc");
let priority=document.querySelector("#priority");
let save=document.querySelector(".save");
let add=document.querySelector("#add");
let background2=document.querySelector(".background2 d-none")
add.addEventListener("click",()=>{
    background2.removeChild(".d-none");
})
save.addEventListener("click",()=>{
    background2.add(".d-none");
})

save.addEventListener("click",()=>{
    let newUser = {
        todoname: todoname.value,
        desc: desc.value,
        option: option.value,
       
      };
    
     
      // local storage --> save
      let userList = localStorage.getItem("todo"); // null;
    
      userList = userList === null ? [] : JSON.parse(userList);
      userList.push(newUser);
    
    
})
console.log(todoname,desc,option);