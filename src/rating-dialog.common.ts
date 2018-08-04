
export interface RatingDialogOption {

  icon?: string;

  title: string;

  textColor?: string;

  backgroundColor?: string;

  android?: AndroidRatingDialogOption;

  ios?: IOSRatingDialogOption;
}

export interface AndroidRatingDialogOption {

  session?: number;

  threshold?: number;

  positiveButtonTextColor?: string;

  negativeButtonTextColor?: string;

  positiveButtonText: string;

  negativeButtonText?: string;

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

  subtitle?: string;

  onPositiveButtonColor?: string;

  onNegativeButtonColor?: string;

  onPositiveButtonText: string;

  onNegativeButtonText: string;

  positiveText?: string;

  negativeText?: string;

  textColor?: string;

  emptyStarImage?: string;

  fullStarImage?: string;

  dismissButtonColor?: string;

  itunesId?: string;

  onPositiveRate?: (rating: number) => void;

  onNegativeRate?: (rating: number) => void;

  onDismiss?: () => void;
}
