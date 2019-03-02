/* yarn example/ */
import ntary from '../src'

(async () => {
  const res = await ntary({
    text: 'example',
  })
  console.log(res)
})()