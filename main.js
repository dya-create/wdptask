// varibles to access specffic task

const breakTask = document.getElementById('break');
const musicTask = document.getElementById('music');
const gymTask = document.getElementById('gym');
const studyTask = document.getElementById('study');
const tvTask = document.getElementById('tv');
const friendsTask = document.getElementById('friends');
const workTask = document.getElementById('work');
const deselectBtn = document.getElementById('deselect');
const taskContainer = document.querySelector('.task__container');
const scheduleContainer = document.querySelector('.schedule__container');
const resetBtn = document.querySelector('.deleteBtn');
const popUp = document.querySelector('.pop-up__container');
const noBtn = document.getElementById('btn__no');
const yesBtn = document.getElementById('btn__yes');

let selectedColor, active;

//Event Listeners , taskcontainer is for list of task 
taskContainer.addEventListener('click', selectTask);
scheduleContainer.addEventListener('click', setColors);
deselectBtn.addEventListener('click', resetTasks);
resetBtn.addEventListener('click',openPopup);
noBtn.addEventListener('click', closePopup);
yesBtn.addEventListener('click', deleteTasks);

// let the user select task, based on that select color and make it activee task
function selectTask (e){
    resetTasks()

    // getting the background color on a click e-event
    taskColor = e.target.style.backgroundColor;

    switch(e.target.id){
        case 'break':
            activeTask(breakTask, taskColor);
            
            break
        case 'gym':
            activeTask(gymTask, taskColor);
           
            break
        case 'study':
            activeTask(studyTask, taskColor);
           
            break
        case 'tv':
            activeTask(tvTask, taskColor);
            
            break
        case 'friends':
            activeTask(friendsTask, taskColor);
            
            break
        case 'work':
            activeTask(workTask, taskColor);
            
            break
            case 'music':
            activeTask(musicTask, taskColor);
            
            break
    }

};

// Set colors for schedule , show it on schedule
function setColors (e){
    if(e.target.classList.contains('task') && active === true){
        e.target.style.backgroundColor = selectedColor;
        e.target.innerHTML = icon;
    }else if(e.target.classList.contains('fas') && active === true){
        e.target.parentElement.style.backgroundColor = selectedColor;
        
    }
};

// Active task, letting the user make it select a taask
function activeTask(task, color){
    task.classList.toggle('selected');

    if(task.classList.contains('selected')){
        active = true;
        selectedColor = color;
        return selectedColor;
    } else {
        active = false;
    }
}

// Reset tasks (2)
function resetTasks(){
    const allTasks = document.querySelectorAll('.task__name');

    allTasks.forEach((item)=>{
        item.className = 'task__name';
    })
}

// Delete tasks
function deleteTasks(){
    const tasks = document.querySelectorAll('.task');

    tasks.forEach((item)=>{
        item.innerHTML = '';
        item.style.backgroundColor = 'white';
    })

    closePopup();
}

// Open  resetPop-up , returns the flex property
function openPopup(){
    popUp.style.display = 'flex';
}

// Close reset Pop-up.... elemennt will not display  - tasks reseeted
function closePopup(){
    popUp.style.display = 'none';
}
