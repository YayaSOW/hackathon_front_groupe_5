import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import {Presence } from '../../model/presence';
import {MOCK_PRESENCE} from '../../mock/presence.mock';

@Injectable({
  providedIn: 'root'
})
export class PresenceService {
  getAllPresences(): Observable<Presence[]> {
    return of(MOCK_PRESENCE);
  }

  getPresencesByType(type: 'ABSENT' | 'PRESENT' | 'RETARD' | 'JUSTIFIE'): Observable<Presence[]> {
    const filtered = MOCK_PRESENCE.filter(p => p.typePresence === type);
    return of(filtered);
  }
}
