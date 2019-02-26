export let EventObserver = new class{
  constructor(){
    let _self = this
    this.events = new WeakMap()
  }
  bindEvent(event, callback, targetElement){
    let _self = this,
      events = _self.events,
      targetEvents = events.get(targetElement) || {};

    if(targetEvents[event]){
      _self.unbindEvent(event, targetElement)
    }
    targetEvents[event] = callback
    targetElement.addEventListener(event, callback, false)
    events.set(targetElement, targetEvents)
  }
  unbindEvent(event, targetElement){
    let _self = this,
      events = _self.events,
      targetEvents = events.get(targetElement) || {};

    if(targetEvents[event]){
      targetElement.removeEventListener(event, targetEvents[event], false)
      events.delete(event)
    }
  }
}()