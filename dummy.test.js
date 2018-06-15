import test from 'ava';
import dummy from './dummy';

test('All property accesses return a value', t => {
    t.truthy(dummy);
    t.truthy(dummy.foo);
    t.truthy(dummy.foo.bar);
    t.truthy(dummy.foo.bar());
    t.truthy(dummy.foo());
    t.truthy(dummy.foo().bar);
    t.truthy(dummy.foo().bar());
    t.truthy(dummy.foo().bar().baz);
    t.truthy(dummy.foo().bar().baz());
});

test('All function calls return a value', t => {
    t.truthy(dummy());
    t.truthy(dummy().foo);
    t.truthy(dummy().foo());
    t.truthy(dummy().foo.bar());
});

test('All instantiations return a value', t => {
    t.truthy(new dummy);
    t.truthy(new dummy());
    t.truthy(new dummy.foo);
    t.truthy(new dummy.foo());
});

test('Properties cannot be set on Dummy', t => {
    let before = dummy();
    dummy.prop = 5555;
    t.pass('Would need to verify nothing is defined on the target object');
});

test('`in` operator always returns false', t => {
    t.false('prop' in dummy);
    t.false('length' in dummy);
    t.false('name' in dummy);
    t.false('prototype' in dummy);
});

test('Properties cannot be deleted from dummy', t => {
    let before = dummy.prop;
    t.true(delete dummy.prop);
    t.is(dummy.prop, before, 'Expected prop to be same before and after deleting');
});