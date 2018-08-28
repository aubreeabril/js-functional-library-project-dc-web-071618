fi = (function() {
  return {
    libraryMethod: function() {
      return 'Start by reading https://medium.com/javascript-scene/master-the-javascript-interview-what-is-functional-programming-7f218c68b3a0'
    },

    each: function(collection, callback) {
      for (let element in collection) {
        let index = element;
        let value = collection[element];
        callback(value, index, collection)
      }
      return collection;
    },

    map: function(collection, callback) {
      let newArray = []
      for (let element in collection) {
        let index = element;
        let value = collection[element];
        newArray.push(callback(value, index, collection))
      }
      return newArray;
    },

    reduce: function(collection, callback, acc) {
      let total = acc
      for (let element in collection) {
        let value = collection[element];
        total = callback(total, value, collection)
      }
      return total
    },

    find: function(collection, predicate) {
      for (let element in collection) {
        let value = collection[element];
        if (predicate(value)) {
          return value
        }
      }
    },

    filter: function(collection, predicate) {
      let array = []
      for (let element in collection) {
        let value = collection[element];
        if (predicate(value)) {
          array.push(value)
        }
      } return array;
    },

    size: function(collection) {
      let total = 0
      for (let element in collection) {
        total += 1
      }
      return total
    },

    first: function(array, n) {
      if (n == undefined) {
        return array[0]
      } else {
        return array.slice(0, n)
      }
    },

    last: function(array, n) {
      if (n == undefined) {
        return array.slice(-1)
      } else {
        return array.slice(-n)
      }
    },

    compact: function(array) {
      let compactArray = [];
      for (let element of array) {
        if (!!element) {
          compactArray.push(element)
        }
      }
      return compactArray
    },

    sortBy: function(array, callback) {
      return array.sort(function(a, b) {
        return callback(a) - callback(b)
      });
    },

    uniq: function(array, isSorted, callback) {
      let unique = [];
        for (let element of array) {
          if (!unique.includes(element)) {
            unique.push(element)
          }
        }
        return unique
    },

    keys: function(object) {
      let keysArray = []
      for (let element in object) {
        keysArray.push(element)
      }
      return keysArray
    },

    values: function(object) {
      let valuesArray = []
      for (let element in object) {
        valuesArray.push(object[element])
      }
      return valuesArray
    },

    functions: function(object) {
      let functionArray = []
      for (let element in object) {
        functionArray.push(element)
      }
      return functionArray
    }
  }
})()

fi.libraryMethod()
