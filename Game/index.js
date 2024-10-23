// Сколько у нас кликов и сколько у нас времени 
let clicks = 0;
const TIMEOUT = 5000;

// Берем в руки эти три штуки 
// const display = document.querySelector('#display');
// const button = document.querySelector('#button');
// const counter = document.querySelector('#counter');
// const records = document.querySelector('#records'); 


button.onclick = start; // Пусть нажатие вызовет функцию

function start() {
    const startTime = Date.now(); // Сохраним-ка время начала игры
    display.textContent = formatTime(TIMEOUT);

    // Приколюха в том что сначала прибавится а потом выведется 
    button.onclick = () => counter.textContent = clicks++;

    // Посчитай-ка мне разницу во времени между началом и сейчас
    const interval = setInterval(() => {
        const delta = Date.now() - startTime; // Сейчас минус начало
        display.textContent = formatTime(TIMEOUT - delta);
    }, 100); // Выполняться будет каждый 100 миллисекунды 


    // Когда время закончилось вырубаем обработчик кнопочки 
    const timeout = setTimeout(() => {
        button.onclick = null;
        display.textContent = 'Вот и сказочке конец';

        clearInterval(interval); // Очисти интервал
        clearTimeout(timeout); // И таймер тоже сделай тю-тю
    }, TIMEOUT);
}


function formatTime(ms) { // Хочется же что бы не просто 5000 выводилось
    return Number.parseFloat(ms / 1000).toFixed(2);
}