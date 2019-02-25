enum Macro { Carbohydrates, Protein, Fiber}

const CARBS_STR = 'C';
const PROTEIN_STR = 'P';
const FIBER_STR = 'F';

export class Recipe {
  constructor(private title: string, private numServings: number, private macros: Macro[],
              private prepTime: number, private ingredients: string[], private steps: string[]) { }

  get getRecipeTitle() {
    return this.title;
  }

  get getNumServings() {
    return this.numServings;
  }

  get getMacros() {
    return this.macros;
  }

  get getPrepTime() {
    return this.prepTime;
  }

  get getIngredients() {
    return this.ingredients;
  }

  get getSteps() {
    return this.steps;
  }

  static parseNumServings(servings: string): number {
    return Number(servings);
  }

  // parse out the 3 basic nutrition macros from
  // the firebase data store.
  static parseMacros(macros: string): Macro[] {
    const returnArray: Macro[] = [];
    if (macros.indexOf('C') !== -1 ) {
      returnArray.push(Macro.Carbohydrates);
    }

    if (macros.indexOf('P') !== -1) {
      returnArray.push(Macro.Protein);
    }

    if (macros.indexOf('F') !== -1) {
      returnArray.push(Macro.Fiber);
    }

    return returnArray;
  }

  static parsePrepTime(time: string): number {
    return Number(time);
  }
}
