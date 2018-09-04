import { AppiumDriver, createDriver, SearchOptions } from "nativescript-dev-appium";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";
import { assert } from "chai";

describe("sample scenario", () => {
    const defaultWaitTime = 5000;
    let driver: AppiumDriver;

    before(async () => {
        driver = await createDriver();
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

    it("Should Button Dialog", async () => {
        const button = await driver.findElementByText('show', SearchOptions.exact);
        await button.tap();

        const isDialogShowCorrect = await driver.compareScreen('rating-dialog-show', 3, 10, ImageOptions.pixel);
        assert.isTrue(isDialogShowCorrect, `Image does NOT match! Please, refer rating-dialog-show to image.`);
    });

    it("Should Rate", async () => {
        if (driver.isAndroid) {
            const ratingBar = await driver.findElementByXPath('//android.widget.RatingBar');
            await ratingBar.tap();
        } else {

        }

        const areRatingCorrect = await driver.compareScreen('rating-dialog-rate', 3, 10, ImageOptions.pixel);
        assert.isTrue(areRatingCorrect, `Image does NOT match! Please, refer rating-dialog-rate to image.`);
    });

    it("Should Submit", async () => {
        if (driver.isAndroid) {
            const send = await driver.findElementByText('send', SearchOptions.exact);
            await send.click();
        } else {

        }

        const isSubmittingCorrect = await driver.compareScreen('rating-dialog-submit', 3, 10, ImageOptions.pixel);
        assert.isTrue(isSubmittingCorrect, `Image does NOT match! Please, refer rating-dialog-submit to image.`);
    });

    it("Should Dismiss", async () => {
        const button = await driver.findElementByText('ok', SearchOptions.exact);
        await button.click();

        const isHomCorrect = await driver.compareScreen('home', 3, 10, ImageOptions.pixel);
        assert.isTrue(isHomCorrect, `Image does NOT match! Please, refer home to image.`);
    });
});