function isLeapYear(year) {

    if (year % 4 == 0) {
        return true;
    }
    else {
        return false;
    }
}

const checkYear = isLeapYear(2020);
console.log(checkYear);