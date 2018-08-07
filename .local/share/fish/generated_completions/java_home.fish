# java_home
# Autogenerated from man page /usr/share/man/man1/java_home.1
complete -c java_home -s v -l version --description 'Filters the returned JVMs by the major platform version in "JVMVersion" form.'
complete -c java_home -s a -l arch --description 'Filters the returned JVMs by the architecture they support.'
complete -c java_home -s d -l datamodel --description 'Filters the returned JVMs capable of running in 32 or 64-bit mode.'
complete -c java_home -s t -l task --description 'Selects from the list of JVMs which can run a specific task.'
complete -c java_home -s F -l failfast --description 'Immediately fails when filters return no JVMs; does not print out the path to…'
complete -c java_home -l exec --description 'Executes the command at $JAVA_HOME/bin/<command> and passes the remaining arg…'
complete -c java_home -s X -l xml --description 'Prints the list of selected JVMs and associated properties as an XML plist to…'
complete -c java_home -s V -l verbose --description 'Prints the matching list of JVMs and architectures to stderr.'
complete -c java_home -s h -l help --description 'Brief usage information.'
