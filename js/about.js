
//paragrap slide
let p1 = document.querySelector('#p1'),
    p2 = document.querySelector('#p2'),
    btn1 = document.querySelector('#bt1'),
    btn2 = document.querySelector('#bt2'),
    pargs = document.querySelector('.pargs'),
    milliSeconds = 6000;

setTimeout(see, milliSeconds)

function see() {
    p1.className = 'going';
    p2.style.order='1'
    p1.style.order='2'
    p2.style.display = 'block';
    p2.className = 'insert';
    setTimeout(see2, milliSeconds)
}

function see2() {
    p2.className = 'going';
    p1.style.order='1'
    p2.style.order='2'
    p1.style.display = 'block'
    p1.className = 'insert';
    setTimeout(see, milliSeconds)
}
btn1.addEventListener('click', see)
btn2.addEventListener('click', see2)


//team
let team = [
    {
        img: 'img/m1.jpg',
        name: 'Mustafa Abubakar',
        skil: 'Student',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus obcaecati inventore nostrum, accusantium, nihil quisquam molestiae nam, aliquid eaque facere tempore minima tenetur mollitia alias. Sit deleniti doloribus quaerat tempora ratione itaque corporis inventore perferendis saepe est soluta, beatae enim illum quia dolores? Eaque aliquid quidem officia mollitia vel!'
    },
    {
        img: 'img/fgh.jpg',
        name: 'Abdulasis Ogle',
        skil: 'Student',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus obcaecati inventore nostrum, accusantium, nihil quisquam molestiae nam, aliquid eaque facere tempore minima tenetur mollitia alias. Sit deleniti doloribus quaerat tempora ratione itaque corporis inventore perferendis saepe est soluta, beatae enim illum quia dolores? Eaque aliquid quidem officia mollitia vel!'
    },
    {
        img: 'img/m1.jpg',
        name: 'Osman',
        skil: 'Student',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus obcaecati inventore nostrum, accusantium, nihil quisquam molestiae nam, aliquid eaque facere tempore minima tenetur mollitia alias. Sit deleniti doloribus quaerat tempora ratione itaque corporis inventore perferendis saepe est soluta, beatae enim illum quia dolores? Eaque aliquid quidem officia mollitia vel!'
    },
    {
        img: 'img/m1.jpg',
        name: 'Mowliid',
        skil: 'Student',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus obcaecati inventore nostrum, accusantium, nihil quisquam molestiae nam, aliquid eaque facere tempore minima tenetur mollitia alias. Sit deleniti doloribus quaerat tempora ratione itaque corporis inventore perferendis saepe est soluta, beatae enim illum quia dolores? Eaque aliquid quidem officia mollitia vel!'
    },
    {
        img: 'img/m1.jpg',
        name: 'Mohamed Warsame',
        skil: 'Student',
        detail: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis ducimus obcaecati inventore nostrum, accusantium, nihil quisquam molestiae nam, aliquid eaque facere tempore minima tenetur mollitia alias. Sit deleniti doloribus quaerat tempora ratione itaque corporis inventore perferendis saepe est soluta, beatae enim illum quia dolores? Eaque aliquid quidem officia mollitia vel!'
    },
]



//
const person_image = document.getElementById('person-image');
const person_name = document.getElementById('person-name');
const person_skil = document.getElementById('person-skil');
const person_detail = document.getElementById('person-detail');
const preButtom = document.getElementById('pre-buttom');
const nextButtom = document.getElementById('next-buttom');
var i = 0;

LoadData();
function LoadData() {
    
    person_image.src = team[i].img;
    person_name.textContent = team[i].name;
    person_skil.textContent = team[i].skil;
    person_detail.textContent = team[i].detail;
}



nextButtom.onclick = function () {
    i++;
    i = (i > team.length-1) ? 0 : i;
    LoadData();
}
    
preButtom.onclick = function () {
    i--;
    i = (i < 0) ? (team.length-1): i;
    LoadData();
}
    


