import { html } from '../../node_modules/lit-html/lit-html.js';
import { editPet, getItemById } from '../api/data.js'


const editTemplate = (item, onSubmit) => html `
<section id="edit-page" class="edit">
    <form @submit=${onSubmit} id="edit-form" action="#" method="">
        <fieldset>
            <legend>Edit my Pet</legend>
            <p class="field">
                <label for="name">Name</label>
                <span class="input">
                    <input type="text" name="name" id="name" .value=${item.name}>
                </span>
            </p>
            <p class="field">
                <label for="description">Description</label>
                <span class="input">
                    <textarea name="description"
                        id="description" .value=${item.description}>
                    </textarea>
                </span>
            </p>
            <p class="field">
                <label for="image">Image</label>
                <span class="input">
                    <input type="text" name="imageUrl" id="image" .value=${item.imageUrl}>
                </span>
            </p>
            <p class="field">
                <label for="type">Type</label>
                <span class="input">
                    <select id="type" name="type" .value=${item.type}>
                        <option value="cat" >Cat</option>
                        <option value="dog" selected>Dog</option>
                        <option value="parrot">Parrot</option>
                        <option value="reptile">Reptile</option>
                        <option value="other">Other</option>
                    </select>
                </span>
            </p>
            <input class="button submit" type="submit" value="Save">
        </fieldset>
    </form>
</section>`;

export async function editPage(ctx) {
    const id = ctx.params.id;
    const item = await getItemById(id);
    ctx.render(editTemplate(item, onSubmit));

    async function onSubmit(ev) {
        ev.preventDefault();
        const formData = new FormData(ev.target);

        const data = [...formData.entries()]
        .reduce((fd, [k,v]) => Object.assign(fd, {[k]: v}), {});

        if (Object.entries(data)
            .some(([k,v]) => v == '')) {
            return alert('Missing required fields');
        }

        // console.log(data)
        await editPet(item._id, data);
        ctx.setUserNav();
        ctx.page.redirect('/data/myPets/');
    }
}