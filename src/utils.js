export function getPartnerText(person) {
  if (person.isMarried && person.sex === 'm') {
    return `${person.partnerName} is my wife`;
  }

  if (person.isMarried && person.sex === 'f') {
    return `${person.partnerName} is my husband`;
  }

  if (!person.isMarried) {
    return 'I am not married';
  }

  return null;
}
