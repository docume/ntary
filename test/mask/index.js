import { makeTestSuite } from 'zoroaster'
import Context from '../context'
import ntary from '../../src'

const ts = makeTestSuite('test/result', {
  async getResults(input) {
    const res = await ntary({
      text: input,
    })
    return res
  },
  context: Context,
})

// export default ts
