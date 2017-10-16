document.getElementById('facebook').addEventListener('click', function(event) {
  var facebook = event.target.textContent
  if (facebook === 'facebook') {
  event.target.textContent = 'abcd'
} else if (facebook === 'abcd') {
  event.target.textContent = 'facebook'
}
});
