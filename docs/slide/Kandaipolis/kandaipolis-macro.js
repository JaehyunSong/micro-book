/*
マクロ定義：第6.5参照
https://qiita.com/nozma/items/21c56c7319e4fefceb79
*/


remark.macros.scale = function (percentage, border = 0) {
  var url = this;
  return '<img src="' + url + '", border = ' + border + ' style="width: ' + percentage + '" />';
};

remark.macros.height = function (px, border = 0) {
  var url = this;
  return '<img src="' + url + '", border = ' + border + ' height = "' + px + '" />';
};

remark.macros.width = function (px, border = 0) {
  var url = this;
  return '<img src="' + url + '", border = ' + border + ' width = "' + px + '" />';
};