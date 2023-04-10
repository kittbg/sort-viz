const ctx = document.getElementById('myChart').getContext('2d');

//Generate array with random numbers between 0 and 100
function generateArray() {
    let array = [];
    for (let i = 0; i < 20; i++) {
        array.push(Math.floor(Math.random() * 100));
    }
    return array;
}


// let array = generateArray();
// let colorsArray = generateColorsArray();
// //Bubble sort
// async function bubbleSort(array) {
//     let sortedArray = [...array];
//     let temp;
//     for (let i = 0; i < sortedArray.length; i++) {
//         for (let j = 0; j < sortedArray.length - 1; j++) {
//             if (sortedArray[j] > sortedArray[j + 1]) {
//                 temp = sortedArray[j];
//                 sortedArray[j] = sortedArray[j + 1];
//                 sortedArray[j + 1] = temp;
//                 //console.log(sortedArray);
//                 //delay
//                 await new Promise(resolve => setTimeout(resolve, 500))
//                     .then(updateChart(sortedArray, 'bubble sort'));
//             }
//         }
//     }
//     return sortedArray;
// }

let array = generateArray();
async function mergeSort(array){
let colorArray = generateColorsArray();

    let sortedArray = [...array];
    let temp = 0;

    let left = Math.floor(array.length/2);
    let rightArr = array.slice(left)
    let leftArr = array.slice(0, left);
    if ()
    for (let i = 0; i < leftArr.length; i++){
        if (leftArr.length === 2){
         temp = leftArr[i]
         leftArr[i] > leftArr[i + 1];
         leftArr[i + 1] = temp;
        } 
    }
    for (let j = 0; j < rightArr.length; j++){
        if (rightArr.length === 2){
            temp = rightArr[i]
            rightArr[i] > rightArr[i + 1];
            rightArr[i + 1] = temp;
        }
    }
    
    mergeSort(array);
    
}
// console.log(array);
// console.log(leftArr);
// console.log(rightArr);



var colors = generateColorsArray();
//updateChart(array, 'bubble sort');
function updateChart(array, chartLabel) {
    let chartStatus = Chart.getChart("myChart"); // <canvas> id
    if (chartStatus != undefined) {
        chartStatus.destroy();
    }
    myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: [...array],
            datasets: [{
                label: chartLabel,
                data: [...array],
                backgroundColor: generateColorsArrayUsingArrayValues(array),
                borderColor: generateColorsArrayUsingArrayValues(array),
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            animation: {
                duration:0
            },
            responsive: true,
            maintainAspectRatio: false,
            
        }
    });
}

// generate random colors array
function generateColorsArray() {
    let colors = [];
    for (let i = 0; i < 20; i++) {
        colors.push(`rgb(${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`);
    }
    return colors;
}
// generate colors using array values
// generate random colors array
function generateColorsArrayUsingArrayValues(array) {
    let colors = [];
    for (let i = 0; i < array.length; i++) {
        colors.push(generateColorBasedOnNumberValue(array[i]));
    }
    return colors;
}

    
function generateColorBasedOnNumberValue(number) {
    let colorVal = mapNumberToBetween0And255(number);
    let color = `rgb(${colorVal}, ${colorVal}, ${colorVal})`;
    return color;
}
function mapNumberToBetween0And255(number) {
    let mappedNumber = Math.floor(number * 2.55);
    return mappedNumber;
}
//assign colors to array values
function assignColorsToValues(array, colors) {
    let newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push({ value: array[i], color: colors[i] });
    }
    return newArray;
}
