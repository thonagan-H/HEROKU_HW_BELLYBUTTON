var dropdown = document.getElementById("selDataset");
var array = [1,2,3,4,5];

for(var i = 0; i<arr.length;i++){
    var elements = document.createElement("option")
    elements.textContent = array[i]
    elements.value = array[i]
    dropdown.appendChild(elements);
}