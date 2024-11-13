import { v4 as uuid4 } from "uuid";

expor class Usuario {
  #id;
  #name;
  #lastname;
  #email;
  #active;
  #rol;

  constructor(name, lastname, email, rol) {
    this.#id = uuid4();
    this.#name = name;
    this.#lastname = lastname;
    this.#email = email;
    this.#rol = rol;
    this.#active = true;
  }

  get id() {
    return this.#id;
  }
  get nameComplete() {
    return `${this.#name} ${this.#lastname}`;
  }

  get name() {
    return this.#name;
  }

  get lastname() {
    return this.#lastname;
  }

  get email() {
    return this.#email;
  }
  get rol() {
    return this.#rol;
  }

  setName(newName) {
    this.#name = newName;
  }

  setLastname(newLastname) {
    this.#lastname = newLastname;
  }
  setEmail(newEmail) {
    this.#email = newEmail;
  }

  setActive() {
    this.#active = !this.#active;
  }

  getAllProperties() {
    return {
      id: this.#id,
      name: this.#name,
      lastname: this.#lastname,
      email: this.#email,
      rol: this.#rol,
      active: this.#active,
    };
  }
}
