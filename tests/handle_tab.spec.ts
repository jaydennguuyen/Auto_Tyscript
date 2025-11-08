import  {chromium} from "playwright";

(async() =>
{
    const   browser = await chromium.launch({headless: false});
    const   context = await browser.newContext({viewport:   {width: 1200,  height: 720} });
    const   page = await    context.newPage();
    await   page.goto("http://github.com");

    const   page1 = await   context.newPage();
    await   page1.goto('https://www.youtube.com/');

    



})
