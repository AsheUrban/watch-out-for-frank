import bizFunc from './js/biz-func.js';
import $ from 'jquery';
// import 'bootstrap';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './css/styles.css';

$(document).ready(function() {
  $("form#example-form").submit(function(event) {
    event.preventDefault();
    const numbers = $("#number").val();
    const text = $("#text").val();
    const exampleText = exampleTestFunction(numbers, text);
    console.log(exampleText);
    $("#output").text(exampleText);
  
    function logReset() {
    }
  });
});