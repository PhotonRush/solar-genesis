// Probably the purist expression of my autism.
const ERROR = 'error';
const OFF = 'off';
const ALWAYS = 'always';
const NEVER = 'never';

const rules = {};
function toggle(rule, level, options) {
    const value = !!options ? [level, options] : level;
    const eslintKey = rule.replace('@typescript-eslint/', '');

    rules[eslintKey] = OFF;
    rules[rule] = value;
}

rules['@typescript-eslint/adjacent-overload-signatures'] = ERROR;
rules['@typescript-eslint/array-type'] = [ERROR, { default: 'generic' }];
rules['@typescript-eslint/await-thenable'] = ERROR;
// rules['@typescript-eslint/ban-ts-comment'] = ;
//rules['@typescript-eslint/ban-tslint-comment'] = ;
// rules['@typescript-eslint/ban-types'] = ;
rules['@typescript-eslint/class-literal-property-style'] = [ERROR, 'getters'];
rules['comma-dangle'] = OFF;
rules['@typescript-eslint/comma-dangle'] = [ERROR, 'always-multiline'];
rules['@typescript-eslint/consistent-generic-constructors'] = [ERROR, 'constructor'];
rules['@typescript-eslint/consistent-indexed-object-style'] = [ERROR, 'index-signature'];
rules['@typescript-eslint/consistent-type-assertions'] = [ERROR, {
    assertionStyle: 'angle-bracket',
    objectLiteralTypeAssertions: NEVER,
}];
// rules['@typescript-eslint/consistent-type-definitions'] = ;
rules['@typescript-eslint/consistent-type-exports'] = ERROR;
rules['@typescript-eslint/consistent-type-imports'] = ERROR;
rules['default-param-last'] = OFF;
rules['@typescript-eslint/default-param-last'] = ERROR;
rules['@typescript-eslint/dot-notation'] = ERROR;
rules['@typescript-eslint/explicit-function-return-type'] = ERROR;
rules['@typescript-eslint/explicit-member-accessibility'] = ERROR;
rules['@typescript-eslint/explicit-module-boundary-types'] = ERROR;
rules['init-declarations'] = OFF;
rules['@typescript-eslint/init-declarations'] = ERROR;
rules['@typescript-eslint/member-delimiter-style'] = ERROR;
rules['@typescript-eslint/member-ordering'] = ERROR;
rules['@typescript-eslint/method-signature-style'] = ERROR;
// rules['@typescript-eslint/naming-convention'] = ERROR; //TODO: Lots of options
rules['no-array-constructor'] = OFF;
rules['@typescript-eslint/no-array-constructor'] = ERROR;
rules['@typescript-eslint/no-base-to-string'] = ERROR;
rules['@typescript-eslint/no-confusing-non-null-assertion'] = ERROR;
rules['@typescript-eslint/no-confusing-void-expression'] = ERROR;
rules['no-dupe-class-members'] = OFF;
rules['@typescript-eslint/no-dupe-class-members'] = ERROR;
rules['@typescript-eslint/no-duplicate-enum-values'] = ERROR;
rules['@typescript-eslint/no-dynamic-delete'] = ERROR;
rules['no-empty-function'] = OFF;
rules['@typescript-eslint/no-empty-function'] = ERROR;
rules['@typescript-eslint/no-empty-interface'] = ERROR;
rules['@typescript-eslint/no-explicit-any'] = ERROR;
rules['@typescript-eslint/no-extra-non-null-assertion'] = ERROR;
rules['@typescript-eslint/no-extra-parens'] = OFF;
rules['@typescript-eslint/no-extra-semi'] = OFF;
rules['@typescript-eslint/no-extraneous-class'] = ERROR;
rules['@typescript-eslint/no-floating-promises'] = ERROR;
rules['@typescript-eslint/no-for-in-array'] = ERROR;
rules['@typescript-eslint/no-implied-eval'] = ERROR;
rules['@typescript-eslint/no-inferrable-types'] = OFF;
rules['no-invalid-this'] = OFF;
rules['@typescript-eslint/no-invalid-this'] = ERROR;
rules['@typescript-eslint/no-invalid-void-type'] = ERROR;
rules['no-loop-func'] = OFF;
rules['@typescript-eslint/no-loop-func'] = ERROR;
rules['no-loss-of-precision'] = OFF;
rules['@typescript-eslint/no-loss-of-precision'] = ERROR;
rules['no-magic-numbers'] = OFF;
rules['@typescript-eslint/no-magic-numbers'] = [ERROR, {
    ignore: [ 0, 1, 0n, 1n],
}];
rules['@typescript-eslint/no-meaningless-void-operator'] = ERROR;
rules['@typescript-eslint/no-misused-new'] = ERROR;
rules['@typescript-eslint/no-misused-promises'] = ERROR;
rules['@typescript-eslint/no-namespace'] = ERROR;
rules['@typescript-eslint/no-non-null-asserted-nullish-coalescing'] = ERROR;
rules['@typescript-eslint/no-non-null-asserted-optional-chain'] = ERROR;
rules['@typescript-eslint/no-non-null-assertion'] = ERROR;
rules['no-redeclare'] = OFF;
rules['@typescript-eslint/no-redeclare'] = ERROR;
rules['@typescript-eslint/no-redundant-type-constituents'] = ERROR;
rules['@typescript-eslint/no-require-imports'] = ERROR;
rules['@typescript-eslint/no-restricted-imports'] = OFF;
rules['no-shadow'] = OFF;
rules['@typescript-eslint/no-shadow'] = ERROR;
rules['@typescript-eslint/no-this-alias'] = ERROR;
rules['no-throw-literal'] = OFF;
rules['@typescript-eslint/no-throw-literal'] = ERROR;
rules['@typescript-eslint/no-type-alias'] = OFF;
rules['@typescript-eslint/no-unnecessary-boolean-literal-compare'] = ERROR;
rules['@typescript-eslint/no-unnecessary-condition'] = ERROR;
rules['@typescript-eslint/no-unnecessary-qualifier'] = ERROR;
rules['@typescript-eslint/no-unnecessary-type-arguments'] = ERROR;
rules['@typescript-eslint/no-unnecessary-type-assertion'] = ERROR;
rules['@typescript-eslint/no-unnecessary-type-constraint'] = ERROR;
rules['@typescript-eslint/no-unsafe-argument'] = ERROR;
rules['@typescript-eslint/no-unsafe-assignment'] = ERROR;
rules['@typescript-eslint/no-unsafe-call'] = ERROR;
rules['@typescript-eslint/no-unsafe-member-access'] = ERROR;
rules['@typescript-eslint/no-unsafe-return'] = ERROR;
rules['no-unused-expressions'] = OFF;
rules['@typescript-eslint/no-unused-expressions'] = ERROR;
rules['no-unused-vars'] = OFF;
rules['@typescript-eslint/no-unused-vars'] = ERROR;
rules['no-use-before-define'] = OFF;
rules['@typescript-eslint/no-use-before-define'] = ERROR;
rules['no-useless-constructor'] = OFF;
rules['@typescript-eslint/no-useless-constructor'] = ERROR;
rules['@typescript-eslint/no-useless-empty-export'] = ERROR;
rules['@typescript-eslint/no-var-requires'] = ERROR;
rules['@typescript-eslint/non-nullable-type-assertion-style'] = ERROR;
rules['@typescript-eslint/parameter-properties'] = ERROR;
rules['@typescript-eslint/prefer-as-const'] = OFF;
rules['@typescript-eslint/prefer-enum-initializers'] = ERROR;
rules['@typescript-eslint/prefer-for-of'] = ERROR;
rules['@typescript-eslint/prefer-function-type'] = ERROR;
rules['@typescript-eslint/prefer-includes'] = ERROR;
rules['@typescript-eslint/prefer-literal-enum-member'] = ERROR;
rules['@typescript-eslint/prefer-namespace-keyword'] = ERROR;
rules['@typescript-eslint/prefer-nullish-coalescing'] = OFF;
rules['@typescript-eslint/prefer-optional-chain'] = ERROR;
rules['@typescript-eslint/prefer-readonly'] = ERROR;
rules['@typescript-eslint/prefer-readonly-parameter-types'] = OFF;
rules['@typescript-eslint/prefer-reduce-type-parameter'] = ERROR;
rules['@typescript-eslint/prefer-regexp-exec'] = ERROR;
rules['@typescript-eslint/prefer-return-this-type'] = ERROR;
rules['@typescript-eslint/prefer-string-starts-ends-with'] = ERROR;
rules['@typescript-eslint/prefer-ts-expect-error'] = ERROR;
rules['@typescript-eslint/promise-function-async'] = ERROR;
rules['quotes'] = OFF;
rules['@typescript-eslint/quotes'] = [ERROR, 'single'];
rules['@typescript-eslint/require-array-sort-compare'] = ERROR;
rules['require-await'] = OFF;
rules['@typescript-eslint/require-await'] = ERROR;
rules['@typescript-eslint/restrict-plus-operands'] = ERROR;
rules['@typescript-eslint/restrict-template-expressions'] = OFF;
rules['no-return-await'] = OFF;
rules['@typescript-eslint/return-await'] = ERROR;
rules['semi'] = OFF;
rules['@typescript-eslint/semi'] = ERROR;
rules['@typescript-eslint/sort-type-union-intersection-members'] = ERROR;
rules['@typescript-eslint/strict-boolean-expressions'] = ERROR;
rules['@typescript-eslint/switch-exhaustiveness-check'] = ERROR;
rules['@typescript-eslint/triple-slash-reference'] = ERROR;
rules['@typescript-eslint/typedef'] = OFF;
rules['@typescript-eslint/unbound-method'] = ERROR;
rules['@typescript-eslint/unified-signatures'] = ERROR;

toggle('@typescript-eslint/brace-style', ERROR, '1tbs');
toggle('@typescript-eslint/comma-spacing', ERROR);
toggle('@typescript-eslint/func-call-spacing', ERROR);
toggle('@typescript-eslint/indent', OFF);
toggle('@typescript-eslint/keyword-spacing', ERROR); //, { 'after': false }
toggle('@typescript-eslint/lines-between-class-members', ERROR, ALWAYS);
toggle('@typescript-eslint/object-curly-spacing', ERROR, ALWAYS);
toggle('@typescript-eslint/padding-line-between-statements', OFF);
toggle('@typescript-eslint/space-before-blocks', ERROR);
toggle('@typescript-eslint/space-before-function-paren', ERROR, NEVER);
toggle('@typescript-eslint/space-infix-ops', ERROR);

rules['@typescript-eslint/type-annotation-spacing'] = ERROR;

module.exports = {
    parser: '@typescript-eslint/parser',
    parserOptions: {
        tsconfigRootDir: __dirname,
        project: ['./tsconfig.json'],
    },
    plugins: ['@typescript-eslint'],
    rules,
    root: true,

    ignorePatterns: [
        'dist/**/*'
    ],
    overrides: [{
        files: ['**/*.js', '**/*.mjs', '**/*.ts'],
    }]
};