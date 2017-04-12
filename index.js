module.exports = function stp(strTmpl, data) {
  if (data !== null && data !== undefined) {
    return stp(strTmpl)(data);
  }
  strTmpl = strTmpl.replace(/\\/g, '\\\\');
  strTmpl = strTmpl.replace(/`/g, '\\`');
  return new Function("$", "with($){return `" + strTmpl + '`;}');
};