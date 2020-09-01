/* global fetch */
import './app.scss'

const query = '/api/push/1.0/realtime/realtime/push/?pushkey=ac39f63cebae37dc5b58221833cdfa840f3842dbccebd45f1bfe29a3'
const baseUrl = 'https://eburdet.opendatasoft.com'
const form = document.querySelector('form')
const formData = new FormData(form)

const postJSONToUrl = (event) => {
  event.preventDefault()
  const jsonData = {
    nom: formData.get('nom'),
    commentaire: formData.get('commentaire'),
    note: formData.get('note')
  }
  console.log(jsonData)
  fetch(baseUrl + query, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  }).then(res => console.log(res))
    .catch(err => console.error(err))
}

form.addEventListener('submit', postJSONToUrl)
