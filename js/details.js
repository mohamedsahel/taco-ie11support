function getMeasureContent(
  _fgr,
  _infopagina,
  _titel,
  _situatie,
  _postcode,
  _type_terrein
) {
  url =
    'teksten.aspx?fgr=' +
    _fgr +
    '&infopagina=' +
    _infopagina +
    '&titel=' +
    _titel +
    '&situatie=' +
    _situatie +
    '&postcode=' +
    _postcode +
    '&type_terrein=' +
    _type_terrein
  jQuery.get(url, function (data) {
    document.getElementById('measure_content').innerHTML = data
    url = 'fotos.aspx?maatregel=' + _infopagina
    jQuery.get(url, function (data) {
      document.getElementById('measure_image').innerHTML = data
      console.log(_infopagina)
      console.log(_titel)
      console.log(_postcode)
      console.log(_type_terrein)
    })
    runDetailsLayoutLogic()
    runTableSectionLogic()
  })
}

runDetailsLayoutLogic()
runTableSectionLogic()

function runDetailsLayoutLogic() {
  var backBtnHtml =
    '\n    <div class="go-back" hidden>\n      <input type="checkbox" class="section_title_input" />\n      <div class="sm-box section_dropdown">\n        <img src="./assets/arrow.svg" alt="arrow" />\n      </div>\n      <label class="section_title">\n        Naar overzicht\n      </label>\n    </div>\n  '
  var detailsContainerHtml =
    '\n    <div class="content_measure_details" id="measure_content">\n    </div>\n  '
  var mainContent = select('.content')
  var contentDetails = select('.content_details')
  var backBtn = select('.go-back', contentDetails) // open the first section of the content details

  var firstBulletInput = select('input#section_1', contentDetails)
  firstBulletInput.checked = true
  var isMedium = window.matchMedia('(max-width: 1024px)')

  isMedium.onchange = function (e) {
    handleDetailsLayout()
  }

  handleDetailsLayout()

  function handleDetailsLayout() {
    var measureContent = select('#measure_content')
    if (measureContent && measureContent.childElementCount <= 0) return

    if (isMedium.matches) {
      backBtn.hidden = false
      contentDetails.classList.add('full-width')
      mainContent.style =
        '\n        height: 0px;\n        overflow: hidden;\n      '
      scrollTop()
      backBtn.addEventListener('click', function () {
        contentDetails.classList.remove('full-width')
        contentDetails.innerHTML = backBtnHtml + detailsContainerHtml
        mainContent.style =
          '\n          height: auto;\n          overflow: auto;\n        '
        scrollBottom()
      })
    } else {
      contentDetails.classList.remove('full-width')
      backBtn.hidden = true
      mainContent.style =
        '\n        height: auto;\n        overflow: auto;\n      '
    }
  }
}

function runTableSectionLogic() {
  var togglerOptions = selectAll('.toggler_option')
  var optionsFilter = select('.options-filter')
  var currentTable = 't-e'
  togglerOptions.forEach(function (option) {
    if (option.checked && option.getAttribute('id') === 'simple') {
      optionsFilter.hidden = true
    }

    option.addEventListener('click', function (e) {
      if (e.target.getAttribute('id') === 'simple') {
        optionsFilter.hidden = true
        renderTableData('t-e', true)
      } else {
        optionsFilter.hidden = false
        if (currentTable === 't-e') renderTableData('t-am')
        else renderTableData(currentTable)
      }
    })
  })
  /* table */

  var table = select('table.species-table')
  var tableBody = select('tbody', table)
  var tableHead = select('thead', table)
  var months = ['J', 'F', 'M', 'A', 'M', 'J', 'J', 'A', 'S', 'O', 'N', 'D'] // render the table top header

  function renderTableHeader() {
    // table top
    var tableTop = document.createElement('tr')
    var Kleur = document.createElement('th')
    Kleur.setAttribute('colspan', '2')
    Kleur.classList.add('right')
    Kleur.textContent = 'Kleur'
    var Bloeiperiode = document.createElement('th')
    Bloeiperiode.textContent = 'Bloeiperiode'
    tableTop.appendChild(Kleur)
    tableTop.appendChild(Bloeiperiode)
    tableHead.appendChild(tableTop) // table monthes

    var tableMonths = document.createElement('tr')
    var emptyCol = document.createElement('td')
    emptyCol.setAttribute('colspan', '2')
    var monthsCol = document.createElement('td')
    var monthsDiv = document.createElement('div')
    monthsDiv.classList.add('months')
    months.forEach(function (month) {
      var monthBox = document.createElement('span')
      monthBox.classList.add('month-box')
      monthBox.classList.add('letter')
      monthBox.textContent = month
      monthsDiv.appendChild(monthBox)
    })
    monthsCol.appendChild(monthsDiv)
    tableMonths.appendChild(emptyCol)
    tableMonths.appendChild(monthsCol)
    tableHead.appendChild(tableMonths)
  }

  renderTableHeader() // render table function based on param

  function renderTableData(code, changeCurrent) {
    var pre = select('.table-data[data-table-code="'.concat(code, '"]'))
    var tableArray = JSON.parse(pre.textContent)

    if (!changeCurrent) {
      currentTable = code
    } // remove old table content

    tableBody.textContent = ''
    tableArray.forEach(function (obj) {
      var specieRow = document.createElement('tr') // specie link column

      var specieLinkCol = document.createElement('td')
      var specieLink = document.createElement('a')
      specieLink.setAttribute('href', obj.link)
      specieLink.textContent = obj.specie
      specieLinkCol.appendChild(specieLink) // specie color box

      var colorCol = document.createElement('td')
      var colorBox = document.createElement('span')
      colorBox.classList.add('specie_color-box-' + obj.color) //  colorBox.style = `background-color: ${obj.color}`

      colorCol.appendChild(colorBox) // species months

      var monthsCol = document.createElement('td')
      var monthsDiv = document.createElement('div')
      monthsDiv.classList.add('months')
      months.forEach(function (month) {
        var monthBox = document.createElement('span')
        monthBox.classList.add('month-box')
        monthsDiv.appendChild(monthBox)
      })
      var monthBoxes = selectAll('span.month-box', monthsDiv)
      obj.months.forEach(function (month) {
        monthBoxes[month - 1].classList.add('filled')
      })
      monthsCol.appendChild(monthsDiv) // append children to specie

      specieRow.appendChild(specieLinkCol)
      specieRow.appendChild(colorCol)
      specieRow.appendChild(monthsCol)
      tableBody.appendChild(specieRow)
    })
  }

  renderTableData('t-e')
  /* dropdown */

  var dropdowns = selectAll('.dropdown')
  var dropdownsButtons = selectAll('.dropdown_button')
  var dropdownItems = selectAll('.dropdown_item')
  var dropdown_1_key = 'a'
  var dropdown_2_key = 'm' // open the dropdown

  dropdownsButtons.forEach(function (button) {
    var dropdown = button.closest('.dropdown')

    button.onclick = function (e) {
      e.stopPropagation()
      dropdowns.forEach(function (dropdown) {
        return dropdown.classList.remove('opened')
      })
      toggleClass('opened', dropdown)
    }
  })

  window.onclick = function () {
    dropdowns.forEach(function (dropdown) {
      return dropdown.classList.remove('opened')
    })
  }

  dropdownItems.forEach(function (item) {
    item.onclick = function (e) {
      var dropdown = item.closest('.dropdown')

      if (dropdowns[0] === dropdown) {
        dropdown_1_key = item.getAttribute('data-key')
      } else {
        dropdown_2_key = item.getAttribute('data-key')
      }

      select('.dropdown_picked-option', dropdown).textContent = item.textContent
      toggleClass('opened', dropdown)
      renderTableData('t-'.concat(dropdown_1_key).concat(dropdown_2_key))
    }
  })
}
