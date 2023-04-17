Feature('ToDo');

/*Scenario('Вход на сайт в городе Екатеринбург',  ({ I , mainPage}) => {


    mainPage.visit();
    I.see("Екатеринбург");

});


Scenario('Поиск товара по части слова',  ({ I , mainPage}) => {


    mainPage.visit();
    mainPage.searchProduct("Стейк рибай")
    I.see("Стейк Рибай из мраморной говядины");

});

Scenario('Поиск категории',  ({ I , mainPage}) => {


    mainPage.visit();
    I.see("Рекомендуем попробовать")


});
Scenario(' пустой корзины', async ({ I , mainPage}) => {


    mainPage.visit();
    mainPage.clickBasket();
    I.see("Ваша корзина ещё пуста");

});*/

Scenario('В корзине 1 товар', async ({ I , mainPage}) => {


    mainPage.visit();
    mainPage.clickToggle()
    I.click("О нас")
    I.see("Жизньмарт, давайте знакомиться");

});