import { shallowMount } from '@vue/test-utils'
import SearchView from '@/components/search/SearchView.vue'


/*5a Skapa en komponent för sökning/filtrering. Komponenten ska innehålla ett textfält och visa en lista med alla element som matchar texten i textfältet. Den ska uppdateras varje gång användaren trycker ner ett tecken. (använd key events) Använd en lista med namn på djur: [cat, dog, parrot, goldfish, horse, elephant, ant, snake, crow, cow, eagle, rhinoceros, chimpanzee]. Använd följande testfall:
tom sträng matchar alla element
"d" matchar "dog" och "goldfish"
"ow" matchar "crow" och "cow"
"AnT" matchar "ant" och "elephant"
*/

describe('SearchView.vue', () => {
    let wrapper, data;
    beforeEach(() => {
        data = ['cat', 'dog', 'parrot', 'goldfish', 'horse', 'elephant', 'ant', 'snake', 'crow', 'cow', 'eagle', 'rhinoceros', 'chimpanzee'];
        wrapper = shallowMount(SearchView, {
            data: () => ({
                animals: data
            })
        });
        // wrapper.vm.animals
    })

    it('should have empty string show all elements', () => {
        let elementCount = wrapper.findAll('ul > li').length;

        expect(elementCount).toBe(data.length)
    })

    it('should have "d" show "dog" and "goldfish" ', async () => {
        // wrapper.find('input').trigger <- bra för andra event
        const input = wrapper.find('input');
        await input.setValue('d');

        let results = wrapper.findAll('li').wrappers;
        let hasDog = results.some(li => li.text() === 'dog')
        let hasFish = results.some(li => li.text() === 'goldfish');
        // can use "find" instead of "some" but "some" is more logical
        expect(hasDog && hasFish).toBe(true)
        expect(results.length).toBe(2)
    })
    // it('should have "ow" show "crow" and "cow" ')
    // it('should have "AnT" show "ant" and "elephant" ')

})














//
