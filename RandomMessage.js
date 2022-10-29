(function () {

    let target = document.getElementById('randomMessage')
    let message = [
    'Nothing is impossible. The word itself says I\'m possible - Audrey Hepburn',
    'When you have a dream, you\'ve got to grab it and never let go. - Carol Burnett',
    'There is nothing impossible to they who will try. - Alexander the Great',
    'The bad news is time flies. The good news is you\'re the pilot. - Michael Altshuler',
    'You miss 100% of the shots you don\'t take. - Wayne Gretsky - Michael Scott'
   ];

   newTitle();

   document.getElementById('getMessageButton').addEventListener('click', newTitle, false);

   function newTitle() {
    let i = (Math.random() * message.length) | 0;
    target.innerText = message[i];
   }
})()