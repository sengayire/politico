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

  // model to find specific office by name
  findByName(name) {
    const records = this.parties;
    const row = records.find(parties => parties.name === name);
    return row;
  }

  // model to delete specific office by id
  deleteParty(id) {
    const rowIndex = this.parties.find(k => k.id === id);
    const record = this.parties.splice(rowIndex, 1);
    return record;
  }

  // Update a specific political party by id
  editParty(id) {
    const party = this.findOne(id);
    const index = this.party.indexOf(party);
    this.parties[index].name = index.name;
    this.parties[index].hqAdress = index.hqAddress;
    this.parties[index].logoUrl = index.logoUrl;
    this.parties[index].modifiedDate = Date();

    return this.parties[index];
  }
}
export default new Party();
