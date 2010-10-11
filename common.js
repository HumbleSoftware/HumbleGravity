/**
 * Helper function to define namespaces.
 *
 * Note: As a convention, Namespaces should be capitalized and classes
 * should begin with a lowercase.
 *
 * @param String type  A . seperated list of namespaces.  "Example.My.Hierarchy"
 * @param mixed  value  Value for the type. A callback.
 */
function typedef (type, value) {

    var namespaces  = [],
        scope       = window,
        name        = '';

    if (typeof value === typeof function () {} ) {
        value = value.call();
    };

    if (typeof (type) == 'string') {
        namespaces = type.split('.');
        for (var i = 0; i < namespaces.length; i++) {
            name = namespaces[i];
            if ( typeof (scope[name]) == 'undefined') {
                if ( (i+1) == namespaces.length && value !== undefined ) {
                    scope[name] = value;
                } else {
                    scope[name] = {};
                }
            }
            scope = scope[name];
        }
    }
}
