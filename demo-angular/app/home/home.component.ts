import { Component, OnInit } from "@angular/core";
import { RatingDialog, RatingDialogOption } from 'nativescript-rating-dialog';
import * as  dialogs from 'tns-core-modules/ui/dialogs';

@Component({
    selector: "Home",
    moduleId: module.id,
    templateUrl: "./home.component.html"
})
export class HomeComponent implements OnInit {

    private ratingDialog: RatingDialog;

    constructor() {
        // Use the component constructor to inject providers.
        this.ratingDialog = new RatingDialog();
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    public show(): void {
        const option: RatingDialogOption = {
            title: "Title",
            icon: "favorite",
            android: {
                positiveButtonText: "Send",
                negativeButtonText: "Cancel",
                threshold: 3,
                onThresholdCleared: (dialog, rating, thresholdCleared) => {
                },
                onThresholdFailed: (dialog, rating) => {
                },
                onDialogDismiss: (rating) => {
                    if (rating < 3) {
                        console.log(`Negative Rate of ${rating} out of 5`);
                        alert(`Negative Rate of ${rating} out of 5`);
                    } else {
                        alert(`Positive Rate of ${rating} out of 5`);
                        console.log(`Positive Rate of ${rating} out of 5`);
                    }
                }
            },
            ios: {
                onPositiveButtonText: "Done",
                onNegativeButtonText: "Send Feedback",
                onPositiveRate: (rating) => {
                    alert(`Positive Rate of ${rating} out of 5`);
                    console.log('Positive', rating);
                },
                onNegativeRate: (rating) => {
                    alert(`Negative Rate of ${rating} out of 5`);
                    console.log('Negative', rating);
                },
                onDismiss: () => {
                    alert('Dismiss Rate');
                    console.log('Dismiss');
                }
            }
        };

        this.ratingDialog.show(option);
    }
}
