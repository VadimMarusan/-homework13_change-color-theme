//Добавляем или изменяем значение:
//localStorage.setItem('name', 'vadim'); //теперь у вас в localStorage хранится ключ "myKey" cо значением "myValue"

//Выводим его в консоль:
//let localValue = localStorage.getItem('name');
//console.log(localValue); //"myValue"

let buttonSwitch = document.getElementById('change');

let body = document.getElementsByTagName('body')[0];
// let buttonCreateAccount = document.querySelector('.create-account');
// let greenBlock = document.querySelector('.form-green-block')
// let headerIcons = document.querySelector('.header-icons');




window.addEventListener('DOMContentLoaded', function () {
    if(localStorage.getItem('bgcolor') !== null) {
        let bgcolor = localStorage.getItem('bgcolor');
        body.style.background = bgcolor;
    }
    buttonSwitch.addEventListener("click", function () {
       body.style.background = "#EE82EE";
        if (localStorage.getItem('bgcolor') === null){
            localStorage.setItem('bgcolor','#EE82EE')
        }else {
            localStorage.removeItem('bgcolor');
            body.style.background = "red";

        }

            // buttonCreateAccount.style.background ="#800080";
        //
        // headerIcons.addEventListener('mouseover', function (e) {
        //     e.target.style.color="#EE82EE";
        // })
        // headerIcons.addEventListener('mouseout', function (e) {
        //     e.target.style.color="#fff";
        // })

    })




})