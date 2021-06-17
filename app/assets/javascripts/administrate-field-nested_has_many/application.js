//= require cocoon
//= require selectize

function initSelectize() {
  setTimeout(() => {
    $('.field-unit--belongs-to select').selectize({});
    $(".field-unit--has-many select").selectize({});
    $('.field-unit--polymorphic select').selectize({});
  }, 100)
}

document.addEventListener("turbolinks:load", function() {
  $('.add_fields').on('click', initSelectize)
})
