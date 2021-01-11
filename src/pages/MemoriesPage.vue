<template>
    <base-layout page-title="All Memories">
        <ion-list>
            <ion-item v-for="memory in memories" :key="memory.id" :router-link="`/memories/${memory.id}`">
                <ion-thumbnail slot="start">
                    <ion-img :src="memory.image" :alt="memory.title"></ion-img>
                </ion-thumbnail>
                <ion-label>
                    {{memory.title}}
                </ion-label>
            </ion-item>
        </ion-list>
    </base-layout>
</template>

<script>
import { IonList, IonItem, IonImg, IonThumbnail, IonLabel} from '@ionic/vue'

export default {
    components: {
        IonList,
        IonItem,
        IonImg,
        IonThumbnail,
        IonLabel
    },
    data() {
        return {
            memories: [
                {
                    id: 'm1',
                    title: 'Trip to the mountain',
                    image: 'https://cdn.mos.cms.futurecdn.net/ntFmJUZ8tw3ULD3tkBaAtf.jpg',
                    description: 'some description'
                },
                {
                    id: 'm2',
                    title: 'Surfing the sea',
                    image: 'https://static01.nyt.com/images/2020/03/06/sports/06tahiti-surfWEB1/06tahiti-surfWEB1-mediumSquareAt3X.jpg',
                    description: 'some description'
                },
                {
                    id: 'm3',
                    title: 'Delicious eating',
                    image: 'https://www.helpguide.org/wp-content/uploads/young-woman-eating-fast-food-chicken-sandwich-768.jpg',
                    description: 'some description'
                }
            ]
        }
    }
}
</script>

