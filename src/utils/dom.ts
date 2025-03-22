// utils/dom.ts
import { env } from '../services/env.service';

export const getRootElement = (): HTMLElement => {
    const rootId = env.REACT_APP_ROOT_ID;
    const el = document.getElementById(rootId);

    if (!el) {
        throw new Error(`No element found with ID "${rootId}"`);
    }

    return el;
};
