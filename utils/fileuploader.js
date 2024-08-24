export default async function ImageUploader(selectedFile) {
  const formData = new FormData();
  formData.append("file", selectedFile);
  formData.append("upload_preset", "imtisdk");
  try {
    const response = await fetch(
      "https://api.cloudinary.com/v1_1/dif5pfkci/image/upload",
      {
        method: "POST",
        body: formData,
      }
    );
    const data = await response.json();
    return data.secure_url;
  } catch (error) {
    console.error("Error uploading image", error);
  }
}
