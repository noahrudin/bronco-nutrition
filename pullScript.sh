	rm -rf node_modules
	git add .
	git commit -m "pulling from current"
	git pull --rebase
	rm -rf node_modules
	npm install
