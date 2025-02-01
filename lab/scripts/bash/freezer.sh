for extension in $(code --list-extensions); do
    code --uninstall-extension $extension
done