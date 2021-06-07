var jeopardy = new Vue({
    el: '#jeopardy',
    data: {
        rawEmail: "",
        email: null,
        hello: "hello",
        questions: ""
    },
    methods: {
        set_email: function() {
            if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@dfamilk.com/.test(this.rawEmail)){
                this.email = this.rawEmail;
            } 
        }
    },
    watch: {
        /*
        email: function() {
            if (email != null) {
                // if email is set then hide .container-form
            }
        }
        */
    }
})