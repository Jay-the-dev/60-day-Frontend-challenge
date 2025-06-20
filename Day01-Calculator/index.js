const display = document.getElementById('display');

const appendValue = (value) => {
  display.value += value;
}

const resetDisplay =() =>{
  display.value = '';
}

const calculateResult = () => {
  try {
    display.value = eval(display.value);
  } catch (error) {
    display.value = 'Error';
  }
}