<template>
<ion-page>
    <ion-header>
        <ion-toolbar>
            <ion-title>All memories</ion-title>
        </ion-toolbar>
    </ion-header>
    <ion-content>
        <ion-list>
            <ion-item>Victoria</ion-item>
            <ion-item>Elithabet</ion-item>
            <ion-item>Mary</ion-item>
        </ion-list>
    </ion-content>
</ion-page>
</template>

<script>
import { IonPage, IonHeader, IonTitle, IonContent, IonToolbar, IonList, IonItem} from '@ionic/vue'
export default {
    comments: {
        IonPage,
        IonHeader,
        IonTitle,
        IonContent,
        IonToolbar,
        IonList,
        IonItem
    }
}
</script>

