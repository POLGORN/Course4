// -0-
// Тут лежат наши вопросы и ответы
const quizData = [
    {
        question: "Для чего ты поступаешь на обучение?",
        a: "Для доп. образования",
        b: "Для первого высшего образования",
        c: "Для работы",
        point0: 0,
        point1: 1,
        point2: 2,

        place0: 1,
        place1: 5,
        place2: 9,
    },
    {   // Ветка доп. образования
        question: "Насколько усердно ты готов учиться?",
        a: "Очень усердно",
        b: "Средне",
        c: "Зависит от ВУЗ-а",
        point0: 0,
        point1: 1,
        point2: 2,

        place0: 1,
        place1: 2,
        place2: 3,
    },
    {
        question: "Твоя профессия должна быть профессией будущего?",
        a: "Конечно",
        b: "Не знаю",
        c: "Больше хочется актуальную",
        point0: 0,
        point1: 1,
        point2: 2,
    },
    {
        question: "Как долго хотел бы учиться?",
        a: "5 лет",
        b: "4.5 года",
        c: "4 года",
        point0: 2,
        point1: 3,
        point2: 4,
    },
    {
        question: "Какой больше привлекает?",
        a: "ПГНИУ",
        b: "ПНИПУ",
        c: "ПГГПУ",
        point0: 4,
        point1: 5,
        point2: 6,
    },
     {   // Ветка первого
        question: "Какой тип школьных предметов нравится больше?",
        a: "Технические",
        b: "Естественные",
        c: "Гуманитарные",
        point0: 2,
        point1: 3,
        point2: 4,

        place0: 1,
        place1: 2,
        place2: 3,
    },
    {
        question: "Ты любишь теорию?",
        a: "Да",
        b: "Нет",
        c: "И да и нет",
        point0: 6,
        point1: 7,
        point2: 8,
    },
    {
        question: "Ты любишь активную работу?",
        a: "Да",
        b: "Нет",
        c: "Не очень",
        point0: 8,
        point1: 9,
        point2: 10,
    },
    {
        question: "Ты усидчивый?",
        a: "Да",
        b: "Нет",
        c: "Не совсем",
        point0: 10,
        point1: 11,
        point2: 12,
    },
    {   // Ветка работы
        question: "Что самое важное в работе?",
        a: "Зарплата",
        b: "Престижность",
        c: "Интерес к ней",
        point0: 4,
        point1: 5,
        point2: 6,

        place0: 1,
        place1: 2,
        place2: 3,
    },
    {
        question: "Какая зарплата тебя устроит?",
        a: "От 20 до 40 тыс.р.",
        b: "От 40 до 60 тыс.р.",
        c: "От 60 тыс.р.",
        point0: 12,
        point1: 13,
        point2: 14,
    },
    {
        question: "Что по твоему более значимо и престижно?",
        a: "Строительство городов",
        b: "Политика",
        c: "Создание шедевров искусств",
        point0: 14,
        point1: 15,
        point2: 16,
    },
    {
        question: "Что из этого ближе тебе?",
        a: "Хакинг",
        b: "Рассуждения о вечном",
        c: "Забота о природе",
        point0: 16,
        point1: 17,
        point2: 18,
    }, 
];


// -1-
// Обьявляем переменные и вводим их в игру
const quiz = document.getElementById('quiz');
const answerElements = document.querySelectorAll('.answer');
const questionElement = document.getElementById('question');
const a_text = document.getElementById('a_text');
const b_text = document.getElementById('b_text');
const c_text = document.getElementById('c_text');
const submit = document.getElementById('submit');
// Счётчики
let currentQuiz = 0; // Какой сейчас вопрос
let score = 0; // Какое число под ответ
let time = 0; // Сколько осталось вопросов
let ans = [];
let que = [];
// Начинаем игру
loadQuiz();


// -2-
// Начинаем по очереди брать наши блоки вопрос+ответы
function loadQuiz(){
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionElement.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
}


// -3-
// Убираем все кружочки
function deselectAnswers(){
    answerElements.forEach(answerEl => answerEl.checked = false)
}
// Выбираем ответ и нажимаем в кружочек
function getSelected(){
    let answer;

    answerElements.forEach(answerEl => {
        if(answerEl.checked){
            answer = answerEl.id;
        }
    });

    return answer;
}

// -4-
// ЛОГИКА
submit.addEventListener('click', () => {
    const answer = getSelected();

    if(answer){
        if(answer === "a"){
            score += quizData[currentQuiz].point0;
            currentQuiz += quizData[currentQuiz].place0;
            ans.push(a_text.innerText);
            que.push(questionElement.innerText);
        }
        if(answer === "b"){
            score += quizData[currentQuiz].point1;
            currentQuiz += quizData[currentQuiz].place1;
            ans.push(b_text.innerText);
            que.push(questionElement.innerText);
        }
        if(answer === "c"){
            score += quizData[currentQuiz].point2;
            currentQuiz += quizData[currentQuiz].place2;
            ans.push(c_text.innerText);
            que.push(questionElement.innerText);
        }

        time++;

        if(time != 3){
            loadQuiz();
        }
        else{
            if(score === 0){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Инфокоммуникационные
                технологии и системы связи! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 1){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Дизайн! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 2){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Социология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 3){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Психология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 4){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Геофизика! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 5){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Реклама и связи с общественностью! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 6){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Механика и математическое моделирование! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 7){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПНИПУ Информационные системы и технологии! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 8){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГГПУ Педагогическое образование! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 9){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПНИПУ Теоретическая физика! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 10){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПНИПУ Прикладная информатика! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 11){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Программная инженерия! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 12){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Геодезия и дистанционное зондирование! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 13){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПНИПУ Химическая технология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 14){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Биотехнология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 15){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ История! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 16){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Журналистика! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 17){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Лингвистика! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 18){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Сервис! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 19){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Управление персоналом! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 20){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ПГНИУ Химическая технология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 21){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Градостроительство! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 22){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Политология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 23){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Изящные искусства! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 24){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Информационная безопасность! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 25){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Философия! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
            if(score === 26){
                quiz.innerHTML = `<h2>Ваш идеальный вуз: <br/> ВШЭ Экология! <br/> <br/> Ваши ответы: <br/> ${que[0]} <br/>- ${ans[0]}, <br/> ${que[1]} <br/>- ${ans[1]}, <br/> ${que[2]} <br/>- ${ans[2]}</h2>
            <button onclick="location.reload()">Пройти тест снова</button>
            `;
            }
        }
    }
});


// Что бы вопрос+ответы были не линейны, а выбирались как мы хотим
// Что бы была запись ЧТО ответил пользователь
//-------- Сменить картинку
// Изменить остановку не перебором всех вопросов, а отдельным блоком