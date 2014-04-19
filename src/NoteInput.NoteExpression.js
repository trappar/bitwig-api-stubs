GAIN_DOWN = true;
GAIN_UP = true;
NONE = true;
PAN_LEFT = true;
PAN_RIGHT = true;
PITCH_DOWN = true;
PITCH_UP = true;
TIMBRE_DOWN = true;
TIMBRE_UP = true;

function NoteExpression(){}

/**
 * Returns the enum constant of this type with the specified name. The string must match exactly an identifier used to declare an enum constant in this type. (Extraneous whitespace characters are not permitted.)
 * @param {string} name - the name of the enum constant to be returned.
 * @returns the enum constant with the specified name
 * @throws IllegalArgumentException - if this enum type has no constant with the specified name
 * @throws NullPointerException - if the argument is null
 */
NoteExpression.prototype.valueOf = function(name){};

/**
 * Returns an array containing the constants of this enum type, in the order they are declared. This method may be used to iterate over the constants as follows:
 * for (NoteInput.NoteExpression c : NoteInput.NoteExpression.values())
 *     System.out.println(c);
 * @returns an array containing the constants of this enum type, in the order they are declared
 */
NoteExpression.prototype.values = function(){};