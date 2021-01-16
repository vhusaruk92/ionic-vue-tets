<template>
    <form class="ion-padding" @submit.prevent="submitForm">
        <ion-list>
            <ion-item>
                <ion-label position="floating">Title</ion-label>
                <ion-input type="text" required v-model="enteredTitle"/>
            </ion-item>
            <!-- <ion-item>
                <ion-label position="floating">Image URL</ion-label>
                <ion-input type="url" required v-model="enteredImageUrl"/>
            </ion-item> -->
            <ion-item>
                <ion-thumbnail slot="start">
                    <img :src="previewImageUrl"/>
                </ion-thumbnail>
                <ion-button type="button" @click="takePhoto">
                    <ion-icon :icon="camera"></ion-icon>
                    Take photo
                </ion-button>
            </ion-item>
            <ion-item>
                <ion-label position="floating">Description</ion-label>
                <ion-textarea rows="5"  v-model="enteredDecsription"></ion-textarea>
            </ion-item>
        </ion-list>
        <ion-button type="submit" expand="block" >Save</ion-button>
    </form>
</template>

<script>
import { IonList, IonItem, IonLabel, IonInput, IonTextarea, IonButton, IonThumbnail, IonIcon} from '@ionic/vue';

import {camera} from "ionicons/icons";
import {Plugins, CameraResultType, CameraSource} from "@capacitor/core";

const {Camera} = Plugins

export default {
    emits:['save-memory'],
    components: {
        IonList,
        IonItem,
        IonLabel,
        IonInput,
        IonTextarea,
        IonButton,
        IonThumbnail,
        IonIcon
    },
    data() {
        return {
            enteredTitle: '',
            enteredImageUrl: '',
            enteredDecsription: '',
            previewImageUrl: '',
            camera
        }
    },
    methods: {
        submitForm() {
            const memoryData = {
                title: this.enteredTitle,
                imageUrl: this.enteredImageUrl,
                description: this.enteredDecsription
            };
            this.$emit('save-memory', memoryData)
        },
        async takePhoto() {
            const photo = await Camera.getPhoto({
                resultType: CameraResultType.Url,
                source: CameraSource.Camera,
                quality: 69
            });

            this.previewImageUrl = photo.webPath;
        }
    }
}
</script>