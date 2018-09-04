import { AppiumDriver, Direction, SearchOptions } from "nativescript-dev-appium";
import { ImageOptions } from "nativescript-dev-appium/lib/image-options";
import { assert } from "chai";

export class Home {
    constructor(private _driver: AppiumDriver) { }

    loaded = async () => {
        const label = await this._driver.findElementByText('Home');
        // assert.isTrue(await label.isDisplayed());
        console.log("Home Loaded" + " loaded!");
    }

    showRatingDialog = async () => {
        const button = await this._driver.findElementByText('show', SearchOptions.exact);
        await button.tap();

        const isDialogShowCorrect = await this._driver.compareScreen('rating-dialog-show', 3, 10, ImageOptions.pixel);
        assert.isTrue(isDialogShowCorrect, `Image does NOT match! Please, refer rating-dialog-show to image.`);
    }

    rate = async () => {
        if (this._driver.isAndroid) {
            const ratingBar = await this._driver.findElementByXPath('//android.widget.RatingBar');
            await ratingBar.tap();
        } else {

        }

        const areRatingCorrect = await this._driver.compareScreen('rating-dialog-rate', 3, 10, ImageOptions.pixel);
        assert.isTrue(areRatingCorrect, `Image does NOT match! Please, refer rating-dialog-rate to image.`);
    }

    submit = async () => {
        if (this._driver.isAndroid) {
            const send = await this._driver.findElementByText('send', SearchOptions.exact);
            await send.click();
        } else {

        }

        const isSubmittingCorrect = await this._driver.compareScreen('rating-dialog-submit', 3, 10, ImageOptions.pixel);
        assert.isTrue(isSubmittingCorrect, `Image does NOT match! Please, refer rating-dialog-submit to image.`);
    }

    dismiss = async () => {
        const button = await this._driver.findElementByText('ok', SearchOptions.exact);
        await button.click();

        const isHomCorrect = await this._driver.compareScreen('home', 3, 10, ImageOptions.pixel);
        assert.isTrue(isHomCorrect, `Image does NOT match! Please, refer home to image.`);
    }

}