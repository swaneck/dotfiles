"bashを明示的に指定
set shell=/bin/bash
"文字コード
set encoding=utf-8
scriptencoding=utf-8
set fileencoding=utf-8 " 保存時の文字コード
set fileencodings=ucs-boms,utf-8,euc-jp,cp932 " 読み込み時の文字コードの自動判別. 左側が優先される
set fileformats=unix,dos,mac " 改行コードの自動判別. 左側が優先される
set ambiwidth=double " □や○文字が崩れる問題を解決

"タブ設定
set expandtab " タブ入力を複数の空白入力に置き換る
set tabstop=2 " 画面上でタブ文字が占める幅
set softtabstop=4 " 連続した空白に対してタブキーやバックスペースキーでカーソルが動く幅
set autoindent " 改行時に前の行のインデントを継続する
set smartindent " 改行時に前の行の構文をチェックし次の行のインデントを増減する
set shiftwidth=2 " smartindentで増減する幅

"文字列検索
set incsearch " インクリメンタルサーチ. １文字入力毎に検索を行う
set ignorecase " 検索パターンに大文字小文字を区別しない
set smartcase " 検索パターンに大文字を含んでいたら大文字小文字を区別する
set hlsearch " 検索結果をハイライト
" ESCキー2度押しでハイライトの切り替え
nnoremap <silent><Esc><Esc> :<C-u>set nohlsearch!<CR>

"カーソル設定
set whichwrap=b,s,h,l,<,>,[,],~ " カーソルの左右移動で行末から次の行の行頭への移動が可能になる
set number " 行番号を表示
set cursorline " カーソルラインをハイライト

" 行が折り返し表示されていた場合、行単位ではなく表示行単位でカーソルを移動する
nnoremap j gj
nnoremap k gk
nnoremap <down> gj
nnoremap <up> gk

" バックスペースキーの有効化
set backspace=indent,eol,start

"タグジャンプ
set showmatch " 括弧の対応関係を一瞬表示する
source $VIMRUNTIME/macros/matchit.vim " Vimの「%」を拡張する

"コマンド補完
set wildmenu " コマンドモードの補完
set history=5000 " 保存するコマンド履歴の数

"マウス有効化
if has('mouse')
    set mouse=a
    if has('mouse_sgr')
        set ttymouse=sgr
    elseif v:version > 703 || v:version is 703 && has('patch632')
        set ttymouse=sgr
    else
        set ttymouse=xterm2
    endif
endif

"ペースト設定
if &term =~ "xterm"
    let &t_SI .= "\e[?2004h"
    let &t_EI .= "\e[?2004l"
    let &pastetoggle = "\e[201~"

    function XTermPasteBegin(ret)
        set paste
        return a:ret
    endfunction

    inoremap <special> <expr> <Esc>[200~ XTermPasteBegin("")
endif

"行表示
set number
set title

"True Color有効化
if has('patch-7.4.1778')
  set termguicolors
endif
if has('nvim')
  let $NVIM_TUI_ENABLE_TRUE_COLOR=1
endif

syntax on
set t_Co=256

"NERDTree shortcut key
nnoremap <silent><C-e> :NERDTreeToggle<CR>

"clipboardにコピーできるように
set clipboard=unnamed,autoselect

"------------- Start VundleVim
set nocompatible              " be iMproved, required
filetype off                  " required

" set the runtime path to include Vundle and initialize
set rtp+=~/.vim/bundle/Vundle.vim
call vundle#begin()
" alternatively, pass a path where Vundle should install plugins
"call vundle#begin('~/some/path/here')

" let Vundle manage Vundle, required
Plugin 'VundleVim/Vundle.vim'

"さくらVPS用の設定
"sudo.vimプラグイン
Plugin 'sudo.vim'


Plugin 'tpope/vim-fugitive'
"Iceberg color theme
Plugin 'cocopon/iceberg.vim'
"Powerlineのプラグイン
Plugin 'lokaltog/vim-powerline'
"NerdTreeのプラグイン
Plugin 'scrooloose/nerdtree'
"Ruby
Plugin 'vim-ruby/vim-ruby'
"Rails
Plugin 'tpope/vim-rails'
"PHP
Plugin 'stanangeloff/php.vim'
" Install L9 and avoid a Naming conflict if you've already installed a
" different version somewhere else.
" Plugin 'ascenator/L9', {'name': 'newL9'}

"neocomplete (補完）
Plugin 'shougo/neocomplete.vim'

" All of your Plugins must be added before the following line
call vundle#end()            " required
filetype plugin indent on    " required
" To ignore plugin indent changes, instead use:
"filetype plugin on
"
" Brief help
" :PluginList       - lists configured plugins
" :PluginInstall    - installs plugins; append `!` to update or just :PluginUpdate
" :PluginSearch foo - searches for foo; append `!` to refresh local cache
" :PluginClean      - confirms removal of unused plugins; append `!` to auto-approve removal
"
" see :h vundle for more details or wiki for FAQ
" Put your non-Plugin stuff after this line
"--------------- End VundleVim

let g:Powerline_symbols = 'fancy'
set laststatus=2

"Color Theme
colorscheme iceberg

"背景の透過
highlight Normal ctermbg=none 
highlight NonText ctermbg=none 
highlight LineNr ctermbg=none 
highlight Folded ctermbg=none
highlight EndOfBuffer ctermbg=none
