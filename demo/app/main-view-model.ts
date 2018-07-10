import { Observable } from 'tns-core-modules/data/observable';
import { RatingDialog } from 'nativescript-rating-dialog';
import { RatingDialogOption } from 'nativescript-rating-dialog';

export class HelloWorldModel extends Observable {
  public message: string;
  private ratingDialog: RatingDialog;

  constructor() {
    super();

    this.ratingDialog = new RatingDialog();
    this.message = "this.ratingDialog.message";
  }

  public show(): void {

    const option: RatingDialogOption = {
      title: "Moi",
      positiveButtonText: "Done",
      negativeButtonText: "LUI",
      android: {
        onThresholdCleared: (dialog, rating, thresholdCleared) => {
          console.log(rating);
        }
      }
    };

    this.ratingDialog.show(option);

  }
}
