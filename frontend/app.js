async function uploadImage() {
    const fileInput = document.getElementById("fileInput");
    if (!fileInput.files.length) {
        alert("Selectează un fișier PNG!");
        return;
    }

    const formData = new FormData();
    formData.append("file", fileInput.files[0]);

    const response = await fetch("http://localhost:8000/upload", {
        method: "POST",
        body: formData
    });

    const result = await response.json();
    alert(result.message);
}
