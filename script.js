//создаем скролл к элементу
document.getElementById('choose-pizza').onclick = function () {
    document.getElementsByClassName('products')[0].scrollIntoView({behavior: "smooth"});
}

let productInput = document.getElementById('product-input');

//при нажатии добавить в корзину название товара будет размещаться в нашу форму
let addToCardButtons = document.getElementsByClassName('btn-add-to-card');

//создаем цикл для проверки кнопок
for (let i = 0; i < addToCardButtons.length; i++) {
    addToCardButtons[i].onclick = function (e) {
        productInput.value = e.target.parentElement.previousElementSibling.previousElementSibling.innerText;
        document.getElementsByClassName('order')[0].scrollIntoView({behavior: "smooth"});
    }
}

//делаем валидацию формы для проверки заполнения полей
document.getElementById('create-order').onclick = function () {
    let addressInput = document.getElementById('address-input');
    let phoneInput = document.getElementById('phone-input');
    if (!productInput.value) {
        alert('Заполните пиццу');
        return;
    }
    if (!addressInput.value) {
        alert('Заполните адрес');
        return;
    }
    if (!phoneInput.value) {
        alert('Заполните телефон');
        return;
    }

    alert('Спасибо за заказ!');

    //удаляем значение после нажатия кнопки
    productInput.value = "";
    addressInput.value = "";
    phoneInput.value = "";
}