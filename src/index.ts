import { Application } from '@curveball/core';
import router from '@curveball/router';
import accessLog from '@curveball/accesslog';

const app = new Application();
app.use(accessLog());

app.use(
  router('/')
    .get(ctx => {
      ctx.response.type = 'text/plain';
      ctx.status = 200;
      ctx.response.body = 'Nothing to see here, just the main page';
    })
);

app.use(
  router('/event/:id')
    .get( ctx => {
      var jsonBody = {'event': {
        'id': 123,
        'name': 'ex. name',
        'icon': 'ex. icon url',
        'date': Date.now(),
        'tags': ['test'],
        'detail': 'ex. details',
      } }
      ctx.response.body = jsonBody;
    })
);

app.listen(9000);
