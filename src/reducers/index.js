import { combineReducers } from 'redux'
import peoplee from './people'
import demoText from './demoReducer'

const rootReducer = combineReducers({
    peoplee,
    demoText
})

export default rootReducer