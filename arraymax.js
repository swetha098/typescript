function find_max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
var numbers = [5, 2, 10, 1, 8];
var max = find_max(numbers);
console.log(max);
