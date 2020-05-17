(() => {
    const startBtn = document.querySelector('#start');
    const output = document.querySelector('#output');
    console.log(startBtn,output)
    function start() {
      const recognition = new webkitSpeechRecognition();
      recognition.interimResults = true;
      recognition.lang = "pt-BR";
      recognition.continuous = true;
      recognition.start();

      recognition.onstart = () => {
        output.textContent = '';
        var eventfalse =document.querySelector('#eventfalse'); 
        var eventtrue = document.querySelector('#eventtrue');
        if(eventfalse.visible == true) {
          eventfalse.hidden = true
          eventtrue.hidden = false
        }
        let msg = 'Comece a falar!';
        eventtrue.innerHTML = msg;
      }

      recognition.onend = () => {
        var eventfalse =document.querySelector('#eventfalse'); 
        var eventtrue = document.querySelector('#eventtrue');
        if(eventtrue.visible == true) {
          eventtrue.hidden = true
          eventfalse.hidden = false
        }
        let msg = 'Aperte novamente para tentar outra vez!';
        eventtrue.innerHTML = msg;
      }

      // This event happens when you talk in the microphone
      recognition.onresult = function(event) {
        for (let i = event.resultIndex; i < event.results.length; i++) {
          if (event.results[i].isFinal){
            if (event.results[i][0].transcript.trim() == 'abacate') {
              alert('Acertou')
              const content = event.results[i][0].transcript.trim();
              output.textContent = content;
              recognition.stop();
            }
            else{
              alert('ERRRRRRROOOUUU')
              recognition.stop();
            }
          }
        }
      };
    };
    startBtn.addEventListener('click', () => start());
    //addEventListener()
    


  })();