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
import slateblueSlideIndicator from "../components/slateblueCarousel/slateblueSlideIndicator";
import slateblueCarouselnner from "../components/slateblueCarousel/slateblueCarouselnner";
import slateblueCarouselCaption from "../components/slateblueCarousel/slateblueCarouselCaption";
import slateblueInputs from "../components/slateblueInputs";
import slateblueCheckbox from "../components/slateblueCheckbox";
import slateblueRadio from "../components/slateblueRadio";
import slateblueNavbar from "../components/slateblueNavbar";
import slateblueTab from "../components/slateblueTab/slateblueTab";
import slateblueTabItem from "../components/slateblueTab/slateblueTabItem";
import slateblueTabContent from "../components/slateblueTab/slateblueTabContent";
import slateblueProgress from "../components/slateblueProgress";
import slateblueModal from "../components/slateblueModal/slateblueModal";
import slateblueModalHeader from "../components/slateblueModal/slateblueModalHeader";
import slateblueClose from "../components/slateblueClose";
import slateblueModalBody from "../components/slateblueModal/slateblueModalBody";
import slateblueModalFooter from "../components/slateblueModal/slateblueModalFooter";
import slateblueSpinner from "../components/slateblueSpinner";
import slateblueFooter from "../components/layout/slateblueFooter";
import slateblueDropdown from "../components/slateblueDropdown/slateblueDropdown";
import slateblueDropdownMenu from "../components/slateblueDropdown/slateblueDropdownMenu";

// pages
import login from '../views/pages/login';
import register from "../views/pages/register";


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
        Vue.component(slateblueSlideIndicator.name, slateblueSlideIndicator);
        Vue.component(slateblueCarouselnner.name, slateblueCarouselnner);
        Vue.component(slateblueCarouselCaption.name, slateblueCarouselCaption);
        Vue.component(slateblueInputs.name, slateblueInputs);
        Vue.component(slateblueCheckbox.name, slateblueCheckbox);
        Vue.component(slateblueRadio.name, slateblueRadio);
        Vue.component(slateblueNavbar.name, slateblueNavbar);
        Vue.component(slateblueTab.name, slateblueTab);
        Vue.component(slateblueTabItem.name, slateblueTabItem);
        Vue.component(slateblueTabContent.name, slateblueTabContent);
        Vue.component(slateblueProgress.name, slateblueProgress);
        Vue.component(slateblueModal.name, slateblueModal);
        Vue.component(slateblueModalHeader.name, slateblueModalHeader);
        Vue.component(slateblueClose.name, slateblueClose);
        Vue.component(slateblueModalBody.name, slateblueModalBody);
        Vue.component(slateblueModalFooter.name, slateblueModalFooter);
        Vue.component(slateblueSpinner.name, slateblueSpinner);
        Vue.component(slateblueFooter.name, slateblueFooter);
        Vue.component(slateblueDropdown.name, slateblueDropdown);
        Vue.component(slateblueDropdownMenu.name, slateblueDropdownMenu);

        // pages
        Vue.component(login.name, login);
        Vue.component(register.name, register);
    }
};
