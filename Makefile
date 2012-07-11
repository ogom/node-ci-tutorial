REPORTER = dot
TESTS = test/*.js

test-unit:
	@./node_modules/.bin/mocha \
		--reporter $(REPORTER) \
		--ui bdd \
		$(TESTS)

test-spec:
	@./node_modules/.bin/mocha \
		--reporter spec \
		--ui bdd \
		$(TESTS)

test-xunit:
	@./node_modules/.bin/mocha \
		--reporter xunit \
		--ui bdd \
		$(TESTS)

test-all: test-unit test-spec test-xunit

.PHONY: test-all