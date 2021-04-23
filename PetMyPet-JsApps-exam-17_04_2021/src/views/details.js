import { html } from '../../node_modules/lit-html/lit-html.js';
import { getItemById, deleteRecord, getLikes, likePet, cannotLike } from '../api/data.js'

const detailsTemplate = (item, isOwner, likes, canNotPressLike, onDelete, onLike) => html`
<section id="details-page" class="details">
    <div class="pet-information">
        <h3>Name: ${item.name}</h3>
        <p class="type">Type: ${item.type}</p>
        <p class="img"><img src=${item.imageUrl}></p>
        <div class="actions">
            <!-- Edit/Delete buttons ( Only for creator of this pet )  -->
            ${isOwner ?
                html`<a class="button" href="${`/data/pets/edit/${item._id}`}">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" class="button">Delete</a>
                </div>`
                :``}
            <!-- Bonus -->
            <!-- Like button ( Only for logged-in users, which is not creators of the current pet ) -->
            ${(!isOwner && canNotPressLike == 0) ? 
                html`<a @click=${onLike} class="button" href="javascript:void(0)">Like</a>`
                : ``}
            <!-- ( for Guests and Users )  -->
            <div class="likes">
                <img class="hearts" src="/images/heart.png">
                <span id="total-likes">Likes: ${likes}</span>
            </div>
            <!-- Bonus -->
        </div>
    </div>
    <div class="pet-description">
        <h3>Description:</h3>
        <p>${item.description}</p>
    </div>
</section>`

export async function detailsPage(ctx) {
    const id = ctx.params.id;
    const userId = sessionStorage.getItem('userId')
    const item = await getItemById(id);
    const likes = await getLikes(id);
    const canNotPressLike = await cannotLike(id, userId);
    
    // console.log(item, item._ownerId == userId, userId, likes, canPressLike, onDelete, onLike)
    ctx.setUserNav();
    ctx.render(detailsTemplate(item, item._ownerId == userId, likes, canNotPressLike, onDelete, onLike));

    async function onDelete() {
        const confirmed = confirm('Are you sure you want to delete pet?');
        if (confirmed) {
            await deleteRecord(item._id);  
            ctx.page.redirect('/');
        }
    }

    async function onLike() {
        await likePet(id);
        ctx.setUserNav();
        ctx.page.redirect(`/data/pets/${id}`);;
    }
}
