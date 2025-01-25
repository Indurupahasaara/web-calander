
// const monthYearElement = document.getElementById('month-year');

// console.log("monthYearElement");
// console.log(monthYearElement);
// const daysContainer = document.getElementById('days');
// console.log("daysContainer");
// console.log(daysContainer);
// // get current Date
// let currentDate = new Date();
// const firstPoyaDay = new Date(2025,0,13);

// // function to render calander for current month
// function renderCalender(){
//     const month = currentDate.getMonth();
//     console.log("month");
//     console.log(month);

//     const year = currentDate.getFullYear();
//     console.log("year");
//     console.log(year);
//     const firstDayOfMonth = new Date(year,month,1);
//     console.log("firstDayOfMonth");
//     console.log(firstDayOfMonth);
//     const lastDateOfMonth = new Date(year,month+1,0);
//     console.log("lastDateOfMonth");
//     console.log(lastDateOfMonth);
//     const lastDayOfMonth = lastDateOfMonth.getDay();

//     console.log("lastDayOfMonth");
//     console.log(lastDayOfMonth);

//      // Update the month-year display
//      monthYearElement.textContent = `${firstDayOfMonth.toLocaleString('default', { month: 'long' })} ${year}`;


//     daysContainer.innerHTML ='';


//     // fill the calander grid with date 
//     const emptyCells = firstDayOfMonth.getDay();

//     for(let i = 0; i<emptyCells; i++){
//         const emptyCell =document.createElement('div')
//         emptyCell.classList.add('day-number');
//         daysContainer.appendChild(emptyCell);
//     }


//     const poyaDays = GetPoyaDaysInYear(year,month);
//     console.log("poyaDays");
//     console.log(poyaDays);

//     for( let day = 1; day <= lastDateOfMonth.getDate();day++){
//         const dayCell = document.createElement('div');
//         dayCell.classList.add('day-number');
//         dayCell.textContent = day;
//         // daysContainer.appendChild(dayCell);

//         // to mark saturday sunday
//         const dayOfWeek = new Date(year,month,day).getDay();
//         if(dayOfWeek === 0 || dayOfWeek ===6){
//             dayCell.classList.add('weekend');
//         }

//         if(poyaDays.includes(day)){
//             dayCell.classList.add('poya-day')

//         }

//         daysContainer.appendChild(dayCell);
//     }
   
// }

// // to calculate poyadays

// function GetPoyaDaysInYear(year,month){
//     const poyaDays = [];
//     let poyaDate = new Date(firstPoyaDay)

//     while(poyaDate.getFullYear()=== year && poyaDate.getMonth() === month){
//         poyaDays.push({dat:poyaDate.getDate(),month:poyaDate.getMonth()});
//         poyaDate.setDate(poyaDate.getDate()+28)
//     }

//     return poyaDays;
// }

// // to handele next and last month
// function changeMonth(increment){
//     currentDate.setMonth(currentDate.getMonth()+increment);
//     renderCalender();
// }

// renderCalender();

// // to select poya day ------------------



//  new -------------------------------


const prevYearButton = document.getElementById('prevYear');
const nextYearButton = document.getElementById('nextYear');
const prevMonthButton = document.getElementById('prevMonth');
const nextMonthButton = document.getElementById('nextMonth');
const monthYearSpan = document.getElementById('monthYear');
const calendarTable = document.getElementById('calendarTable').getElementsByTagName('tbody')[0];

let currentMonth = new Date().getMonth();
let currentYear = new Date().getFullYear();
const poyaDays = [];
// window.addEventListener('load',()=>{
//     console.log("onload working")
//         const startDate = new Date('2025-01-13'); 
//         const datesList = [];
//     // for grnarate poyadys 12 months
//     for (let i = 0; i < 12; i++) { 
//         const nextDate = new Date(startDate);
//         nextDate.setDate(startDate.getDate() + (i * 28));
//         // console.log("nextDate");
//         // console.log(nextDate);
     
//         console.log("nextDate.toISOString().split('T')");
//         // console.log(nextDate.toISOString());
//         const formattedDate = nextDate.toISOString().split('T')[0];

//         poyaDays.push(formattedDate);
//         // poyaDays.add(formattedDate);
//     }
    
    
//     console.log("poyaDays");
//     console.log(poyaDays);
//     // return poyaDays;
    
// })

console.log("poyaDays after loaded all dates");
console.log(poyaDays);

// const poyaDays = [
//     '2025-01-24', '2025-02-22', '2025-03-24',];


// 2025-01-13 - 2025-02 = 1, 2025-03 = 2, 2025-07 = 6, 2026-01 = 
// 2025-01-13

function monthDiff(dateFrom, dateTo) {
    return dateTo.getMonth() - dateFrom.getMonth() + 
        (12 * (dateTo.getFullYear() - dateFrom.getFullYear()))
}

function generatePoyaday() {
    const startDate = new Date('2025-01-13'); 
    const nextDate = new Date(startDate);
    var monthDifference = monthDiff(startDate, new Date(currentYear, currentMonth, 13));
    nextDate.setDate(startDate.getDate() + (monthDifference * 28) - 1);
    console.log("monthDifference");
    console.log(monthDifference);
    console.log("startDate.getDate() + (monthDifference * 28)");
    console.log(startDate.getDate() + (monthDifference * 28));
    
    console.log("nextDate.toISOString().split('T')");
    // console.log(nextDate.toISOString());
    const formattedDate = nextDate.toISOString().split('T')[0];
    console.log("formattedDate");
    console.log(formattedDate);
    return formattedDate;
}


const renderCalendar = (month, year) => {
    calendarTable.innerHTML = '';
    const firstDay = new Date(year, month).getDay();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement('tr');

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement('td');
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement('td');
                const cellDate = new Date(year, month, date);

                cell.textContent = date;

                if (cellDate.getDay() === 0) { // Sunday
                    cell.classList.add('sunday');
                } else if (cellDate.getDay() === 6) { // Saturday
                    cell.classList.add('saturday');
                }

                // if (poyaDays.includes(cellDate.toISOString().split('T')[0])) {
                //     cell.classList.add('poya-day');
                // }

                var poyaDay = generatePoyaday();
                if(cellDate.toISOString().split('T')[0] == poyaDay){
                    cell.classList.add('poya-day');
                    console.log("cell");
                    console.log(cell);
                }

                row.appendChild(cell);
                date++;
            }
        }
        calendarTable.appendChild(row);
    }
    monthYearSpan.textContent = `${new Date(year, month).toLocaleString('default', { month: 'long' })} ${year}`;
    generatePoyaday();
};

prevYearButton.addEventListener('click', () => {
    currentYear--;
    renderCalendar(currentMonth, currentYear);
});

nextYearButton.addEventListener('click', () => {
    currentYear++;
    renderCalendar(currentMonth, currentYear);
});

prevMonthButton.addEventListener('click', () => {
    currentMonth--;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    }
    renderCalendar(currentMonth, currentYear);
    // this.genaratePoyadays();
});

nextMonthButton.addEventListener('click', () => {
    currentMonth++;
    if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    renderCalendar(currentMonth, currentYear);
});




renderCalendar(currentMonth, currentYear);
