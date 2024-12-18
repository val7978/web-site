javascriptdocument.getElementById("waterOrderForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    const errorDiv = document.getElementById("errorMessages");
    errorDiv.innerHTML = '';

    const name = document.getElementById("name").value.trim();
    const sername = document.getElementById("sername").value.trim();
    const datatime = document.getElementById("datatime").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();

    let errors = [];

    if (!name) errors.push("Пожалуйста, введите ваше имя.");
    if (!sername) errors.push("Пожалуйста, введите вашу фамилию.");
    if (!datatime) errors.push("Пожалуйста, выберите дату и время.");
    if (!email) errors.push("Пожалуйста, введите ваш email.");
    if (!phone) errors.push("Пожалуйста, введите ваш телефон.");

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (email && !emailPattern.test(email)) {
        errors.push("Пожалуйста, введите корректный email.");
    }

    // Регулярное выражение для проверки формата телефона (пример: +7 (999) 999-99-99)
    const phonePattern = /^\+7 \(d{3}\) d{3}-d{2}-d{2}$/;
    if (phone && !phonePattern.test(phone)) {
        errors.push("Пожалуйста, введите корректный номер телефона в формате +7 (999) 999-99-99.");
    }

    // Если есть ошибки, выводим их
    if (errors.length > 0) {
        errors.forEach(error => {
            const p = document.createElement("p");
            p.textContent = error;
            errorDiv.appendChild(p);
        });
    } else {
        // Здесь можно добавить код для отправки формы
        alert("Форма успешно отправлена!");
        // Например, через fetch или XMLHttpRequest
    }
});