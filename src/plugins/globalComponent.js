import navbar from '../components/layout/navbar';
import VueFontawesome from 'vue-fontawesome-icon/src/components/VueFontawesome.vue';

import slateblueAlert from "../components/slateblueAlert";
import slateblueBadge from "../components/slateblueBadge";
import slateblueButton from "../components/slateblueButton";
import slateblueCard from "../components/slateblueCard/slateblueCard";
import slateblueCardHeader from "../components/slateblueCard/slateblueCardHeader";
import slateblueCardBody from "../components/slateblueCard/slateblueCardBody";
import slateblueCardFooter from "../components/slateblueCard/slateblueCardFooter";
import slateblueCardOverlay from "../components/slateblueCard/slateblueCardOverlay";
import slateblueCarousel from "../components/slateblueCarousel/slateblueCarousel";
import slateblueSlide from "../components/slateblueCarousel/slateblueSlide";
import slateblueInputs from "../components/slateblueInputs";
import slateblueCheckbox from "../components/slateblueCheckbox";
import slateblueRadio from "../components/slateblueRadio";
import slateblueToggle from "../components/slateblueToggle";
import slateblueNavbar from "../components/slateblueNavbar";
import slateblueTab from "../components/slateblueTab/slateblueTab";
import slateblueTabItem from "../components/slateblueTab/slateblueTabItem";
import slateblueTabContent from "../components/slateblueTab/slateblueTabContent";
import slateblueProgress from "../components/slateblueProgress";


export default {
    install(Vue) {
        Vue.component(navbar.name, navbar);
        Vue.component(VueFontawesome.name, VueFontawesome);

        Vue.component(slateblueAlert.name, slateblueAlert);
        Vue.component(slateblueBadge.name, slateblueBadge);
        Vue.component(slateblueButton.name, slateblueButton);
        Vue.component(slateblueCard.name, slateblueCard);
        Vue.component(slateblueCardHeader.name, slateblueCardHeader);
        Vue.component(slateblueCardBody.name, slateblueCardBody);
        Vue.component(slateblueCardFooter.name, slateblueCardFooter);
        Vue.component(slateblueCardOverlay.name, slateblueCardOverlay);
        Vue.component(slateblueCarousel.name, slateblueCarousel);
        Vue.component(slateblueSlide.name, slateblueSlide);
        Vue.component(slateblueInputs.name, slateblueInputs);
        Vue.component(slateblueCheckbox.name, slateblueCheckbox);
        Vue.component(slateblueRadio.name, slateblueRadio);
        Vue.component(slateblueToggle.name, slateblueToggle);
        Vue.component(slateblueNavbar.name, slateblueNavbar);
        Vue.component(slateblueTab.name, slateblueTab);
        Vue.component(slateblueTabItem.name, slateblueTabItem);
        Vue.component(slateblueTabContent.name, slateblueTabContent);
        Vue.component(slateblueProgress.name, slateblueProgress);
    }
};
