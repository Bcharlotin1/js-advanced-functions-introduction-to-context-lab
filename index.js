// Your code here
// const employees = []

function createEmployeeRecord(array){
   
    
    const employee = {
    firstName:  array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
// employees.push(employee)
return employee
}

function createEmployeeRecords(arrayOfArrays){

return arrayOfArrays.map( employeeArray => createEmployeeRecord(employeeArray))
}

function createTimeInEvent(employeeObject, dateStamp) {
    
    let stamp = dateStamp.split(" ")
    let stampTime = stamp[1] 

    employeeObject.timeInEvents.push({
        type: "TimeIn",
        hour: parseInt(stampTime, 10), 
        date: `${stamp[0]}`
    })
return employeeObject
}

function createTimeOutEvent(employeeObject, dateStamp) {
    
    let stamp = dateStamp.split(" ")
    let stampTime = stamp[1] 

    employeeObject.timeOutEvents.push({
        type: "TimeOut",
        hour: parseInt(stampTime, 10), 
        date: `${stamp[0]}`
    })
return employeeObject
}

function hoursWorkedOnDate(employeeObject, dateStamp) {
    let timeInHour;
    let timeOutHour;

    let timeInObject = employeeObject.timeInEvents.filter((object)=>{
        if (object.date === dateStamp){
            timeInHour = parseInt(object.hour)  
        }
    })

    let timeOutObject = employeeObject.timeOutEvents.filter((object)=>{
        if (object.date === dateStamp){
            timeOutHour = parseInt(object.hour)  
        }
    })
    let totalHoursWorked = (timeOutHour - timeInHour)/100

    return totalHoursWorked
// console.log(timeInHour)
// console.log(timeOutHour)
// console.log(totalHoursWorked)
}

function wagesEarnedOnDate(employeeObject, dateStamp) {
    
    let hours = hoursWorkedOnDate(employeeObject, dateStamp)

    let pay = employeeObject.payPerHour

    return (pay * hours)
}