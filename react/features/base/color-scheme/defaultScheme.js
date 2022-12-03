// @flow

import { ColorPalette, getRGBAFormat } from '../styles';

/**
 * The default color scheme of the application.
 */
export default {
    '_defaultTheme': {
        // Generic app theme colors that are used across the entire app.
        // All scheme definitions below inherit these values.
        background: 'rgb(255, 255, 255)',
        errorText: ColorPalette.red,
        icon: 'rgb(28, 32, 37)',
        text: 'rgb(28, 32, 37)'
    },
    'Chat': {
        displayName: 'rgb(94, 109, 121)',
        localMsgBackground: 'rgb(215, 230, 249)',
        lobbyMsgBackground: 'rgb(106, 80, 211)',
        lobbyMsgNotice: 'rgb(16, 10, 41)',
        privateMsgBackground: 'rgb(250, 219, 219)',
        privateMsgNotice: 'rgb(186, 39, 58)',
        remoteMsgBackground: 'rgb(241, 242, 246)',
        replyBorder: 'rgb(219, 197, 200)',
        replyIcon: 'rgb(94, 109, 121)'
    },
    'Conference': {
        inviteButtonBackground: 'rgb(0, 119, 225)',
        onVideoText: 'white'
    },
    'Dialog': {},
    'Header': {
        background: ColorPalette.blue,
        icon: ColorPalette.white,
        statusBar: ColorPalette.blueHighlight,
        statusBarContent: ColorPalette.white,
        text: ColorPalette.white
    },
    'Toolbox': {
        button: 'rgb(255, 255, 255)',
        buttonToggled: 'rgb(38, 58, 76)',
        buttonToggledBorder: getRGBAFormat('#a4b8d1', 0.6),
        hangup: '#246FE5' //'rgb(227,79,86)'  // @added-by-me
    }
};
