class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [];
    }

    get title() {
        return this._title;
    }

    get isCheckedOut() {
        return this._isCheckedOut;
    }

    get ratings() {
        return this._ratings;
    }

    set isCheckedOut(status) {
        this._isCheckedOut = status;
    }

    toggleCheckOutStatus() {
        if(this.isCheckedOut) {
            this.isCheckedOut(false);
        } else {
            this.isCheckedOut(true);
        }
    }

    getAverageRating() {
        // return this.ratings.reduce(accumulator, currentValue);
    }

}