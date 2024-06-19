import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeEach(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  describe('root', () => {
    it('/ (GET)', () => {
      return request(app.getHttpServer()).get('/').expect(200).expect('API 👨‍💻');
    });
  });

  describe('bats', () => {
    it('/bats/findAll', () => {
      return request(app.getHttpServer())
        .post('/bats/findAll')
        .expect(201)
        .expect([{ id: 1, text: 'bat2', status: 'alive' }]);
    });

    it('/bats/create', async () => {
      await request(app.getHttpServer())
        .post('/bats/create')
        .send({ text: 'toto', status: 'alive' })
        .expect(201);
      await request(app.getHttpServer())
        .post('/bats/findAll')
        .expect(201)
        .expect([
          { id: 1, text: 'bat2', status: 'alive' },
          { id: 2, text: 'toto', status: 'alive' },
        ]);
    });

    it('/bats/create ERROR', async () => {
      await request(app.getHttpServer())
        .post('/bats/create')
        .send({ WRONG: 'VALUE' })
        .expect(400)
        .expect({
          message: ['text must be a string', 'status must be a string'],
          error: 'Bad Request',
          statusCode: 400,
        });
    });

    it('/bats/changeStatus', async () => {
      await request(app.getHttpServer())
        .post('/bats/changeStatus')
        .send({ id: 1, status: 'dead' })
        .expect(201);
    });

    it('/bats/changeStatus ERROR', async () => {
      await request(app.getHttpServer())
        .post('/bats/changeStatus')
        .send({ id: 1, status: 99999 })
        .expect(400)
        .expect({
          message: ['status must be a string'],
          error: 'Bad Request',
          statusCode: 400,
        });
    });
  });
});
