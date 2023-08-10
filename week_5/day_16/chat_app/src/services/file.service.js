import {
  ref,
  getDownloadURL,
  uploadBytesResumable,
  deleteObject,
} from 'firebase/storage';

import { storage } from '../firebase/firebase';

class FileService {
  uploadImage(file, onUploadProgress) {
    return new Promise((resolve, reject) => {
      const fileRef = ref(
        storage,
        'profile-pictures/' + this.getUniqueFileName(file)
      );
      const uploadTask = uploadBytesResumable(fileRef, file);

      uploadTask.on(
        'state_changed',

        (snapshot) => {
          // handle update
          // listen to updates
          this.handleProgressUpdate(snapshot, onUploadProgress);
        },
        (err) => {
          // handle error
          reject(err.message);
        },
        () => {
          // resolve our promise
          // get & return our downloadUrl
          getDownloadURL(uploadTask.snapshot.ref).then((downloadUrl) => {
            resolve(downloadUrl);
          });
        }
      );
    });
  }

  getUniqueFileName(file) {
    // profile-picture.jpg
    // profile-picture-726527336827336827.jpg
    const dotIndex = file.name.lastIndexOf('.');
    // profile-picture
    const fileName = file.name.substring(0, dotIndex);
    // .jpg
    const fileExtension = file.name.substring(dotIndex);
    // 674562756273
    const timeStamp = new Date().getTime();
    return fileName + '-' + timeStamp + fileExtension;
  }

  handleProgressUpdate(snapshot, onUploadProgress) {
    if (onUploadProgress) {
      const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
      onUploadProgress(progress);
    }
  }

  async deleteFile(downloadUrl) {
    const fileRef = ref(storage, downloadUrl);
    await deleteObject(fileRef);
  }
}

const service = new FileService();
export default service;
