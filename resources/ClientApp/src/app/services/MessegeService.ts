import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessegeService {
    private subject = new Subject<any>();

    sendMessage(message: string) {
        this.subject.next(message);
    }

    clearMessages() {
        this.subject.next(null);
    }

    onMessage(): Observable<any> {
        return this.subject.asObservable();
    }
}