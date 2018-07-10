# Nativescript Rating Dialog

## Installation

```javascript
tns plugin add nativescript-rating-dialog
```

## Usage 
	
```typescript
import { RatingDialog, RatingDialogOption } from 'nativescript-rating-dialog';

let ratingDialog = new RatingDialog();

const option: RatingDialogOption = {
    title: "Title",
    positiveButtonText: "Done",
    negativeButtonText: "Cancel",
    android: {
        onThresholdCleared: (dialog, rating, thresholdCleared) => {
          console.log(rating);
        }
    }
};

ratingDialog.show(option);
```

## API

Describe your plugin methods and properties here. See [nativescript-feedback](https://github.com/EddyVerbruggen/nativescript-feedback) for example.

## Rating Dialog Option
    
| Property            | Type                        | Description                                      |
| ------------------- | --------------------------- | ------------------------------------------------ |
| icon                | `string`                    | Set icon (use app icon as default) `(optional)`. |
| title               | `string`                    | Set title                                        |
| positiveButtonText  | `string`                    | Set positive button text                         |
| negativeButtonText  | `string`                    | Set negative button text `(optional)`              |
| titleTextColor      | `string`                    | Set title text color `(optional)`                  |
| backgroundColor     | `string`                    | Set background color `(optional)`                 |
| android             | `AndroidRatingDialogOption` | Set android options `(optional)`                 |
| iOS                 | `IOSRatingDialogOption`     | Set iOS options `(optional)`                     |

## Android Rating Dialog Option
    
| Property                 | Type                                  | Description                                         |
| ------------------------ | ------------------------------------- | --------------------------------------------------- |
| threshold                | `number`                              | Set threshold (number of rating) to trigger the feedback `(default is 2)`|
| positiveButtonTextColor  | `string`                              | Set positive button text color `(optional)`         |
| negativeButtonTextColor  | `string`                              | Set negative buttonText color `(optional)`          |
| ratingBarColor           | `string`                              | Set rating bar color `(optional)`                     |
| ratingBarBackgroundColor | `string`                              | Set rating bar background color `(optional)`           |
| playstoreUrl             | `string`                              | Set playstore url (to redirect user to the app on app store) `(optional)` |
| feedbackForm             | `AndroidRatingDialogFeedbackForm`     | Set feedback form options `(optional)`                       |
| onThresholdCleared       | `Callback Function`                   | Set onThresholdCleared callback which fired when your rating score is greater than the threshold. (override the default redirection to Google Play) `(optional)`                 |
| onThresholdFailed        | `Callback Function`                   | Set onThresholdFailed callback which fired when your rating score is less than the threshold. (use when you want to show your custom feedback form) `(optional)`                  |
| onRatingChanged          | `Callback Function`                   | Set onRatingChanged callback which fires when the rating changed `(optional)`                    |
| onRatingBarFormSumbit    | `Callback Function`                   | Set onRatingBarFormSumbit callback which fires when the rating is submitted `(optional)`              |
    

## Android RatingDialog Feedback Form
    
| Property            | Type                        | Description                           |
| ------------------- | --------------------------- | ------------------------------------- |
| formTitle           | `string`                    | Set form title                        |
| formSubmitText      | `string`                    | Set form submit button text           |
| cancelText          | `string`                    | Set cancel button text                |
| feedbackFormHint    | `string`                    | Set feedback form hint `(optional)`   |
| feedBackTextColor   | `string`                    | Set feedBack text color `(optional)`  |


## Future Works

- Add Rating Dialog For iPhone

## License

Apache License Version 2.0, January 2004
