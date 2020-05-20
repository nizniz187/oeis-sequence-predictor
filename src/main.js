import methods from './math/methods.js';

const resultQuery = document.querySelector('#resultQuery');
const resultPrediction = document.querySelector('#resultPrediction');

document.querySelector('#btnPredict').addEventListener('click', predictHandler);

function predictHandler() {
  let input = document.querySelector('#inputSequence');
  let seq = parseSequence(input.value);
  if(!Array.isArray(seq) || seq.length === 0) {
    showResult(input.value);
    return;
  }

  let { query, prediction } = predictSequence(seq);
  showResult(query, prediction);
}

function parseSequence(value) {
  if(typeof value !== 'string') { return []; }

  return value.trim().split(' ');
}

function predictSequence(seq) {
  if(!Array.isArray(seq)) { return { query: seq }; }
  
  let prediction = null;
  for(let name in methods) {
    let result = methods[name].predict(seq);
    if(Array.isArray(result)) { 
      prediction = result;
      break;  
    }
  }
  return { query: seq, prediction };
}

function showResult(query, prediction) {
  resultQuery.innerText = query;
  resultPrediction.innerText = prediction;
}