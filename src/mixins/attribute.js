export let Attribute = {
  attr(attribute, value){
    let _self = this
    if(typeof attribute === 'string' && !value){
      return _self.attributeHandler.getAttribute(attribute, _self.dom)
    }
    _self.attributeHandler.addAttribute(attribute, value, _self.dom)
    return _self
  },
  removeAttr(attribute){
    let _self = this
    _self.attributeHandler.removeAttribute(attribute, _self.dom)
    return _self
  }
}