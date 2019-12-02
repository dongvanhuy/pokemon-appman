import { Observable } from "rxjs";
import 'rxjs/add/observable/fromPromise';
import axios from "axios";
import config from "../config";

const API_HOST = config.apiService.host;

export default class ApiService {
  static loadPokemon = () =>
    Observable.fromPromise(
      axios.get(`${API_HOST}/api/cards?limit=20`, {
        data: {}
      })
    );
}