const petals = document.querySelector('.petals');
const petals2 = document.querySelector('.petals2');
const petals3 = document.querySelector('.petals3');

for (let i = 0; i < 12; i++) {
    const petal = document.createElement('div');
    petal.style.transform = `rotate(${i * 30}deg)`;
    const petal2 = document.createElement('div');
    petal2.style.transform = `rotate(${i * 30}deg)`;
    const petal3 = document.createElement('div');
    petal3.style.transform = `rotate(${i * 30}deg)`;
    petals.appendChild(petal);
    petals2.appendChild(petal2);
    petals3.appendChild(petal3);
}
