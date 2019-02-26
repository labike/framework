export class Attribute{
  addAttribute(attribute, value, targetElement){
    targetElement.setAttribute(attribute, value + '')
  }
  getAttribute(attribute, targetElement){
    return targetElement.getAttribute(attribute)
  }
  removeAttribute(attribute, targetElement){
    targetElement.removeAttribute(attribute)
  }
}