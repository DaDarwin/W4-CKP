export class Account {
  constructor(data) {
    this.id = data.id
    this.email = data.email
    this.name = data.name
    this.picture = data.picture
    // TODO add additional properties if needed
  }

  get AccountCardTemplate() {
    return /*html*/`
      <div class="h-75 w-75">
        <img class="img-fluid" src="${this.picture}" title="${this.name}-picture" alt="account-picture" />
      </div>
      <div class="d-flex justify-content-center  align-items-center h-25">
        <p class="fs-4 lead">${this.name}</p>
      </div>
    `
  }
}