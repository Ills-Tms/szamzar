const formelem = document.querySelector('#form')
const egy = document.querySelector('sz1')
const ketto = document.querySelector('sz2')
const harom = document.querySelector('sz3')

const jelszo = 111

formelem.addEventListener('SUBMIT')
if (egy + ketto + harom == jelszo) {
  console.log('nyitva')
} else {
  console.log('zarva')
}