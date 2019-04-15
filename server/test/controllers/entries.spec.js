import chaiHttp from 'chai-http';
import chai from 'chai';
import app from '../../server';

const should = chai.should();

chai.use(chaiHttp);
