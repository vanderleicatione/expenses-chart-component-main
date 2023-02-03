var collection = [
  {
    name: "Chrome",
    value: 61.41,
  },
  {
    name: "Internet Explorer",
    value: 11.84,
  },
  {
    name: "Firefox",
    value: 10.85,
  },
  {
    name: "Edge",
    value: 4.67,
  },
  {
    name: "Safari",
    value: 4.18,
  },
  {
    name: "Sogou Explorer",
    value: 1.64,
  },
  {
    name: "Opera",
    value: 1.6,
  },
  {
    name: "QQ",
    value: 1.2,
  },
  {
    name: "Other",
    value: 2.61,
  },
];

var obj = {
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

var categories = collection.map((point) => point.name);

var seriesData = collection.map((point) => point.value);

var categoriesObj = Object.keys(obj);

var seriesDataObj = Object.values(obj);

var chart = Highcharts.chart("bar-chart", {
  title: {
    text: null,
  },

  chart: { type: "column" },

  xAxis: {
    categories: categoriesObj,
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
});
