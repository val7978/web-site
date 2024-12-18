function validateForm() {
    const form = document.getElementById('callbackForm');

    // Проверка валидности формы
    if (!form.checkValidity()) {
        alert("Пожалуйста, заполните все обязательные поля корректно.");
        return false; // Останавливаем отправку формы
    }

    // Если все проверки пройдены, отправляем форму
    alert("Форма успешно отправлена!");
    return true;
}

document.getElementById('submit-button').addEventListener('click', function(event) {
    event.preventDefault(); // Предотвращаем отправку формы

    // Получаем значения полей
    const name = document.getElementById('name').value.trim();
    const birthdate = document.getElementById('birthday').value;
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const comment = document.getElementById('comment').value.trim();
    const paymentMethod = document.getElementById('payment').value;

    // Валидация
    let valid = true;
    let errorMessage = '';

    if (name === '') {
        valid = false;
        errorMessage += 'Имя не может быть пустым.\n';
    }

    if (birthday === '') {
        valid = false;
        errorMessage += 'Дата рождения не может быть пустой.\n';
    }

    if (email === '' || !validateEmail(email)) {
        valid = false;
        errorMessage += 'Введите корректный E-mail.\n';
    }

    if (phone === '') {
        valid = false;
        errorMessage += 'Телефон не может быть пустым.\n';
    }

    if (!valid) {
        alert(errorMessage); // Показываем сообщение об ошибках
        return; // Выход из функции, если есть ошибки
    }

    // Если все поля валидны, можно отправить форму
    alert(`Имя: ${name}\nДата рождения: ${birthdate}\nE-mail: ${email}\nТелефон: ${phone}\nКомментарий: ${comment}\nСпособ оплаты: ${paymentMethod}`);
    // Здесь можно добавить код для отправки формы на сервер
});

// Функция для проверки корректности email
function validateEmail(email) {
    const re = /^[^s@]+@[^s@]+.[^s@]+$/;
    return re.test(String(email).toLowerCase());
}

const elem = document.getElementById("text-title");
elem.style.color = "rgba(255, 212, 41, 1.00)";

window.onload = function() {
    const folderText = document.querySelector('.folder p');
    folderText.style.fontSize = '20px'; // Увеличиваем размер шрифта
    folderText.style.color = 'black'; // Изменяем цвет текста на оранжевый
};

