/**
 * fieldChanged
 * @param {Object} context
 * @param {String} context.fieldId
 * @param {String} context.value
 * @returns {Void}
 */
function fieldChanged(context) {
  console.log({
    function: "fieldChanged",
    context: context
  });
}

/**
 *
 * @param {Objcet} context
 * @param {Objcet} context.fieldId
 * @returns {Void}
 */
function selectField(context) {
  console.log({
    function: "selectField",
    context: context
  });
}

/**
 *
 * @param {Object} context
 * @param {Array} context.values
 */
function saveRecord(context) {
  console.log({
    function: "saveRecord",
    context: context
  });

  return false;
}

/**
 * validateField
 * @param {Object} context
 * @param {String} context.fieldId
 * @param {String} context.value
 * @returns {Boolean}
 */
function validateField(context) {
  console.log({
    function: "validateField",
    context: context
  });
  return true;
}

export { fieldChanged, validateField, selectField, saveRecord };
