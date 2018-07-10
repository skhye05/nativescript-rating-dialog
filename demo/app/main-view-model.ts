import { Observable } from 'tns-core-modules/data/observable';
import { RatingDialog } from 'nativescript-rating-dialog';

export class HelloWorldModel extends Observable {
  public message: string;
  private ratingDialog: RatingDialog;

  constructor() {
    super();

    this.ratingDialog = new RatingDialog();
    this.message = this.ratingDialog.message;
  }
}
