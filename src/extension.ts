// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import { spawn } from 'child_process';
import * as vscode from 'vscode';

// This method is called when your extension is activated
// Your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {

	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "smoothie" is now active!');
	const path = vscode.window.activeTextEditor?.document.uri.fsPath || null;
	if(path) {
		spawn('wtfdid', ['setFocusedFilePath', path]);
		console.log('setFocusedFilePath');
	}
	vscode.window.onDidChangeActiveTextEditor((editor) => {
		// If the active text editor exists, send its file path to your CLI
		if (editor) {
			const filePath = editor.document.uri.fsPath;
			spawn('wtfdid', ['setFocusedFilePath', filePath]);
			console.log('setFocusedFilePath');
		}
	});
	// The command has been defined in the package.json file
	// Now provide the implementation of the command with registerCommand
	// // The commandId parameter must match the command field in package.json
	// let disposable = vscode.commands.registerCommand('smoothie.helloWorld', () => {
	// 	// The code you place here will be executed every time your command is executed
	// 	// Display a message box to the user
	// 	vscode.window.showInformationMessage('Hello World from smoothie!');
	// });

	// context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}
