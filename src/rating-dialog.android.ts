import { RatingDialogOption, AndroidRatingDialogFeedbackForm } from './rating-dialog.common';
import * as utils from "tns-core-modules/utils/utils";
import * as application from 'tns-core-modules/application';
import { Color } from 'tns-core-modules/color';

declare const com: any;
declare const android: any;

let RDClass = com.eljo.skhye05.ratingdialog.RatingDialog;

export class RatingDialog {

    private ratingDialog: any;

    constructor() {
    }

    public show(options: RatingDialogOption): void {

        const d = new com.eljo.skhye05.ratingdialog.RatingDialog.Builder(application.android.foregroundActivity)
            // Set Title
            .title(options.title)

            // Set title text color if exist
            .titleTextColor(options.textColor ? new Color(options.textColor).android : 0)

            // Set positive button text if exist
            .positiveButtonText(options.android ? options.android.positiveButtonText ? options.android.positiveButtonText : null : null)

            // Set positive button text color if exist
            .positiveButtonTextColor(options.android ? options.android.positiveButtonTextColor ? new Color(options.android.positiveButtonTextColor).android : 0 : 0)

            // Set negative button text if exist
            .negativeButtonText(options.android ? options.android.negativeButtonText ? options.android.negativeButtonText : null : null)

            // Set negative button text color if exist
            .negativeButtonTextColor(options.android ? options.android.positiveButtonTextColor ? new Color(options.android.negativeButtonTextColor).android : 0 : 0)

            // Set Icon if exist
            .icon(options.icon ? utils.ad.resources.getDrawableId(options.icon) : null)

            .threshold(options.android ? options.android.threshold ? options.android.threshold : 2 : 2)

            // Set Session if exist
            .session(options.android ? options.android.session ? options.android.session : 1 : 1)

            // Set rating container background color if exist
            .backgroundColor(options.backgroundColor ? new Color(options.backgroundColor).android : 0)

            // Set rating selected color if exist
            .ratingBarColor(options.android ? options.android.ratingBarColor ? new Color(options.android.ratingBarColor).android : 0 : 0)

            // Set rating background color if exist
            .ratingBarBackgroundColor(options.android ? options.android.ratingBarBackgroundColor ? new Color(options.android.ratingBarBackgroundColor).android : 0 : 0)

            // Set playstore link if exist
            .playstoreUrl(options.android ? options.android.playstoreUrl ? options.android.playstoreUrl : "" : "")

            // Set Form title
            .formTitle(options.android ? options.android.feedbackForm ? options.android.feedbackForm.formTitle ? options.android.feedbackForm.formTitle : null : null : null)

            // Set submit Button Text
            .formSubmitText(options.android ? options.android.feedbackForm ? options.android.feedbackForm.formSubmitText ? options.android.feedbackForm.formSubmitText : null : null : null)

            // Set Cancel Button Text
            .formCancelText(options.android ? options.android.feedbackForm ? options.android.feedbackForm.feedBackTextColor ? options.android.feedbackForm.cancelText : null : null : null)

            // Set Feedback Text Color
            .feedbackTextColor(options.android ? options.android.feedbackForm ? options.android.feedbackForm.feedBackTextColor ? new Color(options.android.feedbackForm.feedBackTextColor).android : 0 : 0 : 0)

            // Set Feedback Hitn Text if params exist
            .formHint(options.android ? options.android.feedbackForm ? options.android.feedbackForm.feedbackFormHint ? options.android.feedbackForm.feedbackFormHint : null : null : null)

            // Set onThresholdCleared if exist
            .onThresholdCleared(options.android ? (options.android.onThresholdCleared && typeof options.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingThresholdClearedListener({
                onThresholdCleared: options.android.onThresholdCleared
            }) : null : null)

            // Set onThresholdFailed if exist
            .onThresholdFailed(options.android ? (options.android.onThresholdFailed && typeof options.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingThresholdFailedListener({
                onThresholdFailed: options.android.onThresholdFailed
            }) : null : null)

            // Set onRatingSelected if exist
            .onRatingChanged(options.android ? (options.android.onRatingChanged && typeof options.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingDialogListener({
                onRatingSelected: options.android.onRatingChanged
            }) : null : null)

            // Set onFormSubmitted if exist
            .onRatingBarFormSumbit(options.android ? (options.android.onRatingBarFormSumbit && typeof options.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingDialogFormListener({
                onFormSubmitted: options.android.onRatingBarFormSumbit
            }) : null : null)

            // Build Rating Dialog
            .build();
        this.ratingDialog = d;

        // Show Dialog
        d.show();
    }

    public dismiss(): void {
        this.ratingDialog.dismiss();
    }
}
