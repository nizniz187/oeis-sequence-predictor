export default class SequenceMethod {
  constructor({ name, matcher } = {}) {
    if(typeof matcher !== 'function') {
      throw new Error('Invalid arguments.');
    }

    this.name = name;
    this.matcher = matcher;
  }

  getPredictResult(seq, predictor) {
    if(!Array.isArray(seq) || typeof predictor !== 'function') {
      return null;
    }

    let last = seq[seq.length - 1];
    let result = [];
    for(let i = 0; i < 10; i++) {
      let n = predictor(last);
      last = n;
      result.push(n);
    }
    return result;
  }
  predict(seq) {
    seq = this.normalizeSequence(seq);
    let { isMatch, predictor } = this.matcher(seq);

    if(isMatch) {
      return this.getPredictResult(seq, predictor);
    } else {
      return null;
    }
  }
  normalizeSequence(seq) {
    if(!Array.isArray(seq)) { return []; }
    
    return seq.map(n => {
      try {
        return parseInt(n);
      } catch(e) {
        return 0;
      }
    });
  }
}