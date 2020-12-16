<template>
    <div>
        <div class="navbar-static"></div>
        <h2>Here we go</h2>
        <AddressDisplay v-for="(portInfo,index) in  JSON.parse($route.params.value)" 
        :key="index" 
        :duration="portInfo.duration"
        :distance="portInfo.distance"
        :portInfo="portInfo.portInfo" class="address"></AddressDisplay>
    </div>
</template>

<script>
import AddressDisplay from '../components/AddressDisplay';
export default {
    components:{
        AddressDisplay
    },
}
</script>

<style>
#app{
        height: 100%;
}

@media screen and (min-width: 768px){
    .address{
        padding:10px;
    }
}
@media screen and (max-width: 768px){
    .address{
        padding-bottom:10px;
    }
}
</style>