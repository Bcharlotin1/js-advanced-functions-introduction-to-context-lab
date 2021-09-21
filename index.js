// Your code here
const employees = []

function createEmployeeRecord(array){
    // const date = new Date().toLocaleDateString('en-CA')
    // const today = new Date()
    // let time = today.getHours()
    // time = (time +"00")
    // // `${date} ${time}`
    
    const employee = {
    firstName:  array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
employees.push(employee)
return employee
}

function createEmployeeRecords(arrayOfArrays){

return arrayOfArrays.map( employeeArray => createEmployeeRecord(employeeArray))
}

function createTimeInEvent(employeeObject, dateStamp) {
    
    let stamp = dateStamp.split(" ")

    employeeObject.timeInEvents = {
        type: "TimeIn",
        hour: `${stamp[1]}`, 
        date: `${stamp[0]}`
    }
}