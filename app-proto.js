// Function to get an element by selector and handle errors if the selector is invalid
function getElement(selector) {
    const element = document.querySelector(selector);
    if (element) {
      return element;
    }
    throw new Error(`Selector "${selector}" does not match any element.`);
  }
  
  // Counter class
  class Counter {
    constructor(element, initialValue) {
      // Store the DOM element and initial value
      this.counter = element;
      this.value = initialValue;
  
      // Get button and value elements
      this.resetBtn = element.querySelector('.reset');
      this.increaseBtn = element.querySelector('.increase');
      this.decreaseBtn = element.querySelector('.decrease');
      this.valueDOM = element.querySelector('.value');
  
      // Set initial value in DOM
      this.valueDOM.textContent = this.value;
  
      // Bind methods to ensure 'this' context in event listeners
      this.increase = this.increase.bind(this);
      this.decrease = this.decrease.bind(this);
      this.reset = this.reset.bind(this);
  
      // Set up event listeners
      this.increaseBtn.addEventListener('click', this.increase);
      this.decreaseBtn.addEventListener('click', this.decrease);
      this.resetBtn.addEventListener('click', this.reset);
  
      // Initialize the button states
      this.updateButtons();
    }
  
    // Method to increase counter
    increase() {
      this.value++;
      this.updateValue();
    }
  
    // Method to decrease counter
    decrease() {
      if (this.value > 0) {
        this.value--;
        this.updateValue();
      }
    }
  
    // Method to reset counter
    reset() {
      this.value = 0;
      this.updateValue();
    }
  
    // Helper method to update the DOM with the current value and manage button state
    updateValue() {
      this.valueDOM.textContent = this.value;
      this.updateButtons();
    }
  
    // Helper method to disable or enable the decrease button based on the counter value
    updateButtons() {
      this.decreaseBtn.disabled = this.value === 0;
    }
  }
  
  // Initialize counters with different starting values
  const firstCounter = new Counter(getElement('.first-counter'), 100);
  const secondCounter = new Counter(getElement('.second-counter'), 200);
  