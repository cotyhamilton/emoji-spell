import React from 'react';
import './InstallPrompt.css';

const InstallPrompt = props => (
  <div className="install-prompt-background" onClick={props.close}>
    <div className="install-prompt">
      <p className="install-prompt-exit">x</p>
      <img class="app-icon" src="apple-touch-icon.png" alt="" />
      <h1>INSTALL EMOJI SPELL</h1>
      <p><span>Just tap </span><img class="action-icon" src="action-ios.svg" alt="" /><span> then 'Add to Home Screen'</span></p>
    </div>
  </div>
);

export default InstallPrompt;