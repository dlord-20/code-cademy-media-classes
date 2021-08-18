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
        if(newRating > 0 && newRating < 6) {
            this._ratings.push(newRating);
        } else {
            console.log('Invalid input: Number must be between 1 and 5');
        }
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
        this._movieCast = [];
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runtime;
    }

    get movieCast() {
        return this._movieCast;
    }

    addMovieCast(castMember) {
        this._movieCast.push(castMember);
    }
}

class CD extends Media {
    constructor(title, artist) {
        super(title);
        this._artist = artist;
        this._songTitles = [];
    }

    get artist() {
        return this._artist;
    }

    get songTitles() {
        return this._songTitles;
    }

    addSongTitles(song) {
        this._songTitles.push(song);
    }

    shuffle() {
        let tempArray = this._songTitles;
        let newOrder = [];
        //Shuffles new array randomly
        do {
            let randNum = Math.floor(Math.random() * tempArray.length);
            newOrder.push(tempArray[randNum]);
            tempArray.splice(randNum, 1);
        } while(tempArray.length > 0);

        newOrder = this._songTitles.sh
    }

}

class Catalog {
    constructor() {
        this._albums = [];
        this._movies = [];
        this._books = [];
    }

    get albums() {
        return this._albums;
    }

    get movies() {
        return this._movies;
    }

    get books() {
        return this._books;
    }

    addAlbum(album) {
        if(album instanceof CD) {
            this._albums.push(album);
        } else {
            console.log('Incorrect input: Must be of class CD')
        }
    }

    addMovie(movie) {
        if(movie instanceof Movie) {
            this._movies.push(movie);
        } else {
            console.log('Incorrect input: Must be of class Movie')
        }
    }

    addBook(book) {
        if(book instanceof Book) {
            this._books.push(book);
        } else {
            console.log('Incorrect input: Must be of class Book')
        }
    }

    print() {
        console.log('Albums:')
        for(let i = 0; i < this._albums.length; i++) {
            console.log(`   ${i + 1}: ${this._albums[i].title}`)
        }
        console.log('Movies:')
        for(let i = 0; i < this._movies.length; i++) {
            console.log(`   ${i + 1}: ${this._movies[i].title}`)
        }
        console.log('Books:')
        for(let i = 0; i < this._books.length; i++) {
            console.log(`   ${i + 1}: ${this._books[i].title}`)
        }
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

//Test CD
const remains = new CD('Remains', '21 Pilots');

remains.addSongTitles('Bam');
remains.addSongTitles('Boom');
remains.addSongTitles('Bang');
remains.shuffle();

const store = new Catalog();
store.addAlbum('25');
store.addAlbum(remains);
store.addBook('25');
store.addBook(historyOfEverything);
store.addMovie('25');
store.addMovie(speed);
store.print();