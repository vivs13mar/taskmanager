let add = document.querySelector('#add')
let modal = document.querySelector('#modal')
let remixiconcross = document.querySelector('#remixiconclose')
let taskName = document.querySelector('#taskName')
let taskDate = document.querySelector('#taskDate')
let taskDetails = document.querySelector('#taskDetails')

add.addEventListener('click', function(){
    modal.style.display = 'block'
})

remixiconcross.addEventListener('click', function(){
    modal.style.display = 'none'
})

if(localStorage.getItem('tasks')=== null ){
    localStorage.setItem('tasks', JSON.stringify([]))
}


let taskDone = document.querySelector('#taskDone')
taskDone.addEventListener('click', function(){
    if(taskName.value==="" || taskDetails.value==="" || taskDate.value===""){
        alert('Please fill all the fields.')
    }
    else{
        let PreviousData = JSON.parse(localStorage.getItem('tasks'))
        console.log(PreviousData)
        let newTask = {
            task_Name:taskName.value, 
            task_Date:taskDate.value,
            task_Details:taskDetails.value,
        }
        PreviousData.push(newTask)
        localStorage.setItem('tasks', JSON.stringify(newTask))
        console.log(newTask) 
    }
 
})