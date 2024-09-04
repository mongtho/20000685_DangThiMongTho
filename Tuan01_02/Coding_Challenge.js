// Coding Challenge #1: BMI Comparison
// Data 1
let markWeight1 = 78, markHeight1 = 1.69;
let johnWeight1 = 92, johnHeight1 = 1.95;

let markBMI1 = markWeight1 / (markHeight1 ** 2);
let johnBMI1 = johnWeight1 / (johnHeight1 ** 2);

let markHigherBMI1 = markBMI1 > johnBMI1;
console.log(`Mark's BMI: ${markBMI1}, John's BMI: ${johnBMI1}, Mark has higher BMI: ${markHigherBMI1}`);

// Data 2
let markWeight2 = 95, markHeight2 = 1.88;
let johnWeight2 = 85, johnHeight2 = 1.76;

let markBMI2 = markWeight2 / (markHeight2 ** 2);
let johnBMI2 = johnWeight2 / (johnHeight2 ** 2);

let markHigherBMI2 = markBMI2 > johnBMI2;
console.log(`Mark's BMI: ${markBMI2}, John's BMI: ${johnBMI2}, Mark has higher BMI: ${markHigherBMI2}`);


//Coding Challenge #2: BMI Output

if (markHigherBMI1) {
    console.log(`Mark's BMI (${markBMI1}) is higher than John's (${johnBMI1})!`);
} else {
    console.log(`John's BMI (${johnBMI1}) is higher than Mark's (${markBMI1})!`);
}

if (markHigherBMI2) {
    console.log(`Mark's BMI (${markBMI2}) is higher than John's (${johnBMI2})!`);
} else {
    console.log(`John's BMI (${johnBMI2}) is higher than Mark's (${markBMI2})!`);
}


//Coding Challenge #3: Gymnastics Competition
// Function to calculate average
const calcAverage = (scores) => scores.reduce((a, b) => a + b) / scores.length;

// Data 1
let dolphinsAvg1 = calcAverage([96, 108, 89]);
let koalasAvg1 = calcAverage([88, 91, 110]);

if (dolphinsAvg1 > koalasAvg1) {
    console.log(`Dolphins win with an average score of ${dolphinsAvg1}`);
} else if (koalasAvg1 > dolphinsAvg1) {
    console.log(`Koalas win with an average score of ${koalasAvg1}`);
} else {
    console.log(`It's a draw with both teams scoring an average of ${dolphinsAvg1}`);
}

// Bonus 1 & 2
let dolphinsAvgBonus = calcAverage([97, 112, 101]);
let koalasAvgBonus = calcAverage([109, 95, 106]);

if (dolphinsAvgBonus > koalasAvgBonus && dolphinsAvgBonus >= 100) {
    console.log(`Dolphins win with an average score of ${dolphinsAvgBonus}`);
} else if (koalasAvgBonus > dolphinsAvgBonus && koalasAvgBonus >= 100) {
    console.log(`Koalas win with an average score of ${koalasAvgBonus}`);
} else if (dolphinsAvgBonus === koalasAvgBonus && dolphinsAvgBonus >= 100 && koalasAvgBonus >= 100) {
    console.log(`It's a draw with both teams scoring an average of ${dolphinsAvgBonus}`);
} else {
    console.log(`No team wins the trophy.`);
}


//Coding Challenge #4: Simple Tip Calculator

const calcTip = (bill) => bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.20;

// Data 1
let bills = [275, 40, 430];
let tips = bills.map(bill => calcTip(bill));
let totals = bills.map((bill, index) => bill + tips[index]);

bills.forEach((bill, index) => {
    console.log(`The bill was ${bill}, the tip was ${tips[index]}, and the total value ${totals[index]}`);
});


//Coding Challenge #5: Gymnastics Winner Check
const checkWinner = (avgDolphins, avgKoalas) => {
    if (avgDolphins >= 2 * avgKoalas) {
        console.log(`Dolphins win (${avgDolphins} vs. ${avgKoalas})`);
    } else if (avgKoalas >= 2 * avgDolphins) {
        console.log(`Koalas win (${avgKoalas} vs. ${avgDolphins})`);
    } else {
        console.log('No team wins');
    }
};

// Data 1
let dolphinsAvgData1 = calcAverage([44, 23, 71]);
let koalasAvgData1 = calcAverage([65, 54, 49]);
checkWinner(dolphinsAvgData1, koalasAvgData1);

// Data 2
let dolphinsAvgData2 = calcAverage([85, 54, 41]);
let koalasAvgData2 = calcAverage([23, 34, 27]);
checkWinner(dolphinsAvgData2, koalasAvgData2);



//Coding Challenge #6: Tip Calculator with Arrays
let billsArray = [125, 555, 44];
let tipsArray = billsArray.map(bill => calcTip(bill));
let totalArray = billsArray.map((bill, index) => bill + tipsArray[index]);

console.log(billsArray, tipsArray, totalArray);



//Coding Challenge #7: BMI with Object

const mark = {
    fullName: 'Mark Miller',
    mass: 78,
    height: 1.69,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

const john = {
    fullName: 'John Smith',
    mass: 92,
    height: 1.95,
    calcBMI: function() {
        this.bmi = this.mass / (this.height ** 2);
        return this.bmi;
    }
};

mark.calcBMI();
john.calcBMI();

if (mark.bmi > john.bmi) {
    console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s (${john.bmi})!`);
} else {
    console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s (${mark.bmi})!`);
}
//Coding Challenge #9: Weather Forecast

const printForecast = (arr) => {
    let str = '';
    for (let i = 0; i < arr.length; i++) {
        str += `... ${arr[i]}°C in ${i + 1} days `;
    }
    console.log(str + '...');
};

printForecast([17, 21, 23]);
printForecast([12, 5, -5, 0, 4]);

