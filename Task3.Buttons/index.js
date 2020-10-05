const audioList = document.querySelectorAll('.aud');
const cont = document.querySelector('#container');

const player = word => {
    let player;
    audioList.forEach(el => {
        if (el.id === word) {
            player = el;
        };
    });
    player.play();
};

cont.addEventListener('click', ({target: t}) => {
    button = t.closest('.btn');
    if (button !== null) player(button.dataset.word);
});