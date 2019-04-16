	current_Branch=$((git branch))
	git add .
	git commit -m "pulling from $current_Branch"
	git pull --rebase
