export default function initOperation() {
   const operation = document.querySelector("[data-semana]");
   const daysWeek = operation.dataset.semana.split(',').map(Number);
   const schedules = operation.dataset.horario.split(',').map(Number);
   const now = new Date();
   const dayNow = now.getDay();
   const timeNow = now.getHours();

   const weekOpen = daysWeek.includes(dayNow);
   const timeOpen = (timeNow >= schedules.at(0) && timeNow <= schedules.at(1));

   if (weekOpen && timeOpen) {
      operation.classList.add('open');
   }else{
      operation.classList.add('close');
   }
}