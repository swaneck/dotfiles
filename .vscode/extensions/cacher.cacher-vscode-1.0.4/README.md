# Cacher

## About Cacher

[Cacher](https://www.cacher.io/) is the code snippet organizer for pro developers. It is a cross-platform, cloud-based app used to curate a snippet library for you and your team.

Features:
- Support for editing and viewing 100+ programming languages.
- Flexible color-coded labels to categorize snippets.
- Shareable snippet pages via Cacher's code-sharing community: [snippets.cacher.io](https://snippets.cacher.io/)
- Team and organization features like shared libraries, notifications, role management and code reviews.
- Desktop clients for Windows, macOS and Linux.
- Full-featured web app: [app.cacher.io](https://app.cacher.io/)

## About Cacher extension

This extension for VSCode gives Cacher users the ability to perform popular actions on their personal and team snippet libraries.

![Cacher Demo](https://cdn.cacher.io/vscode/vscode-cacher-demo.gif "Cacher Demo")

## Getting Started

1. Install the Cacher extension.
2. You will be prompted to setup Cacher. Click the **Setup Cacher** button. (You can also start the setup wizard by using the **Cacher: Setup** command.)

![Setup Cacher](https://cdn.cacher.io/vscode/setup-cacher.png "Setup Cacher")

3. In the prompt to "Open Cacher to view your user credentials", click **View credentials**. You can also navigate to the page via: [app.cacher.io/enter?action=view_api_creds](https://app.cacher.io/enter?action=view_api_creds)

![View Credentials](https://cdn.cacher.io/vscode/view-creds.png "View Credentials")

4. From the popped up webpage, sign up or sign in as a Cacher user.
5. Once you are signed into Cacher, you should see a dialog on the top-right corner with your **API KEY** and **API TOKEN** values.

![API Credentials](https://cdn.cacher.io/vscode/api-creds.png "API Credentials")

6. Back in VSCode, enter your API key from step 5 into the input prompt.

![Enter API Key](https://cdn.cacher.io/vscode/enter-api-key.png "Enter API Key")

7. Next, enter your API token.
8. You're all set! Open the VSCode Command Palette and type in **Cacher: Insert Snippet** to try inserting a snippet into your active editor.

> Pro tip: Your credentials are saved in `.cacher/credentials.json` under your OS's home folder. This file is also used to authenticate other apps, like the [Cacher CLI](https://github.com/cacherapp/cacher-cli).

## Commands

### Insert Snippet

> Shortcut: Alt+Shift+I

Search for and insert a snippet file from your personal and team libraries. Searches across snippets' title, description and file content.

### Create Snippet

> Shortcut: Alt+Shift+C

Create a snippet from either the text selection or the entire file (no selection). The command starts a wizard for you to choose:

 - Personal or team library (if using teams)
 - Title
 - Description - *Optional*
 - Filename
 - Public/private permission 
 - Labels - *Optional*

### Open Snippet in App

> Shortcut: Alt+Shift+O

Find a snippet from your libraries and open it in the Cacher web app.

### Open Snippet Page

> Shortcut: Alt+Shift+P

Find a snippet from your libraries and open its Snippets page ([example](https://snippets.cacher.io/snippet/b49ccec98297a95d97e8)).

### Refresh Snippets

> Shortcut: Alt+Shift+R

Reload your Cacher snippets. Do this once you've made a change to your snippets outside of VSCode.

*The extension auto-refreshes once every hour.*

### Setup

Kick off the setup wizard to authenticate your Cacher account. Run this command if you need to switch users.

## Context Menu

Right-click on an active editor to bring up Cacher context menu actions. You can **Create Snippet** from the selected text (uses the entire file if no text selected) or **Insert Snippet** at the cursor position.

![Context Menu](https://cdn.cacher.io/vscode/context-menu.png "Context Menu")

## Status Bar Item

Click on **</> Snippets** in the VSCode footer to view all available commands.

![Status Bar Item](https://cdn.cacher.io/vscode/status-bar-item.png "Status Bar Item")

## Change Keyboard Shortcuts

Cacher's default shortcuts can be configured via the Keyboard Shortcuts editor (**File > Preferences > Keyboard Shortcuts**).

## Requirements

The Cacher VSCode extension is available for registered users on a Pro/Team plan. For a 14-day free Team trial, sign up at [app.cacher.io](https://app.cacher.io).

## Getting Help

Find help articles and file support tickets: [support.cacher.io](https://support.cacher.io)

## Release Notes

### 1.0.0

Initial release of Cacher extension. 

Adds commands:

- Insert Snippet
- Create Snippet
- Open Snippet in App
- Open Snippet Page
- Refresh Snippets
- Setup
