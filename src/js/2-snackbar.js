import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

const formDelay = document.querySelector(`.form`);

formDelay.addEventListener (`submit`, event =>{



    event.preventDefault();

    const valueTime=event.currentTarget.elements.delay.value;
    const valueData = event.currentTarget.elements.state.value;
    const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (valueData === 'fulfilled') {
        resolve();
      } else if (valueData === 'rejected'){
        reject();
      }
    }, valueTime);
  });


promise
  .then(value => {
    iziToast.success({  
      color: 'green',
      position: "topRight",
      message: `✅ Fulfilled promise in ${valueTime}ms`
  })
  })
  .catch(error => {
    iziToast.error({ 
      color: 'red',
      position: "topRight",          
      message: `❌ Rejected promise in ${valueTime}ms`
  })
  });

});


