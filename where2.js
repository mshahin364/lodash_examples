var _ = require('lodash');
var objects = [{name: 'Ford', contentsOfPockets: ['guide', 'lint', 'booze']},
               {name: 'Arthur', contentsOfPockets: ['guide', 'last bag of tea']},
               {name: 'Marvin', contentsOfPockets: ['dispair', 'electrodes']},
               {name: 'Zaphod', contestsOfPockets: ['kill-o-zap', 'infinite perspective']}];

var results = _.where(objects, {contentsOfPockets: ['guide']});
console.log(results);
