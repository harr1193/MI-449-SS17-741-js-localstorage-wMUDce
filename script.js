var visits = document.getElementById('visits')
var pageVisits = parseInt(window.localStorage.getItem('pageVisits'))
var theme = document.getElementById('theme')
var header = document.getElementById('header')
var button = document.getElementById('btn')
var storedTheme = window.localStorage.getItem('storedTheme')

// Store page visits
if (isNaN(pageVisits)) {
  pageVisits = 1
} else {
  pageVisits += 1
}
// Set page visits in localStorage
window.localStorage.setItem('pageVisits', pageVisits)
visits.textContent = pageVisits

if (storedTheme === null) {
  window.localStorage.setItem('storedTheme', 'day')
}
// Change theme on button click
function changeTheme () {
  if (window.localStorage.getItem('storedTheme') === 'day') {
    // Change body style to night theme
    theme.style.backgroundColor = '#131862'
    theme.style.color = '#fefcd7'
    // Change header content
    header.innerHTML = 'Night Theme'
    // Change button to night theme
    button.style.backgroundColor = '#131862'
    button.style.color = '#fefcd7'
    // Set theme in localStorage to night
    window.localStorage.setItem('storedTheme', 'night')
  } else if (window.localStorage.getItem('storedTheme') === 'night') {
    // Change body to day theme
    theme.style.backgroundColor = '#7ec0ee'
    theme.style.color = '#000'
    // Change header text content
    header.innerHTML = 'Day Theme'
    // Change button to day theme
    button.style.backgroundColor = '#fff'
    button.style.color = '#000'
    // Set theme in localStorage to day
    window.localStorage.setItem('storedTheme', 'day')
  }
}
