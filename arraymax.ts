function find_max(arr: number[]): number{
    let max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i];
        }
    }
    return max;
}
const numbers = [5, 2, 10, 1, 8];
const max = find_max(numbers);
console.log(max); 
