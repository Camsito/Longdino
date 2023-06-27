'use strict'

const menuToggle = document.querySelector('.menu-toggle');
const bxMenu = document.querySelector('.bx-menu');
const bxX = document.querySelector('.bx-x');

const navBar = document.querySelector('.navbar');

// --- open menu ---

bxMenu.addEventListener('click', (e)=> {
    if(e.target.classNameList.contains('bx-menu')){
        navBar.classNameList.add('show-navbar');
        bxMenu.classNameList.add('hide-bx');
        bxX.classNameList.add('show-bx');
    }
})

// --- close menu ---

bxX.addEventListener('click', (e)=> {
    if(e.target.classNameList.contains('bx-x')){
        navBar.classNameList.remove('show-navbar');
        bxMenu.classNameList.remove('hide-bx');
        bxX.classNameList.remove('show-bx');
    }
})