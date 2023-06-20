import {Injectable} from "@angular/core";

@Injectable({
  providedIn: 'root'
})
export class HelperService {
  capitalizeFirstLetter(title: string | undefined) {
    if (title === undefined) {
      return '';
    }
    return title.charAt(0).toUpperCase() + title.slice(1);
  }
}
