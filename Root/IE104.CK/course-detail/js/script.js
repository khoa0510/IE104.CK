// JavaScript Document

document.getElementById("join").onclick = function() {
	window.open("../learn/Bai1.html","_self");
}

const Days=["Chủ nhật", "Thứ 2", "Thứ 3", "Thứ 4", "Thứ 5", "Thứ 6", "Thứ 7"];

function send_comment() {
    var obj = {username:document.getElementById("username"), time:new Date(), des:document.getElementById("des")};
    
    
    var cmt = {main:document.getElementById("new"), username:document.getElementById("nusername"), time:document.getElementById("ntime"), des:document.getElementById("ndes")};
    if (obj.username.value==null||obj.username.value=="")
    {
        obj.username.focus();
    }
    else if (obj.des.value==null||obj.des.value=="")
    {
        obj.des.focus();
    }
    else{
        cmt.username.innerText=obj.username.value;
        cmt.time.innerText=("0" + obj.time.getHours()).slice(-2)+":"+("0" + obj.time.getMinutes()).slice(-2)+" "+Days[obj.time.getDay()]+" ngày "+obj.time.getDate()+"/"+obj.time.getMonth()+"/"+obj.time.getFullYear();
        cmt.des.innerText=obj.des.value;
        cmt.main.style.display="block";
    }
}

document.getElementById("send").onclick = function() {
    send_comment();
}