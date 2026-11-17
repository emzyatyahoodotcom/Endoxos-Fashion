                          /* pulse */

let pulse = document.querySelector(".pulse");
let photo = document.querySelector(".photo");

photo.addEventListener("click", function(event) {
    event.stopPropagation();
    pulse.style.display = "block";
});

document.addEventListener("click", function() {
    pulse.style.display = "none";
});

                            /* gallery */

let gallerycon = document.querySelector(".gallerycon");
let button = document.querySelector(".stuf button");
button.addEventListener("click", function() {
    setTimeout(function() {
        gallerycon.style.display = "block";
        requestAnimationFrame(function() {
            gallerycon.classList.add("active");
        });
    }, 2000);
});

let galleryCon = document.querySelector(".gallerycon button");
galleryCon.addEventListener("click", function() {
    gallerycon.style.display = "none";
    gallerycon.classList.remove("active");
});


                /*lightbox */

let lightbox = document.querySelector(".lightbox");
let lightboxbutton = document.querySelector(".lightbox button");
let images = document.querySelectorAll(".gallery img");
let preview = document.querySelector("#preview");
images.forEach(function(image) {
    image.addEventListener("click", function() {
preview.src = image.src;
    lightbox.style.display = "flex";
});
    });
    
    lightboxbutton.addEventListener("click", function() {
        lightbox.style.display = "none";
    });

    lightbox.addEventListener("click", function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = "none";
        }
    })



                    /*lightboxsecond */

let lightboxsecond = document.querySelector(".lightboxsecond");
let lightboxsecondbutton = document.querySelector(".lightboxsecond button");
let imagessecond = document.querySelectorAll(".listof img");
let previewsecond = document.querySelector("#previewsecond");
imagessecond.forEach(function(imagesecond) {
    imagesecond.addEventListener("click", function() {
previewsecond.src = imagesecond.src;
    lightboxsecond.style.display = "flex";
});
    });
    
    lightboxsecondbutton.addEventListener("click", function() {
        lightboxsecond.style.display = "none";
    });

    lightboxsecond.addEventListener("click", function(event) {
        if (event.target === lightboxsecond) {
            lightboxsecond.style.display = "none";
        }
    })

                /* about */
let aboutus = document.querySelector("#aboutus");
let about = document.querySelector("#about");
let aboutbutton = document.querySelector("#about button");
aboutus.addEventListener("click", function() {
    setTimeout(function() {
        about.style.display = "block";
        requestAnimationFrame(function() {
            about.classList.add("active");
        });
    }, 2000);
});

aboutbutton.addEventListener("click", function() {
    about.style.display = "none";
    about.classList.remove("active");
});

