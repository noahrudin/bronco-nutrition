import { Macro } from './Recipe';

export class FoodItem {
  private _macros: Macro[];
  private _foodName: string;

  constructor(macros: Macro[], name: string) {
    this._macros = macros;
    this._foodName = name;
  }

  get foodName(): string {
    return this._foodName;
  }

  get macros(): Macro[] {
    return this._macros;
  }
}
