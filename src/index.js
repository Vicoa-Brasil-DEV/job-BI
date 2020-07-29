const puppeter = require('puppeteer');
const cron = require("node-cron");
const { promisify } = require('util')

cron.schedule("*/1 * * * *", async ()=> {

    const sleep = promisify(setTimeout);

    let browser = await puppeter.launch({
        executablePath: "/usr/bin/google-chrome-stable",
        userDataDir: "/home/junior/.config/google-chrome/Default"
    });
    let page = await browser.newPage();
    try {

        console.log('Iniciada a Atualização do BI')
       
        await page.goto('https://app.powerbi.com/groups/3a6265fd-42bd-481d-8e81-ad593f226c00/reports/e446003a-b3bf-42c3-a682-b95664d780a7/ReportSectionf2f1a5a4b9c2d45c063b');
    
    
        // await browser.close();

        // await page.waitFor('a[data-event-property="signin"]');
        // await page.click('a[data-event-property="signin"]');
    
        
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





