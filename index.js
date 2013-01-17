module.exports = function (el, val) {
  if (!val) {
    return el.textContent || el.innerText;
  }

  return el.textContent && (el.textContent = val)
    || (el.innerText = val);
};