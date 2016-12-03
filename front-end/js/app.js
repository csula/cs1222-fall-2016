(function() {
    'use strict';
    console.log('Hello CS-1222');

    var artistApp = new Vue({
        el: '#artists-app',
        data: {
            artists: []
        },
        mounted: function() {
            axios.get('/api/mysql/artists')
                .then(resp => {
                    this.artists = resp.data;
                });
        }
    });

    var gradesApp = new Vue({
        el: '#grades-app',
        data: {
            grades: [],
            newUser: {
                name: '',
                grade: 10
            },
        },
        mounted: function() {
            this.refreshGrade();
        },
        methods: {
            addGrade: function() {
                axios.post('/api/mongo/grades', this.newUser)
                    .then(resp => {
                        console.log(resp.data);
                        this.newUser = {};
                        this.refreshGrade();
                    });
            },
            removeGrade: function(grade) {
                axios.delete(`/api/mongo/grades/${grade._id}`)
                    .then(this.refreshGrade);
            },
            refreshGrade: function() {
                axios.get('/api/mongo/grades')
                    .then(resp => {
                        this.grades = resp.data;
                    });
            }
        },
        computed: {
            average: function() {
                return this.grades.length ? this.sum / this.grades.length : 0;
            },
            sum: function() {
                return this.grades.reduce((total, current) => {
                    return total + current.grade;
                }, 0);
            },
            letterGrade: function() {
                let sum = this.sum + 5;
                if (sum < 0) {
                    return 'WTF';
                }
                if (sum < 60) {
                    return 'N';
                } else if (sum < 74) {
                    return 'C';
                } else if (sum < 77)  {
                    return 'C+';
                } else if (sum < 80) {
                    return 'B-';
                } else if (sum < 85) {
                    return 'B';
                } else if (sum < 90) {
                    return 'B+';
                } else if (sum < 94) {
                    return 'A-';
                } else if (sum < 100) {
                    return 'A';
                }
            }
        }
    });
})();