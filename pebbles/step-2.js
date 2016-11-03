// step-2
window.onload = function() {
  obj.init({id: 'input'})
}
var obj = {
  init: function(config) {
    this.input = document.getElementById(config.id)
    this.bind()
    return this
  },
  bind: function() {
    var self = this
    this.input.addEventListener('keyup', function() {
      self.render()
    })
  },
  getValue: function() {
    return this.input.value
  },
  render: function() {
    var value = this.getValue()
    if(!document.getElementById('show')) {
      var oShow = document.createElement('span')
      oShow.setAttribute('id', 'show')
      this.input.parentNode.appendChild(oShow)
    }
    var oShow = document.getElementById('show')
    if(/^[0-9a-zA-Z]+$/.exec(value)){
      oShow.innerHTML = 'Pass!';
    }else{
      oShow.innerHTML = 'Failed!';
    }
  }
}
