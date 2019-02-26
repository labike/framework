export let Style = {
  css(style, value){
    let _self = this
    _self.styleHandler.style(style, value, _self.dom)
    return _self
  },
  size(width, height){
    let _self = this
    _self.styleHandler.size(width, height, _self.dom)
    return _self
  },
  hide(){
    let _self = this
    _self.styleHandler.hide(_self.dom)
    return _self
  },
  show(){
    let _self = this
    _self.styleHandler.show(_self.dom)
    return _self
  }
}