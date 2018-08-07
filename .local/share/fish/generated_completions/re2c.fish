# re2c
# Autogenerated from man page /usr/local/share/man/man1/re2c.1
complete -c re2c -s '?' -s h -l help --description 'Invoke a short help.'
complete -c re2c -s b -l bit-vectors --description 'Implies -s.'
complete -c re2c -s c -l conditions --description 'Used to support (f)lex-like condition support.'
complete -c re2c -s d -l debug-output --description 'Creates a parser that dumps information about the current position and in whi…'
complete -c re2c -s D -l emit-dot --description 'Emit Graphviz dot data.  It can then be processed with e. g.  dot -Tpng input.'
complete -c re2c -s e -l ecb --description 'Generate a parser that supports EBCDIC.'
complete -c re2c -s f -l storable-state --description 'Generate a scanner with support for storable state.'
complete -c re2c -s F -l flex-syntax --description 'Partial support for flex syntax.'
complete -c re2c -s g -l computed-gotos --description 'Generate a scanner that utilizes GCC\\(aqs computed goto feature.'
complete -c re2c -s i -l no-debug-info --description 'Do not output #line information.'
complete -c re2c -s o -l output --description 'Specify the OUTPUT file.'
complete -c re2c -s r -l reusable --description 'Allows reuse of scanner definitions with /*!use:re2c */ after /*!rules:re2c *…'
complete -c re2c -s s -l nested-ifs --description 'Generate nested ifs for some switches.'
complete -c re2c -s t -l type-header --description 'Create a HEADER file that contains types for the (f)lex-like condition suppor…'
complete -c re2c -s u -l unicode --description 'Generate a parser that supports UTF-32.'
complete -c re2c -s v -l version --description 'Show version information.'
complete -c re2c -s V -l vernum --description 'Show the version as a number XXYYZZ.'
complete -c re2c -s w -l wide-chars --description 'Generate a parser that supports UCS-2.'
complete -c re2c -s x -l utf-16 --description 'Generate a parser that supports UTF-16.'
complete -c re2c -s 8 -l utf-8 --description 'Generate a parser that supports UTF-8.'
complete -c re2c -l case-insensitive --description 'All strings are case insensitive, so all "-expressions are treated in the sam…'
complete -c re2c -l case-inverted --description 'Invert the meaning of single and double quoted strings.'
complete -c re2c -l no-generation-date --description 'Suppress date output in the generated file.'
complete -c re2c -l encoding-policy --description 'Specify how re2c must treat Unicode surrogates.'
complete -c re2c -l input --description 'Specify re2c input API.  INPUT can be one of the following: default, custom.'
complete -c re2c -s S -l skeleton --description 'Instead of embedding re2c-generated code into C/C++ source, generate a self-c…'
complete -c re2c -l empty-class --description 'What to do if user inputs empty character class.'
complete -c re2c -s 1 -l single-pass --description 'Deprecated and does nothing (single pass is by default now).'
complete -c re2c -s W --description 'Turn on all warnings.'
complete -c re2c -o Werror --description 'Turn warnings into errors.'
complete -c re2c -o 'W<warning>' --description 'Turn on individual warning.'
complete -c re2c -o 'Wno-<warning>' --description 'Turn off individual warning.'
complete -c re2c -o 'Werror-<warning>' --description 'Turn on individual warning and treat it as error (this implies -W<warning>).'
complete -c re2c -o 'Wno-error-<warning>' --description 'Don\\(aqt treat this particular warning as error.'
complete -c re2c -o Wcondition-order --description 'Warn if the generated program makes implicit assumptions about condition numb…'
complete -c re2c -o Wempty-character-class --description 'Warn if regular expression contains empty character class.'
complete -c re2c -o Wmatch-empty-string --description 'Warn if regular expression in a rule is nullable (matches empty string).'
complete -c re2c -o Wswapped-range --description 'Warn if range lower bound is greater that upper bound.'
complete -c re2c -o Wundefined-control-flow --description 'Warn if some input strings cause undefined control flow in lexer (the faulty …'
complete -c re2c -o Wuseless-escape --description 'Warn if a symbol is escaped when it shouldn\\(aqt be.'
complete -c re2c -o '8.' --description '.'
complete -c re2c -o 's.' --description '.'

