console.log(arguments) //will print by default iifi function's args (exports,require,module,filepath,dirname)
console.log("hello world") //will run normally

/*whenever you excute any js file then hidden fun called iifi func gets called.That code of arg1.js file here will get wrapped up inside iifi fun and return exports.

/* [Arguments] {
  '0': {},
  '1': [Function: require] {
    resolve: [Function: resolve] { paths: [Function: paths] },
    main: Module {
      id: '.',
      path: 'H:\\Bipracticefolder\\MYBIMAY21\\june8',
      exports: {},
      parent: null,
      filename: 'H:\\Bipracticefolder\\MYBIMAY21\\june8\\arg1.js',
      loaded: false,
      children: [],
      paths: [Array]
    },
    extensions: [Object: null prototype] {
      '.js': [Function (anonymous)],
      '.json': [Function (anonymous)],
      '.node': [Function (anonymous)]
    },
    cache: [Object: null prototype] {
      'H:\\Bipracticefolder\\MYBIMAY21\\june8\\arg1.js': [Module]
    }
  },
  '2': Module {
    id: '.',
    path: 'H:\\Bipracticefolder\\MYBIMAY21\\june8',
    exports: {},
    parent: null,
    filename: 'H:\\Bipracticefolder\\MYBIMAY21\\june8\\arg1.js',
    loaded: false,
    children: [],
    paths: [
      'H:\\Bipracticefolder\\MYBIMAY21\\june8\\node_modules',
      'H:\\Bipracticefolder\\MYBIMAY21\\node_modules',
      'H:\\Bipracticefolder\\node_modules',
      'H:\\node_modules'
    ]
  },
  '3': 'H:\\Bipracticefolder\\MYBIMAY21\\june8\\arg1.js',
  '4': 'H:\\Bipracticefolder\\MYBIMAY21\\june8'
}
hello world
*/