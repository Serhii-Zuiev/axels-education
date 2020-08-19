import { Subject } from "rxjs";

const subject = new Subject();

export const rxService = {
    sendItem: (item) => subject.next({ item }),
    clearItems: () => subject.next(),
    onItem: () => subject.asObservable(),
};
