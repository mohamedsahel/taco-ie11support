// const formElement = select('.search_form')

// const fields = [
//   {
//     name: 'postcode',
//     event: 'input'
//   },
//   {
//     name: 'type_terrein',
//     event: 'change'
//   },
//   {
//     name: 'situatie',
//     event: 'change'
//   }
// ]


// const getField = function (name) {
//   return form.querySelectorAll(`.form_step[data-name="${name}"]`)[0]
// }

// class Form {
//   constructor(form) {
//     this.form = form
//     this.fields = []
//   }

//   canSubmit() {
//     let errors = []

//     this.fields.forEach(field => {
//       if(field.name === 'postcode' && !checkPostcode(field.input.value)) {
//         errors.push(field)
//       } else if(!field.input.value) {
//         errors.push(field)
//       }
//     })

//     if(!errors.length) {
//       errors = false
//     }

//     return { errors }
//   }



//   render = () => {
//     const formStorage = JSON.parse(localStorage.getItem('search_params'))
//     console.log(formStorage)

//     this.fields = fields.map((field, index) => {
//       field = new Field({ ...field, index, nextField: fields[index + 1] })
//       field.render()

//       return field
//     })

//     if (formStorage) {
//       this.form.classList.add('opened')
//       this.fields[this.fields.length - 1].nextBtn.disabled = false
//     } else {
//       this.fields.forEach((field) => {
//         if(field.index > 0) {
//           field.field.classList.add('hidden')
//         }
//       })
//     }

//     form.addEventListener('submit', (e) => {
//       e.preventDefault()
//       const { errors } = this.canSubmit()

//       if(!errors) {
//         form.submit()
//         form.classList.add('submitting')
//       } else {
//         // e.preventDefault()
//         errors.forEach((error, index) => {
//           error.field.classList.add('error')

//           if(index === 0) {
//             error.field.scrollIntoView({
//               behavior: 'smooth',
//               block: 'center'
//             })
//           }
//         })
//       }
//     })

//     localStorage.removeItem('search_params')
//   }
// }



// class Field {
//   constructor({ name, index, event, nextField }) {
//     // elements
//     this.field = getField(name),
//     this.nextBtn = this.field.querySelector('.next'),
//     this.input = document.forms[0][name],
//     this.pickedValueSpan = this.field.querySelector('.step_picked-value span'),
//     this.editBtn = this.field.querySelector('.step_edit-icon')

//     this.name = name
//     this.event = event
//     this.index = index
//     this.nextField = nextField
//     this.canNext = false
//     // rules
//   }


//   // Input Change Handler
//   onInput = (e) => {
//     const value = this.input.value

//     if(this.name === 'postcode') {
//       if (checkPostcode(value)) {
//         this.field.classList.remove('error')
//       }
//       this.canNext = value.length >= 4
//     } else {
//       this.canNext = !!value
//     }

//     if (this.canNext) {
//       this.nextBtn.disabled = false
//     } else {
//       this.nextBtn.disabled = true
//     }
//   }

//   // Next Handler
//   onNext = () => {
//     let value = this.input.value

//     if(!this.nextField) return

//     if (this.name === 'postcode') {
//       if(checkPostcode(value)) {
//         value = value.toUpperCase()
//       } else {
//         this.field.classList.add('error')
//         return
//       }
//     }


//     this.field.classList.add('passed')
//     this.pickedValueSpan.textContent = value
//     // check if it is not the last fied
//     getField(this.nextField.name).classList.remove('hidden')
//   }

//   onEdit = () => {
//     this.field.classList.remove('passed')
//     this.field.classList.add('editing')
//   }

//   render() {
//     this.field.addEventListener(this.event, this.onInput)
//     this.nextBtn.addEventListener('click', this.onNext)
//     this.editBtn.addEventListener('click', this.onEdit)

//     const formStorage = JSON.parse(localStorage.getItem('search_params'))

//     if(formStorage) {
//       this.input.value = formStorage[this.name]
//     }
//   }

// }

// const form = new Form(formElement)

// form.render()

"use strict";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var formElement = select('.search_form');
var fields = [{
  name: 'postcode',
  event: 'input'
}, {
  name: 'type_terrein',
  event: 'change'
}, {
  name: 'situatie',
  event: 'change'
}];

var getField = function getField(name) {
  var index
  for(var i = 0; i < fields.length; i++) {
    if(fields[i].name === name) {
      index = i
      break;
    }
  }
  return document.querySelectorAll(".form_step")[index];
};

var Form = /*#__PURE__*/function () {
  function Form(_form) {
    var _this = this;

    _classCallCheck(this, Form);

    _defineProperty(this, "render", function () {
      var formStorage = JSON.parse(window.localStorage.getItem('search_params'));

      _this.fields = fields.map(function (field, index) {
        field = new Field(_objectSpread(_objectSpread({}, field), {}, {
          index: index,
          nextField: fields[index + 1]
        }));
        field.render();
        return field;
      });

      if (formStorage) {
        _this.form.classList.add('opened');

        _this.fields[_this.fields.length - 1].nextBtn.disabled = false;
      } else {
        _this.fields.forEach(function (field) {
          if (field.index > 0) {
            field.field.classList.add('hidden');
          }
        });
      }
      _this.form.addEventListener('submit', function (e) {
        // e.preventDefault();

        var _this$canSubmit = _this.canSubmit(),
            errors = _this$canSubmit.errors;

        if (!errors) {
          // _this.form.submit();
          _this.form.classList.add('submitting');
        } else {
          e.preventDefault()
          errors.forEach(function (error, index) {
            error.field.classList.add('error');

            if (index === 0) {
              error.field.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
              });
            }
          });
        }
      });
      window.localStorage.removeItem('search_params');
    });

    this.form = _form;
    this.fields = [];
  }

  _createClass(Form, [{
    key: "canSubmit",
    value: function canSubmit() {
      var errors = [];
      this.fields.forEach(function (field) {
        if (field.name === 'postcode' && !checkPostcode(field.input.value)) {
          errors.push(field);
        } else if (!document.querySelectorAll('input[name=' + field.name + ']:checked')[0].value) {
          errors.push(field);
        }
      });

      if (!errors.length) {
        errors = false;
      }

      return {
        errors: errors
      };
    }
  }]);

  return Form;
}();

var Field = /*#__PURE__*/function () {
  function Field(_ref) {
    var _this2 = this;

    var name = _ref.name,
        index = _ref.index,
        event = _ref.event,
        nextField = _ref.nextField;

    _classCallCheck(this, Field);

    _defineProperty(this, "onInput", function (e) {
      var value = e.target.value;

      if (_this2.name === 'postcode') {
        if (checkPostcode(value)) {
          _this2.field.classList.remove('error');
        }

        _this2.canNext = value.length >= 4;
      } else {
        _this2.canNext = !!value;
      }

      if (_this2.canNext) {
        _this2.nextBtn.disabled = false;
      } else {
        _this2.nextBtn.disabled = true;
      }
    });

    _defineProperty(this, "onNext", function () {
      var value = _this2.input.value;
      if (!_this2.nextField) return;

      if (_this2.name === 'postcode') {
        if (checkPostcode(value)) {
          _this2.pickedValueSpan.textContent = value.toUpperCase();
        } else {
          _this2.field.classList.add('error');

          return;
        }
      }

      if(_this2.name === 'type_terrein') {
        _this2.pickedValueSpan.textContent = document.querySelectorAll('input[name="type_terrein"]:checked')[0].value;
      }

      _this2.field.classList.add('passed');

      getField(_this2.nextField.name).classList.remove('hidden');
    });

    _defineProperty(this, "onEdit", function () {
      _this2.field.classList.remove('passed');

      _this2.field.classList.add('editing');
    });

    // elements
    this.field = getField(name),
    this.nextBtn = this.field.querySelector('.next'),
    this.input = document.forms[0][name],
    this.pickedValueSpan = this.field.querySelector('.step_picked-value span'),
    this.editBtn = this.field.querySelector('.step_edit-icon');
    this.name = name;
    this.event = event;
    this.index = index;
    this.nextField = nextField;
    this.canNext = false; // rules
  } // Input Change Handler


  _createClass(Field, [{
    key: "render",
    value: function render() {
      this.field.addEventListener(this.event, this.onInput);
      this.nextBtn.addEventListener('click', this.onNext);
      this.editBtn.addEventListener('click', this.onEdit);
      var formStorage = JSON.parse(window.localStorage.getItem('search_params'));

      if (formStorage) {
        this.input.value = formStorage[this.name];
      }
    }
  }]);

  return Field;
}();

var form = new Form(formElement);
form.render();