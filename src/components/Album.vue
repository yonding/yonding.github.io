<template>
    <div class="album py-5 bg-body-tertiary">
        <div class="container">
            <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">
                <Card :project=project v-for="(project, idx) in store.projects.slice().reverse()" :key="idx"></Card>
            </div>
        </div>
    </div>
</template>

<script>
import Card from '@/components/Card.vue';
import { store } from '@/scripts/store.js';
export default{
    name:'Album',
    data(){
        return{
            store: store
        }
    },
    components:{Card}
}
</script>


<style scoped>

</style>