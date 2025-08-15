
// Funktion des Carousel auf Seite Projekte
const myCarousel = document.getElementById('carouselProjects');

myCarousel.addEventListener('slide.bs.carousel', event => {
    if (event.to + 1 == 2){
        document.getElementById('description-1').style.display = 'none';
        document.getElementById('description-2').style.display = 'block';
        document.getElementById('carousel-caption-img-1').classList.add('d-none');
        document.getElementById('carousel-caption-img-2').classList.remove('d-none');}
    else if (event.to + 1 == 3){
        document.getElementById('description-2').style.display = 'none';
        document.getElementById('description-3').style.display = 'block';
        document.getElementById('carousel-caption-img-2').classList.add('d-none');
        document.getElementById('carousel-caption-img-3').classList.remove('d-none');}
    else if (event.to + 1 == 4){
        document.getElementById('description-3').style.display = 'none';
        document.getElementById('description-4').style.display = 'block';
        document.getElementById('carousel-caption-img-3').classList.add('d-none');
        document.getElementById('carousel-caption-img-4').classList.remove('d-none');}
    else if (event.to + 1 == 5){
        document.getElementById('description-4').style.display = 'none';
        document.getElementById('description-5').style.display = 'block';
        document.getElementById('carousel-caption-img-4').classList.add('d-none');
        document.getElementById('carousel-caption-img-5').classList.remove('d-none');}
    else if (event.to + 1 == 1){
        document.getElementById('description-5').style.display = 'none';
        document.getElementById('description-1').style.display = 'block';
        document.getElementById('carousel-caption-img-5').classList.add('d-none');
        document.getElementById('carousel-caption-img-1').classList.remove('d-none');}
})




