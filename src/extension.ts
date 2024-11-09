// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    const statusBar = vscode.window.createStatusBarItem(vscode.StatusBarAlignment.Right, 100);
    const version = vscode.version;

    statusBar.text = "$(sparkle) " + version;
    statusBar.tooltip = "VS Code Version: " + version;
    statusBar.show();
}

// This method is called when your extension is deactivated
export function deactivate() {}