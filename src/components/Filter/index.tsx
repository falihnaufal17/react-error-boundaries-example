import { withErrorBoundary } from 'react-error-boundary'
import ErrorFallback from '../ErrorFallback'

const Filter = () => {
  return (
    <form>
      <label>Name</label>
      <input type="text" />

      {/* data is not defined */}
      {data.survey_result}
    </form>
  )
}

export default withErrorBoundary(Filter, {
  FallbackComponent: ErrorFallback,
  onError: (error, info) => {
      // on error, you can catch the message and send it to your logger
      console.log(error.message, info.componentStack)
  },
})