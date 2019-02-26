import { Dom as HandlerDom } from './handlers/dom'
import { Dom as MixinDom } from './mixins/dom'
import { Style as StyleHandler } from './handlers/style'
import { Style as StyleMixin } from './mixins/style'
import { Cls as ClsHandler } from './handlers/class'
import { Cls as ClsMixin } from './mixins/class' 
import { Attribute as AttributeHandler } from './handlers/attribute'
import { Attribute as AttributeMixin } from './mixins/attribute'
import { EventObserver } from './event'

window.EventObserver = EventObserver

export class Element{
  constructor(selector){
    let _self = this
    _self.dom = document.querySelector(selector)
    _self.handlerDom = new HandlerDom()
    _self.styleHandler = new StyleHandler()
    _self.clsHandler = new ClsHandler()
    _self.attributeHandler = new AttributeHandler()
    console.log(_self)
  }
  on(event, callback){
    let _self = this
    window.EventObserver.bindEvent(event, callback, _self.dom)
    return _self
  }
  un(event){
    let _self = this
    window.EventObserver.unbindEvent(event, _self.dom)
    return _self
  }
}

Object.assign(Element.prototype, MixinDom, StyleMixin, ClsMixin, AttributeMixin)