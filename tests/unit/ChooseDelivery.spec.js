import { shallowMount } from '@vue/test-utils'
import ChooseDelivery from '@/components/ChooseDelivery.vue'

/*3 Skapa en komponent med en kryssruta. Komponenten ska initialt visa texten "Leverans om 5 dagar". När man kryssar i rutan ska texten ändras till "Valde express, leverans om 3 dagar". Använd en change event i stället för click event.
*/
describe('ChooseDelivery.vue', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallowMount(ChooseDelivery);
    })

    it('should display certain text when rendered', () => {
        const initial = "Leverans om 5 dagar";

        const text = wrapper.find('.text').text();

        expect(text).toBe(initial);
    })

    it('should display other text when checked', async () => {
        const expected = 'Valde express, leverans om 3 dagar';
        const checkbox = wrapper.find('input');

        await checkbox.setChecked(true)
        const text = wrapper.find('.text').text();

        expect(text).toBe(expected);
    })
})
