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

new Vue({
    el: '#vue-app-3',
    data: {
        v3name: '',
        v3email: '',
    },
    methods: {
        name: function() {
            this.v3name = document.getElementById('vue-app-3-name').value;
            document.getElementById('name-message').innerText = 'You entered ' + this.v3name;
        },
        email: function() {
            this.v3email = document.getElementById('vue-app-3-email').value;
            document.getElementById('name-message').innerText = 'You entered ' + this.v3email;
        }
    }
});

new Vue({
    el: '#vue-app-4',
    data: {
        v4name: '',
        v4email: '',
    },
    methods: {
    },
});


new Vue({
    el: '#vue-app-5',
    data: {
        a: 0,
        b: 0
    },
    computed: {
        calSum() {
            return this.a + this.b;
        }
    }
});

new Vue({
    el: '#vue-app-6',
    data: {
        flag: true,
    },
    methods: {
        changeFlag: function() {
            this.flag = !this.flag;
        }
    }
});
