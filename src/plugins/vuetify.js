import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    theme: {
        dark: false,
        themes: {
            dark: {
                primary: '#1DE9B6',
                secondary: colors.orange,
                accent: '#82B1FF',
                error: '#FF5252',
                info: '#2196F3',
                success: '#4CAF50',
                warning: '#FFC107',
            },
            light: {
                primary: '#0CB691', // #E53935
                secondary: colors.red.lighten4, // #FFCDD2
                accent: colors.indigo.base, // #3F51B5
            },

        },


    },
});