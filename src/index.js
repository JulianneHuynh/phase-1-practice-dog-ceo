console.log('%c HI', 'color: firebrick')


function loadImages(){
  const imgUrl = "https://dog.ceo/api/breeds/image/random/4"
  fetch(imgUrl)
  .then (resp => resp.json())
  .then (results =>{
    results.message.forEach(image =>{
      // add image 
      addImage(image)
    });
  })
}
function addImage(dogPicUrl) {
  const container = document.getElementById('dog-image-container')
  const newImage = document.createElement('img')
  newImage.src = dogPicUrl
  container.appendChild(newImage)
}
document.addEventListener('DOMContentLoaded', function (){
  //load image 
  loadImages()
})