import { html } from '../../node_modules/lit-html/lit-html.js';
import { getPets } from '../api/data.js';
import { itemTemplate } from '../views/common/item.js'

const dashboardTemplate = (data) => html`
<section id="dashboard-page" class="dashboard">
    <h1>Dashboard</h1>
    <!-- Display ul: with list-items for All pets (If any) -->
    <!-- Display paragraph: If there are no pets in the database -->
    <ul class="other-pets-list">
    ${data.length == 0 ? html`<p class="no-pets">
        No pets in database!
        </p>` : data.map(itemTemplate)}       
    </ul>
</section>`;


export async function dashboardPage(ctx) {    
    const data = await getPets();
    ctx.setUserNav();
    ctx.render(dashboardTemplate(data));
}
