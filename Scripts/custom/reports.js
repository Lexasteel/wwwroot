var plotMode = false

$.fn.addItems = function (data) {
  return this.each(function () {
    var list = this
    list.options.length = 0
    $.each(data, function (index, itemData) {
      list.options.add(new Option(itemData.Text, itemData.Value))
    })
  })
}

function _fillComboBox(device, channel, view) {
  //Вызов метода контроллера (возврат значений)
  document.getElementById('fieldsList').options.length = 0
  $.getJSON(
    '/Select/Params?device=' +
      device +
      '&channel=' +
      channel +
      '&viewname=' +
      view,
    null,
    function (data) {
      $('#fieldsList').addItems(data)
    }
  )
}

function fillComboBox() {
  if (plotMode) {
    var fromVal = document.getElementById('from_str')
    _fillComboBox($('#place').val(), $('#report_ch').val(), fromVal.value)
    changeList()
  }
}

function showHideControls(report) {
  if (report == 1) {
    $('#fldDiv').hide()
    $('#b_report').show()
    $('#b_plot').hide()
  } else {
    $('#fldDiv').show()
    $('#b_report').hide()
    $('#b_plot').show()
  }
}

function changeList() {
  var ch = document.getElementById('fieldsList')
  var selval = ch.options[ch.selectedIndex == -1 ? 0 : ch.selectedIndex]
  var items = ch.getElementsByTagName('option')

  if (ch.selectedIndex < 0) {
    if (items.length > 0) ch.selectedIndex = 0
    else return true
  }

  var col_title = document.getElementById('column_title')
  var col_name = document.getElementById('column_name')

  col_title.value = selval.text
  col_name.value = selval.value
}

Date.prototype.formatString = function () {
  dy = this.getFullYear()
  dm = this.getMonth() + 1
  dd = this.getDate()
  if (dy < 1970) dy = dy + 100
  ys = new String(dy)
  ms = new String(dm)
  ds = new String(dd)
  if (ms.length == 1) ms = '0' + ms
  if (ds.length == 1) ds = '0' + ds
  return ds + '.' + ms + '.' + ys
}

Date.prototype.getQuartal = function () {
  return parseInt(dm / 3) + 1
}

$(document).ready(function () {
  $('form').append(
    '<input type="hidden" id="columnHeader" name="columnHeader" value="Расход"/>'
  )

  $('input[name=showtype]:radio').change(function () {
    if ($(this).attr('value') == 'report') {
      plotMode = false
      showHideControls(1)
    } else if ($(this).attr('value') == 'plot') {
      plotMode = true
      showHideControls(0)

      fillComboBox()
      changeList()
    }
  })

  $('#fieldsList').change(function () {
    changeList()
  })

  showHideControls(1)
  $('.dtPicker').datepicker({
    showOn: 'button',
    buttonImage: '/Content/Images/calendar.gif',
    buttonImageOnly: true,
  })

  var date = new Date()
  $('.dtPicker').attr('value', date.formatString())
  $('select[name$="Year"]').val(date.getFullYear())
  $('select[name$="Quartal"]').val(date.getQuartal())
  $('select[name$="Month"]').val(date.getMonth() + 1)
  $('input[type="button"]').button()
  $('input[type="submit"]').button()
  $('form').submit(function () {
    try {
      if (onBeforeSubmittingReport != undefined) onBeforeSubmittingReport()
    } catch (e) {}
    var s = $(this).serialize()

    window.open(
      'report.php?' + $(this).attr('action') + s,
      s,
      'width=800, height=680, resizeable, scrollbars'
    )

    this.target = s
  })

  //и не переносить отсюда, задрали уже. Это говнище работает только в случае KPWS
  //onSelVal(document.getElementById('place'), 'uid');
  //onSelRT(document.getElementById('report_type'), 'report_name')
})
