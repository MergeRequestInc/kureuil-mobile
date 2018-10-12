import {TestBed, ComponentFixture} from '@angular/core/testing';
import { NO_ERRORS_SCHEMA } from '@angular/core';

import { ConnectionPage} from "./Connection";
import {By} from "@angular/platform-browser";

let fixture : ComponentFixture<ConnectionPage> = null;
let instance : ConnectionPage = null;

describe('Page: ConnectionPage', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            schemas: [
                NO_ERRORS_SCHEMA
            ],
            declarations: [
                ConnectionPage
            ]
        }).compileComponents();
    });

    beforeEach(() => {
        fixture = TestBed.createComponent(ConnectionPage);
        instance = fixture.debugElement.componentInstance;
    });

    it('should exist', () => {
        expect(instance).toBeDefined();
    });

    it('should create the Connection page', () => {
        expect(instance).toBeTruthy();
    });

    it('should show a title', () => {
        const h2: HTMLHeadingElement = fixture.debugElement.query(By.css('ion-title')).nativeElement;
        expect(h2.textContent).toContain('KUREUIL');
    });

    it('Should show a connection card title', () => {
        const h2 : HTMLHeadingElement = fixture.debugElement.query(By.css('h2')).nativeElement;
        expect(h2.textContent).toContain('Connection');
    });

    it('should show 2 label Email et Password', () => {
        const number = fixture.debugElement.queryAll(By.css('ion-label')).length
        expect(number).toEqual(2);
    });

    it('should show 2 input Email et Password', () => {
        const number = fixture.debugElement.queryAll(By.css('ion-input')).length
        expect(number).toEqual(2);
    });

    it('should contain a login button', () => {
        const button: HTMLButtonElement = fixture.debugElement.query(By.css('button')).nativeElement;
        expect(button.textContent).toBe('Validate');
    });
});