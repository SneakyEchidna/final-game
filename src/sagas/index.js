import { takeEvery, delay } from 'redux-saga';
import { fork, put, select } from 'redux-saga/effects';
import { CAST_SPELL, READY_SPELL } from '../actions/actionTypes';
import { nextSpellFrame, dealDamage, setPlayerAction } from '../actions';
import { getAction } from '../reducers/playerReducer';

function* callSpellAnimation(e) {
  for (let frame = 0; frame <= 4; frame++) {
    yield delay(150);
    // longer animation on last frame
    if (frame === 4) {
      yield delay(250);
    }
    yield put(nextSpellFrame);
  }
  yield put(dealDamage(e.payload.damageType, e.payload.damage));
  yield put(setPlayerAction('idle'));
}
function* switchReadyState() {
  const action = yield select(getAction);
  if (action === 'ready') {
    yield put(setPlayerAction('ready1'));
  }
  if (action === 'ready1') {
    yield put(setPlayerAction('ready'));
  }
}
function* callReadyState() {
  const animationActions = ['ready', 'ready1'];
  while (animationActions.includes(yield select(getAction))) {
    yield delay(150);
    yield switchReadyState();
  }
}

function* spellAnimationSaga() {
  yield* takeEvery(CAST_SPELL, callSpellAnimation);
}
function* readyStateSaga() {
  yield* takeEvery(READY_SPELL, callReadyState);
}
export default function* rootSaga() {
  yield [fork(spellAnimationSaga), fork(readyStateSaga)];
}
