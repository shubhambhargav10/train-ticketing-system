document.getElementById("register").addEventListener("click", handleUserRegistration);
    let userDetails = JSON.parse(localStorage.getItem("user-details"))||[];

    function handleUserRegistration() {
       
        let singleUser = {
        uniqueId : document.getElementById('unique-id').value+Math.random()*1000,
        name : document.getElementById("name").value,
        age : document.getElementById("age").value,
        fromStation : document.getElementById("from-station").value,
        toStation : document.getElementById("to-station").value,
        journeyDate : document.getElementById("journey-date").value,
        seatType : document.getElementById("seat-type").value
    }
    if(singleUser.uniqueId==="" || singleUser.name==="" || singleUser.age==="" || singleUser.fromStation==="" || singleUser.toStation==="" || singleUser.journeyDate==="" || singleUser.seatType==="") 
    {
        alert ('All inputs are required')
    }
    else if(singleUser.age<18 || singleUser.age>40 || singleUser.fromStation===singleUser.toStation) 
    {
        alert ("either age is not between 18 and 40 or from station and to station are same")
    }
    else 
    {
        console.log(userDetails)
        console.log(singleUser)
        userDetails.push(singleUser);
        localStorage.setItem("user-details", JSON.stringify(userDetails))
    }

}