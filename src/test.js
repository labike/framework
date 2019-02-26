$('#test')
  .html('hello ')
  .append('<em>world!</em>')
  .size(300, 350)
  .css({
    'color': '#fff',
    'background': '#000',
    'font-size': '25px',
    'font-style': 'italic'
  })
  .css('display', 'block')
  .addCls('test1 test2 test3 test4')
  .removeCls('test3')
  .addCls('test1 test5')
  .removeCls('test2 test4')
  .attr('title', 'this is title')
  .attr('alt', 'this is alt')
console.log($('#test').attr('alt'))
$('#test').removeAttr('alt')
console.log($('#test').attr('alt'))
$('#testBtn').on('click', function(){console.log(123)})
$('#testBtn').on('click', function(){
  let _self = this
  if(_self.innerHTML === '隐藏'){
    $('#test').hide()
    _self.innerHTML = '显示'
  }else{
    $('#test').show()
    _self.innerHTML = '隐藏'
  }
})
