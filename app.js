(() => {

  let counterValue = 0;

  const buttons = document.querySelectorAll('button');
  const counter = document.querySelector('.counter-counter');
 

  console.log(counter);

  buttons.forEach((button) => {
    button.addEventListener('click', (event) => {
      //clicked element
      const value = event.target;

      if (value.id === 'lower-count') {
        counterValue--;
      } else if (value.id === 'add-count') {
        counterValue++;
      } else {
        counterValue = 0;
      }
      counter.textContent = counterValue;

      //change color of the counter
      
    });
  });




})();