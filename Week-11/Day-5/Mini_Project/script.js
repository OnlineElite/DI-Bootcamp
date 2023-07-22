/*---------------Mini_Project---------------*/


const submet = document.getElementById('submet')

submet.addEventListener('click', newList)
function newList(e){
    e.preventDefault();
    const Name = document.getElementById('name')
    const Description = document.getElementById('description')
    const StartTime = document.getElementById('startTime')
    const EndTime  = document.getElementById('endTime')
    const list = {
        name : Name.value,
        description : Description.value,
        startTime : StartTime.value,
        endTime : EndTime.value,
        status : false,
        backgraound: 'rgb(10, 2, 116)'
    };

    var TasksList = localStorage.getItem("TasksList")

    if(TasksList == null){
        tempList = []
        tempList.push(list)
        localStorage.setItem("TasksList", JSON.stringify(tempList))
    }else{
        TasksList = JSON.parse(TasksList)
        TasksList.push(list)
        localStorage.setItem("TasksList", JSON.stringify(TasksList))
    }
    console.table(JSON.parse(localStorage.getItem("TasksList")))
    
    window.open('show.html')
    

}
