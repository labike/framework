export class Cls{
  replaceCls(value, targetElement, options){
    let _self = this,
      currentCls = targetElement.className.split(' '),
      newCls = new Set(currentCls);

    value = value.split(' ')
    for(const item of value){
      if(!newCls.has(item) && options === 'add') newCls.add(item)
      if(newCls.has(item) && options === 'remove') newCls.delete(item)
    }
    targetElement.className = [...newCls].join(' ')
  }
}