// Clear the input field value when it gets focus
function clearInput(inputElement) {
    inputElement.value = '';
}

// Calculate: Adding percentage to number
function calculateAddPercentage() {
    const number = parseFloat(document.getElementById('add_number').value) || 0;
    const percentage = parseFloat(document.getElementById('add_percentage').value) || 0;
    const result = number + (number * (percentage / 100));
    document.getElementById('add_result').innerText = result.toFixed(2);
}

// Calculate: Subtracting percentage from number
function calculateSubPercentage() {
    const number = parseFloat(document.getElementById('sub_number').value) || 0;
    const percentage = parseFloat(document.getElementById('sub_percentage').value) || 0;
    const result = number - (number * (percentage / 100));
    document.getElementById('sub_result').innerText = result.toFixed(2);
}

// Calculate: Finding the percentage change
function calculatePercentageChange() {
    const oldValue = parseFloat(document.getElementById('old_value').value) || 0;
    const newValue = parseFloat(document.getElementById('new_value').value) || 0;
    const change = ((newValue - oldValue) / oldValue) * 100;
    document.getElementById('change_result').innerText = change.toFixed(2);
}

// Calculate: Percentage of number
function calculatePercentageOfNumber() {
    const partNumber = parseFloat(document.getElementById('part_number').value) || 0;
    const wholeNumber = parseFloat(document.getElementById('whole_number').value) || 0;
    const percentage = (partNumber / wholeNumber) * 100;
    document.getElementById('percent_of_number').innerText = percentage.toFixed(2);
}




// Calculate: How much is __% of ___
function calculatePercentOfTotal() {
    const percent = parseFloat(document.getElementById('percent_value').value) || 0;
    const total = parseFloat(document.getElementById('total_value').value) || 0;
    const result = (percent / 100) * total;
    document.getElementById('percent_result').innerText = result.toFixed(2);
}
