import { test, expect } from '@playwright/test';


test('GitHubExecise', async ({page}) =>
{

    const   context =   page.context();
    await   context.clearCookies();
    await   test.step('Go to signup page of "Github.com"', async() =>
    {
        await   page.goto('https://github.com');
        await   page.getByRole("link",{name:"Sign up"}).click();
        await   expect(page).toHaveURL('https://github.com/signup?ref_cta=Sign+up&ref_loc=header+logged+out&ref_page=%2F&source=header-home');
    });

    await   test.step('Fullfill all required fields', async() =>
    {
        await   page.locator('[id="email"]').fill('AlphaTesting@gmail.com', {timeout: 20000});
        await   page.locator('[id="password"]').fill('123456nguyenvan');
        await   page.locator('[id="login"]').fill('usernamenumber01', {timeout: 20000});
        await   page.locator('[class*="country-select-button"]').click();
        await   page.locator('span:text-is("American Samoa")').click();
        const   checkboxAgreed = page.locator('//input[contains(@data-target,"marketingConsentCheckbox")]');
        await   checkboxAgreed.check({timeout: 20000});
    });

    await   test.step('Click create account', async()=>
    {
        await   page.screenshot({path: "Beforestep3.png"});
        await   page.waitForTimeout(30000);
        await page.getByRole('button',{name: "Create account"}).click({timeout: 30000});
    })


    await   test.step('Check if we were navigated to the verifying page', async() => {
        await   expect(page.getByText('Verify your account')).toBeVisible();
    });

});
