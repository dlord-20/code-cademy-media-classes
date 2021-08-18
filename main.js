class Media {
    constructor(title) {
        this._title = title;
        this._isCheckedOut = false;
        this._ratings = [2,0];
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
            this._isCheckedOut = false;
        } else {
            this._isCheckedOut = true;
        }
    }

    getAverageRating() {
        const reducer = (accumulator, currentValue) => {
            accumulator + currentValue;
            console.log(accumulator);
            console.log(currentValue);
        }

        let aveRating = this.ratings.reduce((currentSum, rating) => currentSum + rating, 0);
        aveRating = aveRating/this.ratings.length;
        return aveRating;
    }

    addRating(newRating) {
        this._ratings.push(newRating);
    }

}

class Book extends Media {
    constructor(title, author, pages) {
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author() {
        return this._author;
    }

    get pages() {
        return this._pages;
    }

}

class Movie extends Media {
    constructor(title, director, runTime) {
        super(title);
        this._director = director;
        this._runtime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runtime;
    }
}



//Test Media Class

const outlet = new Media('Music Title');
console.log(outlet.title);
outlet.addRating(6);
console.log(outlet.getAverageRating());
outlet.toggleCheckOutStatus();
console.log(outlet.isCheckedOut);

//Test Book Class

const historyOfEverything = new Book('A Short History of Nearly Everything', 'Bill Bryson', 544);
historyOfEverything.toggleCheckOutStatus();
console.log(historyOfEverything.isCheckedOut);
historyOfEverything.addRating(5);
historyOfEverything.addRating(4);
historyOfEverything.addRating(2);
console.log(historyOfEverything.getAverageRating());

//Test Movie

const speed = new Movie('Speed', 'Jan de Bont', 116);
speed.toggleCheckOutStatus();
console.log(speed.isCheckedOut);
speed.addRating(1);
speed.addRating(1);
speed.addRating(5);
console.log(speed.getAverageRating());




