function navSelect(id){
    var container = document.getElementById(id);
    var nav = container.getElementsByClassName('nav')[0];
    var content = container.getElementsByClassName('content')[0];
    var navList = nav.getElementsByTagName('li');
    var contents = content.getElementsByTagName('li');
    var delBtn = container.getElementsByClassName('nav-index')[0];
    for(var i=0; i<navList.length; i++){
        navList[i].num = i;
        navList[i].onclick = function(){
            for(var j=0; j<navList.length; j++){
                navList[j].className = contents[j].className = this.num==j ? 'checked':'';
            }
        }
    }
    delBtn.onclick = function(){
        if(container.id == 'app1'){
            return
        }
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}


var num = 3;
function cloneEle(){
    var app1 = document.getElementById('app1');
    var a = app1.cloneNode(true);
    a.id = 'app' + num;
    a.getElementsByClassName('nav-index')[0].innerHTML = num;
    // a.getElementsByClassName('nav-index')[0].onclick = function(){
    //     this.parentNode.parentNode.removeChild(this.parentNode);
    // }
    app1.parentNode.appendChild(a);
    navSelect(a.id);
    num++;
}

function deleteEle(){
    console.log(this);
}

navSelect('app1');
navSelect('app2');