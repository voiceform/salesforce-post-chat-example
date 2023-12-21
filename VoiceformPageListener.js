window.addEventListener('message', function(event) {
      // Check for the correct message and perform action
      if (event.data.action === 'updateIframeSrc') {
          var iframe = document.querySelector('.snapins_postChat');
          if (iframe) {
              iframe.setAttribute('allow', 'microphone; camera');
              iframe.src = event.data.url;
          }
      }
  }, false);
