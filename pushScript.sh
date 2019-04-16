	current_Branch=$((git branch))
	message=$1
	git add .
	git commit -m "$message $current_Branch"
	git pull --rebase
	git push origin $current_Branch


