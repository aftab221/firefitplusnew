function cookie (k, v, d) {
  var myDate = function (ts) {
    return new Date((ts || Date.now()) + 31556952000).toUTCString()
  }
  var expStr = ';expires='
  var prefix = ''
  // SET COOKIE
  if (v || v === 0) {
    document.cookie = prefix + k + '=' + v + expStr + myDate() + ';path=/'
    return
  }
  // DELETE COOKIE
  if (d) {
    document.cookie = prefix + k + '=' + expStr + myDate(1)
    return
  }
  // PARSE AND RETURN COOKIE
  var cookies = document.cookie.split(/\s*;\s*/)
  for (var i = 0; i < cookies.length; i++) {
    var c = cookies[i]
    var arr = c.split('=')
    if (c.indexOf(prefix + k) > -1) {
      if (arr[0] !== prefix + k) continue
      return arr[1]
    }
  }
  return false
}
function gp (el, name, isTagName, isId) {

  var check = function (el) {
    if (isTagName || isId) {
      var matchVal = isTagName ? el.tagName : el.id
      if (matchVal === name) return el
    } else {
      // CLASS
      if (classHelper(el, 'c', name)) return el
    }
  }

  if (check(el)) return el

  for (var i = 0; i < 15; i++) {
    el = el.parentNode
    if (el.tagName === 'BODY') return
    if (check(el)) return el
  }
}
function classHelper (els, action, className) {
  if (!els) return
  var map = {
    c: 'contains',
    a: 'add',
    r: 'remove'
  }
  if (!els.length) els = [els]
  for (var i = 0; i < els.length; i++) {
    var el = els[i]
    if (action === 'c') return el.classList[map[action]](className)
    if (action === 'r') {
      if (el.classList.contains(className)) el.classList.remove(className)
    }
    el.classList[map[action]](className)
  }
}
function ge (sel, all) {
  return all ? document.querySelectorAll(sel) : document.querySelector(sel)
}
function googleAnalytics (category, action, label) {
  var udf = 'undefined'
  var gtagCheck = typeof gtag !== udf
  var gaCheck = typeof ga !== udf
  if (!gtagCheck && !gaCheck) return
  action = action
  var labelStr = action + ': ' + label.toLowerCase()
  if (gtagCheck) {
    gtag('event', action, {
      event_category: category,
      event_label: labelStr
    })
  }
  if (gaCheck) ga('send', 'event', category, action, labelStr)
}

function activateBody () {
  var bodyEl = ge('body')
  setTimeout(function(){
    classHelper(bodyEl, 'a', 'active')
  }, 3)
}


function init () {
  activateBody()
}

if (document.readyState !== 'loading') {
  init()
} else {
  document.addEventListener('DOMContentLoaded', init)
}
