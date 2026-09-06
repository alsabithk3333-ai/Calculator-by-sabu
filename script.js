// display & memory
let display = document.getElementById('display');
let eq = '';

// Buttons function
function press(btn) {
  let last = eq[eq.length - 1];
  let ops = ['+', '-', '*', '/', '%'];

  // No double operators
  if (ops.includes(btn) && ops.includes(last)) {
    eq = eq.slice(0, -1) + btn;
  } else {
    eq += btn;
  }

  display.value = eq;
}

// Clear everything
function clearAll() {
  eq = '';
  display.value = '';
}

// Delete last
function deleteLast() {
  eq = eq.slice(0, -1);
  display.value = eq;
}

// Calculate
function calculate() {
  if (!eq) return;

  try {
    let result = eval(eq);
    if (!Number.isInteger(result)) {
      result = Math.round(result * 10000) / 10000;
    }
    display.value = result;
    eq = result.toString();
  } catch {
    display.value = 'Error';
    eq = '';
  }
}

// Keyboard
document.addEventListener('keydown', function(e) {
  if (!isNaN(e.key) || '+-*/.%'.includes(e.key)) press(e.key);
  else if (e.key === 'Enter') calculate();
  else if (e.key === 'Backspace') deleteLast();
  else if (e.key === 'Escape') clearAll();
});