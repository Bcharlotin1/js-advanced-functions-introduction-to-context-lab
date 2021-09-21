// Your code here


function createEmployeeRecord(array){
    const date = new Date().toLocaleDateString('en-CA')
    const today = new Date()
    let time = today.getHours()
    time = (time +"00")
    // `${date} ${time}`
    const employee = {
    firstName:  array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
    }
return employee
}