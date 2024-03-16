import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userSelectedDate;
let intervalTime;
const valueTime = flatpickr('#datetime-picker', options);
const dataInputTime = document.querySelector('#datetime-picker');
const inputBtn = document.querySelector(`button`);
const newTime = document.querySelector(`.value`);


const startBtn = document.querySelector ('.[data-start]')

const options = {
    enableTime: true,
    time_24hr: true,
    defaultDate: new Date(),
    minuteIncrement: 1,
    onClose(selectedDates) {
  userSelectedDate = selectedDates[0];
  userSelectedDate = intervalTime - options.defaultDate;

      console.log(selectedDates[0]);

  

      if (intervalTime< 1) {
        iziToast.error({
          color: 'red',
          position: 'topRight',
          message: `Please choose a date in the future`,
        });
      } else {
        startBtn.disabled = false;
        inputTime.disabled = true;
      }
    },
  };


function convertMs(ms) {
    // Number of milliseconds per unit of time
    const second = 1000;
    const minute = second * 60;
    const hour = minute * 60;
    const day = hour * 24;
  
    // Remaining days
    const days = Math.floor(ms / day);
    // Remaining hours
    const hours = Math.floor((ms % day) / hour);
    // Remaining minutes
    const minutes = Math.floor(((ms % day) % hour) / minute);
    // Remaining seconds
    const seconds = Math.floor((((ms % day) % hour) % minute) / second);
  
    return { days, hours, minutes, seconds };
  }
  
//   console.log(convertMs(2000)); // {days: 0, hours: 0, minutes: 0, seconds: 2}
//   console.log(convertMs(140000)); // {days: 0, hours: 0, minutes: 2, seconds: 20}
//   console.log(convertMs(24140000)); // {days: 0, hours: 6 minutes: 42, seconds: 20}

  

inputBtn.addEventListener(`click`, eve) => {
    const inputTime = setInterval ((){
        intervalTime = userSelectedDate - new Date();
        eve.preventDefault();
        inputTime.disabled = true;


        
    if (intervalTime < 1) {
        inputBtn.disabled = true;
        inputTime.disabled = false;
        clearInterval(repeatTime);
        return;
      }
    }
}