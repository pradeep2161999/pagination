import Book from "../models/book";
import User from "../models/user";

function add(attrs: any) {
  return User.create(attrs);
}

function listUser() {
  return User.findAll({
    include: [
      {
        model: Book,
        as: "book",
      },
    ],
  });
}

async function edit(attrs: any, params: any) {
  const user = await getUser(params.id);
  user?.update(attrs);
}
async function getUser(id) {
  return User.findByPk(id);
}

async function erase(attrs: any, id: any) {
  const user = await getUser(id);
  user?.destroy();
}

export { add, listUser, edit, erase /* getUser */ };
