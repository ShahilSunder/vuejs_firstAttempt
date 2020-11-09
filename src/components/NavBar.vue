<template>
    <div class="navbar">
        <h1>Ma Fake Company</h1>
        <h4>Hello There, {{username}}</h4>
    </div>
</template>
<script>
export default {
    name: 'NavBar',
    props: {

    },
    data() {
        return {
            username: "Shahil Sunder (HardCoded Variable)"
        }
    },
    mounted() {
        // this.getData();

    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.navbar {
    background-color: rgba(10, 10, 10, 0.7);
    min-height: 100px;
    box-shadow: 0px 8px rgba(0, 0, 0, 0.2);

    h4 {
        margin: 0px;
        background-color: transparent;
        padding-top: 0;
        color: white;
    }

    h1{
        margin-top: 0px;
        color: white
    }
}
</style>