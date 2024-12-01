<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * @package    availability_useragent
 * @copyright  2024 Université de Lausanne
 * @author     Nicolas Dunand <Nicolas.Dunand@unil.ch>
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 **/


$string['pluginname'] = 'User Agent';
$string['title'] = 'User Agent';
$string['description'] = 'Restrict access by browser User-Agent';
$string['require_condition'] = 'Matching browser type';

// TODO remove next two lines for production
$string['require_condition_debug_ok'] = 'Matching User-Agent. (Your User-Agent:{$a})';
$string['require_condition_debug_ko'] = 'Not matching User-Agent. (Your User-Agent:{$a})';

// Javascript strings.
$string['js:useragent'] = 'Require a specific browser';

// Errors.
$string['error_useragent'] = 'The expression is not a valid regex';

// Privacy provider.
$string['privacy:metadata'] = 'The restriction by activity useragent plugin does not store any personal data.';
