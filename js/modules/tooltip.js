export default function initTooltip() {
   const tooltips = document.querySelectorAll("[data-tooltip]");

   function criarTooltipBox(element) {
      const tooltipBox = document.createElement("div");
      const textTolltip = element.getAttribute('aria-label');
      tooltipBox.classList.add('tooltip');
      tooltipBox.innerText = textTolltip;

      document.body.appendChild(tooltipBox);
      return tooltipBox;
   }

   const onMouseLive = {
      handleEvent() {
         this.tooltipBox.remove();
         this.element.removeEventListener('mouseleave', onMouseLive);
         this.element.removeEventListener('mousemove', onMouseMove);
      }
   }

   const onMouseMove = {
      handleEvent(event) {
         this.tooltipBox.style.top = event.pageY + 20 + "px";
         this.tooltipBox.style.left = event.pageX + 20 + "px";
      }
   }

   function onMouseOver(event) {
      const tooltipBox = criarTooltipBox(this);

      onMouseMove.tooltipBox = tooltipBox;
      this.addEventListener('mousemove', onMouseMove);

      onMouseLive.element = this;
      onMouseLive.tooltipBox = tooltipBox;

      this.addEventListener('mouseleave', onMouseLive);
   }

   tooltips.forEach((item) => {
      item.addEventListener('mouseover', onMouseOver);
   })
}