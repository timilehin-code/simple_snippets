const btn = document.querySelector(".btn");
const note = document.querySelector(".note");
  btn.addEventListener("click", ()=>{
   const success = (position)=>{
    note.innerHTML = position.coords.latitude + "<br>" + position.coords.longitude
   }
   const error = (error)=>{
    console.error(error);
   }
   navigator.geolocation.getCurrentPosition(success, error);
  });