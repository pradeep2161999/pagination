import { FastifyReply, FastifyRequest } from "fastify";
import { add, listUser, edit, erase } from "../services/user.services";

function create(req: FastifyRequest, reply: FastifyReply) {
  console.log("user create attributes are", req.body);
  return add(req.body)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

function list(req: FastifyRequest, reply: FastifyReply) {
  return listUser()
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err); // return Book.destroy({
      //   where: {
      //     id: id,
      //   },
      // });
    });
}
function update(req: FastifyRequest, reply: FastifyReply) {
  //   console.log("req------------------------------------------------", req.body);
  //   console.log("params---------------------------", req.params);

  return edit(req.body, req.params)
    .then((user: any) => {
      reply.status(200).send(user);
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

function destroy(req: FastifyRequest, reply: FastifyReply) {
  // console.log("req------------------------------------------------", req.body);
  // console.log("params---------------------------", req.params);
  const { id } = req.params as { id: number };
  return erase(req.body, id)
    .then(() => {
      reply.status(200).send({ msg: ["User deleted successfully"] });
    })
    .catch((err: Error) => {
      reply.status(400).send(err);
    });
}

export { create, list, update, destroy };
