

run:
	npm run dev

build:
	npm run build && rm -rf docs && mv dist docs && echo "calc.typonotes.com" > docs/CNAME