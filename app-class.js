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
      this.decreaseBtn = element.querySelector('.decrease');
      this.valueDOM.textContent = this.value;
  
      // Attach event listeners with bound methods
      element.querySelector('.increase').addEventListener('click', () => this.updateValue(1));
      this.decreaseBtn.addEventListener('click', () => this.updateValue(-1));
      element.querySelector('.reset').addEventListener('click', () => this.resetValue());
  
      // Set initial button state
      this.updateButtonState();
    }
  
    // Method to update the counter value
    updateValue(amount) {
      if (this.value + amount >= 0) {
        this.value += amount;
        this.valueDOM.textContent = this.value;
        this.updateButtonState();
      }
    }
  
    // Method to reset the counter value
    resetValue() {
      this.value = 0;
      this.valueDOM.textContent = this.value;
      this.updateButtonState();
    }
  
    // Method to enable/disable the decrease button based on the counter value
    updateButtonState() {
      this.decreaseBtn.disabled = this.value === 0;
    }
  }
  
  // Initialize counters with different starting values
  const firstCounter = new Counter(getElement('.first-counter'), 100);
  const secondCounter = new Counter(getElement('.second-counter'), 200);
  