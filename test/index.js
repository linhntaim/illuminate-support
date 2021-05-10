import {Manager, Str} from '../index'

import mocha from 'mocha'
import chai from 'chai'

const describe = mocha.describe
const it = mocha.it
const expect = chai.expect
chai.should()

describe('illuminate-support', function () {
    describe('str', function () {
        it('ctypeLower (right)', function (done) {
            const input = 'hello'
            const expect = true

            const output = Str.ctypeLower(input)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('ctypeLower (wrong)', function (done) {
            const input = 'Hello'
            const expect = false

            const output = Str.ctypeLower(input)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('lcfirst', function (done) {
            const input = 'HelloWorld'
            const expect = 'helloWorld'

            const output = Str.lcfirst(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('strncmp', function (done) {
            const input1 = 'HelloWorld'
            const input2 = 'HelloMars'
            const length = 5
            const expect = 0

            const output = Str.strncmp(input1, input2, length)

            output.should.be.a('number')
            output.should.equal(expect)

            done()
        })

        it('strncmp', function (done) {
            const input1 = 'HelloWorld'
            const input2 = 'HiMars'
            const length = 5
            const expect = -1

            const output = Str.strncmp(input1, input2, length)

            output.should.be.a('number')
            output.should.equal(expect)

            done()
        })

        it('strncmp', function (done) {
            const input1 = 'HelloWorld'
            const input2 = 'HaloMars'
            const length = 5
            const expect = 1

            const output = Str.strncmp(input1, input2, length)

            output.should.be.a('number')
            output.should.equal(expect)

            done()
        })

        it('ucwords', function (done) {
            const input = 'hello world'
            const expect = 'Hello World'

            const output = Str.ucwords(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('ucwords (delimiter)', function (done) {
            const input = 'hello_world'
            const expect = 'Hello_World'

            const output = Str.ucwords(input, '_')

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('after', function (done) {
            const input = 'HelloWorld'
            const search = 'l'
            const expect = 'loWorld'

            const output = Str.after(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('after (empty search)', function (done) {
            const input = 'HelloWorld'
            const search = ''
            const expect = 'HelloWorld'

            const output = Str.after(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('after (no search)', function (done) {
            const input = 'HelloWorld'
            const search = 'a'
            const expect = 'HelloWorld'

            const output = Str.after(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('afterLast', function (done) {
            const input = 'HelloWorld'
            const search = 'l'
            const expect = 'd'

            const output = Str.afterLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('afterLast (empty)', function (done) {
            const input = 'HelloWorld'
            const search = ''
            const expect = 'HelloWorld'

            const output = Str.afterLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('afterLast (no search)', function (done) {
            const input = 'HelloWorld'
            const search = 'a'
            const expect = 'HelloWorld'

            const output = Str.afterLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('before', function (done) {
            const input = 'HelloWorld'
            const search = 'l'
            const expect = 'He'

            const output = Str.before(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('before (empty)', function (done) {
            const input = 'HelloWorld'
            const search = ''
            const expect = 'HelloWorld'

            const output = Str.before(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('before (no search)', function (done) {
            const input = 'HelloWorld'
            const search = 'a'
            const expect = 'HelloWorld'

            const output = Str.before(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('beforeLast', function (done) {
            const input = 'HelloWorld'
            const search = 'l'
            const expect = 'HelloWor'

            const output = Str.beforeLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('beforeLast (empty)', function (done) {
            const input = 'HelloWorld'
            const search = ''
            const expect = 'HelloWorld'

            const output = Str.beforeLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('afterLast (no search)', function (done) {
            const input = 'HelloWorld'
            const search = 'a'
            const expect = 'HelloWorld'

            const output = Str.beforeLast(input, search)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('between', function (done) {
            const input = 'HelloWorld'
            const from = 'l'
            const to = 'l'
            const expect = 'loWor'

            const output = Str.between(input, from, to)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('between (empty)', function (done) {
            const input = 'HelloWorld'
            const from = ''
            const to = ''
            const expect = 'HelloWorld'

            const output = Str.between(input, from, to)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('camel', function (done) {
            const input = 'hello world'
            const expect = 'helloWorld'

            const output = Str.camel(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('camel', function (done) {
            const input = 'hello_world'
            const expect = 'helloWorld'

            const output = Str.camel(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('camel', function (done) {
            const input = 'HelloWorld'
            const expect = 'helloWorld'

            const output = Str.camel(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('camel (cache)', function (done) {
            const input = 'hello_world'
            const expect = 'helloWorld'

            const output = Str.camel(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('contains', function (done) {
            const input = 'HelloWorld'
            const needles = ['Hello', 'John']
            const expect = true

            const output = Str.contains(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('contains (false)', function (done) {
            const input = 'HelloWorld'
            const needles = ['Hi', 'John']
            const expect = false

            const output = Str.contains(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('contains (string)', function (done) {
            const input = 'HelloWorld'
            const needles = 'Hello'
            const expect = true

            const output = Str.contains(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('containsAll', function (done) {
            const input = 'HelloWorld'
            const needles = ['Hello', 'World']
            const expect = true

            const output = Str.containsAll(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('endsWith', function (done) {
            const input = 'HelloWorld'
            const needles = ['World']
            const expect = true

            const output = Str.endsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('endsWith', function (done) {
            const input = 'HelloWorld'
            const needles = ['John']
            const expect = false

            const output = Str.endsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('endsWith (string)', function (done) {
            const input = 'HelloWorld'
            const needles = 'World'
            const expect = true

            const output = Str.endsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('snake', function (done) {
            const input = 'hello world'
            const expect = 'hello_world'

            const output = Str.snake(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('snake', function (done) {
            const input = 'HelloWorld'
            const expect = 'hello_world'

            const output = Str.snake(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('snake', function (done) {
            const input = 'helloWorld'
            const expect = 'hello_world'

            const output = Str.snake(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('snake (delimiter)', function (done) {
            const input = 'HelloWorld'
            const delimiter = '-'
            const expect = 'hello-world'

            const output = Str.snake(input, delimiter)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('snake (already)', function (done) {
            const input = 'hello'
            const expect = 'hello'

            const output = Str.snake(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('snake (cache)', function (done) {
            const input = 'HelloWorld'
            const expect = 'hello_world'

            const output = Str.snake(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })



        it('endsWith (right)', function (done) {
            const input = 'HelloWorld'
            const needles = ['Hello']
            const expect = true

            const output = Str.startsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('startsWith (wrong)', function (done) {
            const input = 'HelloWorld'
            const needles = ['Hi']
            const expect = false

            const output = Str.startsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('startsWith (string)', function (done) {
            const input = 'HelloWorld'
            const needles = 'Hello'
            const expect = true

            const output = Str.startsWith(input, needles)

            output.should.be.a('boolean')
            output.should.equal(expect)

            done()
        })

        it('studly', function (done) {
            const input = 'hello world'
            const expect = 'HelloWorld'

            const output = Str.studly(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('studly', function (done) {
            const input = 'hello_world'
            const expect = 'HelloWorld'

            const output = Str.studly(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('studly', function (done) {
            const input = 'helloWorld'
            const expect = 'HelloWorld'

            const output = Str.studly(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('studly (cache)', function (done) {
            const input = 'hello_world'
            const expect = 'HelloWorld'

            const output = Str.studly(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })
    })

    describe('manager', function () {
        it('init', function (done) {
            const manager = new Manager(null)

            const output = manager.getDrivers()
            const output2 = manager.getDefaultDriver()

            expect(output).to.deep.equal({})
            expect(output2).to.be.null

            done()
        })

        it('driver (null)', function (done) {
            const manager = new Manager(null)

            const output = manager.driver()

            expect(output).to.be.null

            done()
        })

        it('driver (none)', function (done) {
            const manager = new Manager(null)

            const output = manager.driver('none')

            expect(output).to.be.null

            done()
        })

        it('driver (extend)', function (done) {
            const manager = new Manager(null)
            manager.extend('extend', function () {
                return {extend: true}
            })
            const expected = {extend: true}

            const output = manager.driver('extend')

            expect(output).to.deep.equal(expected)

            done()
        })

        it('driver (extend (2))', function (done) {
            class ExtendedManager extends Manager {
                createExtendDriver() {
                    return {extend: true}
                }
            }

            const manager = new ExtendedManager(null)
            const expected = {extend: true}

            const output = manager.driver('extend')

            expect(output).to.deep.equal(expected)

            done()
        })

        it('driver method', function (done) {
            class ExtendedManager extends Manager {
                constructor() {
                    super()

                    this.drivers.extend = {
                        call: function (value) {
                            return {extend: value}
                        },
                    }
                }

                getDefaultDriver() {
                    return 'extend'
                }
            }

            const manager = new ExtendedManager(null)
            const input = true
            const expected = {extend: input}

            const output = manager.__call('call', input)

            expect(output).to.deep.equal(expected)

            done()
        })

        it('driver method (no params)', function (done) {
            class ExtendedManager extends Manager {
                constructor() {
                    super()

                    this.drivers.extend = {
                        call: function () {
                            return {extend: true}
                        },
                    }
                }

                getDefaultDriver() {
                    return 'extend'
                }
            }

            const manager = new ExtendedManager(null)
            const expected = {extend: true}

            const output = manager.__call('call')

            expect(output).to.deep.equal(expected)

            done()
        })

        it('driver method (null)', function (done) {
            const manager = new Manager(null)
            const input = true

            const output = manager.__call('call', input)

            expect(output).to.be.null

            done()
        })
    })
})