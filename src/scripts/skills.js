import Vue from 'vue';

const skill = {
    template: '#skill',
    props: ['skillName', 'skillPercent'],
    methods: {
        drawColorCircle() {
            const circle = this.$refs['color-circle'];
            const dashArray = parseInt(
                getComputedStyle(circle).getPropertyValue('stroke-dasharray')
            );
    
            const percent = (dashArray / 100) * (100 - this.skillPercent);
            circle.style.strokeDashoffset = percent;
        }
    },
    mounted() {
        this.drawColorCircle();
    }
};

const skillsRow = {
    template: '#skills-row',
    components: {
        skill
    },
    props: ['skill']
};

new Vue({
    el: '#skills-component',
    template: '#skills-list',
    data() {
        return {
            skills: []
        }
    },
    components: {
        skillsRow
    },
    created() {
        const data = require('../data/skills.json');
        this.skills = data;
    }
});