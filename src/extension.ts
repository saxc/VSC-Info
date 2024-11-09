import * as vscode from 'vscode';
import * as os from 'os';

export function activate(context: vscode.ExtensionContext) {
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    const version = vscode.version;

    statusBar.text = "$(sparkle) " + version;
    statusBar.tooltip = "VS Code Version: " + version;
    statusBar.command = "vsc-info.showInfos";
    statusBar.show();

    context.subscriptions.push(
        vscode.commands.registerCommand('vsc-info.showInfos', () => {
            const jsonContent = JSON.stringify(getVsciObject(), null, 2);
            const document = vscode.workspace.openTextDocument({
              content: jsonContent,
              language: 'json'
            });

            document.then(doc => {
              vscode.window.showTextDocument(doc);
            });
        })
    );
}

export function deactivate() {}

function getVsciObject(){
    return {
        vscode: {
            name: vscode.env.appName,
            version: vscode.version,
            language: vscode.env.language
        },
        extensions: vscode.extensions.all,
        system: {
            platform: os.platform(),
            arch: os.arch(),
            cpus: os.cpus(),
            totalmem: os.totalmem(),
            freemem: os.freemem(),
            hostname: os.hostname(),
            uptime: os.uptime(),
            networkInterfaces: os.networkInterfaces(),
            userInfo: os.userInfo(),
        },
    };
}