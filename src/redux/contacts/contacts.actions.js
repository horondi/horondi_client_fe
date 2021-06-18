import { GET_CONTACTS, SET_CONTACTS, SET_CONTACTS_LOADING } from './contacts.types';

const setContacts = (contact) => ({
  type: SET_CONTACTS,
  payload: contact
});

const getContacts = () => ({
  type: GET_CONTACTS
});

const setLoading = (loading) => ({
  type: SET_CONTACTS_LOADING,
  payload: loading
});

export { setContacts, getContacts, setLoading };
