#!/bin/bash
	
	# checks if branch has something pending
function parse_git_dirty() {
  git diff --quiet --ignore-submodules HEAD 2>/dev/null;
}

# gets the current git branch
function parse_git_branch() {
  git branch --no-color 2> /dev/null | sed -e '/^[^*]/d' -e "s/* \(.*\)/\1$(parse_git_dirty)/"
}

# get last commit hash prepended with @ (i.e. @8a323d0)
function parse_git_hash() {
  git rev-parse --short HEAD 2> /dev/null | sed "s/\(.*\)/@\1/"
}
function box_out()
{
  local s="$(parse_git_branch)=>$(parse_git_hash)"
  tput setaf 3
  echo " -${s//?/-}-
| ${s//?/ } |
| $(tput setaf 4)$s$(tput setaf 3) |
| ${s//?/ } |
 -${s//?/-}-"
  tput sgr 0
}

	
	GIT_BRANCH=$(parse_git_branch)
	GIT_HASH=$(parse_git_hash)
	message=$1
	box_out
	if git diff-index --quiet HEAD --; then
	git commit -m "($message) => branch:$GIT_BRANCH hash:$GIT_HASH"
	git push origin $GIT_BRANCH
else
   git add -i
	 git commit -m "($message) => branch:$GIT_BRANCH hash:$GIT_HASH"
	git push origin $GIT_BRANCH
fi
		git log --graph --full-history --all --color --pretty=format:"%x1b[31m%h%x09%x1b[32m%d%x1b[0m%x20%s"
	

