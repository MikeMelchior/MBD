const body = document.querySelector('body')
const main = document.createElement('div');
main.classList.add('main');
body.appendChild(main);

const countDownContainer = document.createElement('div');
countDownContainer.classList.add('countdown');

const pDays = document.createElement('p');
pDays.classList.add('number','days');

const pHours = document.createElement('p');
pHours.classList.add('number','hours');

const pMinutes = document.createElement('p');
pMinutes.classList.add('number','minutes');

const pSeconds = document.createElement('p');
pSeconds.classList.add('number','seconds');

countDownContainer.appendChild(pDays);
countDownContainer.appendChild(pHours);
countDownContainer.appendChild(pMinutes);
countDownContainer.appendChild(pSeconds);



const mainContent = document.querySelector('.main')
mainContent.appendChild(countDownContainer);

const countdownDate = (new Date('May 15, 2023 00:00:00'));
let now = new Date().getTime();
const distance = countdownDate - now;

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

pDays.textContent = `${days} Days`;
pHours.textContent = `${hours} Hours`;
pMinutes.textContent = `${minutes} Minutes`;
pSeconds.textContent = `${seconds} Seconds`;

const celebrationWindow = document.createElement('div');



const updateCountdown = setInterval(() => {
    const countdownDate = (new Date('May 15, 2023 00:00:00'));

    let now = new Date().getTime();
    const distance = countdownDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60) / (1000 * 60)));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    pDays.textContent = `${days} Days`;
    pHours.textContent = `${hours} Hours`;
    pMinutes.textContent = `${minutes} Minutes`;
    pSeconds.textContent = `${seconds} Seconds`;

    console.log('One second closer...')
    if (pSeconds.textContent.split(' ')[0] == 00) {
        console.log('One minute closer...')
        if (pMinutes.textContent.split(' ')[0] == 00) {
            console.log('One hour closer...')
            if (pHours.textContent.split(' ')[0] == 00) {
                console.log('One day closer...')
                if (pDays.textContent.split(' ')[0] <= 00) {
                    alert('AWWW YEEEEAAAHHH');
                    window.open('https://youtu.be/5qm8PH4xAss?t=39');





                }
            }
        } 
    }
}, 1000)



const celebrationText = document.createElement('p');
celebrationText.classList.add('celebration-text');
celebrationText.textContent = 'UNTIL YOU\'RE 30!';
mainContent.appendChild(celebrationText);













