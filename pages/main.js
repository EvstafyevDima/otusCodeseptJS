const { I } = inject();

module.exports = {

  visit() {
    I.amOnPage('/')
    I.click( 'Да');
  },

  searchProduct(Product) {
    I.click("Открыть поиск")
    I.fillField('Искать в Жизньмарт', Product);
  },

  clickBasket() {
    I.click({xpath : "//div[@class = 'header__basket__icon empty']"})
  },

  clickToggle() {
    I.click({xpath : "//button[@class = 'top-line__toggle-navbar']"})
  },

}
