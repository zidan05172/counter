// Utility function to select an element with error handling
function getElement(selector) {
  const element = document.querySelector(selector);
  if (!element) throw new Error(`No element found for selector "${selector}"`);
  return element;
}

// Counter class
class Counter {
  constructor(element, initialValue = 0) {
    this.value = initialValue;
    this.valueDOM = element.querySelector('.value');
    this.valueDOM.textContent = this.value;

    // Attach event listeners with bound methods
    element.querySelector('.increase').addEventListener('click', () => this.updateValue(1));
    element.querySelector('.decrease').addEventListener('click', () => this.updateValue(-1));
    element.querySelector('.reset').addEventListener('click', () => this.resetValue());
  }

  // Method to update the counter value
  updateValue(amount) {
    this.value += amount;
    this.valueDOM.textContent = this.value;
  }

  // Method to reset the counter value
  resetValue() {
    this.value = 0;
    this.valueDOM.textContent = this.value;
  }
}

// Initialize counters with different starting values
const firstCounter = new Counter(getElement('.first-counter'), 100);
const secondCounter = new Counter(getElement('.second-counter'), 200);