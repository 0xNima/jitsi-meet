// @added-by-me

import { type Dispatch } from 'redux';

import { translate } from '../../../base/i18n';
import { IconRaisedHand } from '../../../base/icons';
import {
    pinParticipant
} from '../../../base/participants';
import { connect } from '../../../base/redux';
import { AbstractButton, type AbstractButtonProps } from '../../../base/toolbox/components';
import { setTileView } from '../../../video-layout';


type Props = AbstractButtonProps & {
    /**
     * The redux {@code dispatch} function.
     */
    dispatch: Dispatch<any>
};

/**
 * An implementation of a button to raise or lower hand.
 */
class AutoPinButton extends AbstractButton<Props, *> {
    accessibilityLabel = 'Auto Select';
    icon = IconRaisedHand;
    label = 'Auto Select';
    toggledLabel = 'Auto Select';
 
    /**
     * Handles clicking / pressing the button.
     *
     * @override
     * @protected
     * @returns {void}
     */
    _handleClick() {
        this.props.dispatch(pinParticipant(null));
        this.props.dispatch(setTileView(false));
    }

    /**
     * Indicates whether this button is in toggled state or not.
     *
     * @override
     * @protected
     * @returns {boolean}
     */
    _isToggled() {
        return false;
    }

}

export default translate(connect()(AutoPinButton))
