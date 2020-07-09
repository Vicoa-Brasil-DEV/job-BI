const puppeter = require('puppeteer');
const cron = require("node-cron");
const { promisify } = require('util')

cron.schedule("*/5 * * * *", async ()=> {

    const sleep = promisify(setTimeout);

    let browser = await puppeter.launch({
        headless: true, 
        executablePath: "/usr/bin/google-chrome-stable",
        userDataDir: "/home/junior/.config/google-chrome/Default"
    });
    let page = await browser.newPage();
    try {

        console.log('Iniciada a Atualização do BI')
       
        await page.goto('https://app.powerbi.com/groups/a7208dca-3731-457f-9c6c-b4266968aa45/reports/6599c6a7-973b-42ca-828b-cc515032812a/ReportSection');
    
    
    
        await page.waitFor('a[data-event-property="signin"]');
        await page.click('a[data-event-property="signin"]');
    
        
        await page.waitFor('button[ng-click="$ctrl.showRelatedContentPane()"]');
        await page.click('button[ng-click="$ctrl.showRelatedContentPane()"]');
    
    
        await page.waitFor('button[class="refreshNow pbi-glyph pbi-glyph-refresh"]');
        await page.click('button[class="refreshNow pbi-glyph pbi-glyph-refresh"]');
    
    
        await page.waitFor('button[ng-click="$ctrl.runAction($ctrl.RefreshNow)"]');
        await page.click('button[ng-click="$ctrl.runAction($ctrl.RefreshNow)"]');
        await sleep(1000 * 20);

        console.log('Atualização realizada');
        console.log('Próxima Atualização em 5 Minutos');

    } catch(err) {
        console.log(err);
    } finally {
       await browser.close();
    }

    
})





