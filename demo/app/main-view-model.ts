import { Observable } from 'tns-core-modules/data/observable';
import { RatingDialog } from 'nativescript-rating-dialog';
import { RatingDialogOption } from 'nativescript-rating-dialog';
import * as  dialogs from 'tns-core-modules/ui/dialogs';

export class HelloWorldModel extends Observable {
  public message: string;
  private ratingDialog: RatingDialog;

  constructor() {
    super();
    this.ratingDialog = new RatingDialog();
  }

  public show(): void {
    const option: RatingDialogOption = {
      title: "Title",
      icon: "favorite",
      android: {
        positiveButtonText: "Maybe Later",
        negativeButtonText: "Never",
        threshold: 3,
        onThresholdCleared: (dialog, rating, thresholdCleared) => {
          setTimeout(() => {
            dialogs.alert({
              title: "Rating Info",
              message: `Positive Rate of ${rating} out of 5`,
              okButtonText: "Close"
            }).then(function () {
              dialog.dismiss();
            });
          }, 1500);
          console.log('Positive: ', rating);
        },
        onThresholdFailed: (dialog, rating) => {
          setTimeout(() => {
            dialogs.alert({
              title: "Rating Info",
              message: `Negative Rate of ${rating} out of 5`,
              okButtonText: "Close"
            }).then(function () {
              dialog.dismiss();
            });
          }, 1500);
          console.log('Negative: ', rating);
          // dialog.dismiss();
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
