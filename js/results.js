// /****************
// store search params in the local storage
// *****************/
// const queryString = window.location.search
// const search_params = new URLSearchParams(queryString)
// const entries = Array.from(search_params.entries())
// const paramsObj = {}

// for (const entry of entries) {
//   paramsObj[entry[0]] = entry[1]
// }

// const chosenParamsBar = select('.content_chosen-params')

// if (entries.length) {
//   selectAll('p', chosenParamsBar)[0].textContent = `${
//     paramsObj['type_terrein']
//   } in postcode ${paramsObj['postcode'].toUpperCase().split(' ').join('')}`
// }

// const edit_btn = select('.content_edit-btn')

// window.localStorage.setItem('search_params', JSON.stringify(paramsObj))

// // edit_btn.addEventListener('click', (e) => {
// //   e.preventDefault()
// //   window.location.href = edit_btn.getAttribute('href')
// // })

// /****************
// Draw the Pie chart
// ****************/
// const chartWrapper = select('.chart_wrapper')
// const chartCanvas = select('#chart_canvas')

// if(chartCanvas) {
//   chartCanvas.width = 125
//   chartCanvas.height = 125
//   const colors = {
//     green: '#29af58',
//     brown: '#b27036',
//     blue: '#29abe2',
//     yellow: '#ffb831',
//   }
//   const chartData = []
//   const chart_legend_elements = selectAll('.chart_legend_element')

//   chart_legend_elements.forEach((element) => {
//     const categ = {}
//     categ.name = select('.chart_legend_element-name', element)
//       .textContent.trim()
//     categ.value = +select('.chart_legend_element-value', element)
//       .getAttribute('data-value')
//     categ.color =
//       colors[select('.color-box', element).getAttribute('data-color')]
//     chartData.push(categ)
//   })

//   const doughnutChart = new Piechart({
//     canvas: chartCanvas,
//     data: chartData,
//     doughnutHoleSize: 0.58,
//   })
//   doughnutChart.draw()
// }

'use strict'

/****************
store search params in the local storage
*****************/
var queryString = window.location.search
var search_params = new URLSearchParams(queryString)
var entries = Array.from(search_params.entries())
var paramsObj = {}

for (var _i = 0, _entries = entries; _i < _entries.length; _i++) {
  var entry = _entries[_i]
  paramsObj[entry[0]] = entry[1]
}

var chosenParamsBar = select('.content_chosen-params')

if (entries.length) {
  selectAll('p', chosenParamsBar)[0].textContent = ''
    .concat(paramsObj['type_terrein'], ' in postcode ')
    .concat(paramsObj['postcode'].toUpperCase().split(' ').join(''))
}

var edit_btn = select('.content_edit-btn')
window.localStorage.setItem('search_params', JSON.stringify(paramsObj))

console.log(window.localStorage)

/****************
Draw the Pie chart
****************/

var chartWrapper = select('.chart_wrapper')
var chartCanvas = select('#chart_canvas')

if (chartCanvas) {
  chartCanvas.width = 125
  chartCanvas.height = 125
  var colors = {
    green: '#29af58',
    brown: '#b27036',
    blue: '#29abe2',
    yellow: '#ffb831',
  }
  var chartData = []
  var chart_legend_elements = selectAll('.chart_legend_element')
  chart_legend_elements.forEach(function (element) {
    var categ = {}
    categ.name = select(
      '.chart_legend_element-name',
      element
    ).textContent.trim()
    categ.value = +select('.chart_legend_element-value', element).getAttribute(
      'data-value'
    )
    categ.color =
      colors[select('.color-box', element).getAttribute('data-color')]
    chartData.push(categ)
  })
  var doughnutChart = new Piechart({
    canvas: chartCanvas,
    data: chartData,
    doughnutHoleSize: 0.58,
  })
  doughnutChart.draw()
}
