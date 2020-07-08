const puppeter = require('puppeteer');
const cron = require("node-cron");


// cron.schedule("*/1200 * * * * *", () => {

// POWER BI
cron.schedule("*/3 * * * *", () => {

(async () => {
    console.log('Iniciada a Atualização do BI')
    const browser = await puppeter.launch({
        executablePath: "/usr/bin/google-chrome-stable",
        userDataDir: "/home/junior/.config/google-chrome/Default"
    });
    const dataAtual = new Date();
    const page = await browser.newPage();
    await page.goto('https://app.powerbi.com/groups/a7208dca-3731-457f-9c6c-b4266968aa45/reports/6599c6a7-973b-42ca-828b-cc515032812a/ReportSection');



    await page.waitFor('a[data-event-property="signin"]');
    await page.click('a[data-event-property="signin"]', {delay: 100});

    
    await page.waitFor('button[ng-click="$ctrl.showRelatedContentPane()"]');
    await page.click('button[ng-click="$ctrl.showRelatedContentPane()"]',  {delay: 100});


    await page.waitFor('button[class="refreshNow pbi-glyph pbi-glyph-refresh"]');
    await page.click('button[class="refreshNow pbi-glyph pbi-glyph-refresh"]',  {delay: 100});


    await page.waitFor('button[ng-click="$ctrl.runAction($ctrl.RefreshNow)"]');
    await page.click('button[ng-click="$ctrl.runAction($ctrl.RefreshNow)"]');

    console.log('Atualização realizada');
    console.log('Próxima Atualização em 3 Minutos');
})();
})


