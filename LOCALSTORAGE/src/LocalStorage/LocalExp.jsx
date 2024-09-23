import React from 'react'

export default function LocalExp() {
    localStorage.setItem("Name" , "Student" ,)
    localStorage.setItem("Nmae2" , "Student2")

    let data = localStorage.getItem("Name");
    console.log(data);

    localStorage.removeItem("Name")

    let obj = {Name : "Jenil" , Surname : "Satani" , Age : 17 , Subject : "React"};

    localStorage.setItem("myobj" , JSON.stringify(obj));

    let objData = JSON.parse(localStorage.getItem("myobj"))
    console.log(objData);


    
  return (
    <div>LocalExp</div>
  )
}
