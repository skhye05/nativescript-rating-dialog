import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { assert } from "chai";
import { Home } from "./home";

describe("rating-dialog scenario", () => {
    let driver: AppiumDriver,
        home: Home;
        
    before(async () => {
        driver = await createDriver();
        home = new Home(driver);
    });

    after(async () => {
        await driver.quit();
        console.log("Quit driver!");
    });

    afterEach(async function () {
        if (this.currentTest.state === "failed") {
            await driver.logTestArtifacts(this.currentTest.title);
        }
    });

    after(async () => {
        await driver.quit();
    });

    it("should show dialog", async () => {
        await home.loaded();
        await home.showRatingDialog();
    });

    it("Should Rate", async () => {
        await home.rate();
    });

    it("Should Submit", async () => {
        await home.submit();
    });

    it("Should Dismiss", async () => {
        await home.dismiss();
    });

});