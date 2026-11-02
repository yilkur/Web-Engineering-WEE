/*
  Author: Yilmaz Kurnazcan
  Last modified: 26.10.2026
*/

const form = document.getElementById('calculate-bmi')

form.addEventListener('submit', e => {
  e.preventDefault()

  const weight = document.getElementById('weight').value
  const height = document.getElementById('height').value / 100

  alert(`BMI: ${(weight / (height * height)).toFixed(2)}`)
})
