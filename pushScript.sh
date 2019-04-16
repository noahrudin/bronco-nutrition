			current_Branch=$1
			message=$2
			git add .
			git commit -m "$message $current_Branch"
			git pull --rebase												     git push origin $current_Branch
