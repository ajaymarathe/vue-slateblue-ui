import navbar from '../components/layout/navbar';
import VueFontawesome from 'vue-fontawesome-icon/src/components/VueFontawesome.vue';

import slateblueAlert from "../components/slateblueAlert";
import slateblueBadge from "../components/slateblueBadge";
import slateblueButton from "../components/slateblueButton";


export default {
    install(Vue) {
        Vue.component(navbar.name, navbar);
        Vue.component(VueFontawesome.name, VueFontawesome);

        Vue.component(slateblueAlert.name, slateblueAlert);
        Vue.component(slateblueBadge.name, slateblueBadge);
        Vue.component(slateblueButton.name, slateblueButton);
    }
};
