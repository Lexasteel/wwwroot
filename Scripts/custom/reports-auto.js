function _fillComboBox(device, channel, view) {
  //����� ������ ����������� (������� ��������)
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
