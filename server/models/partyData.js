class Party {
  /* build a constructor
  *{object} data
  */


  constructor() {
    this.parties = [];
  }

  // create a political office
  createParty(data) {
    const create = {
      id: data.id,
      name: data.name,
      hqAddress: data.hqAddress,
      logoUrl: data.logoUrl,
      createdDate: Date(),
    };
    this.parties.push(create);
    return create;
  }

  // model to fecth all available offices
  fetchAll() {
    return this.parties;
  }

  // model to find specific office by id
  findOne(id) {
    const records = this.parties;
    // const row = records.findIndex(k => k.id === parseInt(id, 10));
    const row = records.find(party => party.id === id);
    return row;
  }

  // model to delete specific office by id
  delete(id) {
    const rowIndex = this.parties.find(k => k.id === id);
    const record = this.parties.splice(rowIndex, 1);
    return record;
  }

  edit(id) {
    const rowIndex = this.parties.find(k => k.id === id);
    const record = this.parties.splice(rowIndex, 1);
    return record;
  }
}
export default new Party();
