/**
 * Function to calculate the final deposit amount using compound interest.
 * @param {number} initialDeposit - Initial deposit amount.
 * @param {number} dailyInterestRate - Daily interest rate as a decimal (1% = 0.01).
 * @param {number} days - Number of days for which the deposit grows.
 * @returns {number} - Final deposit amount after the specified number of days.
 */
function calculateDeposit(initialDeposit, dailyInterestRate, days) {
    let deposit = initialDeposit;

    deposit *= Math.pow(1 + dailyInterestRate, days);

    return deposit;
}

// Initial parameters
const initialDeposit = 1000;
const dailyInterestRate = 0.01; // 1% per day
const daysInYear = 365;

// Calculate the final deposit amount
const finalDeposit = calculateDeposit(initialDeposit, dailyInterestRate, daysInYear);

// Display the result
console.log(`Your deposit after ${daysInYear}: ${finalDeposit.toFixed(2)}`);
