

const parallax = (() => {

        window.addEventListener("scroll", function(){
            let scroll = window.scrollY;

            if (scroll > 600) {
                return
            }

            let layerbox = document.getElementsByClassName("parallax");
            let layer, speed;

            for (let i = 0; i < layerbox.length; i++) {
                layer = layerbox[i];
                speed = layer.getAttribute('data-speed');
                let yPos = -(scroll * speed / 100);
                layer.setAttribute('style', 'transform: translate3d(0px, ' + yPos + 'px, 0px)');
            }

        });

})();

