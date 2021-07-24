    const ENERGY_INPUT = document.querySelector('#energy_input');
    const WRAPPER=document.querySelector('.wrapper');
    ENERGY_INPUT.addEventListener('input', updateEnergy);

    function updateEnergy() {
      let inputValue = +ENERGY_INPUT.value;
      if (inputValue < 0) {
        ENERGY_INPUT.value=0;
        inputValue = 0;
      }
      else if (inputValue > 100) {
                ENERGY_INPUT.value=100;
        inputValue = 100
      }

      drawGUAGE(inputValue);
      changeBgColor(inputValue)
    }

function changeBgColor(val){
  
  if( val <= 25){
    WRAPPER.style.backgroundColor='#D10808'
  }
  else if(val >= 25 && val <= 50 ){
        WRAPPER.style.backgroundColor='#E25B02'

  }
  else{
        WRAPPER.style.backgroundColor='#058510'

  }
}
    google.charts.load('current', { 'packages': ['gauge'] });
    google.charts.setOnLoadCallback(drawGUAGE);

    function drawGUAGE(val) {

      var data = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['Energy', 0]
        ]);

      var options = {
        width: 600,
        height: 350,
        redFrom: 0,
        redTo: 25,
        yellowFrom: 25,
        yellowTo: 50,
        minorTicks: 5,
        greenFrom: 50,
        greenTo: 100
      };

      const GUAGE = new google.visualization.Gauge(document.getElementById('energy_guage'));

      GUAGE.draw(data, options);

      setTimeout(function() {
        data.setValue(0, 1, val);
        GUAGE.draw(data, options);

      }, 50)
      

    }