document.getElementById('facebook').addEventListener('click', function(event) {
  var facebook = event.target.textContent
  if (facebook === 'facebook') {
  event.target.textContent = 'Anjali'
} else if (facebook === 'Anjali') {
  event.target.textContent = 'facebook'
}
});
