YUI.add('moodle-availability_useragent-form', function (Y, NAME) {

/**
 * Availability user-agent YUI code
 *
 * @package   availability_useragent
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 * @copyright 2019-05-14 Mfreak.nl | LdesignMedia.nl - Luuk Verhoeven
 */

/**
 * JavaScript for form editing grade conditions.
 *
 * @module moodle-availability_useragent-form
 */
M.availability_useragent = M.availability_useragent || {};

/**
 * @class M.availability_useragent.form
 * @extends M.core_availability.plugin
 */
M.availability_useragent.form = Y.Object(M.core_availability.plugin);

/**
 * Initialises this plugin.
 *
 * @method initInner
 * @param {Array} param Array of objects
 */
M.availability_useragent.form.initInner = function() {
    "use strict";
    Y.log('M.availability_useragent 1.10');
};

/**
 * Gets the numeric value of an input field. Supports decimal points (using
 * dot or comma).
 *
 * @method getValue
 * @param {string} field
 * @param {object} node
 * @return {Number|String} Value of field as number or string if not valid
 */
M.availability_useragent.form.getValue = function(field, node) {
    "use strict";
    // Get field value.
    var value = node.one('input[name=' + field + ']').get('value');
    Y.log('user_agent:' + value);

    // If it is not a valid positive number, return false.
    if (M.availability_useragent.validateuseragent(value)) {
        Y.log('Valid user-agent');
        return value;
    }

    return value;
};

/**
 * Get node
 *
 * @param {object} json
 * @returns {*}
 */
M.availability_useragent.form.getNode = function(json) {
    "use strict";
    var html, node, root, id;

    // Make sure we work with unique id.
    id = 'useragentes' + M.availability_useragent.form.instId;
    M.availability_useragent.form.instId += 1;

    // Create HTML structure.
    html = '';
    html += '<span class="availability-group"><label for="' + id + '"><span class="p-r-1">' +
        M.util.get_string('title', 'availability_useragent') + ' </span></label>';
    html += '<input type="text" placeholder="^.*Mozilla.*(Firefox|Chrome).*$" name="useragentes" id="' + id + '">';
    node = Y.Node.create('<span class="form-inline">' + html + '</span>');

    // Set initial values, if specified.
    if (json.useragentes !== undefined) {
        node.one('input[name=useragentes]').set('value', json.useragentes);
    }

    // Add event handlers (first time only).
    if (!M.availability_useragent.form.addedEvents) {
        M.availability_useragent.form.addedEvents = true;
        root = Y.one('.availability-field');
        root.delegate('valuechange', function() {
            // Trigger the updating of the hidden availability data whenever the useragent field changes.
            M.core_availability.form.update();
        }, '.availability_useragent input[name=useragentes]');
    }

    return node;
};

/**
 * Validate useragentes
 *
 * @param {string[]} useragentes
 * @returns {boolean}
 */
M.availability_useragent.validateuseragent = function(useragentes) {
    'use strict';
    try {
        new RegExp(useragentes);
        return true;
    } catch (e) {
        return false;
    }
};

/**
 * FillValue
 *
 * @param {object} value
 * @param {object} node
 */
M.availability_useragent.form.fillValue = function(value, node) {
    // This function gets passed the node (from above) and a value
    // object. Within that object, it must set up the correct values
    // to use within the JSON data in the form. Should be compatible
    // with the structure used in the __construct and save functions
    // within condition.php.
    value.useragentes = this.getValue('useragentes', node);
};

/**
 * FillErrors
 * @param {object} errors
 * @param {object} node
 */
M.availability_useragent.form.fillErrors = function(errors, node) {
    "use strict";
    var value = {};
    this.fillValue(value, node);

    // Basic useragentes checks.
    if (M.availability_useragent.validateuseragent(value.useragentes) === false) {
        errors.push('availability_useragent:error_useragent');
    }
};


}, '@VERSION@', {"requires": ["base", "node", "event", "moodle-core_availability-form"]});
