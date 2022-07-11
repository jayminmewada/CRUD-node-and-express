const update = document.querySelector('#update-button')
const deleteButton = document.querySelector('#delete-button')
const messageDiv = document.querySelector('#message')

update.addEventListener('click', _ => {
    fetch('/quotes', { method: 'put',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
        name: 'kabir',
        quote: 'Many have died;'+
        'you also will die. The drum of death is being beaten. The world has fallen in love with a dream. '
       +' Only sayings of the wise will remain'
      })
    })
    .then(res => {
      if (res.ok) return res.json()
    })
    .then(response => {
      window.location.reload(true)    // update
    })
})
deleteButton.addEventListener('click', _ => {
  fetch('/quotes', { method: 'delete',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({
    name: 'kabir'
  })
})
  .then(res => {
    if (res.ok) return res.json()
  })   .then(res => {
    if (res === 'No quote to delete') {
      messageDiv.textContent = 'No kabir quote to delete'
    } else {
      window.location.reload(true)
    }
  })
  .then(data => {
    window.location.reload()
  })
})