async function getData(path) {
  let response = await fetch(path);
  let data = await response.json();
  return data;
}

var response = await getData('data.json');
var object = response.reduce(
  (object, item) => ((object[item.day] = item.amount), object),
  {}
);

var categoriesObj = Object.keys(object);

var seriesDataObj = Object.values(object);

var chart = Highcharts.chart("bar-chart", {
  title: {
    text: null,
  },

  chart: { type: "column", backgroundColor: "#FFFAF5", borderColor: "#FFFAF5" },

  xAxis: {
    categories: categoriesObj,
    crosshair: false,
    lineWidth: 0,
  },

  yAxis: {
    visible: false,
  },

  series: [
    {
      data: seriesDataObj,
      color: "#ec775f",
    },
  ],

  tooltip: {
    backgroundColor: "#382314",
    borderColor: "#382314",
    borderRadius: 6,
    shape: "square",
    style: {
      color: "#fffaf5",
    },
  },

  plotOptions: {
    series: {
      maxPointWidth: 50,
      groupPadding: 0,
    },
    column: {
      states: {
        hover: {
          color: "#ff9985",
        },
        className: "labels",
      },
      borderRadius: 6,
      tooltip: {
        headerFormat: "",
        pointFormat: "<p class='tooltip'>${point.y}<p>",
      },
    },
  },
  legend: false,
});

const day = new Date().getDay();
let correctDay = day - 1 >= 0 ? day - 1 : 6;
document
  .querySelectorAll(".highcharts-point")
  [correctDay].classList.add("today");

const style = getComputedStyle(document.querySelector("div[role=group] > p"));
document
  .querySelectorAll(".highcharts-axis-labels.highcharts-xaxis-labels > text")
  .forEach((el) => (el.style = style));

/* ANIMATE NUMBERS*/
function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

document.querySelectorAll(".counter").forEach(function (el) {
  animateValue(el, 0, el.innerHTML, 1000);
});
