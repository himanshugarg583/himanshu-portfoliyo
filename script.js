const model = document.querySelector(".model-container")
const overlay = document.querySelector(".overlay")

const openModel = () => {
    console.log("model is open")
    model.classList.add("active");
    overlay.classList.add("overlayactive");

}
const closeModal =()=>{
    model.classList.remove("active")
    overlay.classList.remove("overlayactive")
}
