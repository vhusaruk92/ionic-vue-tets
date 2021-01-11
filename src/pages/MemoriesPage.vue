<template>
<base-layout page-title="All Memories">
    <ion-list>
        <ion-item router-link="/memories/1">Trip to the mountain</ion-item>
        <ion-item>Surfing the sea</ion-item>
        <ion-item>Delicious eating</ion-item>
    </ion-list>
</base-layout>
</template>

<script>
import {IonList, IonItem} from '@ionic/vue'

export default {
  components: {
      IonList,
      IonItem
    }
}
</script>

