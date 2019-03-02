import { equal, ok } from 'zoroaster/assert'
import Context from '../context'
import ntary from '../../src'

/** @type {Object.<string, (c: Context)>} */
const T = {
  context: Context,
  'is a function'() {
    equal(typeof ntary, 'function')
  },
  async 'calls package without error'() {
    await ntary()
  },
  async 'gets a link to the fixture'({ FIXTURE }) {
    const res = await ntary({
      text: FIXTURE,
    })
    ok(res, FIXTURE)
  },
}

export default T