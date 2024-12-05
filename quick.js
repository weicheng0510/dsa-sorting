/*
pivot accepts an array, starting index, and ending index
You can assume the pivot is always the first element
*/

function pivot(arr, start = 0, end = arr.length-1){
    const swap = (arr, i1, i2) => {
        [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    };

    let pivotValue = arr[start];
    let pivotIndex = start;

    for (let i = start + 1; i <= end; i++) {
        if (pivotValue > arr[i]) {
            pivotIndex++;
            swap(arr, i, pivotIndex);
        }
    }
    swap(arr, start, pivotIndex);
    return pivotIndex;
}

/*
quickSort accepts an array, left index, and right index
*/

function quickSort(arr, left = 0, right = arr.length - 1) {
    if (left < right) {
        let pivotIndex = pivot(arr, left, right);
        quickSort(arr, left, pivotIndex - 1);
        quickSort(arr, pivotIndex + 1, right);
    }
    return arr;
}

module.exports = { pivot, quickSort };