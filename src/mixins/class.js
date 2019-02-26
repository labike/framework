export let Cls = {
  addCls(value){
    let _self = this
    _self.clsHandler.replaceCls(value, _self.dom, 'add')
    return _self
  },
  removeCls(value){
    let _self = this
    _self.clsHandler.replaceCls(value, _self.dom, 'remove')
    return _self
  }
}