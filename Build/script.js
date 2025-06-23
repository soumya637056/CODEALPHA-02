const display = document.getElementById('display');
const buttons = document.querySelectorAll('.btn');
let currentInput = '';

function updateDisplay() {
  display.value = currentInput || '0';
}

buttons.forEach(button => {
  button.addEventListener('click', () => {
    const value = button.dataset.value;

    if (value === 'C') {
      currentInput = '';
    } else if (value === '=') {
      try {
        currentInput = eval(currentInput).toString();
      } catch {
        currentInput = 'Error';
      }
    } else {
      if (currentInput === 'Error') currentInput = '';
      currentInput += value;
    }

    updateDisplay();
  });
});

// Keyboard Support
document.addEventListener('keydown', (e) => {
  const key = e.key;

  if ((/[\d\+\-\*\/\.]/.test(key))) {
    currentInput += key;
  } else if (key === 'Enter') {
    try {
      currentInput = eval(currentInput).toString();
    } catch {
      currentInput = 'Error';
    }
  } else if (key === 'Backspace') {
    currentInput = currentInput.slice(0, -1);
  } else if (key.toLowerCase() === 'c') {
    currentInput = '';
  }

  updateDisplay();
});
