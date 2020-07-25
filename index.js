if(typeof exports != "undefined"){    
    exports.$ = document.querySelector.bind(document);    
    exports.$$ = document.querySelectorAll.bind(document);
  }else{    
    var $ = document.querySelector.bind(document);    
    var $$ = document.querySelectorAll.bind(document);
  }

neuicons.replace()
