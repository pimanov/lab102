String.prototype.addr = 
function (_prefix,_hamper,_part,_postfix,_face)
{
  _hamper=
  _prefix+
  "@"+
  this+
  _part+
  "."+
  (_postfix || '')
  document.write((_face||_hamper).link("mailto:"+_hamper));
}