/* accordion */
document.querySelectorAll('.accordion-toggle').forEach((item) => {
  item.addEventListener('click',function(e) {
    this.parentNode.classList.toggle('expanded');
  })
})