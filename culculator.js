

const display = document.getElementById('number_entered');
const buttonsField = document.getElementById('buttons_field');
let expression = '';
function updateDisplay(value) {
  display.value = value;
}


function safeEvaluate(expr) {
  const allowed = /^[0-9+\-*/().\s]+$/;
  if (!allowed.test(expr)) {
    throw new Error('Invalid characters in expression');
  }
  return new Function(`return (${expr})`)();
}

// Handle click events with event delegation
buttonsField.addEventListener('click', (e) => {
  const btn = e.target.closest('button');
  if (!btn) return;

  const val = btn.getAttribute('data-value');
  const action = btn.getAttribute('data-action');

  if (val !== null) {
    // Append value to expression
    // prevent multiple leading zeros or many decimal points in the same number:
    handleAppend(val);
  } else if (action) {
    if (action === 'clear') {
      expression = '';
      updateDisplay(expression);
    } else if (action === 'equals') {
      handleEquals();
    } else if (action === 'percent') {
      handlePercent();
    } else if (action === 'backspace') {
      expression = expression.slice(0, -1);
      updateDisplay(expression);
    }
  }
});

// Append logic: prevents adding invalid sequences (like '..' in a number)
function handleAppend(val) {
  // If the user presses '.', ensure we don't already have a '.' in the current number
  if (val === '.') {
    // find the last token after any operator
    const parts = expression.split(/[\+\-\*\/]/);
    const last = parts[parts.length - 1];
    if (last.includes('.')) {
      return; // ignore second dot in same number
    }
  }

  // Prevent expression starting with multiple zeros like "00" unless user intentionally wants it
  if (expression === '' && val === '00') {
    expression = '0';
    updateDisplay(expression);
    return;
  }

  // Prevent two operators in a row (except minus for negative numbers)
  if (/^[+\-*/]$/.test(val) && expression === '' && val !== '-') {
    // don't allow + * / at start
    return;
  }
  if (/^[+\-*/]$/.test(val) && /[+\-*/]$/.test(expression)) {
    // replace last operator with new one (user changed mind)
    expression = expression.slice(0, -1) + val;
    updateDisplay(expression);
    return;
  }

  expression += val;
  updateDisplay(expression);
}

// Percent button behavior: convert last number to percent (e.g. "50" -> "0.5")
function handlePercent() {
  // find last number token
  const match = expression.match(/([0-9.]+)$/);
  if (!match) return; // nothing to percent
  const number = match[1];
  const start = expression.length - number.length;
  const percentValue = String(parseFloat(number) / 100);
  expression = expression.slice(0, start) + percentValue;
  updateDisplay(expression);
}

// Evaluate expression
function handleEquals() {
  if (!expression) return;
  try {
    // Replace unicode division sign if any
    const normalized = expression.replace(/÷/g, '/').replace(/x/g, '*');

    // Evaluate
    const result = safeEvaluate(normalized);

    // Format result: trim long floats
    let out = result;
    if (typeof out === 'number') {
      // handle floating rounding
      if (!Number.isInteger(out)) {
        out = parseFloat(out.toFixed(10)); // avoid long FP tails
      }
    }

    expression = String(out);
    updateDisplay(expression);
  } catch (err) {
    updateDisplay('Error');
    expression = '';
    console.error('Evaluation error:', err);
  }
}

// Keyboard support (optional): allow digits, operators, Enter, Backspace, Escape
window.addEventListener('keydown', (e) => {
  const key = e.key;
  if ((/^[0-9]$/).test(key)) {
    handleAppend(key);
    e.preventDefault();
  } else if (key === '.') {
    handleAppend('.');
    e.preventDefault();
  } else if (['+', '-', '*', '/'].includes(key)) {
    handleAppend(key);
    e.preventDefault();
  } else if (key === 'Enter' || key === '=') {
    handleEquals();
    e.preventDefault();
  } else if (key === 'Backspace') {
    expression = expression.slice(0, -1);
    updateDisplay(expression);
    e.preventDefault();
  } else if (key === 'Escape') {
    expression = '';
    updateDisplay(expression);
    e.preventDefault();
  }
});

// Initialize display
updateDisplay('');
