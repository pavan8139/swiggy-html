const name= document.getElementById('name')
const password= document.getElementById('password')
const form= document.getElementById('form')
form.addEventListener('submit',(e) =>
{
  let messages = []
  if(name.value=== '' || name.value == null)
  {
   messages.push('name is required')
  }
  if(password.value.length<=6)
  {
   messages.push('password should be greater than 6 characters')
  }
  if(messages.length > 0)
  {
   e.preventDefault()
   errorElement.innerText = messages.join(' , ')
  }
}
