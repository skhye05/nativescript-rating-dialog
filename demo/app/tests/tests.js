var RatingDialog = require("nativescript-rating-dialog").RatingDialog;
var ratingDialog = new RatingDialog();

describe("greet function", function() {
    it("exists", function() {
        expect(ratingDialog.greet).toBeDefined();
    });

    it("returns a string", function() {
        expect(ratingDialog.greet()).toEqual("Hello, NS");
    });
});