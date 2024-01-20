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
  FallbackComponent: ErrorFallback
})