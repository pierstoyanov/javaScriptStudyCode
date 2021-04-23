import { html } from '../../node_modules/lit-html/lit-html.js';
import { getMyPets } from '../api/data.js'
import { itemTemplate } from './common/item.js'

const myTemplate = (data) => html`
<section id="my-pets-page" class="my-pets">
    <h1>My Pets</h1>
    <!-- Display ul: with list-items for every user's pet (if any) -->
    <ul class="my-pets-list">
    ${data.length == 0 ? html`
        <p class="no-pets">
        No pets in database!</p>` :
        html`${data.map(itemTemplate)}`}
    </ul>
</section>`;


export async function myPets(ctx) {
    const data = await getMyPets();
    ctx.render(myTemplate(data));
}