/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-console */
const terminalKit = require('terminal-kit').terminal;
const childProcess = require('child_process');
const kill = require('tree-kill');

let currentChildProcess = null;
const mainMenu = ['1. 🏰 Start development', '2. 🚪 Exit'];
const subMenuStart = ['1. Start', '2. Exit'];

const renderHeader = () => {
  terminalKit.clear();
  terminalKit.cyan('🍿 HBO MAX 🍿\n\n');
  terminalKit.cyan('Select one of the options to get started:');
};

const getSubMenuByMenuIndex = index => {
  switch (index) {
    case 0:
      return subMenuStart;
    default:
      return subMenuStart;
  }
};

const executeChildProcessByOperationNameAndExit = name => {
  switch (name) {
    case '1. Start':
      currentChildProcess = childProcess.spawn('yarn', ['start'], { stdio: 'inherit' });

      break;

    default:
      process.exit();
  }

  // Close the current parent process
  currentChildProcess.on('exit', () => process.exit());
};

const renderSubMenu = selectedSubMenu => {
  renderHeader();

  terminalKit.singleColumnMenu(selectedSubMenu, (_error, subMenuResponse) => {
    const subMenuSelectedText = subMenuResponse.selectedText;

    executeChildProcessByOperationNameAndExit(subMenuSelectedText);
  });
};

const renderMenu = () => {
  currentChildProcess = null;

  renderHeader();

  terminalKit.singleColumnMenu(mainMenu, (_error, mainMenuResponse) => {
    if (mainMenuResponse.selectedIndex === 1) {
      process.exit();
    }

    const selectedSubMenu = getSubMenuByMenuIndex(mainMenuResponse.selectedIndex);

    renderSubMenu(selectedSubMenu);
  });
};

/**
 * Events
 */

terminalKit.on('key', name => {
  if (name === 'CTRL_C') {
    if (currentChildProcess) {
      kill(currentChildProcess.pid);
    } else {
      terminalKit.clear();
      process.exit();
    }
  }
});

/**
 * Renders
 */

renderMenu();
