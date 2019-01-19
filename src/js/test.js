window.onload = main;

function main() {
    var oBtn = document.getElementById('btn1');
    oBtn.onclick = OnButton1;
}

function OnButton1() {
    var xhr = new XMLHttpRequest();
    //xhr.open('get', '/ajax', true);
    //xhr.send();

    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) { // 读取完成
            if (xhr.status == 200) {
                
                alert(xhr.responseText);
            }
        }
    }
}