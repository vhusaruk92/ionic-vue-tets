import { createStore } from 'vuex';

const store = createStore({
    state() {
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
        };
    },
    mutations: {
        addMemory(state, memoryData) {
          const newMemory = {
            id: new Date().toISOString(),
            title: memoryData.title,
            image: memoryData.imageUrl,
            description: memoryData.description
          };
    
          console.log('in store', newMemory)
          state.memories.unshift(newMemory);
        }
    },
    actions: {
        addMemory(context, memoryData) {
          context.commit('addMemory', memoryData);
        }
    },
    getters: {
        memories(state) {
            return state.memories
        },
        memory(state) {
            return (memoryId) => {
                return state.memories.find(memory => memory.id === memoryId)
            }
        }
    }
    
});

export default store;