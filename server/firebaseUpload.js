import { ref, uploadBytesResumable, getDownloadURL } from 'firebase/storage';
import { storage } from './firebase-config';  // Assuming this is already set up correctly

export const uploadProfilePicture = (file, userId, callback, errorCallback) => {
    if (!file) return errorCallback('No file provided');
    if (file.size > 5 * 1024 * 1024) return errorCallback('File size should not exceed 5MB');
    if (!file.type.startsWith('image/')) return errorCallback('Invalid file type');

    // Create a storage reference
    const storageRef = ref(storage, `profilePictures/${userId}/${file.name}`);

    // Create the file metadata
    const metadata = {
      contentType: file.type,
    };

    // Upload the file and metadata
    const uploadTask = uploadBytesResumable(storageRef, file, metadata);

    // Listen for state changes, errors, and completion of the upload.
    uploadTask.on('state_changed',
      (snapshot) => {
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log('Upload is ' + progress + '% done');
        switch (snapshot.state) {
          case 'paused':
            console.log('Upload is paused');
            break;
          case 'running':
            console.log('Upload is running');
            break;
        }
      }, 
      (error) => {
        // Handle unsuccessful uploads
        errorCallback(error);
      }, 
      () => {
        // Handle successful uploads on complete
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          console.log('File available at', downloadURL);
          callback(downloadURL);
        });
      }
    );
};
