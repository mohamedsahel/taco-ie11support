function getMeasureContent(_fgr, _infopagina) {
    url = 'teksten.aspx?fgr=' + _fgr + '&infopagina=' + _infopagina;
    jQuery.get(url, function (data) {
        var div = document.getElementById('measure_content');
       div.innerHTML = data;
   });
}