<template>
    <router-link 
        :to="{ name: 'EmployeeView', 
        params: {
            firstName: firstName, 
            lastName: lastName,
            email:email, 
            avatar:avatar
        } }
    ">
        <div class="card">
            <img :src="avatar" alt="user-profile" width="100" height="100">
            <h5>{{firstName}} {{lastName}}</h5> 
            <h5 class="contact">Contact</h5> 
            <p class="contact">{{email}}</p>
        </div>
    </router-link>
</template>
<script>
export default {
    name: 'Card',
    props: {
        email:String,
        avatar:String,
        firstName: String,
        lastName: String,
        company: String,
    },
    data() {
        return {
            
        }
    },
    mounted() {


    }

}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    .card{
        border: none;
        border-radius: 20px;
        width: 250px;
        height: 250px;
        margin: 20px;
        background-color: rgba(255,255,255,0.5);
        box-shadow: 0px 6px 2px rgba(0, 0, 0, 0.4);

        &:hover{
            transform:scale(1.1);
            transition:0.2s;
        }
    }
    h5, p{
        color: black;
    }
    img{
        border-radius: 50%;
        margin-top:5%
    }
    .contact{
        margin-top: 5px;
        margin-bottom: 5px;
    }
</style>