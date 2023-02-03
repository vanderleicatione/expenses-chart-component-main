/*
async function getData(path){
    let response = await fetch(path);
    let data = await response.json();
    return data;

}
var obj = getData('data.json') || {
    Chrome: 61.41,
    "Internet Explorer": 11.84,
    Firefox: 10.85,
    Edge: 4.67,
    Safari: 4.18,
    "Sogou Explorer": 1.64,
    Opera: 1.6,
    QQ: 1.2,
    Other: 2.61,
  };
console.log(obj)
var categoriesObj = Object.keys(obj);

var seriesDataObj = Object.values(obj);

var chart = Highcharts.chart("bar-chart", {
  title: {
    text: null,
  },

  chart: { type: "column" },

  xAxis: {
    categories: categoriesObj,
    crosshair: true
  },
  yAxis: {
    title: {
      text: null,
    },
  },

  series: [
    {
      name: "Usage",
      colorByPoint: true,
      data: seriesDataObj,
    },
  ],
  legend: false,
}); */
