export let Dom = {
  html(html){
    let _self = this
    _self.handlerDom.html(html, _self.dom)
    return _self
  },
  append(childHtml){
    let _self = this
    _self.handlerDom.append(childHtml, _self.dom)
    return _self
  }
}