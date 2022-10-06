
export default function sortCollection(sortMode, arr) {
    if (sortMode === 'Price,low-high') {
        sortLowToHigh(arr);
    }
    else if (sortMode === 'Price,high-low') {
        sortLowToHigh(arr);
        arr.reverse();
    }
}

function sortLowToHigh(arr) {
    arr.sort(function (a, b) {
        if (a.newPrice > b.newPrice) return 1;
        if (a.newPrice < b.newPrice) return -1;
        return 0;
    });
}