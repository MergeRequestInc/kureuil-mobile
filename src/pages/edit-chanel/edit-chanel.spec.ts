import {EditChanelPage} from "./edit-chanel";
import {async, ComponentFixture, TestBed} from "@angular/core/testing";
import {FormsModule} from "@angular/forms";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {LinkService} from "../../services/link.service";
import {ChanelServices} from "../../services/chanel.services";
import {CUSTOM_ELEMENTS_SCHEMA} from "@angular/core";
import {IonicModule, NavController, NavParams} from "ionic-angular";

describe('EditChannel', () =>{
    let component: EditChanelPage;
    let fixture : ComponentFixture<EditChanelPage>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ EditChanelPage ],
            imports: [FormsModule, HttpClientTestingModule, IonicModule],
            providers: [LinkService, ChanelServices, NavController],
            schemas: [CUSTOM_ELEMENTS_SCHEMA]
        })
            .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(EditChanelPage);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should create', () => {
        expect(component).toBeTruthy();
    });

});