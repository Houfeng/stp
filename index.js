module.exports = function stp(strTmpl, data) {
  if (data !== null && data !== undefined) {
    return stp(strTmpl)(data);
  }
  return new Function("$", "with($){return `" + strTmpl.replace(/`/g, '\\`') + '`;}');
};