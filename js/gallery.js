const civilAircrafts = [
    'assets/avion-civil-1.jpg',
    'assets/avion-civil-2.jpg',
    'assets/avion-civil-3.jpg',
    'assets/avion-civil-4.jpg',
    'assets/avion-civil-5.jpg'
];

const militaryAircrafts = [
    'assets/avion-militar-1.jpg',
    'assets/avion-militar-2.jpg',
    'assets/avion-militar-3.jpg',
    'assets/avion-militar-4.jpg',
    'assets/avion-militar-5.jpg'
];

const civilHelicopters = [
    'assets/helicoptero-civil-1.jpg',
    'assets/helicoptero-civil-2.jpg',
    'assets/helicoptero-civil-3.jpg',
    'assets/helicoptero-civil-4.jpg',
    'assets/helicoptero-civil-5.jpg'
];

const militaryHelicopter = [
    'assets/helicoptero-militar-1.jpg',
    'assets/helicoptero-militar-2.jpg',
    'assets/helicoptero-militar-3.jpg',
    'assets/helicoptero-militar-4.jpg',
    'assets/helicoptero-militar-5.jpg'
];


class Gallery {
    constructor(civilImages, militaryImages) {
        this.civilImages = civilImages;
        this.militaryImages = militaryImages;
    }

    getRandomCivil(civilImages) {
        return this.civilImages[Math.floor(Math.random()*5)];
    }
    
    getRandomMilitary(militaryImages) {
        return this.militaryImages[Math.floor(Math.random()*5)];
    }
    
    getAll(civilImages, militaryImages) {
        return this.civilImages.concat(this.militaryImages);
    }
}



class Painter {
    constructor() {
        this.createGallery();
    }
    
    
    createGallery() {
    
        let currentSection = document.querySelector("section");
        currentSection.after(document.createElement("section"));
        document.querySelector("section:nth-child(2)").setAttribute("id", "gallery");
    };

    createImageTag(imageUrl) {
        
        let picture =  `<picture>
                            <img src="${imageUrl}"/>
                        </picture>`;
        
        document.getElementById("gallery").innerHTML += picture;
    }

    paintSingleImage(imageUrl) {
        this.createImageTag(imageUrl);
    }

    paintMultipleImages(arrayOfImages) {

         for (let i = 0; i < arrayOfImages.length; i++) {

            this.paintSingleImage(arrayOfImages[i]);
            
         }
         
    }
}

const aircrafts = new Gallery(civilAircrafts, militaryAircrafts);
const helicopters = new Gallery(civilHelicopters, militaryHelicopter);
const painter = new Painter();
