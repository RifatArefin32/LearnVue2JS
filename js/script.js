new Vue({
    el: '#vue-app', 
    data: {
        name: 'Rifat Arefin',
        job: 'Software Engineering',
        website: 'https://chatgpt.com/',
        websiteTemplate: '<a href="https://chatgpt.com/">My website</a>',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name ;
        }
    }

});