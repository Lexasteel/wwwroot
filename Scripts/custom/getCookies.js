function getCookie(name) {
  // Split cookie string and get all individual name=value pairs in an array
  var cookieArr = document.cookie.split(';')

  // Loop through the array elements
  for (var i = 0; i < cookieArr.length; i++) {
    var cookiePair = cookieArr[i].split('=')

    /* Removing whitespace at the beginning of the cookie name
  and compare it with the given string */
    if (name == cookiePair[0].trim()) {
      // Decode the cookie value and return
      return decodeURIComponent(cookiePair[1])
    }
  }

  // Return null if not found
  return null
}

function SetFields(ReportType) {
  ReportType = document.getElementById('unitSelect')

  //var form = $('#formId')
  var form = $('form')
  console.log(file_name + '/daily.report.html')
  let file_name = getCookie('file_name')
  switch (ReportType.value) {
    case 'daily':
      form.attr('action', file_name + '/daily.report.html')
      break
    case 'hourly':
      form.attr('action', file_name + '/hourly.report.html')
      break
    case 'minute':
      form.attr('action', file_name + '/minute.report.html')
      break
    default:
      break
  }
}

function FillYears(select) {
  let year = new Date().getFullYear()
  let options = []
  for (var y = year; y > year - 11; y--) {
    options.push(y)
  }
  //const options = ['1', '2', '3', '4', '5']

  for (var i = 0; i < options.length; i++) {
    var opt = options[i]
    var el = document.createElement('option')
    el.textContent = opt
    el.value = opt
    select.appendChild(el)
  }
}
