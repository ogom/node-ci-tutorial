REPORTER = spec
TESTS = test/*.js

test-bdd:
		  @./node_modules/.bin/mocha \
		    --reporter $(REPORTER) \
		    --ui bdd \
		    $(TESTS)

test-all: test-bdd

.PHONY: test-all