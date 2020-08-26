import { shallowMount } from '@vue/test-utils'
import LimitedInput from '@/components/LimitedInput.vue'

/*4a Skapa en komponent med ett textfält. Textfältet har en begränsning på 40 tecken. När användaren skriver i fältet, eller klistrar in text, ska komponenten visa ett meddelande med hur många tecken man har kvar. (Komponenten behöver inte göra något om man överskrider gränsen.)*/
describe('LimitedInput.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(LimitedInput);
    })

    it('should not display message when rendered', () => {
        let message = wrapper.find('p').text();
        expect(message).toBe('');
    })

    it('should display how many characters remain', async () => {
        // enter some text
        // check message
        const input = wrapper.find('input');
        const maxLength = 40;
        const userInput = 'elephant'

        await input.setValue(userInput)
        let message = wrapper.find('p').text();

        expect(message.includes(maxLength - userInput.length)).toBe(true);
    })
    // it('should let the user know how many characters they have left to write', () => {})
    // it('should display number of characters remaining based on user input', () => {})
})
