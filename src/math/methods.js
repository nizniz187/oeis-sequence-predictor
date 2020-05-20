import SequenceMethod from './SequenceMethod.js';

const methods = {};
methods.natural = new SequenceMethod({
  name: 'natural',
  matcher: seq => {
    let diff;
    return {
      isMatch: seq.every((n, index, array) => {
        if(index === 0) { return true; }
        
        if(diff === undefined) { diff = n - array[index - 1]; }
        return n - array[index - 1] === diff;
      }),
      predictor: n => n + diff
    }
  }
});
methods.natural = new SequenceMethod({
  name: 'natural',
  matcher: seq => {
    let diff;
    return {
      isMatch: seq.every((n, index, array) => {
        if(index === 0) { return true; }
        
        if(diff === undefined) { diff = n - array[index - 1]; }
        return n - array[index - 1] === diff;
      }),
      predictor: n => n + diff
    }
  }
});
methods.power2 = new SequenceMethod({
  name: 'power',
  matcher: seq => {
    let power;
    return {
      isMatch: seq.every((n, index, array) => {
        if(index === 0) { return true; }
        
        let last = array[index - 1];
        if(power === undefined) { power = n / last; }
        return n = last * power;
      }),
      predictor: n => n * power
    }
  }
});

export default methods;