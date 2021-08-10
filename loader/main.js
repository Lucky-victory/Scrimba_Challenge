const loaderContainer= document.querySelector('.loader-container');
const startBtn = g=document.getElementById('start-btn');

startBtn.addEventListener('click',startLoader);
function startLoader(){
  if(loaderContainer.classList.contains('loading')){
    
  loaderContainer.classList.remove('loading');
  startBtn.textContent='start'
  return
  }
  loaderContainer.classList.add('loading');
  startBtn.textContent='stop'

}