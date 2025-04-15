import { call, put, all, takeLatest } from 'react-saga/effects';
import * as actions from './action';
import * as types from '../types';

const requisicao = () => new Promise((resolveConfig, reject) => {
  setTimeout(() => {
    resolve();
  }, 600);
});


function* exampleRequest() {
  try{
    yield call(requisicao);
    yield put(actions.clicaBotaoSuccess());

  } catch {
    yield put(actions.clicaBotaoFailure());
  }
}

export default all([takeLatest(types.BOTAO_CLICADO_REQUEST, exampleRequest)]);

