/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* switching between page color */

let theme = localStorage.getItem('theme')

if (theme == null) {
  setTheme('light')
} else {
  setTheme(theme)
}

let themeDots = document.getElementsByClassName('theme-dot')


for (var i = 0; themeDots.length > i; i++) {
  themeDots[i].addEventListener('click', function () {
    let mode = this.dataset.mode
    console.log('Option clicked:', mode)
    setTheme(mode)
  })
}

function setTheme(mode) {
  if (mode == 'light') {
    document.getElementById('theme-style').href = 'default.css'
  }

  if (mode == 'blue') {
    document.getElementById('theme-style').href = 'blue.css'
  }

  if (mode == 'green') {
    document.getElementById('theme-style').href = 'green.css'
  }

  if (mode == 'purple') {
    document.getElementById('theme-style').href = 'purple.css'
  }

  localStorage.setItem('theme', mode)
}