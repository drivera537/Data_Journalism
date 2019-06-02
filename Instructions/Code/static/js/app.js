// from data.js
var tableData = data;

// get a reference to the table body
var tbody = d3.select("tbody");

var submit = d3.select("#filter-btn");

function buildTable(dataArray) {
    dataArray.forEach((ufoSighting) => {
    
        var row = tbody.append("tr");
        Object.entries(ufoSighting).forEach(([key, value])=>{
            var cell = row.append('td');
            cell.text(value);
        });
    });
}

submit.on("click", function(){
    //prevent refresh
    d3.event.preventDefault();
    //input elemnt
    var inputElement = d3.select("#datetime");

    if (inputElement) {
        
    }
    //value property in input element
    var inputValue = inputElement.property('value');
    var filterData = tableData.filter(row => row.datetime === inputValue);

    tbody.html(" ");
    buildTable(filterData);
})


// YOUR CODE HERE!
buildTable(tableData);