
export interface RatingDialogOption {

  icon?: string;

  title: string;

  positiveButtonText: string;

  negativeButtonText?: string;

  titleTextColor?: string;

  backgroundColor?: string;

  android?: AndroidRatingDialogOption;

  iOS?: IOSRatingDialogOption;
}

export interface AndroidRatingDialogOption {

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

export interface AndroidRatingDialogFeedbackForm {

  formTitle: string;

  formSubmitText: string;

  cancelText: string;

  feedbackFormHint?: string;

  feedBackTextColor?: string;
}


export interface IOSRatingDialogOption {
  title: string;

}
