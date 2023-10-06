<template>
    <div class="page">
        <h4>Tạo Liên hệ mới</h4>
        <ContactForm 
            :contact="contact"
            @submit:contact="createContact"
        />
        <p> {{ message }} </p>
        <router-link :to="{ name: 'contactbook' }">
            <button v-if="message" type="button" class="btn btn-primary">
                Trở về trang chủ
            </button>
        </router-link>
    </div>
</template>

<script>
import ContactForm from "@/components/ContactForm.vue";
import ContactService from "@/services/contact.service";

export default {
    components: {
        ContactForm
    },
    props: {
        //id: { type: String, required: false },
    },
    data() {
        return {
            contact: null,
            message: "",
        };
    },
    methods: {
        async createContact(data) {
            try {
                await ContactService.create(data);
                this.message = "Tạo liên hệ mới thành công";
            } 
            catch (error) {
                console.log(error);
            }
        }
        //
    },
    created() {
        this.contact = {};
        this.message = "";
    },
};
</script>