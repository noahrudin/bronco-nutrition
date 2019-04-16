
	rm -rf node_modules
	git add .
	git commit -m "push to master"
	git pull --rebase
	git push origin master
	npm install

