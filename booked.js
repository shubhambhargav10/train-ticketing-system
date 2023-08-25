let bookedTickets = JSON.parse(localStorage.getItem('booked')) || [];

    displayUsers(bookedTickets);


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

        

        tr.append(td1,td11,td2,td3,td4,td5,td6,td7);
        document.querySelector("tbody").append(tr);
    })
}
    

    function handleSeat () {
        let filteredArr=[];
        let seat = document.getElementById('seat').value;
        if(seat==="") {
            displayUsers(bookedTickets);
        }
        else {
                let filteredArr = bookedTickets.filter((ele)=>{
                return ele.seatType === seat;
            })
            console.log(filteredArr)
            displayUsers(filteredArr);
        }
        
    }

    function handleAge () {
        let age = document.getElementById('age').value;
        bookedTickets.sort(function(a,b){
            if(age==='asc') {
                return a.age-b.age;
            }
            if(age==='desc') {
                return b.age-a.age
            }
            return 0;
        })
        displayUsers(bookedTickets)
    }

    function handleDate () {
        let age = document.getElementById('age').value;
        bookedTickets.sort(function(a,b){
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
        displayUsers(bookedTickets)
    }
