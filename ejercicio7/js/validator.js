(function () {
  'use strict';
    window.addEventListener('load', function () {
      const form = document.getElementById('registrationForm');
      form.addEventListener('submit', function (event) {            
            if (!form.checkValidity()) {
              event.preventDefault();
              event.stopPropagation();
              Array.from(form.elements).forEach((input) => {
                if (!input.checkValidity()) {
                  input.classList.add('is-invalid');
                } else {
                  input.classList.remove('is-invalid');
                }
              });
            }
          }, false);
        }, false);
      })();