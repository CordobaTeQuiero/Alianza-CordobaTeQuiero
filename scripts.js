// Menu hamburguesa
const btnHamb = document.getElementById('btnHamb');
const navLista = document.querySelector('.nav-lista');

btnHamb.addEventListener('click', () => {
  const expanded = btnHamb.getAttribute('aria-expanded') === 'true' || false;
  btnHamb.setAttribute('aria-expanded', !expanded);
  navLista.classList.toggle('show');
});

// Submenú accesible móvil
const submenuLink = document.querySelector('.submenu > a');
const submenuLista = document.getElementById('submenuNosotros');

submenuLink.addEventListener('click', (e) => {
  if (window.innerWidth <= 700) {
    e.preventDefault();
    const isVisible = submenuLista.classList.contains('show');
    submenuLista.classList.toggle('show');
    submenuLink.setAttribute('aria-expanded', !isVisible);
  }
});

// Carousel simple
//const slides = document.querySelectorAll('.slide');
//const prevBtn = document.getElementById('prev');
//const nextBtn = document.getElementById('next');
//const indicadoresContenedor = document.getElementById('indicadores');

//let indiceActual = 0;
//let intervalo;

//function activarSlide(indice) {
  //slides.forEach((slide, i) => {
    //slide.classList.toggle('active', i === indice);
  //});
  // Actualizar indicadores
  //Array.from(indicadoresContenedor.children).forEach((btn, i) => {
    //btn.classList.toggle('active', i === indice);
    //btn.setAttribute('aria-selected', i === indice);
    //btn.setAttribute('tabindex', i === indice ? '0' : '-1');
  //});
  //indiceActual = indice;
//}

//function siguienteSlide() {
 // let siguiente = (indiceActual + 1) % slides.length;
 // activarSlide(siguiente);
//}

//function anteriorSlide() {
  //let anterior = (indiceActual - 1 + slides.length) % slides.length;
 // activarSlide(anterior);
//}

//function crearIndicadores() {
 // slides.forEach((_, i) => {
   // const btn = document.createElement('button');
    //btn.setAttribute('role', 'tab');
    //btn.setAttribute('aria-selected', i === 0);
    //btn.setAttribute('tabindex', i === 0 ? '0' : '-1');
    //btn.classList.add(i === 0 ? 'active' : '');
    //btn.addEventListener('click', () => {
     // activarSlide(i);
      //reiniciarIntervalo();
    //});
    //indicadoresContenedor.appendChild(btn);
 // });
//}

//function reiniciarIntervalo() {
 // clearInterval(intervalo);
  //intervalo = setInterval(siguienteSlide, 5000);
//}

// Inicialización
//crearIndicadores();
//activarSlide(0);
//intervalo = setInterval(siguienteSlide, 5000);

// Pausar carousel al enfocar botones para mejor accesibilidad
//[prevBtn, nextBtn, indicadoresContenedor].forEach(el => {
  //el.addEventListener('mouseenter', () => clearInterval(intervalo));
  //el.addEventListener('mouseleave', () => reiniciarIntervalo());
  //el.addEventListener('focusin', () => clearInterval(intervalo));
  //el.addEventListener('focusout', () => reiniciarIntervalo());
//});
