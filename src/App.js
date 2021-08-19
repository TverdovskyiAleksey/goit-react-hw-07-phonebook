import Container from './Container';
import Form from './Form';
import Contacts from './Contacts';
import Filter from './Filter';
import { connect } from 'react-redux';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import contactsOperation from './redux/contacts-operation';

function App() {
  const dispatch = useDispatch();

  useEffect(() => dispatch(contactsOperation.fetchContacts()), [dispatch]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}

const mapDispatchToProps = dispatch => ({
  fetchContacts: () => dispatch(contactsOperation.fetchContacts()),
});
export default connect(null, mapDispatchToProps)(App);
