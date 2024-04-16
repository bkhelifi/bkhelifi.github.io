$('.toggle-button').on('click', function() {
  $('.left-sidebar').toggleClass('minimize');
});

$('.user-profile').on('click', function() {
  $('.left-sidebar').toggleClass('minimize');
});

$('.close-chat-btn').on('click', function() {
  $('.direct-messaging ').addClass('minimize');
});

$('.open-chat-btn').on('click', function() {
  $('.direct-messaging ').toggleClass('minimize');
});

$('.open-music-btn').on('click', function() {
  $('.music-player').toggleClass('show');
});

$('.open-timer-btn').on('click', function() {
  $('.timer-display').toggleClass('show');
});