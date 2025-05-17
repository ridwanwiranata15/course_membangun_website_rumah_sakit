function ShowModalCreateAppointment(){
    document.querySelector("#appointmentModalCreate").classList.remove("hidden");
}
document.querySelector("#closeModalBtnAppointment").addEventListener("click", () => {
    document.querySelector("#appointmentModalCreate").classList.add("hidden");
})

function UpdateAppointment(id){
    document.querySelector("#appointmentModalUpdate").classList.remove("hidden");
     const data = document.querySelectorAll("tr[data-id='"+id+"'] td");
    
    janji = {
        "pasien" : data[0].textContent,
        "dokter" : data[1].textContent,
        "tanggal" : data[2].textContent,
        "Waktu" : data[3].textContent,
        "status" : data[4].textContent
    }

    const inputs = document.querySelectorAll("#appointmentModalUpdate input")
    
    inputs[0].value =  janji.pasien;
    inputs[1].value = janji.dokter;
    inputs[2].value = janji.tanggal;
    inputs[3].value = janji.waktu;
    inputs[4].value = janji.status;
}
document.querySelector("#closeModalBtnAppointmentUpdate").addEventListener("click",  () => {
    document.querySelector("#appointmentModalUpdate").classList.add("hidden");
})