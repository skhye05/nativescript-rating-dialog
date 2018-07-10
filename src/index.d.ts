
export declare class RatingDialog {

  constructor();

  public show(option: RatingDialogOption): Promise<any>;

  public dismiss(): void;

}

export declare interface RatingDialogOption {

  icon?: string;

  title: string;

  positiveButtonText: string;

  negativeButtonText?: string;

  titleTextColor?: string;

  backgroundColor?: string;

  android?: AndroidRatingDialogOption;

  iOS?: IOSRatingDialogOption;
}

export declare interface AndroidRatingDialogOption {

  session?: number;

  threshold?: number;

  positiveButtonTextColor?: string;

  negativeButtonTextColor?: string;

  ratingBarColor?: string;

  ratingBarBackgroundColor?: string;

  playstoreUrl?: string;

  feedbackForm?: AndroidRatingDialogFeedbackForm;

  onThresholdCleared?: (ratingDialog: any, rating: number, thresholdCleared: boolean) => void;

  onThresholdFailed?: (ratingDialog: any, rating: number, thresholdCleared: boolean) => void;

  onRatingChanged?: (rating: number, thresholdCleared: boolean) => void;

  onRatingBarFormSumbit?: (feedback: string) => void;

}

export declare interface AndroidRatingDialogFeedbackForm {

  formTitle: string;

  formSubmitText: string;

  cancelText: string;

  feedbackFormHint?: string;

  feedBackTextColor?: string;
}

export declare interface IOSRatingDialogOption {

  positiveButtonBackgroundColor?: string;

  negativeButtonBackgroundColor?: string;
}