import { Observable } from 'tns-core-modules/data/observable';
import { RatingDialog } from 'nativescript-rating-dialog';
import { RatingDialogOption } from 'nativescript-rating-dialog';

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
      android: {
        positiveButtonText: "Done",
        negativeButtonText: "Cancel",
        onThresholdCleared: (dialog, rating, thresholdCleared) => {
          console.log(rating);
        }
      },
      ios: {
        onPositiveButtonText: "Done",
        onNegativeButtonText: "Send Feedback",
        onPositiveRate: (rating) => {
          console.log('Positive', rating);
        },
        onNegativeRate: (rating) => {
          console.log('Negative', rating);
        },
        onDismiss: () => {
          console.log('Dismiss');
        }
      }
    };

    this.ratingDialog.show(option);
  }
}
