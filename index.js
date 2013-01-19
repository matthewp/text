module.exports = function (el, val) {
  if (val == null) {
    return el.textContent || el.innerText;
  }

  return el.textContent && (el.textContent = val)
    || (el.innerText = val);
};
