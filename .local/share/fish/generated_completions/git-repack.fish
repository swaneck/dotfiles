# git-repack
# Autogenerated from man page /Applications/Xcode.app/Contents/Developer/usr/share/man/man1/git-repack.1
complete -c git-repack -s a --description 'Instead of incrementally packing the unpacked objects, pack everything refere…'
complete -c git-repack -s A --description 'Same as -a, unless -d is used.'
complete -c git-repack -s d --description 'After packing, if the newly created packs make some existing packs redundant,…'
complete -c git-repack -s l --description 'Pass the --local option to git pack-objects.  See git-pack-objects(1).'
complete -c git-repack -s f --description 'Pass the --no-reuse-delta option to git-pack-objects, see git-pack-objects(1).'
complete -c git-repack -s F --description 'Pass the --no-reuse-object option to git-pack-objects, see git-pack-objects(1…'
complete -c git-repack -s q --description 'Pass the -q option to git pack-objects.  See git-pack-objects(1).'
complete -c git-repack -s n --description 'Do not update the server information with git update-server-info.'
complete -c git-repack -l window -l depth --description 'These two options affect how the objects contained in the pack are stored usi…'
complete -c git-repack -l window-memory --description 'This option provides an additional limit on top of --window; the window size …'
complete -c git-repack -l max-pack-size --description 'Maximum size of each output pack file.'
complete -c git-repack -s b -l write-bitmap-index --description 'Write a reachability bitmap index as part of the repack.'
complete -c git-repack -l pack-kept-objects --description 'Include objects in . keep files when repacking.'
complete -c git-repack -l unpack-unreachable --description 'When loosening unreachable objects, do not bother loosening any objects older…'
complete -c git-repack -s k -l keep-unreachable --description 'When used with -ad, any unreachable objects from existing packs will be appen…'
complete -c git-repack -o 'd.' --description 'git prune leaves behind, but git fsck --full --dangling shows as dangling.'
complete -c git-repack -l local --description 'option to git pack-objects.  See git-pack-objects(1).'
complete -c git-repack -l no-reuse-delta --description 'option to git-pack-objects, see git-pack-objects(1).'
complete -c git-repack -l no-reuse-object --description 'option to git-pack-objects, see git-pack-objects(1).'
complete -c git-repack -l 'window;' --description '<n> bytes in memory.'
complete -c git-repack -o ad --description '.'

