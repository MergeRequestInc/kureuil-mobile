import {HttpClient} from "@angular/common/http";
import {Chanel} from "../model/chanel";
import {Injectable} from "@angular/core";

@Injectable()
export class ChanelServices {

    constructor(private http: HttpClient) {

    }

    /*
    Get Chanel
     */
    getChanel() {
        return this.http.get<Chanel[]>( 'localhost:8080/' + 'channels');
    }

    /**
     * Create a channel
     * @param channel : channel to create
     */
    addChanel(channel: Chanel) {
        return this.http.post('localhost:8080/' + 'channels', channel, {responseType: 'text'});
    }

    /**
     * Update a channel
     * @param channel : channel to update
     */
    editChanel (channel: Chanel) {
        return this.http.put('localhost:8080/' + 'channels', channel, {responseType: 'text'});
    }

    /**
     * Delete a channel
     * @param id : channel's id to delete
     */
    deleteChanel (id: number) {
        return this.http.delete('localhost:8080/' + 'channels/' + id, {responseType: 'text'});
    }

    /**
     * Get user's channels
     */
    loadUserChanel() {
        return this.http.get<Chanel[]>('localhost:8080/' + 'channels/user');
    }
}