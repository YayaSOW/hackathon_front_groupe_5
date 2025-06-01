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

  getPresencesById(id: number): Observable<Presence | undefined> {
    const found = MOCK_PRESENCE.find(p => p.id === id);
    return of(found);
  }

  getPresencesByType(type: 'ABSENT' | 'PRESENT' | 'RETARD' | 'JUSTIFIE'): Observable<Presence[]> {
    const filtered = MOCK_PRESENCE.filter(p => p.typePresence === type);
    return of(filtered);
  }

  getJustifiedAbsences(): Observable<Presence[]> {
    const justifiedAbsences = MOCK_PRESENCE.filter(p =>
      p.typePresence === 'ABSENT' &&
      p.justificatifs &&
      p.justificatifs.length > 0
    );
    return of(justifiedAbsences);
  }

}
