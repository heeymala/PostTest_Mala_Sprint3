//Button 1
const paragraf = document.getElementsByTagName('p');
const button1 = document.getElementById('buttonSatu');

button1.addEventListener('click', function(){
    for(var i=0; i<paragraf.length; i++){
        paragraf[i].style.backgroundColor = "orange"
    }
})

    
//Button 2
const button2 = document.getElementById('buttonDua');
button2.addEventListener('click',
    function(){
        button2.style.backgroundColor = "orange"
    })

button2.addEventListener('click',
    function(){
        button2.style.color = "white"
    })

//Button 3
const button3 = document.getElementById('buttonTiga');

button3.addEventListener('click', function(){
    for(var i=0; i<paragraf.length; i++){
        paragraf[i].style.fontFamily = "Calibri"
    }
})

button3.addEventListener('click', function(){
    for(var i=0; i<paragraf.length; i++){
        paragraf[i].style.color = "red"
    }
})

//Button 4
const button4 = document.getElementById('buttonEmpat');
button4.addEventListener('click', function(){
    for(var i=0; i<paragraf.length; i++){
        paragraf[i].style.fontSize = "25px"
    }
})

//Button 5
const container = document.getElementById('container');
const button5 = document.getElementById('buttonLima');
button5.addEventListener('click', function(){
    container.style.backgroundColor = "pink"
})

//Button 6
const button6 = document.getElementById('buttonEnam');
const h2 = document.createElement('h2');
const tulisan = document.createTextNode('Selamat Datang di Dojobox Indonesia!');
h2.appendChild(tulisan);
const sectionA = document.getElementById('a');
const p1 = document.getElementsByClassName('p1')[0];
button6.addEventListener('click', function(){
    sectionA.replaceChild(h2, p1);
})

//Button 7
const button7 = document.getElementById('buttonTujuh');
const listBaru = document.createElement('li');
const isiElemen = document.createTextNode('Mala');
listBaru.appendChild(isiElemen);
const penampungList = document.querySelector('#b ul');
const listAlif = penampungList.querySelector('li:nth-child(2)');


const elementRemove = document.getElementsByTagName('li')[0];
const sectionB = document.querySelector('ul');
button7.addEventListener('click', function(){
    penampungList.insertBefore(listBaru, listAlif);
})

button7.addEventListener('click', function(){
    sectionB.removeChild(elementRemove)
})

//Button 8
const judul = document.getElementById('judul');
const button8 = document.getElementById('buttonDelapan');
button8.addEventListener('click', function(){
    judul.innerHTML = 'Post Test'
})

//Button 9
const link = document.getElementsByTagName('a')[0];
const button9 = document.getElementById('buttonSembilan');
button9.addEventListener('click', function(){
    link.removeAttribute('href');

})

//Button 10
const button10 = document.getElementById('buttonSepuluh');
button10.addEventListener('click', function(){
    link.innerHTML = 'Post Test Oktavia Nirmala Afnelia'
})
button10.addEventListener('click', function(){
    link.setAttribute('href', 'https://github.com/heeymala/PostTest_Mala_Sprint3')
})



