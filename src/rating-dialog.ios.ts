import { RatingDialogOption } from "./rating-dialog.common";
import { fromResource } from 'tns-core-modules/image-source';
import { Color } from "tns-core-modules/color/color";

declare let MBRateApp, MBRateUsInfo, UIImage, MBRateUs;

export class RatingDialog {

    private RateUS: any;


    constructor() {

        this.RateUS = new MBRateUs();
    }

    public show(options: RatingDialogOption): void {

        if (options.title) {
            this.RateUS.setTitle(options.title);
        }

        if (options.icon) {
            this.RateUS.setTitleImage(UIImage.imageNamed(options.icon));
        }

        if (options.textColor) {
            this.RateUS.setTextColor(new Color(options.textColor).ios);
        }

        if (options.backgroundColor) {
            this.RateUS.setBackgroundColor(new Color(options.backgroundColor).ios);
        }

        if (options.ios) {
            if (options.ios.subtitle) {
                this.RateUS.setSubtitle(options.ios.subtitle);
            }

            if (options.ios.onPositiveButtonColor) {
                this.RateUS.setPositiveButtonColor(new Color(options.ios.onPositiveButtonColor).ios);
            }

            if (options.ios.onNegativeButtonColor) {
                this.RateUS.setNegativeButtonColor(new Color(options.ios.onNegativeButtonColor).ios);
            }

            if (options.ios.positiveText) {
                this.RateUS.setPositive(options.ios.positiveText);
            }

            if (options.ios.negativeText) {
                this.RateUS.setNegative(options.ios.positiveText);
            }

            if (options.ios.onPositiveButtonText) {
                this.RateUS.setOnPositiveButtonText(options.ios.onPositiveButtonText);
            }

            if (options.ios.onNegativeButtonText) {
                this.RateUS.setOnNegativeButtonText(options.ios.onNegativeButtonText);
            }

            if (options.ios.emptyStarImage) {
                this.RateUS.setEmptyStarImage(UIImage.imageNamed(options.ios.emptyStarImage));
            }

            if (options.ios.fullStarImage) {
                this.RateUS.setFullStarImage(UIImage.imageNamed(options.ios.fullStarImage));
            }

            if (options.ios.dismissButtonColor) {
                this.RateUS.setDismissButtonColor(new Color(options.ios.dismissButtonColor).ios);
            }

            if (options.ios.itunesId) {
                this.RateUS.setItunesId(options.ios.itunesId);
            }
        }

        this.RateUS
            .showRateUsPositiveBlockNegativeBlockDismissBlock(
                rootVC(),
                options.ios ? (options.ios.onPositiveRate && typeof options.ios.onPositiveRate === 'function') ? options.ios.onPositiveRate : (rating) => { } : (rating) => { },
                options.ios ? (options.ios.onNegativeRate && typeof options.ios.onNegativeRate === 'function') ? options.ios.onNegativeRate : (rating) => { } : (rating) => { },
                options.ios ? (options.ios.onDismiss && typeof options.ios.onDismiss === 'function') ? options.ios.onDismiss : () => { } : () => { });

    }

    public dismiss(): void {

    }
}


const rootVC = function () {
    let appwindow = UIApplication.sharedApplication.keyWindow;
    return appwindow.rootViewController;
};
