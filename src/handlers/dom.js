export class Dom{
  html(html, targetElement){
    targetElement.innerHTML = html
  }
  append(childHtml, targetElement){
    targetElement.innerHTML += childHtml 
  }
}