# alias
alias g="git"
alias e="emacs"
alias t="tig"
alias ta="tig --all"
alias gg="googler -n 5"
alias gn="googler -N -n 5"

status --is-interactive;

# theme
set -g theme_display_vagrant yes
set -g theme_color_scheme base16
# set PATH
set PATH ANDROID_HOME=$HOME/Library/Android/sdk $PATH
set PATH JAVA_OPTS="-Dfile.encoding=UTF-8" $PATH

# peco setting
function fish_user_key_bindings
  bind \cr 'peco_select_history (commandline -b)'
end

# .anyenv PATH
set --export PATH  "$HOME/.anyenv/bin" $PATH

# .pyenv PATH
set -x PYENV_ROOT "$HOME/.anyenv/envs/pyenv"
set -x PATH $PATH "$HOME/.anyenv/envs/pyenv/bin"
set -gx PATH '/Users/yukiinoue/.anyenv/envs/pyenv/shims' $PATH
set -gx PYENV_SHELL fish
source '/Users/yukiinoue/.anyenv/envs/pyenv/libexec/../completions/pyenv.fish'
command pyenv rehash 2>/dev/null

# .rbenv PATH

set -x RBENV_ROOT "$HOME/.anyenv/envs/rbenv"
set -x PATH $PATH "$HOME/.anyenv/envs/rbenv/bin"
set -gx PATH '/Users/yukiinoue/.anyenv/envs/rbenv/shims' $PATH
set -gx RBENV_SHELL fish
source '/Users/yukiinoue/.anyenv/envs/rbenv/libexec/../completions/rbenv.fish'
command rbenv rehash 2>/dev/null

# .ndenv PATH
set -x NDENV_ROOT "$HOME/.anyenv/envs/ndenv"
set -x PATH $PATH "$HOME/.anyenv/envs/ndenv/bin"
set -gx PATH '/Users/yukiinoue/.anyenv/envs/ndenv/shims' $PATH
set -gx NDENV_SHELL fish
command ndenv rehash 2>/dev/null

# typescript PATH
# set PATH $HOME/.anyenv/envs/ndenv/versions/v9.3.0/lib/node_modules/typescript/bin/tsc $PATH

# goenv PATH
set -x GOENV_ROOT "$HOME/.anyenv/envs/goenv"
set -x PATH $PATH "$HOME/.anyenv/envs/goenv/bin"
set -gx PATH '/Users/yukiinoue/.anyenv/envs/goenv/shims' $PATH
set -gx GOENV_SHELL fish
command goenv rehash 2>/dev/null


