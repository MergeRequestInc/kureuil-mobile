import {HttpClient} from "@angular/common/http";
import {Chanel} from "../model/chanel";
import {Injectable} from "@angular/core";
import {SERVER_API_URL} from "../constrant/variables.constrant";

@Injectable()
export class ChanelServices {

    constructor(private http: HttpClient) {

    }

    /*
    Get Chanel
     */
    getChanel() {
        return this.http.get<Chanel[]>( SERVER_API_URL + '/channels');
    }

    /**
     * Create a channel
     * @param channel : channel to create
     */
    addChanel(channel: Chanel) {
        return this.http.post(SERVER_API_URL + '/channels', channel);
    }

    /**
     * Update a channel
     * @param channel : channel to update
     */
    editChanel (channel: Chanel) {
        return this.http.put(SERVER_API_URL + '/channels', channel);
    }

    /**
     * Delete a channel
     * @param id : channel's id to delete
     */
    deleteChanel (id: number) {
        return this.http.delete(SERVER_API_URL + '/channels/' + id);
    }

    /**
     * Get user's channels
     */
    loadUserChanel() {
        return this.http.get<Chanel[]>(SERVER_API_URL + '/channels/user');
    }
}