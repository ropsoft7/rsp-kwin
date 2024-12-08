#!/usr/local/bin/rsp.nodeJS

const RSp = require('rsp-libjscript');
const path = require('path')
const assetdir = path.join(__dirname, 'asset')
const projdir = path.join(__dirname, 'proj')

console.log('Running fix.sh')

const rsp = new RSp();

rsp.prin('Fixing session .desktop file')

rsp.util.replacef(projdir + '/rsp-kwin.desktop', '=RSp', '=@RSp');

rsp.prin('Installing Window Compositor RSp config center shortcut')

rsp.exec(`

    sudo rm -rf /usr/local/share/applications/compositor.desktop
    sudo cp -rf ${assetdir}/compositor.desktop /usr/local/share/applications
    sudo cat  /usr/local/share/applications/compositor.desktop
    
`)

process.exit(0);