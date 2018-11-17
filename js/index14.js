'use strict';

var num = 1;
cloneEle();
cloneEle();
var oBtn = document.getElementById('copy-btn');
oBtn.onclick = function() { cloneEle(); };

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
        this.parentNode.parentNode.removeChild(this.parentNode);
    }
}

function cloneEle(){
    var app = document.getElementById('app');
    var a = app.cloneNode(true);
    a.id = 'app' + num;
    a.style.display = 'block';
    a.getElementsByClassName('nav-index')[0].innerHTML = num;
    app.parentNode.appendChild(a);
    navSelect(a.id);
    num++;
}