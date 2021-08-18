'use strict'
var idValidator = {}
idValidator.validate = function (id) {
  
  if (
    this.checkSum(id) &&
    this.checkMonth(id) &&
    this.checkDay(id) &&
    this.checkCitizen(id) &&
    this.checkA(id)
  ) {
    return true
  } else {
    return false
  }
}
idValidator.checkSum = function (id) {
  let s = id.slice(0, -1)
  let odd = s.replace(/./g, (s, pos) => [s, ''][pos & 1])
  let even = s.replace(/./g, (s, pos) => ['', s][pos & 1])
  let oddArr = odd.split('')
  let sumOdd = 0
  oddArr.forEach(o => {
    sumOdd += parseInt(o)
  })
  let dblEven = parseInt(even) * 2
  let evenArr = dblEven.toString().split('')
  let sumEvenDbl = 0
  evenArr.forEach(e => {
    sumEvenDbl += parseInt(e)
  })
  let sumTotal = sumEvenDbl + sumOdd
  let totalArr = sumTotal.toString().split('')
  let checksumVal = null
  if (totalArr[1] == '0') {
    checksumVal = 0
  } else {
    checksumVal = 10 - parseInt(totalArr[1])
  }
  if (id.substr(id.length - 1, 1) == checksumVal) {
    return true
  } else {
    return false
  }
}

idValidator.checkMonth = function (id) {
  let month = id.substr(2, 2)
  if (parseInt(month) > 0 && parseInt(month) <= 12) {
    return true
  } else {
    return false
  }
}

idValidator.checkDay = function (id) {
  let day = id.substr(4, 2)
  if (parseInt(day) > 0 && parseInt(day) <= 31) {
    return true
  } else {
    return false
  }
}

idValidator.checkCitizen = function (id) {
  let c = id.substr(id.length - 3, 1)
  if (c == '0' || c == '1') {
    return true
  } else {
    return false
  }
}

idValidator.checkA = function (id) {
  let a = id.substr(id.length - 2, 1)
  if (a == '8' || a == '9') {
    return true
  } else {
    return false
  }
}
