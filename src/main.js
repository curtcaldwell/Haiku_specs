import './styles.css';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Haiku } from './haiku.js';

$(document).ready(function() {
  $('#haiku-form').submit(function(event) {
    event.preventDefault();
     var line1 = $('#line1').val();
     var line2 = $('#line2').val();
     var line3 = $('#line3').val();
     var output = [];
     console.log($('#line1'));
     output.push(new Haiku(line1).masterF());
     output.push(new Haiku(line2).masterF());
     output.push(new Haiku(line3).masterF());
     console.log(output);
     if (output[0] == 5 && output[1] == 7 && output[2] == 5) {
         $('#solution').append("<li> The poem is a haiku</li>");
     } else {
       $('#solution').append("<li> The poem is NOT a haiku</li>");
     }
    //  output.forEach(function(element){
    //   $('#solution').append("<li> The line has " + element + " syllabels</li>");
    // });
  })
})
