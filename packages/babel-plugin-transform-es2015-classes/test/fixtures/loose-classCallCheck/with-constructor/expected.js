let A = function A() {
  console.log('a');
};

let B = function () {
  function B() {}

  var _proto = B.prototype;

  _proto.b = function b() {
    console.log('b');
  };

  return B;
}();
