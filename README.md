# Nativescript Rating Dialog

[![Build Status][build-status]][build-url]

[build-status]:https://travis-ci.org/skhye05/nativescript-rating-dialog.svg?branch=master
[build-url]:https://travis-ci.org/skhye05/nativescript-rating-dialog


![Screenshot of iOS](https://raw.githubusercontent.com/skhye05/NativeScript-Rating-Dialog/master/ios.gif =250x700)

![Screenshot of Android](https://raw.githubusercontent.com/skhye05/NativeScript-Rating-Dialog/master/android.gif)

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

ratingDialog.show(option);
```

## API

### Rating Dialog Option
    
| Property            | Type                        | Description                                      |
| ------------------- | --------------------------- | ------------------------------------------------ |
| icon                | `string`                    | Set icon (use app icon as default) `(optional)`. |
| title               | `string`                    | Set title                                        |
| textColor           | `string`                    | Set title text color `(optional)`                |
| backgroundColor     | `string`                    | Set background color `(optional)`                |
| android             | `AndroidRatingDialogOption` | Set android options `(optional)`                 |
| ios                 | `IOSRatingDialogOption`     | Set iOS options `(optional)`                     |

### Android Rating Dialog Option
    
| Property                 | Type                                  | Description                                         |
| ------------------------ | ------------------------------------- | --------------------------------------------------- |
| threshold                | `number`                              | Set threshold (number of rating) to trigger the feedback `(default is 2)`|
| positiveButtonTextColor  | `string`                              | Set positive button text color `(optional)`         |
| negativeButtonTextColor  | `string`                              | Set negative buttonText color `(optional)`          |
| positiveButtonText       | `string`                              | Set positive button text                         |
| negativeButtonText       | `string`                              | Set negative button text `(optional)`            |
| ratingBarColor           | `string`                              | Set rating bar color `(optional)`                     |
| ratingBarBackgroundColor | `string`                              | Set rating bar background color `(optional)`           |
| playstoreUrl             | `string`                              | Set playstore url (to redirect user to the app on app store) `(optional)` |
| feedbackForm             | `AndroidRatingDialogFeedbackForm`     | Set feedback form options `(optional)`                       |
| onThresholdCleared (ratingDialog: any, rating: number, thresholdCleared: boolean)  | `Callback Function`                   | Set onThresholdCleared callback which fired when your rating score is greater than the threshold. (override the default redirection to Google Play) `(optional)`                 |
| onThresholdFailed (ratingDialog: any, rating: number, thresholdCleared: boolean) | `Callback Function`                   | Set onThresholdFailed callback which fired when your rating score is less than the threshold. (use when you want to show your custom feedback form) `(optional)`                  |
| onRatingChanged (rating: number, thresholdCleared: boolean)  | `Callback Function`                   | Set onRatingChanged callback which fires when the rating changed `(optional)`                    |
| onRatingBarFormSumbit (feedback: string)   | `Callback Function`                   | Set onRatingBarFormSumbit callback which fires when the rating is submitted `(optional)`              |
    

### Android RatingDialog Feedback Form
    
| Property            | Type                        | Description                           |
| ------------------- | --------------------------- | ------------------------------------- |
| formTitle           | `string`                    | Set form title                        |
| formSubmitText      | `string`                    | Set form submit button text           |
| cancelText          | `string`                    | Set cancel button text                |
| feedbackFormHint    | `string`                    | Set feedback form hint `(optional)`   |
| feedBackTextColor   | `string`                    | Set feedBack text color `(optional)`  |


### iOS Rating Dialog Option
    
| Property                 | Type                                  | Description                                         |
| ------------------------ | ------------------------------------- | --------------------------------------------------- |
| subtitle                 | `number`                              | Set subtitle `(optional)` `(default is: "Please rate your experience")`                       |
| onPositiveButtonColor    | `string`                              | Set positive button color `(optional)`              |
| onNegativeButtonColor    | `string`                              | Set negative button color `(optional)`              |
| onPositiveButtonText     | `string`                              | Set positive button text `(optional)`               |
| onNegativeButtonText     | `string`                              | Set negative button text `(optional)`               |
| positiveText             | `string`                              | Set positive text `(optional)` `(default is: "Awesome!")`                       |
| negativeText             | `string`                              | Set negative text `(optional)` `(default is: "Darn. we should have been better.")`                      |
| textColor                | `string`                              | Set tex color `(optional)`                          |
| emptyStarImage           | `string`                              | Set name of the empty star image resource `(optional)`|
| fullStarImage            | `string`                              | Set name of the full star image resource `(optional)` |
| dismissButtonColor       | `string`                              | Set dismiss button color `(optional)`                 |
| itunesId                 | `string`                              | Set itunesId `(optional)`                             |
| onPositiveRate (rating: number) | `Callback Function`            | Set onPositiveRate callback which fires when the user chose more than 3 stars and click the rate `(optional)` |
| onNegativeRate (rating: number) | `Callback Function`            | Set onNegativeRate callback which fires when the user chose less than 4 stars and click the rate `(optional)`|
| onDismiss ()             | `Callback Function`                   | Set onDismiss callback which fires when the user dismissed that screen without choosing anything `(optional)` |

## Author

Jonathan Mayunga, mayunga.j@gmail.com

## Credits

For Android we're using the [Smart App Rate by Codemy](https://github.com/comedybrainsout/smart-app-rate),
and for iOS [MBRateApp by MatiBot](https://github.com/MatiBot/MBRateApp).

## License

Apache License Version 2.0, January 2004
