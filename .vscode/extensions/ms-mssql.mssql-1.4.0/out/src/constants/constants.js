"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Collection of Non-localizable Constants
exports.languageId = 'sql';
exports.extensionName = 'mssql';
exports.extensionConfigSectionName = 'mssql';
exports.mssqlProviderName = 'MSSQL';
exports.noneProviderName = 'None';
exports.connectionApplicationName = 'vscode-mssql';
exports.outputChannelName = 'MSSQL';
exports.connectionConfigFilename = 'settings.json';
exports.connectionsArrayName = 'connections';
exports.cmdRunQuery = 'extension.runQuery';
exports.cmdRunCurrentStatement = 'extension.runCurrentStatement';
exports.cmdCancelQuery = 'extension.cancelQuery';
exports.cmdConnect = 'extension.connect';
exports.cmdDisconnect = 'extension.disconnect';
exports.cmdChooseDatabase = 'extension.chooseDatabase';
exports.cmdChooseLanguageFlavor = 'extension.chooseLanguageFlavor';
exports.cmdShowReleaseNotes = 'extension.showReleaseNotes';
exports.cmdShowGettingStarted = 'extension.showGettingStarted';
exports.cmdNewQuery = 'extension.newQuery';
exports.cmdManageConnectionProfiles = 'extension.manageProfiles';
exports.cmdRebuildIntelliSenseCache = 'extension.rebuildIntelliSenseCache';
exports.sqlDbPrefix = '.database.windows.net';
exports.defaultConnectionTimeout = 15;
exports.azureSqlDbConnectionTimeout = 30;
exports.azureDatabase = 'Azure';
exports.defaultPortNumber = 1433;
exports.sqlAuthentication = 'SqlLogin';
exports.defaultDatabase = 'master';
exports.errorPasswordExpired = 18487;
exports.errorPasswordNeedsReset = 18488;
exports.errorLoginFailed = 18456;
exports.maxDisplayedStatusTextLength = 50;
exports.outputContentTypeRoot = 'root';
exports.outputContentTypeMessages = 'messages';
exports.outputContentTypeResultsetMeta = 'resultsetsMeta';
exports.outputContentTypeColumns = 'columns';
exports.outputContentTypeRows = 'rows';
exports.outputContentTypeConfig = 'config';
exports.outputContentTypeSaveResults = 'saveResults';
exports.outputContentTypeOpenLink = 'openLink';
exports.outputContentTypeCopy = 'copyResults';
exports.outputContentTypeEditorSelection = 'setEditorSelection';
exports.outputContentTypeShowError = 'showError';
exports.outputContentTypeShowWarning = 'showWarning';
exports.outputServiceLocalhost = 'http://localhost:';
exports.msgContentProviderSqlOutputHtml = 'dist/html/sqlOutput.ejs';
exports.contentProviderMinFile = 'dist/js/app.min.js';
exports.serviceCompatibleVersion = '1.0.0';
exports.untitledSaveTimeThreshold = 10.0;
exports.renamedOpenTimeThreshold = 10.0;
exports.timeToWaitForLanguageModeChange = 10000.0;
exports.macOpenSslHelpLink = 'https://github.com/Microsoft/vscode-mssql/wiki/OpenSSL-Configuration';
exports.gettingStartedGuideLink = 'https://aka.ms/mssql-getting-started';
exports.changelogLink = 'https://aka.ms/vscode-mssql-changelog';
exports.integratedAuthHelpLink = 'https://aka.ms/vscode-mssql-integratedauth';
exports.sqlToolsServiceCrashLink = 'https://github.com/Microsoft/vscode-mssql/wiki/SqlToolsService-Known-Issues';
exports.localizedTexts = 'localizedTexts';
// Configuration Constants
exports.copyIncludeHeaders = 'copyIncludeHeaders';
exports.configLogDebugInfo = 'logDebugInfo';
exports.configMyConnections = 'connections';
exports.configSaveAsCsv = 'saveAsCsv';
exports.configSaveAsJson = 'saveAsJson';
exports.configSaveAsExcel = 'saveAsExcel';
exports.configRecentConnections = 'recentConnections';
exports.configMaxRecentConnections = 'maxRecentConnections';
exports.configCopyRemoveNewLine = 'copyRemoveNewLine';
exports.configSplitPaneSelection = 'splitPaneSelection';
exports.configShowBatchTime = 'showBatchTime';
exports.extConfigResultKeys = ['shortcuts', 'messagesDefaultOpen'];
exports.sqlToolsServiceInstallDirConfigKey = 'installDir';
exports.sqlToolsServiceExecutableFilesConfigKey = 'executableFiles';
exports.sqlToolsServiceVersionConfigKey = 'version';
exports.sqlToolsServiceDownloadUrlConfigKey = 'downloadUrl';
exports.extConfigResultFontFamily = 'resultsFontFamily';
exports.extConfigResultFontSize = 'resultsFontSize';
exports.configApplyLocalization = 'applyLocalization';
exports.configPersistQueryResultTabs = 'persistQueryResultTabs';
// ToolsService Constants
exports.serviceInstallingTo = 'Installing SQL tools service to';
exports.serviceInstalling = 'Installing';
exports.serviceDownloading = 'Downloading';
exports.serviceInstalled = 'Sql Tools Service installed';
exports.serviceInstallationFailed = 'Failed to install Sql Tools Service';
exports.sqlToolsServiceCrashMessage = 'SQL Tools Service component could not start.';
exports.sqlToolsServiceCrashButton = 'View Known Issues';
exports.serviceInitializingOutputChannelName = 'SqlToolsService Initialization';
exports.serviceInitializing = 'Initializing SQL tools service for the mssql extension.';
exports.commandsNotAvailableWhileInstallingTheService = 'Note: mssql commands will be available after installing the service.';
exports.unsupportedPlatformErrorMessage = 'The platform is not supported';
exports.serviceLoadingFailed = 'Failed to load Sql Tools Service';
exports.invalidServiceFilePath = 'Invalid file path for Sql Tools Service';
exports.sqlToolsServiceName = 'SQLToolsService';
exports.serviceNotCompatibleError = 'Client is not compatible with the service layer';
exports.sqlToolsServiceConfigKey = 'service';
exports.v1SqlToolsServiceConfigKey = 'v1Service';

//# sourceMappingURL=constants.js.map
