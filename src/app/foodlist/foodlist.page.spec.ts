import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core'
import { ComponentFixture, TestBed, async } from '@angular/core/testing'

import { FoodListPage } from './foodlist.page'

describe('FoodListPage', () => {
    let component: FoodListPage
    let fixture: ComponentFixture<FoodListPage>
    let listPage: HTMLElement

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [FoodListPage],
            schemas: [CUSTOM_ELEMENTS_SCHEMA],
        }).compileComponents()
    }))

    beforeEach(async () => {
        fixture = await TestBed.createComponent(FoodListPage)
        component = fixture.componentInstance
        fixture.detectChanges()
    })

    it('should create', () => {
        expect(component).toBeTruthy()
    })

    it('should have a list of 10 elements', () => {
        listPage = fixture.nativeElement
        const items = listPage.querySelectorAll('ion-item')
        expect(items.length).toEqual(10)
    })
})
