import React from 'react';

import IconButton from './icon-button';
import FacebookIcon from './icon/facebook';
import TwitterIcon from './icon/twitter';
import SteamIcon from './icon/steam';
import YouTubeIcon from './icon/youtube';
import TwitchIcon from './icon/twitch';

export const ContainerComponent: React.SFC = props => (
  <div>
    <IconButton url="http://facebook.com">
      <FacebookIcon />
    </IconButton>
    <IconButton url="http://twitter.com">
      <TwitterIcon />
    </IconButton>
    <IconButton url="http://steampowered.com">
      <SteamIcon />
    </IconButton>
    <IconButton url="http://youtube.com">
      <YouTubeIcon />
    </IconButton>
    <IconButton url="http://twitch.tv">
      <TwitchIcon />
    </IconButton>
  </div>
);

export default ContainerComponent;
