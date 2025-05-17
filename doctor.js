      let isEditMode = false;
      let editingRow = null;
      function OpenModalCreate() {
        const dropdown = document.getElementById("dropdown-content");
        dropdown.classList.toggle("hidden");
        dropdown.classList.toggle("block");
        const icon =
          dropdown.previousElementSibling.querySelector(".fa-chevron-down");
        icon.classList.toggle("rotate-180");
      }
      function ShowModalCreate(isEdit = false, row = null) {
        isEditMode = isEdit;
        editingRow = row;
        const modal = document.getElementById("doctorModal");
        modal.classList.remove("hidden");
        // Ambil input
        const inputs = modal.querySelectorAll("input, select");
        if (isEditMode && row) {
          const cells = row.querySelectorAll("td");
          inputs[0].value = cells[0].textContent; // Nama
          inputs[1].value = cells[1].textContent; // Spesialis
          inputs[2].value =
            cells[0].textContent.toLowerCase().replaceAll(" ", "") +
            "@email.com"; // Email dummy
          inputs[3].value = cells[2].textContent.toLowerCase(); // Status
        } else {
          inputs.forEach((i) => (i.value = ""));
        }
      }
      document
        .getElementById("closeModalBtn")
        .addEventListener("click", function () {
          document.getElementById("doctorModal").classList.add("hidden");
        });

      document
        .getElementById("submitDoctorBtn")
        .addEventListener("click", function () {
          const modal = document.getElementById("doctorModal");
          const inputs = modal.querySelectorAll("input, select");
          const nama = inputs[0].value;
          const spesialis = inputs[1].value;
          const status =
            inputs[3].value.charAt(0).toUpperCase() + inputs[3].value.slice(1);

          if (isEditMode && editingRow) {
            const cells = editingRow.querySelectorAll("td");
            cells[0].textContent = nama;
            cells[1].textContent = spesialis;
            cells[2].textContent = status;
          } else {
            const tbody = document.querySelector("tbody");
            const newRow = document.createElement("tr");
            newRow.className = "border-b border-gray-200 hover:bg-gray-50";
            newRow.innerHTML = `
        <td class="py-3 px-4">${nama}</td>
        <td class="py-3 px-4">${spesialis}</td>
        <td class="py-3 px-4">${status}</td>
        <td class="py-3 px-4">
          <button class="text-blue-500 hover:text-blue-700 mr-2" onclick="ShowModalCreate(true, this.closest('tr'))">
            <i class="fas fa-edit"></i>
          </button>
          <button class="text-red-500 hover:text-red-700" onclick="this.closest('tr').remove()">
            <i class="fas fa-trash-alt"></i>
          </button>
        </td>
      `;
            tbody.appendChild(newRow);
          }

          modal.classList.add("hidden");
        });

      // Untuk tombol edit yang sudah ada
      document.querySelectorAll(".text-blue-500").forEach((button) => {
        button.addEventListener("click", function () {
          ShowModalCreate(true, this.closest("tr"));
        });
      });

      // Untuk tombol delete
      document.querySelectorAll(".text-red-500").forEach((button) => {
        button.addEventListener("click", function () {
          this.closest("tr").remove();
        });
      });