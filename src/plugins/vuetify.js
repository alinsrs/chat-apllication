import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: '#0B1620',
                secondary: '#E6E7E9',
                errors: '#f44336',
                info: '#031528',
                success: '#64DD17',
                background: '#9A98A4'
            }
        }
    }
});