class MonthException extends Error {

    constructor(message) {
        super();
        this.message = message;
        this.name = "MonthException";
    }
}


function showMonthName(month) {
    if (isNaN(month)) throw new MonthException("Not a number passed");
    if (+month < 1 || +month > 12) throw new MonthException("Incorrect month number");
    const date = new Date();
    date.setMonth(month - 1);

    return console.log(date.toLocaleString('en-US', {
        month: 'long',
    }));
}

showMonthName("2");
showMonthName(14);
