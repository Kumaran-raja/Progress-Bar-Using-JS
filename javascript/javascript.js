var id;

        function move() {
            var elem = document.getElementById("progressBar");
            var width = 0;
            id = setInterval(frame, 100); 
            document.getElementById("startBtn").disabled = true;
            function frame() {
                if (width >= 100) {
                    clearInterval(id);
                    elem.innerHTML=width + "%";
                    document.getElementById("startBtn").disabled = false;
                } else {
                    width++;
                    elem.innerHTML=width + "%";
                    elem.style.width = width + "%";
                }
            }
        }

        function remove() {
            clearInterval(id);
            document.getElementById("startBtn").disabled = false;
            var elem = document.getElementById("progressBar");
            elem.innerHTML=" ";
            elem.style.width = "0%";
        }