//libraries like jquery etc
const submit = document.querySelector('.card__submit');
const scores = document.querySelectorAll('.btn-score');
const modal = document.querySelector('.modal');
const card = document.querySelector('.card');
const selectedScore = document.querySelector('.selected');

let selected = 0;

scores.forEach(element =>{
  element.addEventListener('click', (event)=>{
    selected = event.target.value;
    console.log(selected)
  });
});

submit.addEventListener('click', ()=>{
  card.style.display = 'none';
  modal.style.display = 'flex';
  selectedScore.innerHTML = selected;
});