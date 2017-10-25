import * as types from '../constants/actionTypes';



function Modify(objContact, id) {
    return {
        type: types.MODIFY_CONTACT,
        contact: objContact,
        id:id
    };
}

export function ModifyContact(objContact, id) {
  return (dispatch) => {
    dispatch(Modify(objContact,id));
  };
}
