<script >
import NewsCard from './NewsCard.vue';
import data from '../assets/data.json'; 

export default {
    data(){
        return{
            news: data['news']
        }
    },
    components:{
        NewsCard,
    }
}
</script>

<template>
    <div class="w-full max-w-6xl mx-auto"> 
            <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                <NewsCard v-for="(item,index) in news" :key="item.id" :id="item.id" :author="item.author" :date="item.date" :title="item.title" :subTitle="item.subTitle" :index="index"/>
            </div>
    </div>
</template>

