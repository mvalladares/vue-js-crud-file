<template>
    <div>
        <input type="file" multiple @change="onFileSelected($event.target.files)"><br>
        <div class="progress-bar" :style="{ width: progressUpload + '%'}">{{ progressUpload }}%</div>
    </div>
</template>

<script>
import { storage } from "@/config";
//import storage from 'firebase/storage'
export default {
  name: "upload",
  data() {
    return {
        progressUpload: 0,
        file: File,
        uploadTask:''
    }
  },
  methods: {
    onFileSelected(fileList) {
        Array.from(Array(fileList.length).keys()).map( x => {
            this.upload(fileList[x])
        });
    },
    upload(file){
        storage.ref('file/' + file.name).put(file).then(data=>{
            console.log(data);
        });
    }
  },
  watch: {
    uploadTask: function() {
      this.uploadTask.on('state_changed', sp => {
        this.progressUpload = Math.floor(sp.bytesTransferred / sp.totalBytes * 100)
      }, 
      null, 
      () => {
        this.uploadTask.snapshot.ref.getDownloadURL().then(downloadURL => {
          this.$emit('url', downloadURL)
        })
      })
    }
  },
  created() {
    /* var mountainsRef = storageRef.child("logo.png");

    // Create a reference to 'images/mountains.jpg'
    var mountainImagesRef = storageRef.child("../assets/logo.png");

    // While the file names are the same, the references point to different files
    mountainsRef.name === mountainImagesRef.name; // true
    mountainsRef.fullPath === mountainImagesRef.fullPath; // false */
    // Data URL string
    /* var message =
      "data:text/plain;base64,5b6p5Y+344GX44G+44GX44Gf77yB44GK44KB44Gn44Go44GG77yB";
    storage.putString(message, "data_url").then(function(snapshot) {
      console.log("Uploaded a data_url string!");
    }); */
    //console.log(storage);
  }
};
</script>

<style>
.progress-bar {
  margin: 10px 0;
}
</style>