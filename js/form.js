Vue.component('form', {
    props: 'email',
    template: `
        <div class="container-form">
            <form>
                <label for="email">Company Email:</label>
                <input type="text" id="email" class="email"/>
                <button type="submit">Play</button>
            </form>
        </div>
    `
})