export const selectAllContacts = ({ contacts }) => contacts.items;

export const selectImportantContacts = ({ contacts }) => {
  const importantContacts = contacts.items.filter(
    ({ importantContact }) => importantContact
  );
  return importantContacts;
};

export const selectFilteredContacts = ({ contacts, filter }) => {
  if (!filter) {
    return contacts.items;
  }
  const normalizedContact = filter.toLowerCase();
  const result = contacts.items.filter(({ name, number }) => {
    return (
      name.toLowerCase().includes(normalizedContact) ||
      number.toLowerCase().includes(normalizedContact)
    );
  });
  return result;
};
