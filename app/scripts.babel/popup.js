'use strict';

console.log('\'Allo \'Allo! Popup');

$('#search-btn').on('click', ()=>{


  const start   = $('#start-input').val();
  const finish  = $('#finish-input').val();

  chrome.tabs.create({ url: `https://www.google.si/maps/dir/${start}/${finish}/` });


});