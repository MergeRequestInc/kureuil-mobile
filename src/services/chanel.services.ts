import {HttpClient} from "@angular/common/http";
import {Chanel} from "../model/chanel";
import {Injectable} from "@angular/core";
import {SERVER_API_URL} from "../services-common/constrant/variables.constrant";

@Injectable()
export class ChanelServices {

    constructor(private http: HttpClient) {

    }

    getChanel() {
        return this.http.get<Chanel[]>( SERVER_API_URL + 'channels');
    }

    /**
     * Create a channel
     * @param channel : channel to create
     */
    create(channel: Chanel) {
        return this.http.post(SERVER_API_URL + 'channels', channel);
    }

    /**
     * Update a channel
     * @param channel : channel to update
     */
    update (channel: Chanel) {
        return this.http.put(SERVER_API_URL + 'channels', channel);
    }

    /**
     * Delete a channel
     * @param id : channel's id to delete
     */
    delete (id: number) {
        return this.http.delete(SERVER_API_URL + 'channels/' + id);
    }

    /**
     * Get user's channels
     */
    loadChannelsByUser() {
        return this.http.get<Chanel[]>(SERVER_API_URL + 'channels/user');
    }
}