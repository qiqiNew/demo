  // step-1
  var input = document.getElementById("input")
  function getValue(){
    return input.value
  }
  function render(){
    var value = getValue()
    if(!document.getElementById("show")){
      var append = document.createElement('span')
      append.setAttribute("id", "show")
      input.parentNode.appendChild(append)
    }
    var show = document.getElementById("show")
    if(/^[0-9a-zA-Z]+$/.exec(value)){
      show.innerHTML = 'Pass!'
    }else{
      show.innerHTML = 'Failed!'
    }
  }
  input.addEventListener('keyup', function(){
    render()
  })
