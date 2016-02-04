console.log('Flowchart.js loaded');

app.thisChartName = 'flowchart';
app.chartLocalStorage = window.localStorage[app.thisChartName];
app.chartData = JSON.parse(app.chartLocalStorage) || {};

if (!!app.chartData.decisionElement) {
    // Add element to localStorage upon initialization
    app.chartData.decisionElement = {
        textValue: 'Enter your decision text'
    };
}

console.log(app.chartData);

var Flowchart = function() {
    
}; // end Flowchart()

Flowchart.prototype.generateRandomID = function(elementType) {
    return elementType + '-' + (parseInt(Math.random()*10000000)).toString();
}; // end generateRandomID(elementType)