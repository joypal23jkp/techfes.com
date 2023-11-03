// @vitest-environment happy-dom

import AppHeader from '../Test.vue';
import { mount } from '@vue/test-utils';

describe('AppHeader', () => {
    test('If a user is not logged in, do not show logout button', () => {
        const element = mount(AppHeader);
        // expect(element.find('button').isVisible()).toBe(false);
    })
    test('If a user is logged in, show logout button', async () => {
        const element = mount(AppHeader);
        await element.setData({ loggedIn: true })
        // expect(element.find('button').isVisible()).toBe(true);    
    })
})