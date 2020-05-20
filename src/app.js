/* global fetch */
import './app.scss'

const query = '/api/push/1.0/custom-form/realtime/push/?pushkey=5f04ae63654fdda6caf0cd67eb8b73103a5e81fda160d61b81e3a622'
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
  fetch(baseUrl + query, {
    method: 'POST',
    mode: 'no-cors',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(jsonData)
  }).then(res => console.log(res))
}

form.addEventListener('submit', postJSONToUrl)
