function parse_git_dirty() {
	  git diff --quiet --ignore-submodules HEAD 2>/dev/null; [ $? -eq 1 ] && echo "*"
  }

# gets the current git branch
function parse_git_branch() {
	  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
  }

# get last commit hash prepended with @ (i.e. @8a323d0)
function parse_git_hash() {
	  git rev-parse --short HEAD 2> /dev/null | sed "s/\(.*\)/@\1/"
  }
			GIT_BRANCH=$(parse_git_branch)
			GIT_HASH=$(parse_git_hash)
			message=$1
			echo "$GIT_BRANCH"
			git add .
			git commit -m "$message $GIT_BRANCH $GIT_HASH"
			git pull --rebase												     
			git push origin $GIT_BRANCH
