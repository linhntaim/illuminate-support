import {Str} from '../index'

import mocha from 'mocha'
import chai from 'chai'

const describe = mocha.describe
const it = mocha.it
chai.should()

describe('illuminate-support', function () {
    describe('str', function () {
        it('ucWords', function (done) {
            const input = 'hello world'
            const expect = 'Hello World'

            const output = Str.ucWords(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })

        it('ucWords (delimiter)', function (done) {
            const input = 'hello_world'
            const expect = 'Hello_World'

            const output = Str.ucWords(input, '_')

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

        it('studly (cache)', function (done) {
            const input = 'hello_world'
            const expect = 'HelloWorld'

            const output = Str.studly(input)

            output.should.be.a('string')
            output.should.equal(expect)

            done()
        })
    })
})