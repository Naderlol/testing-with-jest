const { Builder, By, until } = require('selenium-webdriver');
require('geckodriver');

const fileUnderTest = 'file://' + __dirname.replace(/ /g, '%20') + '/../dist/index.html';
const defaultTimeout = 10000;
let driver;
jest.setTimeout(1000 * 60 * 5); // 5 minuter

// Det här körs innan vi kör testerna för att säkerställa att Firefox är igång
beforeAll(async () => {
console.log(fileUnderTest);
    driver = await new Builder().forBrowser('firefox').build();
    await driver.get(fileUnderTest);
});

// Allra sist avslutar vi Firefox igen
afterAll(async() => {
    await driver.quit();
}, defaultTimeout);

test('The stack should be empty in the beginning', async () => {
	let stack = await driver.findElement(By.id('top_of_stack')).getText();
	expect(stack).toEqual("n/a");
});

describe('Clicking "Pusha till stacken"', () => {
	it('should open a prompt box', async () => {
		let push = await driver.findElement(By.id('push'));
		await push.click();
		let alert = await driver.switchTo().alert();
		await alert.sendKeys("Bananer");
		await alert.accept();
	});
});

test('Knappen för att pusha till stacken ska lägga till ett element på stacken och uppdatera gränssnittet korrekt', async () => {
    // Klicka på knappen för att pusha till stacken
    let pushButton = await driver.findElement(By.id('push'));
    await pushButton.click();

    // Ange ett element i prompt-rutan
    let prompt = await driver.switchTo().alert();
    await prompt.sendKeys("Nycklar");
    await prompt.accept();

    // Kontrollera att det tillagda elementet visas på stacken
    let topOfStack =  driver.findElement(By.id('')).getText();
    expect(topOfStack).toEqual("");
});
