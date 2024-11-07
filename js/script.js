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


new Vue({
    el: '#vue-app-2',
    data: {
        age: 25,
        x: 0,
        y: 0,
    },
    methods: {
        add: function() {
            this.age++;
        },
        sub: function(dec) {
            this.age -= dec;
        },
        updateXY: function(event) {
            console.log(event);
            this.x = event.offsetX;
            this.y = event.offsetY;
        },
        showAlert: function() {
            alert('Are you sure?');
        }
    },
});