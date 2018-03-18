import configureStore from 'redux-mock-store'
import * as action from '../src/duck/actions'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

// Initialize mockstore with empty state
const initialState = {}
const store = mockStore(initialState)

// Run before test
beforeEach(() => {
  store.clearActions()
})

// Run after test
afterEach(() => {
  expect(store.getActions()).toMatchSnapshot()
})

it('should dispatch action', () => {
  // Dispatch the action
  store.dispatch(action.anAction())

  // Test if your store dispatched the expected actions
  const storeActions = store.getActions()
  const expectedPayload = { type: 'AN_ACTION' }
  expect(storeActions).toEqual([expectedPayload])
})

it('should execute fetch data', () => {
  // Return the promise
  return store.dispatch(action.fetchData()).then(() => {
    const storeActions = store.getActions()
    expect(storeActions[0]).toEqual({ type: 'FETCH_DATA_SUCCESS' })
  })
})
