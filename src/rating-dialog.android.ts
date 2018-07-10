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

    public show(option: RatingDialogOption): void {


        const d = new com.eljo.skhye05.ratingdialog.RatingDialog.Builder(application.android.foregroundActivity)
            // Set Title
            .title(option.title)

            // Set title text color if exist
            .titleTextColor(option.titleTextColor ? new Color(option.titleTextColor).android : 0)

            // Set positive button text if exist
            .positiveButtonText(option.positiveButtonText ? option.positiveButtonText : null)

            // Set positive button text color if exist
            .positiveButtonTextColor(option.android ? option.android.positiveButtonTextColor ? new Color(option.android.positiveButtonTextColor).android : 0 : 0)

            // Set negative button text if exist
            .negativeButtonText(option.negativeButtonText ? option.negativeButtonText : null)

            // Set negative button text color if exist
            .negativeButtonTextColor(option.android ? option.android.positiveButtonTextColor ? new Color(option.android.negativeButtonTextColor).android : 0 : 0)

            // Set Icon if exist
            .icon(option.icon ? utils.ad.resources.getDrawableId(option.icon) : null)

            .threshold(option.android ? option.android.threshold ? option.android.threshold : 2 : 2)

            // Set Session if exist
            .session(option.android ? option.android.session ? option.android.session : 1 : 1)

            // Set rating container background color if exist
            .backgroundColor(option.backgroundColor ? new Color(option.backgroundColor).android : 0)

            // Set rating selected color if exist
            .ratingBarColor(option.android ? option.android.ratingBarColor ? new Color(option.android.ratingBarColor).android : 0 : 0)

            // Set rating background color if exist
            .ratingBarBackgroundColor(option.android ? option.android.ratingBarBackgroundColor ? new Color(option.android.ratingBarBackgroundColor).android : 0 : 0)

            // Set playstore link if exist
            .playstoreUrl(option.android ? option.android.playstoreUrl ? option.android.playstoreUrl : "" : "")

            // Set Form title
            .formTitle(option.android ? option.android.feedbackForm ? option.android.feedbackForm.formTitle ? option.android.feedbackForm.formTitle : null : null : null)

            // Set submit Button Text
            .formSubmitText(option.android ? option.android.feedbackForm ? option.android.feedbackForm.formSubmitText ? option.android.feedbackForm.formSubmitText : null : null : null)

            // Set Cancel Button Text
            .formCancelText(option.android ? option.android.feedbackForm ? option.android.feedbackForm.feedBackTextColor ? option.android.feedbackForm.cancelText : null : null : null)

            // Set Feedback Text Color
            .feedbackTextColor(option.android ? option.android.feedbackForm ? option.android.feedbackForm.feedBackTextColor ? new Color(option.android.feedbackForm.feedBackTextColor).android : 0 : 0 : 0)

            // Set Feedback Hitn Text if params exist
            .formHint(option.android ? option.android.feedbackForm ? option.android.feedbackForm.feedbackFormHint ? option.android.feedbackForm.feedbackFormHint : null : null : null)

            // Set onThresholdCleared if exist
            .onThresholdCleared(option.android ? (option.android.onThresholdCleared && typeof option.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingThresholdClearedListener({
                onThresholdCleared: option.android.onThresholdCleared
            }) : null : null)

            // Set onThresholdFailed if exist
            .onThresholdFailed(option.android ? (option.android.onThresholdFailed && typeof option.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingThresholdFailedListener({
                onThresholdFailed: option.android.onThresholdFailed
            }) : null : null)

            // Set onRatingSelected if exist
            .onRatingChanged(option.android ? (option.android.onRatingChanged && typeof option.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingDialogListener({
                onRatingSelected: option.android.onRatingChanged
            }) : null : null)

            // Set onFormSubmitted if exist
            .onRatingBarFormSumbit(option.android ? (option.android.onRatingBarFormSumbit && typeof option.android.onThresholdCleared === 'function') ? new com.eljo.skhye05.ratingdialog.RatingDialog.Builder.RatingDialogFormListener({
                onFormSubmitted: option.android.onRatingBarFormSumbit
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
