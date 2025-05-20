//your JS code here. If required.
let modal = document.getElementById("mymodal");
      let openBtn = document.getElementById("openModal");
      let closeBtn = document.querySelector(".close-modal");
      // open Modal
      openBtn.onclick = function () {
        modal.style.display = " block";
      };
      // close Modal when close btn clicked
      closeBtn.onclick = function () {
        modal.style.display = "none";
      };
      //    close modal on outside click
      window.onclick = function () {
        if (event.target === modal) {
          modal.style.display = "none";
        }
      };