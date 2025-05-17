function OpenModalCreate() {
        const dropdown = document.getElementById("dropdown-content");
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("block");
        const icon =
          dropdown.previousElementSibling.querySelector(".fa-chevron-down");
        icon.classList.toggle("rotate-180");
      }