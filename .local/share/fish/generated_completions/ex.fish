# ex
# Autogenerated from man page /usr/local/share/man/man1/ex.1
complete -c ex -s c --description '{command} will be executed after the first file has been read.'
complete -c ex -s S --description '{file} will be sourced after the first file has been read.'
complete -c ex -l cmd --description 'Like using "-c", but the command is executed just before processing any vimrc…'
complete -c ex -s A --description 'If  Vim has been compiled with ARABIC support for editing right-to-left orien…'
complete -c ex -s b --description 'Binary mode.'
complete -c ex -s C --description 'Compatible.   Set the \'compatible\' option.'
complete -c ex -s d --description 'Start in diff mode.  There should be two, three or four file name arguments.'
complete -c ex -s D --description 'Debugging.'
complete -c ex -s e --description 'Start  Vim in Ex mode, just like the executable was called "ex".'
complete -c ex -s E --description 'Start  Vim in improved Ex mode, just like the executable was called "exim".'
complete -c ex -s f --description 'Foreground.'
complete -c ex -l nofork --description 'Foreground.'
complete -c ex -s F --description 'If  Vim has been compiled with FKMAP support for editing right-to-left orient…'
complete -c ex -s g --description 'If  Vim has been compiled with GUI support, this option enables the GUI.'
complete -c ex -s h --description 'Give a bit of help about the command line arguments and options.'
complete -c ex -s H --description 'If  Vim has been compiled with RIGHTLEFT support for editing right-to-left or…'
complete -c ex -s i --description 'When using the viminfo file is enabled, this option sets the filename to use,…'
complete -c ex -s L --description 'Same as -r.'
complete -c ex -s l --description 'Lisp mode.  Sets the \'lisp\' and \'showmatch\' options on.'
complete -c ex -s m --description 'Modifying files is disabled.  Resets the \'write\' option.'
complete -c ex -s M --description 'Modifications not allowed.'
complete -c ex -s N --description 'No-compatible mode.   Reset the \'compatible\' option.'
complete -c ex -s n --description 'No swap file will be used.  Recovery after a crash will be impossible.'
complete -c ex -o nb --description 'Become an editor server for NetBeans.   See the docs for details.'
complete -c ex -s o --description 'Open N windows stacked.  When N is omitted, open one window for each file.'
complete -c ex -s O --description 'Open N windows side by side.'
complete -c ex -s p --description 'Open N tab pages.  When N is omitted, open one tab page for each file.'
complete -c ex -s R --description 'Read-only mode.  The \'readonly\' option will be set.'
complete -c ex -s r --description 'List swap files, with information about using them for recovery.'
complete -c ex -s s --description 'Silent mode.'
complete -c ex -s T --description 'Tells  Vim the name of the terminal you are using.'
complete -c ex -s u --description 'Use the commands in the file {vimrc} for initializations.'
complete -c ex -s U --description 'Use the commands in the file {gvimrc} for GUI initializations.'
complete -c ex -s V --description 'Verbose.'
complete -c ex -s v --description 'Start  Vim in Vi mode, just like the executable was called "vi".'
complete -c ex -s w --description 'All the characters that you type are recorded in the file {scriptout}, until …'
complete -c ex -s W --description 'Like -w, but an existing file is overwritten.'
complete -c ex -s x --description 'Use encryption when writing files.   Will prompt for a crypt key.'
complete -c ex -s X --description 'Don\'t connect to the X server.'
complete -c ex -s y --description 'Start  Vim in easy mode, just like the executable was called "evim" or "eview…'
complete -c ex -s Z --description 'Restricted mode.   Works like the executable starts with "r".'
complete -c ex -l echo-wid --description 'GTK GUI only: Echo the Window ID on stdout.'
complete -c ex -l help --description 'Give a help message and exit, just like "-h".'
complete -c ex -l literal --description 'Take file name arguments literally, do not expand wildcards.'
complete -c ex -l noplugin --description 'Skip loading plugins.   Implied by -u NONE.'
complete -c ex -l remote --description 'Connect to a Vim server and make it edit the files given in the rest of the a…'
complete -c ex -l remote-expr --description 'Connect to a Vim server, evaluate {expr} in it and print the result on stdout.'
complete -c ex -l remote-send --description 'Connect to a Vim server and send {keys} to it.'
complete -c ex -l remote-silent --description 'As --remote, but without the warning when no server is found.'
complete -c ex -l remote-wait --description 'As --remote, but Vim does not exit until the files have been edited.'
complete -c ex -l remote-wait-silent --description 'As --remote-wait, but without the warning when no server is found.'
complete -c ex -l serverlist --description 'List the names of all Vim servers that can be found.'
complete -c ex -l servername --description 'Use {name} as the server name.'
complete -c ex -l socketid --description 'GTK GUI only: Use the GtkPlug mechanism to run gvim in another window.'
complete -c ex -s t --description 'The file to edit and the initial cursor position depends on a "tag", a sort o…'
complete -c ex -s q --description 'Start in quickFix mode.'
complete -c ex -l version --description 'Print version information and exit.'

