import flatpickr from 'flatpickr';
import 'flatpickr/dist/flatpickr.min.css';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

let userDate;
let timeInterval;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  onClose(selectedDates) {
    // console.log(selectedDates[0]);
    userDate = selectedDates[0];
    timeInterval = userDate - options.defaultDate;

    if (timeInterval < 1) {
      iziToast.error({
        color: 'red',
        position: 'topRight',
        message: `Please choose a date in the future`,
      });
    } else {
      clickBtn.disabled = false;
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








const calendar = flatpickr('#datetime-picker', options);
const inputTime = document.querySelector('#datetime-picker');
const clickBtn = document.querySelector('button');
const showTime = document.querySelectorAll('.value');
console.log(showTime);

clickBtn.disabled = true;

clickBtn.addEventListener('click', event => {
  const repeatTime = setInterval(() => {
    timeInterval = userDate - new Date();
    event.preventDefault();
    inputTime.disabled = true;

    if (timeInterval < 0) {
      clickBtn.disabled = true;
      inputTime.disabled = false;
      clearInterval(repeatTime);
      return;
    }

    const timer = convertMs(timeInterval);

    showTime[0].innerText = timer.days.toString().padStart(2, '0');
    showTime[1].innerText = timer.hours.toString().padStart(2, '0');
    showTime[2].innerText = timer.minutes.toString().padStart(2, '0');
    showTime[3].innerText = timer.seconds.toString().padStart(2, '0');
  }, 1000);
});