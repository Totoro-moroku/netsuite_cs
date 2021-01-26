import * as clinet from "./clinet_script";

/**
 * @link https://developer.mozilla.org/ja/docs/Web/API/Document
 */

const fields = document.querySelectorAll("input[type=text]");

for (let i = 0; i < fields.length; i = (i + 1) | 0) {
  const field = fields[i];

  field.onchange = function (params) {
    clinet.fieldChanged({
      fieldId: this.id,
      value: params.target.value
    });
  };

  field.onblur = function (params) {
    const result = clinet.validateField({
      fieldId: this.id,
      value: params.target.value
    });

    if (typeof result !== "boolean") {
      throw new Error("validateFieldのreturnにBoolen以外が設定されています。");
    }

    if (!result) {
      this.focus();
    }
  };

  field.onfocus = function () {
    clinet.selectField({
      fieldId: this.id
    });
  };
}

document.querySelector("form").onsubmit = function () {
  const values = [];

  for (let i = 0; i < fields.length; i = (i + 1) | 0) {
    const field = fields[i];
    values.push({
      fieldId: field.id,
      value: field.value
    });
  }

  const result = clinet.saveRecord({
    values: values
  });

  if (typeof result !== "boolean") {
    throw new Error("saveRecordのreturnにBoolen以外が設定されています。");
  }

  return result;
};

document.getElementById("app").innerHTML = `<h1>NetsuiteのClinet<h1/>`;
