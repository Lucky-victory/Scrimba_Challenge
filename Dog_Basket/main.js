const toastElem=document.querySelector('.toast');
 const lightBoxImage = document.querySelector('.lightbox-image')
const lightBoxImageWrapper = document.querySelector('.lightbox-image-wrapper')
const likeBtns = document.querySelectorAll('.like--btn');
const shareBtns = document.querySelectorAll('.share--btn');
const postImages = document.querySelectorAll('.post__image');
shareBtns.forEach((shareBtn, i) => {
   shareBtn.addEventListener('click', triggerShare)
});

likeBtns.forEach((likeBtn, i) => {
   likeBtn.addEventListener('click', triggerLike)
});

function triggerLike(e) {

   let message = e.target.parentElement.parentElement.querySelector('.like-message');
   message.textContent = '';
   e.target.textContent = 'like';
   e.target.classList.toggle('fi-sr-heart');
   if (e.target.classList.contains('fi-sr-heart')) {
      e.target.textContent = 'liked'
      message.textContent = 'you liked this'
   }

}




postImages.forEach((postImage, i) => {
   postImage.addEventListener('click', triggerLightbox(i))
});

function triggerLightbox(i) {

   return function() {
      lightBoxImage.src = postImages[i].src;
      lightBoxImageWrapper.classList.add('show')
   }
}


lightBoxImageWrapper.addEventListener('click', () => {
   lightBoxImageWrapper.classList.remove('show')
});

function triggerShare(e) {
   const { text,title } = e.target.dataset;

   if (navigator.share) {
      window.navigator.share({

         title: `Check out these ${title} Dog`,
         text,
         url: 'https://lucky-victory.github.io/Scrimba_Challenge/Dog_Basket'
      }).then(() => {
         toastElem.textContent=' Thanks for Sharing.'
         toastElem.classList.add('showToast');
         setTimeout(() => {
            toastElem.classList.remove('showToast');

         },5000);
      }).catch(err => console.log(err));
   }
   else{
   toastElem.textContent='Your system does not support share API. try a newer version of Chromium browser.'
    toastElem.classList.add('showToast');
         setTimeout(() => {
            toastElem.classList.remove('showToast');

         },5000);

   }
  
}

