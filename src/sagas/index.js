import { takeEvery, delay } from 'redux-saga';
import { fork, put } from 'redux-saga/effects';
import { CAST_SPELL } from '../actions/actionTypes';
import { nextSpellFrame, dealDamage } from '../actions';

function* callSpellAnimation(e) {
  for (let frame = 0; frame <= 4; frame++) {
    yield delay(150);
    yield put(nextSpellFrame);
  }
  yield put(dealDamage(e.payload.damageType, e.payload.damage));
}

function* spellAnimationSaga() {
  yield* takeEvery(CAST_SPELL, callSpellAnimation);
}
export default function* rootSaga() {
  yield [fork(spellAnimationSaga)];
}
