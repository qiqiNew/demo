var fun = (function(){
  var _bind = function(obj){
    obj.input.addEventListener('keyup', function(){
      obj.render()
    })
  }
  var _getValue = function(obj){
    return obj.input.value
  }
  var InputFun = function(config){}
  InputFun.prototype.init = function(config){
    this.input = document.getElementById(config.id)
    _bind(this)
    return this
  }
  InputFun.prototype.render = function(){
    var value = _getValue(this)
    if(!document.getElementById("show")){
      var append = document.createElement('span')
      append.setAttribute("id", "show")
      input.parentNode.appendChild(append)
    }
    var show = document.getElementById("show");
    if(/^[0-9a-zA-Z]+$/.exec(value)){
      show.innerHTML = 'Pass!'
    }else{
      show.innerHTML = 'Failed!'
    }
  }
  return InputFun
})()
window.onload = function(){
  new fun().init({id: 'input'})
}
