
var images = [
    "/images/Self_Portrait copy.png",
    "/images/Self_Portrait 1.png",
    "/images/Self_Portrait 1.png",
    "/images/Self_Portrait 2.png",
    "/images/Self_Portrait 3.png",
    "/images/Self_Portrait 4.png",
    "/images/Self_Portrait 5.png",
    "/images/Self_Portrait 6.png",
    "/images/Self_Portrait 7.png",
    "/images/Self_Portrait 8.png",
    "/images/Self_Portrait 9.png",
    "/images/Self_Portrait 10.png",
    "/images/Self_Portrait 11.png",
    "/images/Self_Portrait 12.png",
    "/images/Self_Portrait 13.png"
];
var currentIndex = 0;
var container = $("#image-container");
var image = $("<img>").addClass("image").appendTo(container);

function showNextImage() {
    image.attr("src", images[currentIndex]).fadeIn(500, function() {
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(showNextImage, 500);
    });
}

showNextImage();
        
