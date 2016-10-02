build:
	@gobble build public/assets -f

clean:
	rm -rf build

watch:
	@gobble watch public/assets

serve:
	@gobble serve -p 1337 -e 'development'

.PHONY:	build
