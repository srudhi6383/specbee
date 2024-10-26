var cards = document.querySelectorAll('.cards .card');

cards.forEach(function(card) {
    card.addEventListener('click', function() {
        var speakerDetails = document.querySelector('.speaker');
        var programCards = document.querySelector('.cards');
        
        var avatar = card.getAttribute('data-avatar');
        var name = card.getAttribute('data-name');
        var post = card.getAttribute('data-post');
        var company = card.getAttribute('data-company');

        speakerDetails.querySelector('.speaker__avatar img').src = avatar;
        speakerDetails.querySelector('.speaker__name').textContent = name;
        speakerDetails.querySelector('.speaker__designation').textContent = post;
        speakerDetails.querySelector('.speaker__company').textContent = company;

        speakerDetails.classList.add('active');
        programCards.classList.add('active'); 
    });
});

document.querySelector('.speaker__close-icon').addEventListener('click', function() {
    var speakerDetails = document.querySelector('.speaker');
    var programCards = document.querySelector('.cards');

    speakerDetails.classList.remove('active');
    programCards.classList.remove('active');
});

