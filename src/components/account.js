const LOAD = 'redux-form-examples/account/LOAD'

const reducer = (state = {}, action) => {
  switch (action.type) {
    case LOAD:
      return {
        data: {
            firstName: 'Jane',
            lastName: 'Doe',
            email: "df@sf.com"
        }
      }
    default:
      return state
  }
}

/**
 * Simulates data loaded into this reducer from somewhere
 */
export const load = data => ({ type: LOAD, data: data })

export default reducer
