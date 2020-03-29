module.exports = function toReadable (number) {
    if (!number) {
        return 'zero'
    }
    numberToArr = number.toString().split("")
    let numbersToString = ''
    let lengthOfArr = numberToArr.length
    let numbersFunctions = {
        fourNumbers (number) {
            for (key in numbersNames) {
                if (number[0] === key) {
                    numbersToString = numbersNames[key] + ' thousand '
                }
            }
            numberToArr.splice(0, 1);
            numbersFunctions.threeNumbers(number)
        },

        threeNumbers (number) {
            for (key in numbersNames) {
                if (number[0] === key && number[0] !== 0) {
                    numbersToString += numbersNames[key] + ' hundred '
                }
            }
            numberToArr.splice(0, 1);
            numbersFunctions.twoNumbers(number)
        },

        twoNumbers (number) {
            if (number[0] == 1) {
                let currentNumber = number.join('')
                for (key in mediumNumbers) {
                    if (currentNumber == key) {
                        numbersToString += mediumNumbers[key]
                        return toReadable.numbersToString
                    }
                }
            }
            for (key in mediumNumbers) {
                if (number[0] === key && number[0] !== 0) {
                    numbersToString += mediumNumbers[key]
                }
            }
            numberToArr.splice(0, 1);
            numbersFunctions.oneNumber(number)
        },

        oneNumber (number) {
            for (key in numbersNames) {
                if (number[0] === key && number[0] != 0) {
                    numbersToString += ' ' + numbersNames[key]
                    return numbersToString
                }
            }
        }
    }


    let numbersNames = {
        1: 'one',
        2: 'two',
        3: 'three',
        4: 'four',
        5: 'five',
        6: 'six',
        7: 'seven',
        8: 'eight',
        9: 'nine',
        '0': 'zero'
    }

    let mediumNumbers = {
        10: 'ten',
        11: 'eleven',
        12: 'twelve',
        13: 'thirteen',
        14: 'fourteen',
        15: 'fifteen',
        16: 'sixteen',
        17: 'seventeen',
        18: 'eighteen',
        19: 'nineteen',
        2: 'twenty',
        3: 'thirty',
        4: 'forty',
        5: 'fifty',
        6: 'sixty',
        7: 'seventy',
        8: 'eighty',
        9: 'ninety'
    }

    if (lengthOfArr === 4) {
        let f = numbersFunctions.fourNumbers.bind(toReadable)
        f(numberToArr)
    } else if (lengthOfArr === 3) {
        let f = numbersFunctions.threeNumbers.bind(toReadable)
        f(numberToArr)
    } else if (lengthOfArr === 2) {
        let f = numbersFunctions.twoNumbers.bind(toReadable)
        f(numberToArr)
    } else if (lengthOfArr === 1) {
        let f = numbersFunctions.oneNumber.bind(toReadable)
        f(numberToArr)
    }

    return numbersToString.replace(/\s+/g, ' ').trim()
}
