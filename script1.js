const puppeteer = require('puppeteer');

const URL_TEST = 'https://yoshimitzu87.github.io/just4test/';

async function testForTest() {
    console.log('Запуск браузера');
    const browser = await puppeteer.launch({ headless: false, slowMo: 100 });

    console.log('Создание новой вкладки в браузере');
    const page = await browser.newPage();

    console.log('Переход по ссылке');
    await page.goto(URL_TEST);

    console.log('Шаг 1: ввод логина');
    const loginInput = await page.$('body > form:nth-child(3) > p:nth-child(1) > input');
    await loginInput.type('login');

    console.log('Шаг 1: ввод пароля');
    const passwordInput = await page.$('body > form:nth-child(3) > p:nth-child(2) > input[type=password]');
    await passwordInput.type('password');

    console.log('Шаг 4: покликать по кнопке');
    const clickMode = await page.$('body > form:nth-child(4) > p > input[type=button]');
    await clickMode.click();

    console.log('Получение строки с результатом');
    const text = await page.$eval('body > form:nth-child(3) > p:nth-child(1) > input', element => element.textContent);

    console.log('Закрытие браузера');
    await browser.close();

}
testForTest();