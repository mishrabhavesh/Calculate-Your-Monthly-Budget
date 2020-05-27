// BUDGET CONTROLLER

var budgetController = (function () {

  // add code

})();


// UI CONTROLLER

var UIController = (function () {
  // add code

  var DOMstring = {
    inputType: '.add__type',
    inputDescription: '.add__description',
    inputValue: '.add__value',
    inputButton: '.add__btn'
  };

  return {
    getinput: function () {
      return {
        type: document.querySelector(DOMstring.inputType).value,
        description: document.querySelector(DOMstring.inputDescription).value,
        value: document.querySelector(DOMstring.inputValue).value
      }
    },

    getDOMstring: function () {
      return DOMstring;
    }
  };

})();

// GLOBAL APP CONTROLLER

var controller = (function (UIctrl, budgetController) {

  var DOM = UIctrl.getDOMstring();
  var ctrlAddItem = function () {
    var input = UIctrl.getinput();
    console.log(input)
  }

  document.querySelector(DOM.inputButton).addEventListener('click', ctrlAddItem);

  document.addEventListener('keypress', function (event) {
    if (event.charCode == 13) {
      ctrlAddItem();
    }
  })

})(UIController, budgetController);