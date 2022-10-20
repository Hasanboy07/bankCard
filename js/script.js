function cardNumber(num) {
    if (num.length < 16 || num.length > 16 || isNaN(+num)) {
        console.log('Bank number will be 16');
    } else if (num.length == 16) {
        let star = '********'
        console.log(num.slice(0, 4) + star + num.slice(12, 16));
        if (num.startsWith('8600')) {
            console.log('UzCard');
        } else if (num.startsWith('9680')) {
            console.log('Humo bank');
        } else {
            console.log('Invalid card number');
        }
    } else {
        console.log('Error! please try again later');
    }
}

cardNumber('9680860086008600')