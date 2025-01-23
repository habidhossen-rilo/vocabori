export const uploadImageToCloud = async (file: File) => {
  //   if (!file) return alert("Please upload a image");
  const formDataToSend = new FormData();
  formDataToSend.append("file", file);
  formDataToSend.append("upload_preset", "vocabury");
  formDataToSend.append("cloud_name", "df9qvinja");
  console.log("sajid bai dekhbe", formDataToSend);
  const response = await fetch(
    "https://api.cloudinary.com/v1_1/df9qvinja/image/upload",
    {
      method: "POST",
      body: formDataToSend,
    },
  );
  const imageData = await response.json();
  if (!imageData) return alert("Image upload failed");
  return imageData.url;
};
