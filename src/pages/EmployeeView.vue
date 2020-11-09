<template>
    <NavBar />
    <EmployeeInfoCard :email="email" :firstName="firstName" :lastName="lastName" :avatar="avatar" />
</template>
<script>
import NavBar from '../components/NavBar.vue'
import EmployeeInfoCard from '../components/EmployeeInfoCard.vue'

export default {
    name: 'EmployeeView',
    components: {
        NavBar,
        EmployeeInfoCard,
    },
    props: {
        email: String,
        avatar: String,
        firstName: String,
        lastName: String,
    },
    data() {
        return {
            data: []
        }
    },
    beforeMount() {
        this.getData();
    },
    methods: {
        async getData() {
            var url = 'https://reqres.in/api/users?page=1';
            const res = await fetch(url);
            const data = await res.json();
            this.data = data;
        }
    },
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
    margin: 40px 0 0;
}

ul {
    list-style-type: none;
    padding: 0;
}

li {
    display: inline-block;
    margin: 0 10px;
}

a {
    color: #42b983;
}

.card-list {
    text-align: center;
    padding: 3%;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-wrap: wrap;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}
</style>