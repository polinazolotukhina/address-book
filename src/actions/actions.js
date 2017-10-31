import * as types from '../constants/actionTypes';



function modifycontact(objContact) {
    return {
        type: types.MODIFY_CONTACT,
        contact: objContact
    };
}

export function modifycontactinfo(objContact) {
  return (dispatch) => {
    dispatch(modifycontact(objContact));
  };
}
