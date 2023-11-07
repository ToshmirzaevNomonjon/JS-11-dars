let toDolist = [];
let tr = 1;
let allTask = 0;
let completeTask = 0;

function addTask() {
    let taskName = document.getElementById('taskInput').value;
    if (taskName !=''){
        let obj = {
            tartib: tr++,
            name:taskName,
            complete: false
        };
        toDolist.push(obj);
        chizish();
        allTask = toDolist.length;
        document.getElementById('allTask').innerText = allTask;
    }
}
function chizish() {
    let list = '';
    toDolist.forEach(function (item) {
        list += '<li class="list-group-item">' +
            '<input'  + (item.complete ? "checked" : "  ") +'onchange="completed(this)" type="checkbox" id=" '+item.tartib+' " class="mr-2"><label for="'+item.tartib+'">'+item.name+'</label>' +
        '</li>'
    });
    console.log(list);
    document.getElementById('list').innerHTML = list;
    document.getElementById("comlateTask").innerText = completeTask;
    let progressW = (completeTask * 100)  / allTask;
    document.getElementById("progress").style.width = progressW + "%";
}
function completed(input) {
    let searchId = input.getAttribute("id");
    let cheked = input.getAttribute("checked");
    toDolist.forEach(function (item,i) {
        if (item.tartib == searchId){
            toDolist[i].complete = item.complete ? false : true;
        }
    });
    console.log(cheked);
    if (cheked == null){
        completeTask++
    }else{
        completeTask--
    }
    chizish();
}









