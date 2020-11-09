<template>
    <div class="card">
        <div>
            <img :src="avatar" alt="user-profile" width="200" height="200">
        </div>
        <div>
            <label>Name</label>
            <h4>{{firstName}} {{lastName}}</h4>
            <label>Email</label>
            <h4> {{email}} </h4>
            <label>Bio</label>
            <h4> {{fakeBio[firstName]}} </h4>    
        </div>
    </div>
</template>
<script>
export default {
    name: 'EmployeeInfoCard',
    props: {
        email: String,
        avatar: String,
        firstName: String,
        lastName: String,
    },
    data() {
        return {
            fakeBio: {
                "George":"George is just a simple man, he likes to do Georgeful things",
                "Janet":"Janet is just a simple woman man, she likes to do Janetful things",
                "Emma":"Emma is just a simple woman man, she likes to do Emmaful things",
            },

        }
    },
    beforeMount() {

    },
    mounted() {


    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card {
    border: none;
    border-radius: 20px;
    width: 70vw;
    margin-left: auto;
    min-height: 70vh;
    margin: 20px;
    background-color: rgba(0, 0, 0, 0.5);
    box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.4);
    padding: 10%;
    padding-top: 20px;
}

h5,
h4,
label,
p {
    color: white;
}

img {
    border-radius: 50%;
    margin-top: 5%
}

.contact {
    margin-top: 5px;
    margin-bottom: 5px;
}
</style>