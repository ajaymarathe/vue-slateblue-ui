import navbar from '../components/layout/navbar';
import VueFontawesome from 'vue-fontawesome-icon/src/components/VueFontawesome.vue';

import BaseAlert from "../components/BaseAlert";
import BaseBadge from "../components/BaseBadge";
import BaseButton from "../components/BaseButton";

// base-card
import BaseCard from "../components/base-card/BaseCard";
import Cardheader from "../components/base-card/CardHeader";
import CardBody from "../components/base-card/CardBody";
import CardFooter from "../components/base-card/CardFooter";
import CardOverlay from "../components/base-card/CardOverlay";

import slateblueCarousel from "../components/slateblueCarousel/slateblueCarousel";
import slateblueSlide from "../components/slateblueCarousel/slateblueSlide";
import slateblueSlideIndicator from "../components/slateblueCarousel/slateblueSlideIndicator";
import slateblueCarouselnner from "../components/slateblueCarousel/slateblueCarouselnner";
import slateblueCarouselCaption from "../components/slateblueCarousel/slateblueCarouselCaption";
import BaseInput from "../components/BaseInput";
import BaseCheckbox from "../components/BaseCheckbox";
import BaseRadio from "../components/BaseRadio";
import BaseNavbar from "../components/BaseNavbar";
import slateblueTab from "../components/slateblueTab/slateblueTab";
import slateblueTabItem from "../components/slateblueTab/slateblueTabItem";
import slateblueTabContent from "../components/slateblueTab/slateblueTabContent";
import BaseProgress from "../components/BaseProgress";
import BaseClose from "../components/BaseClose";
import BaseModal from "../components/base-modal/BaseModal";
import ModalHeader from "../components/base-modal/ModalHeader";
import ModalBody from "../components/base-modal/ModalBody";
import ModalFooter from "../components/base-modal/ModalFooter";

import BaseSpinner from "../components/BaseSpinner";
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

        Vue.component(BaseAlert.name, BaseAlert);
        Vue.component(BaseBadge.name, BaseBadge);
        Vue.component(BaseButton.name, BaseButton);

        Vue.component(BaseCard.name, BaseCard);
        Vue.component(Cardheader.name, Cardheader);
        Vue.component(CardBody.name, CardBody);
        Vue.component(CardFooter.name, CardFooter);
        Vue.component(CardOverlay.name, CardOverlay);

        Vue.component(slateblueCarousel.name, slateblueCarousel);
        Vue.component(slateblueSlide.name, slateblueSlide);
        Vue.component(slateblueSlideIndicator.name, slateblueSlideIndicator);
        Vue.component(slateblueCarouselnner.name, slateblueCarouselnner);
        Vue.component(slateblueCarouselCaption.name, slateblueCarouselCaption);
        Vue.component(BaseInput.name, BaseInput);
        Vue.component(BaseCheckbox.name, BaseCheckbox);
        Vue.component(BaseRadio.name, BaseRadio);
        Vue.component(BaseNavbar.name, BaseNavbar);
        Vue.component(slateblueTab.name, slateblueTab);
        Vue.component(slateblueTabItem.name, slateblueTabItem);
        Vue.component(slateblueTabContent.name, slateblueTabContent);
        Vue.component(BaseProgress.name, BaseProgress);

        Vue.component(BaseClose.name, BaseClose);
        Vue.component(BaseModal.name, BaseModal);
        Vue.component(ModalHeader.name, ModalHeader);
        Vue.component(ModalBody.name, ModalBody);
        Vue.component(ModalFooter.name,ModalFooter);

        Vue.component(BaseSpinner.name, BaseSpinner);
        Vue.component(slateblueFooter.name, slateblueFooter);
        Vue.component(slateblueDropdown.name, slateblueDropdown);
        Vue.component(slateblueDropdownMenu.name, slateblueDropdownMenu);

        // pages
        Vue.component(login.name, login);
        Vue.component(register.name, register);
    }
};
