# VSC-Info
The extensions show the current editor version in the status bar and can collect information about the editor, extensions, and the system.

[![Open VSX Downloads](https://img.shields.io/open-vsx/dt/saxc/vsc-info?label=Open%20VSX)
](https://open-vsx.org/extension/saxc/vsc-info)
[![Visual Studio Marketplace Installs](https://img.shields.io/visual-studio-marketplace/i/saxc.vsc-info?label=Visual%20Studio%20Marketplace)](https://marketplace.visualstudio.com/items?itemName=saxc.vsc-info)

## StatusBar
The information in the status bar was the main feature for me to build this extension. I work on different systems with different editor versions, not all of these systems have auto-update functionality. The status bar shows directly which version is running.

![StatusBar](images/StatusBar.png)

## Collect information
The extension can collect information about

- Editor
- Extensions
- System
- Network

in a JSON file.

```json
{
  "editor": {
    "name": "Visual Studio Code",
    "version": "1.95.2",
    "language": "en"
  },
  "extensions": [
    {
      ...
    }
  ],
  "system": {
    "platform": "linux",
    "arch": "x64",
    "cpus": [
      {
        ...
      }
    ],
    "totalmem": ...,
    "freemem": ..,
    "hostname": ...,
    "uptime": ...,
    "networkInterfaces": {
      "lo": [
        {
          ...
        }
      ],
      "wlan0": [
        {
          ...
        }
      ]
    },
    "userInfo": {
        ...
    }
  }
}
```

## Versioning
YY.MM.VERSION

- YY: Release year
- MM: Release month
- VERSION: Version in year/month