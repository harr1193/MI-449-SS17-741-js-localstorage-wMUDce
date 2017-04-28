var visits = document.getElementById('visits')
var pageVisits = parseInt(window.localStorage.getItem('pageVisits'))
var header = document.getElementById('timeOfDay')
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
  document.body.setAttribute('class', 'day-theme')
}

window.onload = function setTheme () {
  if (storedTheme === 'night') {
    document.body.setAttribute('class', 'night-theme')
    header.innerHTML = 'Night'
    button.className = 'night-theme-button'
  } else if (storedTheme === 'day') {
    document.body.setAttribute('class', 'day-theme')
    header.innerHTML = 'Day'
    button.className = 'day-theme-button'
  }
}

// Change theme on button click
function changeTheme () {
  if (window.localStorage.getItem('storedTheme') === 'day') {
    // Change body style to night theme
    document.body.setAttribute('class', 'night-theme')
    // Change header content
    header.innerHTML = 'Night'
    // Change button to night theme
    button.className = 'night-theme-button'
    // Set theme in localStorage to night
    window.localStorage.setItem('storedTheme', 'night')
  } else if (window.localStorage.getItem('storedTheme') === 'night') {
    // Change body to day theme
    document.body.setAttribute('class', 'day-theme')
    // Change header text content
    header.innerHTML = 'Day'
    // Change button to day theme
    button.className = 'day-theme-button'
    // Set theme in localStorage to day
    window.localStorage.setItem('storedTheme', 'day')
  }
}

button.addEventListener('click', changeTheme)
