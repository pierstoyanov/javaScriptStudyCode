import { html } from '../../../node_modules/lit-html/lit-html.js';

export const itemTemplate = (item) => html`
<li class="otherPet">
    <h3>Name: ${item.name}</h3>
    <p>Type: ${item.type}</p>
    <p class="img"><img src=${item.imageUrl}></p>
    <a class="button" href=${`/data/pets/${item._id}`}>Details</a>
</li>`;
