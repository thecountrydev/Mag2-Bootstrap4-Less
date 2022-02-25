var config = {
  deps: [
      'jquery',
    ],
  
  paths: {
      "bootstrap": "https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.6.0/js/bootstrap.bundle.min",
    },

    
  shim: {
      slick: {
          deps: ['jquery']
      },
      bootstrap: {
          deps: ['jquery']
        },
  },

};


