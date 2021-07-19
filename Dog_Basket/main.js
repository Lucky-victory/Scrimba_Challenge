// const DOG_API_KEY='f3ee6048-7fe7-457a-8068-68d52b50583d';
// async function fetchDogs(){
//    let fetchedData;
//    try{
      
   
//    const res= await fetch(`https://api.thedogapi.com/v1/images/search?api_key=${DOG_API_KEY}`);
//     fetchedData= res.json();
//    }
//    catch(err){
//       if(err)
//       throw err;
//    }
//    return fetchedData
// }

// function renderHtml(dogs) {
//    //let c =  dogs.then(d => d)
//    //console.log(c);
//    let img=document.createElement('img');
//    img.width='400'
//    img.src=dogs[0].url
// console.log(dogs);
//    document.body.appendChild(img)

// }
//  fetchDogs().then(data => renderHtml(data))
const lightBoxImage=document.querySelector('.lightbox-image')
const lightBoxImageWrapper=document.querySelector('.lightbox-image-wrapper')
const likeBtns=document.querySelectorAll('.like--btn');
const postImages=document.querySelectorAll('.post__image');
likeBtns.forEach((likeBtn,i)=>{
   likeBtn.addEventListener('click',triggerLike)
});
function triggerLike(e){

      let message = e.target.parentElement.parentElement.querySelector('.like-message');
   message.textContent='';
   e.target.textContent='like';
      e.target.classList.toggle('fi-sr-heart');
      if(e.target.classList.contains('fi-sr-heart')){
         e.target.textContent='liked'
            message.textContent = 'you liked this'
      }

}




postImages.forEach((postImage,i)=>{
   postImage.addEventListener('click',triggerLightbox(i))
});
function triggerLightbox(i){
   
   return function(){
   lightBoxImage.src=postImages[i].src;
   lightBoxImageWrapper.classList.add('show')
   }
}


lightBoxImageWrapper.addEventListener('click',()=>{
   lightBoxImageWrapper.classList.remove('show')
});   