import { Application } from "@hotwired/stimulus"

const application = Application.start()

application.debug = false
window.Stimulus   = application

const previewImage = (event) => {
    
    const imageFiles = event.target.files;
    
    const imageFilesLength = imageFiles.length;
    
    console.log("previewImage called")

    if (imageFilesLength > 0) {
       
        const imageSrc = URL.createObjectURL(imageFiles[0]);
        
        const imagePreviewElement = document.querySelector("#preview_id");
        
        imagePreviewElement.src = imageSrc;
        
        imagePreviewElement.style.display = "block";
    }
};

export { application, previewImage }
