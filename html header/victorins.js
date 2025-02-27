// Переменная для хранения правильных ответов и отслеживания количества ответов
let correctAnswers = 0;
let answeredQuestions = 0; // Отслеживание количества ответов

// Массив с правильными ответами для каждого вопроса (индекс соответствует номеру вопроса)
const correctAnswersList = [1, 1, 1, 1, 1]; // Здесь нужно указать, какой ответ правильный для каждого вопроса (по порядку)

function showAnswer(button, isCorrect, questionNumber) {
    // Проверка на уже выбранный ответ
    if (button.classList.contains('selected')) {
        return; // Если ответ уже выбран, ничего не делаем
    }

    // Добавляем класс для выделения выбранной кнопки
    button.classList.add('selected');

    // Если ответ правильный, увеличиваем счетчик
    if (isCorrect) {
        correctAnswers++;
    }

    // Изменяем фон кнопки на розовый и оставляем текст черным
    button.style.backgroundColor = "pink"; // Для выбранного ответа
    button.style.color = "black"; // Текст остается черным

    // Деактивируем остальные кнопки для этого вопроса
    const buttons = button.parentElement.querySelectorAll('.answer-button');
    buttons.forEach(btn => {
        btn.disabled = true; // Отключаем остальные кнопки
    });

    // Увеличиваем количество ответов
    answeredQuestions++;

    // Если все вопросы отвечены, активируем кнопку для подведения итогов
    if (answeredQuestions === 5) {
        document.querySelector('.btn-submit').disabled = false;
    }
}

// Функция для отображения результатов
function showResults() {
    // Создадим строку с результатами
    let resultMessage = `Ви правильно відповіли на ${correctAnswers} з 5!`;
    
    // Покажем результаты в модальном окне
    alert(resultMessage);

    // Сброс результата для следующего раунда
    correctAnswers = 0;
    answeredQuestions = 0;

    // Возвращаем фон кнопок в исходное состояние и активируем их для следующего раунда
    const allButtons = document.querySelectorAll('.answer-button');
    allButtons.forEach(btn => {
        btn.classList.remove('selected');
        btn.disabled = false; // Снова активируем кнопки
        btn.style.backgroundColor = ''; // Сбрасываем фон
        btn.style.color = ''; // Сбрасываем цвет текста
    });

    // Скрываем все ответы
    const allAnswers = document.querySelectorAll('.answer');
    allAnswers.forEach(answer => {
        answer.style.display = 'none';
    });

    // Отключаем кнопку для подведения итогов, пока все вопросы не будут отвечены
    document.querySelector('.btn-submit').disabled = true;
}
