import * as vscode from "vscode";
import * as os from "os";

export function activate(context: vscode.ExtensionContext) {
  const statusBar = vscode.window.createStatusBarItem(
    vscode.StatusBarAlignment.Right,
    100
  );
  const version = vscode.version;
  const editor = vscode.env.appName;

  statusBar.text = "$(sparkle) " + version;
  statusBar.tooltip = editor + " Version: " + version;
  statusBar.command = "vsc-info.showAllInfos";
  statusBar.show();

  context.subscriptions.push(
    vscode.commands.registerCommand("vsc-info.showAllInfos", () => {
      showData(getVsciObject());
    }),
    vscode.commands.registerCommand("vsc-info.showEditorInfos", () => {
      showData(getEditorObject());
    }),
    vscode.commands.registerCommand("vsc-info.showExtensionsInfos", () => {
      showData(getExtensionsObject());
    }),
    vscode.commands.registerCommand("vsc-info.showSystemInfos", () => {
      showData(getSystemObject());
    })
  );
}

export function deactivate() {}

function getVsciObject() {
  return {
    editor: getEditorObject(),
    extensions: getExtensionsObject(),
    system: getSystemObject(),
  };
}

function getEditorObject() {
  return {
    name: vscode.env.appName,
    version: vscode.version,
    language: vscode.env.language,
  };
}

function getExtensionsObject() {
  return vscode.extensions.all;
}

function getSystemObject() {
  return {
    platform: os.platform(),
    arch: os.arch(),
    cpus: os.cpus(),
    totalmem: os.totalmem(),
    freemem: os.freemem(),
    hostname: os.hostname(),
    uptime: os.uptime(),
    networkInterfaces: os.networkInterfaces(),
    userInfo: os.userInfo(),
  };
}

function showData(data: object) {
  const jsonContent = JSON.stringify(data, null, 2);
  const document = vscode.workspace.openTextDocument({
    content: jsonContent,
    language: "json",
  });

  document.then((doc) => {
    vscode.window.showTextDocument(doc);
  });
}
