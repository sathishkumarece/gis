<template>
<div>
    <div class="container">
        <h3>Do you want to find the port closed to you?</h3>
        <p>Provide your address or zipcode to begin the search</p>
        <input type="text" v-model="q" size="25"><br><br>
        <button class="btn btn-primary" type="buttom" @click="submitSearch">SEARCH</button>
        <br>
        <br>
        <div v-if="showLoading" class="loading">Loading<span>.</span><span>.</span><span>.</span></div>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name:"SearchArea",
    data (){
        return{
            q:"",
            showLoading: false
        }
    },
    methods : {
        submitSearch: function(){
            this.showLoading = !this.showLoading;
            axios.get('/api/getnearports', {params: {q:this.q}})
            .then((val)=>{
                console.log(val.data);
                this.$router.push({ name: 'Result', params: { value: JSON.stringify(val.data) }});
            })
        }
    }
}
</script>

<style scoped>

.loading{
    font-size:30px;
    letter-spacing:5px;
}

@keyframes opacity {
	0% { opacity: 1; }
	100% { opacity: 0; }
}
@-webkit-keyframes opacity {
	0% { opacity: 1; }
	100% { opacity: 0; }
}
@-moz-keyframes opacity {
	0% { opacity: 1; }
	100% { opacity: 0; }
}

.loading span {
    animation: opacity 1.25s infinite;
    -webkit-animation: opacity 1.25s infinite;
    -moz-animation: opacity 1.25s infinite;
}

.loading span:nth-child(2) {
	animation-delay: 100ms;
    -webkit-animation-delay: 100ms;
	-moz-animation-delay: 100ms;
}

.loading span:nth-child(3) {
	animation-delay: 300ms;
    -webkit-animation-delay: 300ms;
	-moz-animation-delay: 300ms;
}
</style>