let usersArray = JSON.parse(localStorage.getItem('user-details')) || [];

    displayUsers(usersArray);


    function displayUsers(arr) {
        document.querySelector('tbody').innerHTML=''

        arr.map((ele, index)=> {
        let tr = document.createElement('tr');

        let td1 = document.createElement('td');
        td1.textContent = index+1;

        let td11 = document.createElement('td');
        td11.textContent = Math.floor(ele.uniqueId);

        let td2 = document.createElement('td');
        td2.textContent = ele.name;

        let td3 = document.createElement('td');
        td3.textContent = ele.age;

        let td4 = document.createElement('td');
        td4.textContent = ele.fromStation;

        let td5 = document.createElement('td');
        td5.textContent = ele.toStation;

        let td6 = document.createElement('td');
        td6.textContent = ele.journeyDate;

        let td7 = document.createElement('td');
        td7.textContent = ele.seatType

        let td8 = document.createElement('td');
        td8.textContent = Math.floor(Math.random() * 10000);
        ele.otp=td8.textContent

        let td9 = document.createElement('td');
        td9.textContent = "Confirm";
        td9.addEventListener('click', function () {
            handleConfirmation(ele,index);
        })

        let td10 = document.createElement('td');
        td10.textContent = "Reject";
        td10.addEventListener('click', function () {
            handleRejection(index)
        })

        tr.append(td1,td11,td2,td3,td4,td5,td6,td7,td8,td9,td10);
        document.querySelector("tbody").append(tr);
    })
}
    function handleRejection (indx) {
        let arr = usersArray.splice(indx,1);
        localStorage.setItem('user-details',JSON.stringify(usersArray));
        displayUsers(usersArray)
    }

    function handleConfirmation (ele,index) {
        let otp = prompt("Please enter your OTP");
        if(otp===ele.otp) 
        {
            alert(`${ele.name} added to waiting list`);

            setTimeout(() => {
                alert(`Booking ticket from ${ele.fromStation} to ${ele.toStation}`);
            }, 5000);

            setTimeout(() => {
                alert (`Ticket booked for ${ele.journeyDate}`)
            }, 10000);

            let bookedTicket = usersArray.splice(index,1);
            displayUsers(usersArray);
            localStorage.setItem('booked', JSON.stringify(bookedTicket));
        }
        else 
        {
            alert ('invalid otp');
        }
    }

    function handleSeat () {
        let filteredArr=[];
        let seat = document.getElementById('seat').value;
        if(seat==="") {
            displayUsers(usersArray);
        }
        else {
                let filteredArr = usersArray.filter((ele)=>{
                return ele.seatType === seat;
            })
            console.log(filteredArr)
            displayUsers(filteredArr);
        }
        
    }

    function handleAge () {
        let age = document.getElementById('age').value;
        usersArray.sort(function(a,b){
            if(age==='asc') {
                return a.age-b.age;
            }
            if(age==='desc') {
                return b.age-a.age
            }
            return 0;
        })
        displayUsers(usersArray)
    }

    function handleDate () {
        let age = document.getElementById('age').value;
        usersArray.sort(function(a,b){
            if(age==='asc') {
                if(a.journeyDate>b.journeyDate) {
                    return 1;
                }
            }
            if(age==='desc') {
                if(a.journeyDate<b.journeyDate) {
                    return -1;
                }
            }
            return 0;
        })
        displayUsers(usersArray)
    }
