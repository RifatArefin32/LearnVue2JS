new Vue({
    el: '#vue-app', 
    data: {
        name: 'Rifat Arefin',
        job: 'Software Engineering',
    },
    methods: {
        greet: function(time) {
            return 'Good ' + time + ' ' + this.name ;
        }
    }

});