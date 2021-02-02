'use strict'

var select = function select(selector, parent) {
  if (parent) return parent.querySelector(selector)
  return document.querySelector(selector)
}

var selectAll = function selectAll(selector, parent) {
  if (parent) return parent.querySelectorAll(selector)
  return document.querySelectorAll(selector)
}

var getStyle = function getStyle(element, property) {
  var styles = getComputedStyle(element)
  var value = styles.getPropertyValue(property)
  return value.split('px').join('')
}

var toggleClass = function toggleClass(className, element) {
  if (element.classList.contains(className)) {
    element.classList.remove(className)
  } else {
    element.classList.add(className)
  }
}

var checkPostcode = function checkPostcode(value) {
  var regExp = /^[1-9][0-9]{3} ?(?!sa|sd|ss)[a-z]{2}$/i
  if (regExp.test(value)) return true
  else return false
}

var scrollTop = function scrollTop(withAnimation) {
  window.scrollTo({
    top: 0,
    behavior: withAnimation && 'smooth',
  })
}

var scrollBottom = function scrollBottom(withAnimation) {
  window.scrollTo({
    top: 10000,
    behavior: withAnimation && 'smooth',
  })
}

window.onload = function () {
  select('.loader').classList.add('hidden')
}