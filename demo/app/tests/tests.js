var RatingDialog = require("nativescript-rating-dialog").RatingDialog;
var ratingDialog = new RatingDialog();

describe("greet function", function() {
    it("exists", function() {
        expect(ratingDialog.show).toBeDefined();
    });
});