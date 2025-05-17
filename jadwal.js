function EditSchedule(id){
    const data = document.querySelectorAll("tr[data-id='"+id+"'] td");
    
    jadwal = {
        "Nama_dokter" : data[0].textContent,
        "hari" : data[1].textContent,
        "jam_mulai" : data[2].textContent,
        "jam_selesai" : data[3].textContent
    }

    document.querySelector("#doctorModalEdit").classList.remove("hidden")
    const inputs = document.querySelectorAll("#doctorModalEdit input")
    
    inputs[0].value =  jadwal.Nama_dokter;
    inputs[1].value = jadwal.hari;
    inputs[2].value = jadwal.jam_mulai;
    inputs[3].value = jadwal.jam_selesai;

}
function ShowModalSchedule(){
    document.querySelector("#doctorModal").classList.remove("hidden")

}
document.querySelector("#closeModalBtn").addEventListener("click", () => {
    document.querySelector("#doctorModal").classList.add("hidden")
})

    
document.querySelector("#closeModalEditBtn").addEventListener("click", () => {
     document.querySelector("#doctorModalEdit").classList.add("hidden")
    
})