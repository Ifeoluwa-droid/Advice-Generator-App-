let genAdviceBtn = $('.icon-div-container');
let adviceNumber = $('.advice-number');
let advice = $('.advice-text');

genAdviceBtn.on('click', () => {
  setTimeout(() => {
    fetch('https://api.adviceslip.com/advice')
    .then(res => res.json())
    .then(data => {adviceNumber.text(data.slip.id); advice.text(data.slip.advice)}).then(() => {genAdviceBtn.removeClass('active'); return;});
  }, 1000);
  genAdviceBtn.addClass('active');
});
