
export class Restaurant {
    private static _restaurantToDisplay: Restaurant

    constructor(
        public title: string,
        private location: string,
        private choices: string[],
        private id: number,
        private restaurantImage: HTMLImageElement
    ) {}

    static get getRestaurantToDisplay() {
        return Restaurant._restaurantToDisplay
    }

    get dbIndex() {
        return this.id
    }

    static set restaurantToDisplay(restaurant: Restaurant) {
        Restaurant._restaurantToDisplay = restaurant
    }

    get getRestaurantTitle() {
        return this.title
    }

    get getLocation() {
        return this.location
    }

    get getChoices() {
        return this.choices
    }

    get getImage() {
        return this.restaurantImage
    }


    static parseChoices(choicesStr: string): string[] {
        const choices = choicesStr.split('\n')
        const regex = /\d. /

        for (let i = 0; i < choices.length; i++) {
            choices[i] = choices[i].replace(regex, '')
        }

        return choices
    }
}
