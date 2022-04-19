import * as data from '../assets/mock-data/users.json';

let users = (data).default;
export const createMockHandlers = (rest) => [
  rest.get('/api/users', (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.set({ 'X-Header': 'Mocked value' }),
      ctx.json(users)
    );
  }),
  rest.get('/api/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    const user = users.find((u) => u.id === +userId);

    return user ? 
      res(
        ctx.status(200),
        ctx.set({ 'X-Header': 'Mocked value' }),
        ctx.json({...user})
      ) :
      res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'user(id = ' + userId + ') not found',
        })
      )
  }),
  rest.delete('/api/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    const index = users.findIndex((u) => u.id === +userId);

    if (index > -1) {
      users.splice(index, 1);
      return res(
        ctx.status(200),
        ctx.set({ 'X-Header': 'Mocked value' }),
        ctx.json({
          message: 'user(id = ' + userId + ') deleted'
        })
      )
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'user(id = ' + userId + ') not found',
        })
      )
    }
  }),
  rest.put('/api/users/:userId', (req, res, ctx) => {
    const { userId } = req.params;
    const user = req.body;
    const index = users.findIndex((u) => u.id === +userId);

    if (index > -1) {
      users[index] = {...user};
      return res(
        ctx.status(200),
        ctx.set({ 'X-Header': 'Mocked value' }),
        ctx.json({
          message: 'user(id = ' + userId + ') updated'
        })
      )
    } else {
      return res(
        ctx.status(404),
        ctx.json({
          errorMessage: 'user(id = ' + userId + ') not found',
        })
      )
    }
  }),
  rest.post('/api/users', (req, res, ctx) => {
    const newUser = req.body;

    const id = users.reduce((prev, curr) => {
      return (prev <= curr.id) ? curr.id + 1 : prev;
    }, 1);
    const user = {
      ...newUser,
      id
    }

    users.push(user);

    return res(
      ctx.status(200),
      ctx.set({ 'X-Header': 'Mocked value' }),
      ctx.json({
        message: 'user.id'
      })
    );
  })
];
