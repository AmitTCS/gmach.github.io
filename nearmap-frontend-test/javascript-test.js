window.onload = (function() {
    var timeElem = document.getElementById("totalTime"),
        img = document.getElementById("displayImg"),
        startX = 120576, 
        startY = 78640, 
        zoom = 17,
        numTiles = 16,
        updateInterval = 10,
        offsetX = 0,
        offsetY = 0,
        startTime = new Date().getTime(),
        endTime,
        timeoutId,
        images = new Array(),
        imgInd = 0;;

    function init() {
        for (y = 0; y < numTiles; y++) {
            for (x = 0; x < numTiles; x++) {
                var image = new Image();
                var tile = {x: startX + x, y: startY + y};
                setImage(image, tile.x, tile.y, zoom);
                images.push(image);
            }
        }
        timeElem.innerHTML = "Loading images...";
        flashImages();
        timeoutId = setInterval(updateTime, updateInterval);
    }

    function flashImages() {
        setTimeout(function () {
            img.src = images[imgInd].src;
            imgInd++;
            if (imgInd < Math.pow(numTiles, 2)) {
                flashImages();
            } else {
                clearInterval(timeoutId);
            }
        }, 20);
    }

    function updateTime(){
        timeElem.innerHTML = (new Date().getTime() - startTime) + " ms";
    }
    //Sets the src of the image to the given tile. Do not remove cachebust parameter   
    function setImage(imgElem, x, y, z) {
        imgElem.src = "http://nearmap-test-files.s3-website-ap-southeast-2.amazonaws.com/" + x + "_" + y + "_" + z + ".jpg" + "?cachebust=" + startTime;
    }

    init();
});
