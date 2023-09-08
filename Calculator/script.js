let string = "";
let buttons = document.querySelectorAll('.button');
Array.from(buttons).forEach((button) => {
  button.addEventListener('click', (e) => {
    if (e.target.innerHTML == '=') {
      string = eval(string);
      document.querySelector('input').value = string;

      // Add a pop-up message without the port number
      alert('Calculation complete. Result: ' + string.replace(/:\d+/, ''));
        } else if (e.target.innerHTML == 'AC') {
      string = "";
      document.querySelector('input').value = string;
    } else {
      console.log(e.target);
      string = string + e.target.innerHTML;
      document.querySelector('input').value = string;
    }
  });
});
