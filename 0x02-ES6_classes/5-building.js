export default class Building {
  constructor(sqft) {
    this._sqft = sqft;
    this.evacuationWarningMessage();
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(value) {
    this._sqft = value;
  }

  /* eslint-disable */
    evacuationWarningMessage() {
      if (this.constructor.name !== 'Building'){
         throw new Error('Class extending Building must override evacuationWarningMessage');
    }}
  }

