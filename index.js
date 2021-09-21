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
    
    let timeInObject = employeeObject.timeInEvents.filter((array)=>{array.filter((object)=> console.log(object))
    })
       
        // if (object.date === dateStamp){   
        //     return object.hour
        // }
  

console.log(timeInObject)
//    let timeOutHour = employeeObject.timeInEvents.filter((object)=>{
//        if (object.date === dateStamp){
           
//         return object.hour
//        }
//     })

}