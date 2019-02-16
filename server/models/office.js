import uuid from 'uuid';

class Office {
  /* build a constructor
*{object} data
*/


  constructor() {
    this.offices = [];
  }

  // create a political office
  createOffice(data) {
    const create = {
      id: uuid(),
      name: data.name,
      type: data.type,
      createdDate: Date(),
    };

    this.offices.push(create);
    return create;
  }

  // model to fecth all available offices
  fetchAllOfficies() {
    return this.offices;
  }

  // model to find specific office by id
  findOneOffice(id) {
    const records = this.offices;
    // const row = records.findIndex(k => k.id === parseInt(id, 10));
    const row = records.find(office => office.id === id);
    return row;
  }

  // model to find specific office by name
  findOneByName(name) {
    const records = this.offices;
    const row = records.find(office => office.name === name);
    return row;
  }

  // model to delete specific office by id
  deleteOffice(id) {
    const rowIndex = this.offices.find(k => k.id === id);
    const result = this.offices.splice(rowIndex, 1);
    return result;
  }
}
export default new Office();
